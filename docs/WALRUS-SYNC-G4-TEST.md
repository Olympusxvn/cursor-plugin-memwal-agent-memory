# Walrus Sync G4 — live E2E evidence

**Compliance row:** [COMPLIANCE-CHECKLIST.md](./COMPLIANCE-CHECKLIST.md) §G4 (+ Walrus Sync)  
**Plugin version:** 0.1.9  
**Date:** 2026-06-18  
**MCP package:** `@memwalpp/mcp@0.1.1` via `npx` (same as production `mcp.json`)

## Result — PASS

Live delegate env (not mock durable):

| Step | Outcome |
|------|---------|
| `remember` | Stored locally |
| `sync` | `durableLive: true`, `metrics.pushed: 1` |
| `verify` (`checkWalrus: true`) | `valid: true`, Walrus layer checked |

Example run output (no secrets):

```json
{
  "pass": true,
  "namespace": "cursor-plugin-g4-737adb5d",
  "memoryId": "d05a1dcc-3e3c-4be3-9793-8b799000f76e",
  "durableLive": true,
  "pushed": 1,
  "verifyValid": true,
  "walrusChecked": true
}
```

**Relayer:** `https://relayer.memory.walrus.xyz` (production). Local `MEMWAL_SERVER_URL=http://localhost:3001` is dev-only and will fail live sync unless a local relayer is running.

## Reproduce (maintainer)

From [memwal-agent-memory](https://github.com/Olympusxvn/memwal-agent-memory) clone (`pnpm install` for `@modelcontextprotocol/sdk`), with delegate env in `.env` (never commit):

```bash
cd /path/to/memwal-agent-memory
node --env-file=.env ../cursor-plugin-memwal-agent-memory/scripts/walrus-sync-g4-smoke.mjs
```

Or copy [scripts/walrus-sync-g4-smoke.mjs](../scripts/walrus-sync-g4-smoke.mjs) into the monorepo `scripts/` folder.

Pro Local CI path (`pnpm mcp:e2e` + `MEMWAL_MCP_MOCK_DURABLE=1`) remains the default for judges without keys.
