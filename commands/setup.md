---
name: setup
description: Run MemWal Agent Memory MCP setup — verify Node, enable plugin, smoke-test remember/recall.
---

# /setup — MemWal Agent Memory

1. Confirm Node.js 20+: `node -v`
2. Confirm plugin **memwal-agent-memory** is enabled in Cursor Settings → Plugins
3. Confirm MCP server **memwal-agent-memory** is green in Settings → MCP
4. Invoke skill **memwal-setup** for tier selection (Pro Local vs + Walrus Sync)
5. Ask user to fully restart Cursor if config changed
6. Run smoke test: remember + recall verification phrase
7. Report tier, namespace, and tool count (expect 9)

Do not collect or echo secrets. Point Walrus Sync users to Cursor MCP env settings only.
