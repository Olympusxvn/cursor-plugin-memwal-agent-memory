---
name: memwal-setup
description: Connect MemWal Agent Memory MCP to Cursor — Pro Local (no keys) or + Walrus Sync. Use when installing the plugin, configuring MCP, or verifying memory tools work.
---

# MemWal Agent Memory — MCP setup

## Goal

Connect **memwal-agent-memory** MCP, pick **Pro Local** or **+ Walrus Sync**, verify tools, and explain the hybrid workflow to the user.

## Setup rules

1. **Pro Local (default):** Node 20+, `@memwalpp/mcp` via plugin `mcp.json`. No Walrus keys.
2. **+ Walrus Sync:** User adds delegate credentials in Cursor MCP env (never in chat or repo).
3. Merge `memwal-agent-memory` into existing MCP config — never replace the whole file.
4. Never read or print `MEMWAL_PRIVATE_KEY`, `.env`, or `~/.memwal/credentials.json`.
5. After config changes, tell user to **fully quit and reopen Cursor** (Cmd+Q on macOS).
6. Stop at the first real blocker; report exact error text.

## Requirements

```bash
node -v   # must be 20+
```

MCP package (marketplace): `npx -y @memwalpp/mcp@0.1.0 --transport stdio`

## Tiers

| Tier | Needs | Storage |
|------|-------|---------|
| **Pro Local** | Node 20+ | `~/.memwal-agent-memory/mcp` (SQLite) |
| **+ Walrus Sync** | + `MEMWAL_PRIVATE_KEY`, `MEMWAL_ACCOUNT_ID`, `MEMWAL_SERVER_URL` | Local + Walrus via MemWal relayer |

Credential source for Walrus Sync (user action only):

```bash
npx -y @mysten-incubation/memwal-mcp login --prod
```

User maps `delegatePrivateKey` → `MEMWAL_PRIVATE_KEY`, `accountId` → `MEMWAL_ACCOUNT_ID` in Cursor MCP settings.

## Verify

Ask: **What MCP tools do you have available?**

Expected nine tools: `remember`, `recall`, `search`, `sync`, `getVersionHistory`, `getLineage`, `verify`, `softDelete`, `getStats`.

Smoke test:

```text
remember: "MemWal Agent Memory setup verification succeeded."
recall: "setup verification succeeded"
```

## Hybrid workflow (tell the user)

```
remember → local SQLite (fast)
sync     → redact + quality gate → Walrus (optional, when configured)
search / verify → hybrid read + proof layers
```

Unlike official Walrus Memory MCP, durable storage is **not automatic** — call `sync` when the user wants Walrus backup.

## Official Walrus Memory alternative

For pure cloud MemWal (`memwal_remember`, analyze, restore): official plugin at `curl -sL https://memory.walrus.xyz/skills/setup`. See upstream repo [Comparison.md](https://github.com/Olympusxvn/memwal-agent-memory/blob/main/Comparison.md).

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| No MCP tools | Reload Cursor; confirm plugin enabled; Node 20+ |
| `npx` package not found | Install [@memwalpp/mcp@0.1.0](https://www.npmjs.com/package/@memwalpp/mcp); or use [mcp.dev.json](../../mcp.dev.json) for monorepo dev |
| Empty recall | Consistent `MEMWAL_NAMESPACE` |
| `skipReason: offline` on sync | Pro Local only — add Walrus env in MCP settings |
| Owner key rejected | Use delegate key only |

## Final report (keep under 14 lines)

```text
MemWal Agent Memory is configured (<tier>).

Next: fully quit and reopen Cursor now.

After reopening: "What MCP tools do you have available?"
Try: "Remember our API uses published-at for PTBs."
```
