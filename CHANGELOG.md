# Changelog

All notable changes to this Cursor plugin are documented here.

## [0.1.6] — 2026-06-18

### MCP compliance

- **MCP Reference audit:** [docs/MCP-REFERENCE-AUDIT.md](docs/MCP-REFERENCE-AUDIT.md) vs [cursor.com/docs/mcp](https://cursor.com/docs/mcp)
- **`mcp.json`:** add explicit `"type": "stdio"` per STDIO configuration docs

## [0.1.5] — 2026-06-18

### Hooks compliance

- **Hooks Reference audit:** [docs/HOOKS-REFERENCE-AUDIT.md](docs/HOOKS-REFERENCE-AUDIT.md) — hooks optional; intentionally omitted; policy via rule/skills/MCP

## [0.1.4] — 2026-06-18

### Skills compliance

- **Skills Reference audit:** [docs/SKILLS-REFERENCE-AUDIT.md](docs/SKILLS-REFERENCE-AUDIT.md) vs [cursor.com/docs/skills](https://cursor.com/docs/skills)
- **memwal-setup:** troubleshooting — live npm link; `mcp.dev.json` dev path

## [0.1.3] — 2026-06-18

### Compliance & publisher metadata

- **Plugins Reference audit:** [docs/PLUGINS-REFERENCE-AUDIT.md](docs/PLUGINS-REFERENCE-AUDIT.md) — full checklist vs [cursor.com/docs/reference/plugins](https://cursor.com/docs/reference/plugins)
- **`plugin.json` author:** Vo Quoc Cuong · vo.q.cuong@gmail.com
- **SECURITY.md / OPERATIONS / PRIVACY:** security and support contacts filled
- **COMPLIANCE-CHECKLIST.md:** signed off with evidence (G4 Walrus Sync optional ◐)
- **Rules Reference audit:** [docs/RULES-REFERENCE-AUDIT.md](docs/RULES-REFERENCE-AUDIT.md) vs [cursor.com/docs/rules](https://cursor.com/docs/rules)
- **Rule update:** `memwal-hybrid-memory.mdc` — Setup section → memwal-setup / `/setup`

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
