# Compliance checklist — pre-submit

Use this checklist before submitting to [cursor.com/marketplace/publish](https://cursor.com/marketplace/publish). All items must pass.

---

## A. Cursor manifest (required)

| # | Check | Pass |
|---|-------|------|
| A1 | `.cursor-plugin/plugin.json` exists and valid JSON | ☐ |
| A2 | `name` = `memwal-agent-memory` (kebab-case, unique intent) | ☐ |
| A3 | `description` clear and accurate (no false claims) | ☐ |
| A4 | `version` semver (e.g. `0.1.0`) | ☐ |
| A5 | `author.name` set | ☐ |
| A6 | `license` = `MIT` | ☐ |
| A7 | `repository` URL matches public GitHub repo | ☐ |
| A8 | `logo` = `assets/logo.png` and file committed | ☐ |
| A9 | All paths relative — no `..`, no absolute paths | ☐ |

---

## B. Components & frontmatter

| # | Check | Pass |
|---|-------|------|
| B1 | Rule `rules/memwal-hybrid-memory.mdc` — `description`, `alwaysApply` | ☐ |
| B2 | Skill `skills/memwal-setup/SKILL.md` — `name`, `description` | ☐ |
| B3 | Skill `skills/memwal-workflows/SKILL.md` — `name`, `description` | ☐ |
| B4 | Command `commands/setup.md` — `name`, `description` | ☐ |
| B5 | No broken file references in manifest | ☐ |
| B6 | Plugin scope focused — memory MCP only, no unrelated tools | ☐ |

---

## C. MCP configuration

| # | Check | Pass |
|---|-------|------|
| C1 | `mcp.json` valid — `mcpServers.memwal-agent-memory` entry | ☐ |
| C2 | Uses `npx -y @memwalpp/mcp@0.1.0` (pinned semver) | ☐ |
| C3 | **npm package published and installable** on clean machine | ☐ |
| C4 | No secrets in `mcp.json` — only safe defaults in `env` | ☐ |
| C5 | `MEMWAL_MCP_DATA_DIR` uses `${userHome}` placeholder | ☐ |
| C6 | Walrus credentials documented as user MCP env — not in repo | ☐ |
| C7 | Local smoke: 9 tools listed after Cursor restart | ☐ |

---

## D. Legal & marketplace policy

| # | Check | Pass |
|---|-------|------|
| D1 | MIT `LICENSE` in repo root | ☐ |
| D2 | No GPL / AGPL / LGPL components | ☐ |
| D3 | Plugin free — no paid access via marketplace | ☐ |
| D4 | [PUBLISHER-OBLIGATIONS.md](./PUBLISHER-OBLIGATIONS.md) read and accepted | ☐ |
| D5 | [PRIVACY.md](./PRIVACY.md) accurate for data flows | ☐ |
| D6 | [SECURITY.md](./SECURITY.md) — incident contact documented | ☐ |
| D7 | No use of Plugin Data / User Content for model training (Publisher Terms §6.3) | ☐ |
| D8 | Brand: refer to **Cursor**, not "Cursor AI" | ☐ |

---

## E. Security & data

| # | Check | Pass |
|---|-------|------|
| E1 | No API keys, `.env`, credentials in git history | ☐ |
| E2 | Rules/skills instruct agent not to remember secrets | ☐ |
| E3 | Rules/skills instruct agent not to read `~/.memwal/credentials.json` | ☐ |
| E4 | No malware, obfuscated code, or remote code fetch beyond npm `@memwalpp/mcp` | ☐ |
| E5 | Accurate disclosure: local SQLite + optional Walrus via MemWal relayer | ☐ |

---

## F. Documentation quality

| # | Check | Pass |
|---|-------|------|
| F1 | `README.md` — install, tiers, smoke test, support | ☐ |
| F2 | `CHANGELOG.md` — initial release documented | ☐ |
| F3 | Link to upstream memwal-agent-memory for MCP bugs | ☐ |
| F4 | Link to official Walrus MCP alternative (transparent comparison) | ☐ |
| F5 | [DO-NOT.md](./DO-NOT.md) reviewed by maintainer | ☐ |

---

## G. Functional test matrix

| # | Scenario | Expected | Pass |
|---|----------|----------|------|
| G1 | Pro Local remember + recall | Hit returned | ☐ |
| G2 | getStats | Local row count | ☐ |
| G3 | sync without Walrus env | `skipReason: offline` | ☐ |
| G4 | + Walrus Sync (optional) | sync promotes when creds set | ☐ |
| G5 | `/setup` command | Setup skill invoked | ☐ |

---

## Submission gate

**Submit only when:** A–G all checked, C3 npm publish verified, G1–G2 pass on fresh Cursor install.

**Reviewer:** _______________ **Date:** _______________
