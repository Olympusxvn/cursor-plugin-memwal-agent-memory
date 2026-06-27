/**
 * One-shot G4 compliance smoke: remember → sync (live Walrus) → verify.
 * Usage (from repo root, delegate env in .env — never commit secrets):
 *   node --env-file=.env scripts/walrus-sync-g4-smoke.mjs
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

function parseToolJson(result) {
  const block = result.content?.find((c) => c.type === "text");
  if (!block?.text) throw new Error("tool result missing text content");
  return JSON.parse(block.text);
}

function requireEnv(name) {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`Missing ${name} — set in .env for + Walrus Sync`);
  return value;
}

const runId = crypto.randomUUID();
const namespace = `cursor-plugin-g4-${runId.slice(0, 8)}`;
const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "memwal-g4-"));
const env = {
  ...process.env,
  MEMWAL_PRIVATE_KEY: requireEnv("MEMWAL_PRIVATE_KEY"),
  MEMWAL_ACCOUNT_ID: requireEnv("MEMWAL_ACCOUNT_ID"),
  MEMWAL_SERVER_URL:
    process.env.MEMWAL_G4_SERVER_URL?.trim() || "https://relayer.memory.walrus.xyz",
  MEMWAL_NAMESPACE: namespace,
  MEMWAL_SYNC_QUALITY_MIN: "0",
  MEMWAL_MCP_DATA_DIR: tmpDir,
  MCP_TRANSPORT: "stdio",
};
delete env.MEMWAL_MCP_MOCK_DURABLE;
delete env.MEMWAL_MCP_USE_MEMORY;

const unique = `g4-walrus-${crypto.randomUUID()}`;
let client;
let transport;

try {
  transport = new StdioClientTransport({
    command: "npx",
    args: ["-y", "@memwalpp/mcp@0.1.1", "--transport", "stdio"],
    env,
    stderr: "pipe",
  });
  client = new Client({ name: "g4-walrus-smoke", version: "1.0.0" });
  await client.connect(transport);

  const remembered = parseToolJson(
    await client.callTool({
      name: "remember",
      arguments: {
        content: `${unique}: Walrus Sync G4 compliance smoke with sufficient length for quality gate and durable promotion validation.`,
        metadata: { source: "g4-compliance", allowUpstreamSync: "1" },
      },
    }),
  );
  if (!remembered.stored) throw new Error("remember failed");
  const memoryId = remembered.recordId;

  const statsBefore = parseToolJson(await client.callTool({ name: "getStats", arguments: {} }));
  const recalledBefore = parseToolJson(
    await client.callTool({
      name: "recall",
      arguments: { query: unique, options: { limit: 3 } },
    }),
  );
  const rowBefore = (recalledBefore.hits ?? [])[0];
  if (!rowBefore) throw new Error("recall missed remembered row");

  const synced = parseToolJson(await client.callTool({ name: "sync", arguments: {} }));
  if (synced.skipReason) {
    throw new Error(`sync skipped: ${synced.skipReason}`);
  }
  if (!synced.durableLive) throw new Error("sync: durableLive false");
  const pushed = Number(synced.metrics?.pushed ?? 0);
  if (pushed < 1) {
    throw new Error(
      `sync: pushed=${pushed} skipped=${synced.metrics?.skipped} failed=${synced.metrics?.failed} rowSynced=${rowBefore.synced} statsBefore=${JSON.stringify(statsBefore)}`,
    );
  }

  const verified = parseToolJson(
    await client.callTool({
      name: "verify",
      arguments: { memoryId, checkWalrus: true },
    }),
  );

  console.log(
    JSON.stringify(
      {
        pass: true,
        namespace: env.MEMWAL_NAMESPACE,
        memoryId,
        durableLive: synced.durableLive,
        pushed,
        verifyValid: verified.valid,
        walrusChecked: verified.walrus?.checked ?? verified.checks?.walrus?.checked,
        walrusOk: verified.walrus?.ok ?? verified.checks?.walrus?.ok,
        jobId: synced.jobId ?? synced.metrics?.jobId,
      },
      null,
      2,
    ),
  );
} finally {
  await client?.close().catch(() => {});
  await transport?.close().catch(() => {});
  fs.rmSync(tmpDir, { recursive: true, force: true });
}
