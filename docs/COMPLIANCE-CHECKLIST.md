# Compliance checklist — Cursor Marketplace

**Plugin:** `memwal-agent-memory` v0.1.4  
**Reference:** [Plugins Reference](https://cursor.com/docs/reference/plugins) · [Rules](https://cursor.com/docs/rules) · [Skills](https://cursor.com/docs/skills)  
**Full audit:** [PLUGINS-REFERENCE-AUDIT.md](./PLUGINS-REFERENCE-AUDIT.md) · [RULES-REFERENCE-AUDIT.md](./RULES-REFERENCE-AUDIT.md) · [SKILLS-REFERENCE-AUDIT.md](./SKILLS-REFERENCE-AUDIT.md)  
**Publisher:** Vo Quoc Cuong · vo.q.cuong@gmail.com  
**Last verified:** 2026-06-18

Legend: **☑** Pass · **◐** Optional / not required · **☐** Open

---

## A. Cursor manifest (required)

| # | Check | Pass | Evidence |
|---|-------|------|----------|
| A1 | `.cursor-plugin/plugin.json` exists and valid JSON | ☑ | Parses; committed |
| A2 | `name` = `memwal-agent-memory` (kebab-case) | ☑ | manifest L2 |
| A3 | `description` clear and accurate | ☑ | Hybrid memory; no false security claims |
| A4 | `version` semver | ☑ | `0.1.3` |
| A5 | `author.name` set | ☑ | Vo Quoc Cuong |
| A6 | `license` = `MIT` | ☑ | manifest + LICENSE |
| A7 | `repository` URL matches public GitHub repo | ☑ | Olympusxvn/cursor-plugin-memwal-agent-memory |
| A8 | `logo` = `assets/logo.png` and file committed | ☑ | 1024×1024; raw GitHub URL 200 |
| A9 | All paths relative — no `..`, no absolute paths | ☑ | manifest paths only `./…` |

---

## B. Components & frontmatter

| # | Check | Pass | Evidence |
|---|-------|------|----------|
| B1 | Rule — `description`, `alwaysApply` | ☑ | `rules/memwal-hybrid-memory.mdc` · [RULES-REFERENCE-AUDIT.md](./RULES-REFERENCE-AUDIT.md) |
| B2 | Skill `memwal-setup` — `name`, `description` | ☑ | [SKILLS-REFERENCE-AUDIT.md](./SKILLS-REFERENCE-AUDIT.md) |
| B3 | Skill `memwal-workflows` — `name`, `description` | ☑ | name matches folder; auto-invoke OK |
| B4 | Command `setup` — `name`, `description` | ☑ | `commands/setup.md` |
| B5 | No broken file references in manifest | ☑ | skills, rules, commands, mcp.json exist |
| B6 | Plugin scope — memory MCP only | ☑ | 9 hybrid tools; no chain writes |

---

## C. MCP configuration

| # | Check | Pass | Evidence |
|---|-------|------|----------|
| C1 | `mcp.json` — `memwal-agent-memory` entry | ☑ | valid JSON |
| C2 | `npx -y @memwalpp/mcp@0.1.0` pinned | ☑ | mcp.json |
| C3 | npm package published and installable | ☑ | npmjs.com 2026-06-18 |
| C4 | No secrets in `mcp.json` | ☑ | namespace + data dir only |
| C5 | `MEMWAL_MCP_DATA_DIR` uses `${userHome}` | ☑ | mcp.json |
| C6 | Walrus creds = user MCP env only | ☑ | README + skills |
| C7 | Local smoke: 9 tools after restart | ☑ | CHANGELOG 0.1.1 |

---

## D. Legal & marketplace policy

| # | Check | Pass | Evidence |
|---|-------|------|----------|
| D1 | MIT `LICENSE` in repo root | ☑ | LICENSE |
| D2 | No GPL / AGPL / LGPL in plugin repo | ☑ | MIT only |
| D3 | Plugin free — no paid marketplace access | ☑ | README |
| D4 | PUBLISHER-OBLIGATIONS.md accepted | ☑ | maintainer sign-off 2026-06-18 |
| D5 | PRIVACY.md accurate | ☑ | Pro Local + Walrus tiers |
| D6 | SECURITY.md — incident contact | ☑ | vo.q.cuong@gmail.com |
| D7 | No training on Plugin Data / User Content | ☑ | PRIVACY.md § Publisher terms |
| D8 | Brand: **Cursor**, not "Cursor AI" | ☑ | docs reviewed |

---

## E. Security & data

| # | Check | Pass | Evidence |
|---|-------|------|----------|
| E1 | No secrets in git | ☑ | .gitignore; mcp.dev.json local only |
| E2 | Rules/skills: do not remember secrets | ☑ | rule + skills |
| E3 | Do not read `~/.memwal/credentials.json` | ☑ | memwal-setup skill |
| E4 | No malware; npm fetch only `@memwalpp/mcp` | ☑ | pinned npx |
| E5 | Accurate disclosure: SQLite + optional Walrus | ☑ | README, PRIVACY |

---

## F. Documentation quality

| # | Check | Pass | Evidence |
|---|-------|------|----------|
| F1 | README — install, tiers, smoke, support | ☑ | README.md |
| F2 | CHANGELOG — releases documented | ☑ | 0.1.0–0.1.3 |
| F3 | Upstream MCP bug link | ☑ | memwal-agent-memory/issues |
| F4 | Official Walrus MCP alternative linked | ☑ | README + Comparison |
| F5 | DO-NOT.md reviewed | ☑ | maintainer 2026-06-18 |

---

## G. Functional test matrix

| # | Scenario | Expected | Pass | Notes |
|---|----------|----------|------|-------|
| G1 | Pro Local remember + recall | Hit returned | ☑ | 2026-06-18 local Cursor |
| G2 | getStats | Local row count | ☑ | same session |
| G3 | sync without Walrus env | `skipReason: offline` | ☑ | Pro Local default |
| G4 | + Walrus Sync | sync promotes | ◐ | Optional tier — not re-tested 2026-06-18 |
| G5 | `/setup` command | Setup skill path | ☑ | command + skill wired |

---

## Submission gate

| Gate | Status |
|------|--------|
| A–F all ☑ | **Met** |
| C3 npm verified | **Met** |
| G1–G3, G5 pass | **Met** |
| Marketplace application | **Submitted** 2026-06-18 |
| Listing live | **Pending** Cursor review |

**Reviewer (Cursor team):** _pending_  
**Maintainer:** Vo Quoc Cuong · **Date:** 2026-06-18
