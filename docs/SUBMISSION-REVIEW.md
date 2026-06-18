# Plugin Submission Review — memwal-agent-memory

**Review date:** 2026-06-18  
**Plugin version:** 0.1.6  
**Repository:** https://github.com/Olympusxvn/cursor-plugin-memwal-agent-memory  
**Publisher:** Vo Quoc Cuong · vo.q.cuong@gmail.com · [@Olympusxvn](https://github.com/Olympusxvn)  
**Workflow:** Cursor `review-plugin-submission` skill + official reference audits

Related audits: [PLUGINS-REFERENCE-AUDIT.md](./PLUGINS-REFERENCE-AUDIT.md) · [RULES-REFERENCE-AUDIT.md](./RULES-REFERENCE-AUDIT.md) · [SKILLS-REFERENCE-AUDIT.md](./SKILLS-REFERENCE-AUDIT.md) · [HOOKS-REFERENCE-AUDIT.md](./HOOKS-REFERENCE-AUDIT.md) · [MCP-REFERENCE-AUDIT.md](./MCP-REFERENCE-AUDIT.md) · [COMPLIANCE-CHECKLIST.md](./COMPLIANCE-CHECKLIST.md)

---

## Executive verdict

| Item | Result |
|------|--------|
| **Overall** | **PASS — ready for Marketplace review** |
| **Blocking issues** | **0** |
| **Recommended fixes** | 3 low · 2 optional polish |
| **Marketplace application** | Submitted 2026-06-18 — listing pending Cursor team review |
| **Resubmit required?** | **No** |

The plugin meets technical submission requirements. No urgent changes are required before reviewers inspect the repository.

---

## 1. Manifest validity — PASS

| Check | Result | Evidence |
|-------|--------|----------|
| `.cursor-plugin/plugin.json` exists | Pass | Present at repo root |
| Valid JSON | Pass | Parses successfully |
| `name` lowercase kebab-case | Pass | `memwal-agent-memory` |
| `description` clear and accurate | Pass | Hybrid memory; no false security claims |
| `version` semver | Pass | `0.1.6` |
| `author.name` + `author.email` | Pass | Vo Quoc Cuong · vo.q.cuong@gmail.com |
| `license` | Pass | MIT + `LICENSE` in repo root |
| `repository` / `homepage` | Pass | Match public GitHub repo |
| `logo` relative path | Pass | `assets/logo.png` — raw GitHub URL returns 200 |
| All manifest paths relative | Pass | `./skills/`, `./rules/`, `./commands/`, `./mcp.json` |

**Note:** `category` and `tags` are marketplace-entry fields; harmless extras on a single-plugin manifest.

---

## 2. Component discoverability — PASS

| Component | Expected location | Found | Status |
|-----------|-------------------|-------|--------|
| Skills | `skills/*/SKILL.md` | `memwal-setup`, `memwal-workflows` | Pass |
| Rules | `rules/*.mdc` | `memwal-hybrid-memory.mdc` | Pass |
| Agents | `agents/` (optional) | — | N/A |
| Commands | `commands/*` | `setup.md` | Pass |
| Hooks | `hooks/hooks.json` (optional) | — | N/A (intentional) |
| MCP | `mcp.json` | Present; manifest `"mcpServers": "./mcp.json"` | Pass |

---

## 3. Component metadata — PASS

| File | `name` | `description` | Other | Status |
|------|--------|---------------|-------|--------|
| `skills/memwal-setup/SKILL.md` | `memwal-setup` | Pass | Name matches folder | Pass |
| `skills/memwal-workflows/SKILL.md` | `memwal-workflows` | Pass | Name matches folder | Pass |
| `rules/memwal-hybrid-memory.mdc` | — | Pass | `alwaysApply: false` | Pass |
| `commands/setup.md` | `setup` | Pass | Routes to memwal-setup skill | Pass |

---

## 4. Repository integration — PASS (single-plugin repo)

| Check | Result |
|-------|--------|
| `.cursor-plugin/marketplace.json` | **Not required** — single-plugin repository |
| Public GitHub repo | Pass |
| MIT license committed | Pass |
| No secrets in tracked files | Pass (`.gitignore` covers `.env*`) |
| npm runtime dependency live | Pass — `@memwalpp/mcp@0.1.0` on npmjs.com |

---

## 5. MCP integration — PASS

Production `mcp.json`:

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

| Check | Status |
|-------|--------|
| STDIO transport per [Cursor MCP docs](https://cursor.com/docs/mcp) | Pass |
| Explicit `"type": "stdio"` | Pass (v0.1.6) |
| Pinned public npm package | Pass |
| No secrets in repo MCP config | Pass |
| `${userHome}` config interpolation | Pass |
| Local smoke — 9 tools, remember/recall | Pass (CHANGELOG 0.1.1) |

**Tools (v1):** `remember`, `recall`, `search`, `sync`, `getVersionHistory`, `getLineage`, `verify`, `softDelete`, `getStats`.

---

## 6. Documentation quality — PASS

| Check | Status |
|-------|--------|
| README states purpose | Pass |
| README covers installation | Pass |
| README lists components (MCP, rule, skills, command) | Pass |
| README documents tiers + smoke test | Pass |
| Support, privacy, security links | Pass |
| Five Cursor reference audits + compliance checklist | Pass |
| Logo committed and referenced | Pass *(format note in fix list)* |

---

## 7. Official reference alignment

| Cursor reference | Audit file | Verdict |
|------------------|------------|---------|
| [Plugins Reference](https://cursor.com/docs/reference/plugins) | PLUGINS-REFERENCE-AUDIT.md | Pass |
| [Rules](https://cursor.com/docs/rules) | RULES-REFERENCE-AUDIT.md | Pass |
| [Skills](https://cursor.com/docs/skills) | SKILLS-REFERENCE-AUDIT.md | Pass |
| [Hooks](https://cursor.com/docs/hooks) | HOOKS-REFERENCE-AUDIT.md | N/A (optional, omitted by design) |
| [MCP](https://cursor.com/docs/mcp) | MCP-REFERENCE-AUDIT.md | Pass |

---

## 8. Prioritized fix list

### Low — resolved in v0.1.8

| ID | Issue | Status |
|----|-------|--------|
| L1 | Stale `mcp.local.example.json` | **Fixed** — deleted; dev config in `mcp.dev.json` |
| L2 | `docs/REPO-PLAN.md` referenced `mcp.local.example.json` | **Fixed** — updated to `mcp.dev.json` |
| L3 | `LICENSE` copyright vs author | **Fixed** — `Copyright (c) 2026 Vo Quoc Cuong` |

### Optional polish

| ID | Issue | Recommended fix |
|----|-------|-----------------|
| O1 | `assets/logo.png` is JPEG bytes (1024×1024) | Re-export as true PNG or SVG 1:1 |
| O2 | + Walrus Sync E2E (compliance G4) not re-tested | Run once with delegate env; note in CHANGELOG |

---

## 9. Submission checklist (skill summary)

| Item | Status |
|------|--------|
| Manifest exists and parses as valid JSON | Pass |
| All declared paths exist and are relative | Pass |
| No broken file references in manifest | Pass |
| No missing frontmatter on skills / rules / commands | Pass |
| Plugin scope clear and focused | Pass |
| Multi-plugin `marketplace.json` | N/A |
| npm MCP package installable | Pass |
| Marketplace publisher application filed | Pass |

---

## 10. Final recommendation

**Recommendation: APPROVE — no resubmit required.**

Plugin **memwal-agent-memory v0.1.8** satisfies the submission quality bar:

- Valid manifest and discoverable components  
- Complete frontmatter on rules, skills, and commands  
- Production MCP wiring (`npx` + semver pin + `type: stdio`)  
- Professional compliance documentation  
- Publisher application already submitted  

### Publisher next steps

1. Wait for Cursor team review / listing approval  
2. Monitor [plugin Issues](https://github.com/Olympusxvn/cursor-plugin-memwal-agent-memory/issues)  
3. After approval — update README from “review pending” to live Marketplace link  
4. Request **re-index** when bumping `plugin.json` / `mcp.json` versions

---

## Sign-off

| Role | Name | Date |
|------|------|------|
| Reviewer | Vo Quoc Cuong (maintainer) | 2026-06-18 |
| Plugin version reviewed | 0.1.8 | 2026-06-18 |
| Git commit at review | `c981af2` (0.1.6); L1–L3 fixed in 0.1.8 | 2026-06-18 |
