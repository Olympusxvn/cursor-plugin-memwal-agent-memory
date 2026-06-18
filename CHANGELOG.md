# Changelog

All notable changes to this Cursor plugin are documented here.

## [0.1.2] — 2026-06-18

### Shipped

- **`@memwalpp/mcp@0.1.0` on npm** — https://www.npmjs.com/package/@memwalpp/mcp (org `@memwalpp`)
- **Cursor Marketplace publisher application submitted** — repo `https://github.com/Olympusxvn/cursor-plugin-memwal-agent-memory`
- Production `mcp.json` unchanged: `npx -y @memwalpp/mcp@0.1.0 --transport stdio`

### Docs

- [docs/NPM-PUBLISH-NEXT.md](docs/NPM-PUBLISH-NEXT.md) — marked complete
- [docs/SUBMIT-PLAYBOOK.md](docs/SUBMIT-PLAYBOOK.md) — Phase 0 checkboxes; Phase 3 submitted
- [docs/COMPLIANCE-CHECKLIST.md](docs/COMPLIANCE-CHECKLIST.md) — C3 npm installable ☑
- Upstream [memwal-agent-memory](https://github.com/Olympusxvn/memwal-agent-memory) docs updated with npm + plugin links

## [0.1.1] — 2026-06-18

### Verified

- **Local Cursor test passed:** plugin enabled, MCP green, 9 tools, remember/recall smoke OK (via upstream `dist/bundle.mjs` dev wiring).
- **Upstream npm bundle ready:** `@memwalpp/mcp@0.1.0` tarball verified (`npm pack` + `npx`); registry publish pending `npm login`.

### Added

- [docs/NPM-PUBLISH-NEXT.md](docs/NPM-PUBLISH-NEXT.md) — publish + marketplace submit steps after `npm publish`.
- [docs/LOCAL-DEV-MCP.md](docs/LOCAL-DEV-MCP.md) + `mcp.dev.json` — test before npm registry (see prior commit).

### Notes

- GitHub repo live: https://github.com/Olympusxvn/cursor-plugin-memwal-agent-memory
- Production `mcp.json` remains `npx -y @memwalpp/mcp@0.1.0` for marketplace; use `mcp.dev.json` locally until npm publish.

## [0.1.0] — 2026-06-16

### Added

- Initial Cursor Marketplace plugin for **MemWal Agent Memory** MCP
- MCP wiring via `@memwalpp/mcp` (stdio, Pro Local default)
- Rules: `memwal-hybrid-memory` — when to remember/recall/sync
- Skills: `memwal-setup`, `memwal-workflows`
- Command: `/setup`
- Compliance docs: submit playbook, publisher obligations, operations, do-not list
- Logo asset (`assets/logo.png`)

### Notes

- Marketplace submission requires `@memwalpp/mcp@0.1.0` published to npm public registry
- See [docs/SUBMIT-PLAYBOOK.md](docs/SUBMIT-PLAYBOOK.md) before publishing
