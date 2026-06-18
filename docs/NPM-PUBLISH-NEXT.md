# Publish @memwalpp/mcp to npm — completed

**Status:** **Done** (2026-06-18)

| Step | Result |
|------|--------|
| npm org `@memwalpp` | Created — owner `olympusxvn` |
| Publish `@memwalpp/mcp@0.1.0` | https://www.npmjs.com/package/@memwalpp/mcp |
| Verify install | `npx -y @memwalpp/mcp@0.1.0 --transport stdio` |
| Cursor Marketplace | Publisher application **submitted** — review pending |

## Verify anytime

```bash
npm view @memwalpp/mcp version
npx -y @memwalpp/mcp@0.1.0 --transport stdio
```

## After Marketplace approval

1. Announce listing on upstream [memwal-agent-memory README](https://github.com/Olympusxvn/memwal-agent-memory)
2. Monitor [plugin Issues](https://github.com/Olympusxvn/cursor-plugin-memwal-agent-memory/issues)
3. Request **re-index** when bumping `plugin.json` / `mcp.json` versions

## Local dev (optional)

Use [mcp.dev.json](../mcp.dev.json) — point `node` at upstream `packages/mcp/dist/bundle.mjs` after `pnpm --filter @memwalpp/mcp build`. See [LOCAL-DEV-MCP.md](./LOCAL-DEV-MCP.md).
