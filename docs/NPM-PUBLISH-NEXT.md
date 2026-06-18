# Publish @memwalpp/mcp to npm — next step

**Status:** Bundle ready, `npm pack` + `npx ./memwalpp-mcp-0.1.0.tgz` verified. **Registry publish blocked:** `npm whoami` → not logged in.

## Publish (you run once)

```bash
npm login
# scope @memwalpp must exist on npmjs.com — create org or use personal scope

cd /path/to/memwal-agent-memory/packages/mcp
pnpm build && pnpm test
npm publish --access public
```

## Verify from registry

```bash
npx -y @memwalpp/mcp@0.1.0 --transport stdio
```

## After publish

1. Restore plugin `mcp.json` to `npx` (already in GitHub repo)
2. Reload Cursor
3. Submit [cursor.com/marketplace/publish](https://cursor.com/marketplace/publish) with:
   `https://github.com/Olympusxvn/cursor-plugin-memwal-agent-memory`

## Local Cursor test (before npm)

Use [mcp.dev.json](../mcp.dev.json) — point `node` at upstream `packages/mcp/dist/bundle.mjs` after `pnpm --filter @memwalpp/mcp build`.

1. **Cmd+Q** quit Cursor → reopen
2. Settings → Plugins → enable **memwal-agent-memory**
3. Settings → MCP → green
4. Chat: *What MCP tools do you have?* → 9 tools
5. Smoke: remember → recall
