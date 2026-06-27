# Local dev MCP config

Use this when developing or debugging the **upstream** `@memwalpp/mcp` package from a monorepo clone. Marketplace and end users should use production `mcp.json` (`npx -y @memwalpp/mcp@0.1.1`).

1. Build upstream bundle:

```bash
cd /path/to/memwal-agent-memory
pnpm --filter @memwalpp/mcp build
```

2. Copy `mcp.dev.json` → `mcp.json` and replace `REPO_ROOT` with your absolute path to the monorepo root.

3. Reload Cursor (Cmd+Q / quit fully).

4. When done, restore production `mcp.json`:

```json
"command": "npx",
"args": ["-y", "@memwalpp/mcp@0.1.1", "--transport", "stdio"]
```

See also [docs/NPM-PUBLISH-NEXT.md](./NPM-PUBLISH-NEXT.md) for npm publish status.
