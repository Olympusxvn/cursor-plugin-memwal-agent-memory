# Publish @memwalpp/mcp to npm — completed

**Status:** **Done**

| Version | Date | Notes |
|---------|------|--------|
| `@memwalpp/mcp@0.1.0` | 2026-06-18 | Initial npm bundle (9 tools) |
| `@memwalpp/mcp@0.1.1` | 2026-06-27 | **`saveArtifact`**, 10 tools, Walrus Track bundle |

**Registry:** https://www.npmjs.com/package/@memwalpp/mcp  
**Plugin pin (v0.1.12):** `npx -y @memwalpp/mcp@0.1.1 --transport stdio` in [mcp.json](../mcp.json)

## Verify anytime

```bash
npm view @memwalpp/mcp version
# → 0.1.1

npx -y @memwalpp/mcp@0.1.1 --transport stdio
```

## After Marketplace approval / re-index

1. Bump [plugin.json](../.cursor-plugin/plugin.json) when changing MCP pin or plugin assets
2. Request **re-index** at [cursor.com/marketplace/publish](https://cursor.com/marketplace/publish)
3. Monitor [plugin Issues](https://github.com/Olympusxvn/cursor-plugin-memwal-agent-memory/issues)

## Local dev (optional)

Use [mcp.dev.json](../mcp.dev.json) — point `node` at upstream `packages/mcp/dist/bundle.mjs` after `pnpm --filter @memwalpp/mcp build`. See [LOCAL-DEV-MCP.md](./LOCAL-DEV-MCP.md).
