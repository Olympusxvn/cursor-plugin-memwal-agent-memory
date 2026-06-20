# MemWal Agent Memory — Cursor Plugin

[![npm @memwalpp/mcp](https://img.shields.io/npm/v/@memwalpp/mcp?style=flat-square&color=3b82f6&label=%40memwalpp%2Fmcp)](https://www.npmjs.com/package/@memwalpp/mcp)
[![License: MIT](https://img.shields.io/badge/license-MIT-64748b?style=flat-square)](LICENSE)
[![Cursor Plugin](https://img.shields.io/badge/Cursor-Marketplace%20submitted-8b5cf6?style=flat-square)](https://cursor.com/marketplace/publish)

> **Your AI remembers the project — on your machine first, on Walrus when you choose.**  
> Cursor plugin + MCP wiring for **hybrid agent memory**: local SQLite, optional Walrus durability, verifiable recall.

```
remember → local SQLite     sync → redact + gate → Walrus (optional)
search   → ranked hybrid    verify → proof layers you can audit
```

| | |
|---|---|
| **Plugin** | `memwal-agent-memory` v0.1.9 |
| **MCP server** | [`@memwalpp/mcp@0.1.0`](https://www.npmjs.com/package/@memwalpp/mcp) via `npx` |
| **Upstream** | [memwal-agent-memory](https://github.com/Olympusxvn/memwal-agent-memory) |
| **Publisher** | Vo Quoc Cuong · [@Olympusxvn](https://github.com/Olympusxvn) |
| **Marketplace** | Application **submitted** (2026-06-18) — [review pending](https://cursor.com/marketplace/publish) |

---

## Why use this?

- **Hybrid** — **Pro Local** works with Node 20+ only: decisions, conventions, and bugfixes stay on disk. Call **`sync`** when you want Walrus backup — not on every message.
- **Privacy** — Server-enforced redaction and quality gates before cloud promote. Rules and skills tell the agent: no secrets in memory, delegate keys in MCP env only.
- **Verifiable** — Layered **`verify`** (local proof → Walrus blob → optional chain read). Live Walrus Sync tested for marketplace compliance ([G4 evidence](docs/WALRUS-SYNC-G4-TEST.md)).
- **Agent experience** — Plugin bundles **9 MCP tools**, a hybrid-memory **rule**, **setup/workflow skills**, and **`/setup`** — so Cursor agents know *when* to remember and recall.

Wraps Mysten's MemWal SDK through our open-source stack. **Does not fork** [Walrus Memory](https://docs.wal.app).

---

## Quick start for Cursor

**Requires:** [Node.js 20+](https://nodejs.org/) · `@memwalpp/mcp@0.1.0` on [npm](https://www.npmjs.com/package/@memwalpp/mcp) (live)

### Option A — Cursor Marketplace (recommended after approval)

1. Install **MemWal Agent Memory** from the Cursor Marketplace
2. **Settings → Plugins** — enable the plugin
3. **Settings → MCP** — confirm `memwal-agent-memory` is connected
4. Fully restart Cursor (Cmd+Q on macOS)
5. In chat: `/setup` or *“Remember: MemWal smoke test OK.”*

### Option B — Local plugin (today)

Copy this repo to `~/.cursor/plugins/local/memwal-agent-memory/`, enable in **Settings → Plugins**, restart Cursor.

Production MCP wiring (already in `mcp.json`):

```json
{
  "mcpServers": {
    "memwal-agent-memory": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@memwalpp/mcp@0.1.0", "--transport", "stdio"],
      "env": {
        "MEMWAL_NAMESPACE": "cursor",
        "MEMWAL_MCP_DATA_DIR": "${userHome}/.memwal-agent-memory/mcp"
      }
    }
  }
}
```

### Option C — MCP only (no plugin rules/skills)

Paste the JSON above into your project **`.cursor/mcp.json`** or global MCP settings.

### + Walrus Sync (optional)

**Settings → MCP → memwal-agent-memory → Environment** — add delegate credentials (never commit):

| Variable | Value |
|----------|--------|
| `MEMWAL_PRIVATE_KEY` | Delegate key only (not owner) |
| `MEMWAL_ACCOUNT_ID` | MemWal account ID |
| `MEMWAL_SERVER_URL` | `https://relayer.memory.walrus.xyz` |

```bash
npx -y @mysten-incubation/memwal-mcp login --prod
```

Map fields from `~/.memwal/credentials.json` yourself — the agent must **not** read that file.

**Data directory (Pro Local):** `~/.memwal-agent-memory/mcp`

---

## Quick start for Claude Desktop

Same MCP server — add to **`claude_desktop_config.json`**:

```json
{
  "mcpServers": {
    "memwal-agent-memory": {
      "command": "npx",
      "args": ["-y", "@memwalpp/mcp@0.1.0", "--transport", "stdio"],
      "env": {
        "MEMWAL_NAMESPACE": "claude-desktop",
        "MEMWAL_MCP_DATA_DIR": "${HOME}/.memwal-agent-memory/mcp"
      }
    }
  }
}
```

Restart Claude. Package docs: [`@memwalpp/mcp` README](https://github.com/Olympusxvn/memwal-agent-memory/tree/main/packages/mcp#readme).

---

## What this plugin provides

| Component | Purpose |
|-----------|---------|
| **MCP server** | Nine tools: `remember`, `recall`, `search`, `sync`, `getVersionHistory`, `getLineage`, `verify`, `softDelete`, `getStats` |
| **Rule** | Guides the agent on when to store and recall project context |
| **Skills** | Setup (Pro Local / Walrus Sync) and hybrid workflows |
| **Command** | `/setup` — verify installation |

---

## Tiers

| Tier | Requirements | Best for |
|------|--------------|----------|
| **Pro Local** (default) | Node 20+ | Daily AI coding — decisions, conventions, bug fixes stay on device |
| **+ Walrus Sync** | + MemWal delegate key and account ID in MCP env | Durable backup, verifiable memory, cross-machine restore |

---

## Hybrid workflow

```
remember  →  local SQLite (fast, private)
sync      →  redact + quality gate → Walrus (when configured)
search    →  ranked hybrid results + verifiable flag
verify    →  layered proof (local / Walrus / optional chain read)
```

**Important:** Unlike official Walrus Memory MCP, Walrus upload is **not automatic**. Call `sync` when you want durable promotion.

---

## Smoke test

After setup, in chat:

1. *"Remember: MemWal Agent Memory smoke test OK."*
2. *"Recall: smoke test OK"*

Or run `/setup`.

---

## Official Walrus Memory MCP (alternative)

For pure cloud MemWal (`memwal_remember`, `memwal_analyze`, `memwal_restore`):

```bash
curl -sL https://memory.walrus.xyz/skills/setup
```

Comparison: [Comparison.md](https://github.com/Olympusxvn/memwal-agent-memory/blob/main/Comparison.md)

---

## Documentation (this repo)

| Doc | Content |
|-----|---------|
| [docs/MCP-REFERENCE-AUDIT.md](docs/MCP-REFERENCE-AUDIT.md) | Audit vs [Cursor MCP](https://cursor.com/docs/mcp) |
| [docs/HOOKS-REFERENCE-AUDIT.md](docs/HOOKS-REFERENCE-AUDIT.md) | Audit vs [Cursor Hooks](https://cursor.com/docs/hooks) — optional, N/A |
| [docs/SKILLS-REFERENCE-AUDIT.md](docs/SKILLS-REFERENCE-AUDIT.md) | Audit vs [Cursor Skills](https://cursor.com/docs/skills) |
| [docs/RULES-REFERENCE-AUDIT.md](docs/RULES-REFERENCE-AUDIT.md) | Audit vs [Cursor Rules](https://cursor.com/docs/rules) |
| [docs/PLUGINS-REFERENCE-AUDIT.md](docs/PLUGINS-REFERENCE-AUDIT.md) | Audit vs [Cursor Plugins Reference](https://cursor.com/docs/reference/plugins) |
| [docs/SUBMISSION-REVIEW.md](docs/SUBMISSION-REVIEW.md) | Final pre-submit quality review (PASS) |
| [docs/COMPLIANCE-CHECKLIST.md](docs/COMPLIANCE-CHECKLIST.md) | Pre-submit validation (signed off 2026-06-18) |
| [docs/SUBMIT-PLAYBOOK.md](docs/SUBMIT-PLAYBOOK.md) | Marketplace submission steps |
| [docs/PUBLISHER-OBLIGATIONS.md](docs/PUBLISHER-OBLIGATIONS.md) | Legal and policy duties |
| [docs/OPERATIONS-AND-SUPPORT.md](docs/OPERATIONS-AND-SUPPORT.md) | Support and incident response |
| [docs/DO-NOT.md](docs/DO-NOT.md) | Actions that risk delisting |
| [docs/PRIVACY.md](docs/PRIVACY.md) | Data handling disclosure |
| [docs/SECURITY.md](docs/SECURITY.md) | Security practices |
| [docs/REPO-PLAN.md](docs/REPO-PLAN.md) | Repository structure and npm prerequisite |

---

## Support

- **Issues:** [github.com/Olympusxvn/cursor-plugin-memwal-agent-memory/issues](https://github.com/Olympusxvn/cursor-plugin-memwal-agent-memory/issues)
- **Upstream MCP bugs:** [memwal-agent-memory/issues](https://github.com/Olympusxvn/memwal-agent-memory/issues)
- **Security:** See [docs/SECURITY.md](docs/SECURITY.md)

---

## Developer notes

Local MCP dev (monorepo bundle): [mcp.dev.json](mcp.dev.json) · [docs/LOCAL-DEV-MCP.md](docs/LOCAL-DEV-MCP.md)

---

## License

MIT — see [LICENSE](LICENSE).
