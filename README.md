# MemWal Agent Memory — Cursor Plugin

**Hybrid agent memory for AI development in Cursor.**

Local SQLite for fast, private project memory. Optional Walrus durability via [Walrus Memory (MemWal)](https://docs.wal.app). Server-enforced redaction and quality gates before any cloud promote.

> *A fast, private, verifiable hybrid memory layer that any MCP-compatible agent can use.*

| | |
|---|---|
| **Plugin name** | `memwal-agent-memory` |
| **MCP server** | `@memwalpp/mcp` |
| **License** | MIT (permissive — Cursor Marketplace compatible) |
| **Upstream** | [memwal-agent-memory](https://github.com/Olympusxvn/memwal-agent-memory) |

---

## What this plugin provides

| Component | Purpose |
|-----------|---------|
| **MCP server** | Nine tools: `remember`, `recall`, `search`, `sync`, `getVersionHistory`, `getLineage`, `verify`, `softDelete`, `getStats` |
| **Rule** | Guides the agent on when to store and recall project context |
| **Skills** | Setup (Pro Local / Walrus Sync) and hybrid workflows |
| **Command** | `/setup` — verify installation |

This plugin **wraps** Mysten's MemWal SDK via our open-source MCP package. It does **not** fork Walrus Memory.

---

## Tiers

| Tier | Requirements | Best for |
|------|--------------|----------|
| **Pro Local** (default) | Node 20+ | Daily AI coding — decisions, conventions, bug fixes stay on device |
| **+ Walrus Sync** | + MemWal delegate key and account ID in MCP env | Durable backup, verifiable memory, cross-machine restore |

---

## Installation (Cursor)

1. Install this plugin from the **Cursor Marketplace** (after approval) or load locally from `~/.cursor/plugins/local/memwal-agent-memory/`
2. Ensure **Node.js 20+** is installed
3. Enable the plugin in **Cursor Settings → Plugins**
4. Confirm **memwal-agent-memory** MCP server is active in **Settings → MCP**
5. Fully restart Cursor (Cmd+Q on macOS)

### Pro Local — no extra configuration

Data directory (default): `~/.memwal-agent-memory/mcp`

### + Walrus Sync — optional MCP env

Add in **Cursor Settings → MCP → memwal-agent-memory → Environment** (never commit these):

| Variable | Description |
|----------|-------------|
| `MEMWAL_PRIVATE_KEY` | MemWal **delegate** private key (not owner key) |
| `MEMWAL_ACCOUNT_ID` | MemWal account ID |
| `MEMWAL_SERVER_URL` | e.g. `https://relayer.memory.walrus.xyz` |

Obtain credentials via official login (user runs locally):

```bash
npx -y @mysten-incubation/memwal-mcp login --prod
```

Map fields from `~/.memwal/credentials.json` into MCP env yourself — the agent must not read that file.

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
| [docs/SUBMIT-PLAYBOOK.md](docs/SUBMIT-PLAYBOOK.md) | Marketplace submission steps |
| [docs/COMPLIANCE-CHECKLIST.md](docs/COMPLIANCE-CHECKLIST.md) | Pre-submit validation |
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

## Prerequisites for marketplace install

This plugin's `mcp.json` runs:

```bash
npx -y @memwalpp/mcp@0.1.0 --transport stdio
```

**`@memwalpp/mcp` must be published to the public npm registry** before marketplace users can install. See upstream [npm publish guide](https://github.com/Olympusxvn/memwal-agent-memory/blob/main/docs/product/npm-publish.md).

For local development before npm publish, use [mcp.local.example.json](mcp.local.example.json).

---

## License

MIT — see [LICENSE](LICENSE).
