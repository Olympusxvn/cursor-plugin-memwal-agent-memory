---
name: memwal-workflows
description: Agent workflows for MemWal hybrid memory — local recall, ranked search, sync promote, verify, and lineage. Use when the user wants durable or verifiable project memory during AI development.
---

# MemWal Agent Memory — agent workflows

## Pro Local (daily AI development)

```
remember(decisions, bug fixes, conventions)
  → recall / search when continuing work
  → getStats occasionally
```

Best for: Cursor coding sessions, architecture notes, refactors, team conventions — **no network required**.

## + Walrus Sync (durable backup)

```
remember → sync → search(includeProof) → verify(memoryId)
```

Best for: second machine restore, judge-visible Walrus proof, durable team memory.

Only sync when user wants Walrus tier and credentials are configured.

## Search vs recall

| Tool | Use when |
|------|----------|
| `recall` | Inject context for current task — hybrid pull |
| `search` | Ranked hits with `score`, `hitSource`, `verifiable` flags |

Prefer `search` when user asks "find everything about X" or needs verifiable hits.

## Verify and trust

```
verify({ memoryId, checkWalrus?, checkOnChain? })
getLineage({ memoryId, includeOnChain? })
getVersionHistory({ memoryId })
```

Use when user asks: "Is this memory verifiable?" or "Show promotion history."

## softDelete

Tombstone mistaken entries — do not store secrets then delete; never store secrets.

## What not to do

- Do not remember secrets, keys, or PII
- Do not call `sync` on every turn — wastes relayer quota and skips intentional gating
- Do not claim "synced to Walrus" when only `jobId` exists — check `verify` / `verifiable` flags
- Do not use bypass flags (`skipRedaction`, `bypassGate`) — MCP rejects them

## Reference

- Upstream MCP package: [memwal-agent-memory](https://github.com/Olympusxvn/memwal-agent-memory)
- Tool schemas: [packages/mcp/docs/TOOLS.md](https://github.com/Olympusxvn/memwal-agent-memory/blob/main/packages/mcp/docs/TOOLS.md)
