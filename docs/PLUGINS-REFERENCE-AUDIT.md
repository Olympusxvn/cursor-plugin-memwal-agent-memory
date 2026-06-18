# Plugins Reference audit — memwal-agent-memory

**Audit date:** 2026-06-18  
**Reference:** [Cursor Plugins Reference](https://cursor.com/docs/reference/plugins)  
**Repository:** https://github.com/Olympusxvn/cursor-plugin-memwal-agent-memory  
**Plugin version:** 0.1.3  
**Publisher:** Vo Quoc Cuong · vo.q.cuong@gmail.com · GitHub [@Olympusxvn](https://github.com/Olympusxvn)

---

## Executive summary

| Area | Verdict |
|------|---------|
| **Manifest & structure** | **Pass** — valid single-plugin layout |
| **Component frontmatter** | **Pass** — rules, skills, command |
| **MCP wiring** | **Pass** — npm package live, pinned semver |
| **Documentation & legal** | **Pass** — README, LICENSE, PRIVACY, SECURITY |
| **Local functional test** | **Pass** — 9 tools, remember/recall (2026-06-18) |
| **Marketplace submission** | **Submitted** — awaiting Cursor review |
| **Optional improvements** | Logo true PNG/SVG; Walrus Sync E2E (G4) |

**Conclusion:** Plugin meets the official submission checklist. No blocking gaps remain for review.

---

## 1. Plugin structure (reference § Plugin structure)

Required layout vs this repo:

| Expected | This repo | Status |
|----------|-----------|--------|
| `.cursor-plugin/plugin.json` | ✓ | Pass |
| `rules/` (.mdc) | `rules/memwal-hybrid-memory.mdc` | Pass |
| `skills/` (SKILL.md per dir) | `memwal-setup`, `memwal-workflows` | Pass |
| `commands/` | `commands/setup.md` | Pass |
| `mcp.json` | ✓ root | Pass |
| `assets/logo` | `assets/logo.png` (1024×1024, committed) | Pass* |
| `README.md` | ✓ | Pass |
| `LICENSE` | MIT root | Pass |
| `agents/` | — (optional) | N/A |
| `hooks/` | — (optional) | N/A |

\*Logo resolves on GitHub raw URL. File bytes are JPEG with `.png` extension — works in browsers; consider re-export as true PNG or SVG for polish (non-blocking).

---

## 2. Plugin manifest (reference § Plugin manifest)

| Field | Required | Value | Status |
|-------|----------|-------|--------|
| `name` | Yes | `memwal-agent-memory` (kebab-case) | Pass |
| `description` | Recommended | Hybrid agent memory… | Pass |
| `version` | Recommended | `0.1.3` semver | Pass |
| `author.name` | Recommended | `Vo Quoc Cuong` | Pass |
| `author.email` | Optional | `vo.q.cuong@gmail.com` | Pass |
| `homepage` | Optional | Plugin repo URL | Pass |
| `repository` | Optional | Plugin repo URL | Pass |
| `license` | Optional | `MIT` | Pass |
| `keywords` | Optional | mcp, walrus, memory, … | Pass |
| `logo` | Optional | `assets/logo.png` (relative) | Pass |
| `skills` | Optional | `./skills/` | Pass |
| `rules` | Optional | `./rules/` | Pass |
| `commands` | Optional | `./commands/` | Pass |
| `mcpServers` | Optional | `./mcp.json` | Pass |
| `category` / `tags` | Marketplace entry only | Present in manifest | Info — extra fields; harmless |

**Path rule:** No `..` or absolute paths in manifest — **Pass**.

---

## 3. Component frontmatter (reference § Rules, Skills, Commands)

| Component | File | `description` | Other required | Status |
|-----------|------|---------------|----------------|--------|
| Rule | `rules/memwal-hybrid-memory.mdc` | ✓ | `alwaysApply: false` | Pass |
| Skill | `skills/memwal-setup/SKILL.md` | ✓ | `name: memwal-setup` | Pass |
| Skill | `skills/memwal-workflows/SKILL.md` | ✓ | `name: memwal-workflows` | Pass |
| Command | `commands/setup.md` | ✓ | `name: setup` | Pass |

No `agents/` — not required.

---

## 4. MCP servers (reference § MCP servers)

```json
"command": "npx",
"args": ["-y", "@memwalpp/mcp@0.1.0", "--transport", "stdio"]
```

| Check | Status |
|-------|--------|
| Valid `mcp.json` under `mcpServers` | Pass |
| Pinned public npm package | Pass — [@memwalpp/mcp@0.1.0](https://www.npmjs.com/package/@memwalpp/mcp) |
| No secrets in repo config | Pass |
| `${userHome}` data dir placeholder | Pass |
| Walrus creds documented as user MCP env only | Pass |

---

## 5. Official submission checklist (reference § Submitting a plugin)

| Requirement | Status | Evidence |
|-------------|--------|----------|
| Valid `.cursor-plugin/plugin.json` | ✓ | JSON parses; paths resolve |
| Unique kebab-case `name` | ✓ | `memwal-agent-memory` |
| Clear `description` | ✓ | manifest + README |
| Frontmatter on rules/skills/commands | ✓ | See §3 |
| Logo committed + relative path | ✓ | `assets/logo.png` |
| README documents usage | ✓ | install, tiers, smoke, support |
| Relative valid paths | ✓ | manifest audit |
| Tested locally | ✓ | CHANGELOG 0.1.1 — 9 tools, remember/recall |
| Multi-plugin `marketplace.json` | N/A | Single-plugin repo |
| Application submitted | ✓ | 2026-06-18 via [marketplace/publish](https://cursor.com/marketplace/publish) |

---

## 6. Publisher alignment (marketplace form)

| Form field | Submitted value | Repo alignment |
|------------|-----------------|----------------|
| Organization name | vo.q.cuong | Display handle — GitHub org is `Olympusxvn` |
| Organization handle | memwalpp | Matches npm org `@memwalpp` |
| Contact email | vo.q.cuong@gmail.com | Now in `plugin.json` author + SECURITY.md |
| GitHub repository | cursor-plugin-memwal-agent-memory | Matches `repository` field |
| Logotype URL | raw GitHub logo URL | Matches `assets/logo.png` |

---

## 7. Gaps resolved in 0.1.3

| Gap | Resolution |
|-----|------------|
| `author.email` missing | Added `vo.q.cuong@gmail.com` |
| `author.name` = GitHub handle only | Updated to **Vo Quoc Cuong** |
| SECURITY contact TBD | Email + GitHub private reporting |
| COMPLIANCE-CHECKLIST unchecked | Full audit with evidence |
| Stale `mcp.local.example.json` refs | Point to `mcp.dev.json` |

---

## 8. Optional follow-ups (non-blocking)

1. **Logo format** — Re-export as true PNG or SVG (1:1, background plate) for marketplace polish.
2. **G4 Walrus Sync test** — Run once with delegate env; document result in CHANGELOG.
3. **GitHub Security Advisories** — Enable private vulnerability reporting on plugin repo.
4. **After approval** — Update README “review pending” → live Marketplace link; announce on upstream repo.

---

## 9. Sign-off

| Role | Name | Date |
|------|------|------|
| Publisher / Maintainer | Vo Quoc Cuong | 2026-06-18 |
| Reference audited | [Plugins Reference](https://cursor.com/docs/reference/plugins) | 2026-06-18 |
