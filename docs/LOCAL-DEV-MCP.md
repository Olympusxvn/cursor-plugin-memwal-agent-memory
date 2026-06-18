# Local dev MCP config (before npm publish)

Use this **only** until `@memwalpp/mcp@0.1.0` is on npm.

1. Build upstream bundle:

```bash
cd /path/to/memwal-agent-memory
pnpm --filter @memwalpp/mcp build
```

2. Copy `mcp.dev.json` → `mcp.json` and set your absolute path to `dist/bundle.mjs`.

3. Reload Cursor (Cmd+Q).

After `npm publish`, restore production `mcp.json`:

```json
"command": "npx",
"args": ["-y", "@memwalpp/mcp@0.1.0", "--transport", "stdio"]
```
