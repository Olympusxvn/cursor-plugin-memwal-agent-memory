# Skills Reference audit — memwal-agent-memory

**Audit date:** 2026-06-18  
**Reference:** [Cursor Agent Skills](https://cursor.com/docs/skills) · [agentskills.io](https://agentskills.io)  
**Plugin version:** 0.1.4  
**Publisher:** Vo Quoc Cuong · vo.q.cuong@gmail.com

Related: [PLUGINS-REFERENCE-AUDIT.md](./PLUGINS-REFERENCE-AUDIT.md) · [RULES-REFERENCE-AUDIT.md](./RULES-REFERENCE-AUDIT.md)

---

## Executive summary

| Area | Verdict |
|------|---------|
| **Directory layout** | **Pass** — one folder per skill, each with `SKILL.md` |
| **Frontmatter** | **Pass** — `name` + `description`; names match folders |
| **Content structure** | **Pass** — goal, instructions, when-to-use patterns |
| **Plugin manifest** | **Pass** — `"skills": "./skills/"` |
| **Optional assets** | **N/A** — no scripts needed for this plugin |
| **Scoping (`paths`)** | **Pass** — unset (correct for repo-wide memory workflows) |

**Conclusion:** Both skills meet the Agent Skills standard. No blocking gaps.

---

## 1. Skill inventory

| Folder | `name` in frontmatter | Match folder? | Lines | Verdict |
|--------|----------------------|---------------|-------|---------|
| `skills/memwal-setup/` | `memwal-setup` | Yes | ~91 | Pass |
| `skills/memwal-workflows/` | `memwal-workflows` | Yes | ~62 | Pass |

Plugin manifest:

```json
"skills": "./skills/"
```

Explicit manifest path replaces default discovery — **Pass** per [Plugins Reference](https://cursor.com/docs/reference/plugins).

---

## 2. Frontmatter (reference § SKILL.md file format)

### Required fields

| Field | Required | `memwal-setup` | `memwal-workflows` | Status |
|-------|----------|----------------|---------------------|--------|
| `name` | Yes | `memwal-setup` | `memwal-workflows` | Pass |
| `description` | Yes | Install / MCP / verify | Workflows / durable memory | Pass |

**Name rules:** lowercase, hyphens only, **must match parent folder** — both **Pass**.

### Optional fields

| Field | `memwal-setup` | `memwal-workflows` | Recommendation |
|-------|----------------|---------------------|----------------|
| `paths` | omitted | omitted | **Correct** — not file-scoped |
| `disable-model-invocation` | omitted (auto) | omitted (auto) | **Correct** — agent picks when relevant |
| `metadata` | omitted | omitted | Optional — not needed |

**Auto-invocation:** Both skills surface when Agent decides they are relevant (default). Command `/setup` explicitly routes to setup flow — complementary, not conflicting.

---

## 3. Content structure (reference § best practices)

| Best practice | memwal-setup | memwal-workflows | Status |
|---------------|--------------|------------------|--------|
| Clear **When to use** (in description + body) | ✓ install, configure, verify | ✓ durable / verifiable memory | Pass |
| Step-by-step instructions | ✓ tiers, verify, smoke | ✓ Pro Local / Walrus flows | Pass |
| Focused main `SKILL.md` | ✓ | ✓ | Pass |
| External refs vs huge inline docs | Links to upstream TOOLS.md, Comparison | Pass |
| Security (no secrets in chat) | ✓ rules 4, 18 | ✓ what not to do | Pass |
| Progressive loading | No bloated assets | Pass |

### Recommended sections (docs template)

| Section | memwal-setup | memwal-workflows |
|---------|--------------|------------------|
| Title | ✓ | ✓ |
| When to Use | ✓ (Goal + description) | ✓ (tier sections) |
| Instructions | ✓ Setup rules, Verify | ✓ Workflows, tables |

---

## 4. Optional directories (reference § Optional directories)

| Directory | Present? | Needed? | Status |
|-----------|----------|---------|--------|
| `scripts/` | No | No — MCP tools are the executable surface | N/A |
| `references/` | No | Optional — URLs to upstream docs suffice | Pass |
| `assets/` | No | No templates required | N/A |

---

## 5. Plugin vs project skill paths

| Source | This plugin |
|--------|-------------|
| `.cursor/skills/` (project) | Not used — plugin bundle |
| Plugin `skills/` via manifest | **Used** |
| User `~/.cursor/skills/` | N/A |

Once the Marketplace plugin is enabled, skills load from the plugin package — equivalent to project skills for the user's Cursor session.

---

## 6. Integration with other plugin components

| Component | Integration | Status |
|-----------|-------------|--------|
| Rule `memwal-hybrid-memory.mdc` | Points to memwal-setup / `/setup` | Pass |
| Command `commands/setup.md` | Invokes memwal-setup skill | Pass |
| MCP `mcp.json` | Skills document tool usage | Pass |

---

## 7. Gaps fixed in 0.1.4

| Gap | Fix |
|-----|-----|
| Stale troubleshooting (`mcp.local.example.json`) | → `mcp.dev.json` + live npm URL |
| Troubleshooting implied npm unpublished | Updated for `@memwalpp/mcp@0.1.0` live |

---

## 8. Optional follow-ups (non-blocking)

| Item | When to consider |
|------|------------------|
| `references/TOOLS-SUMMARY.md` in skill folder | If TOOLS.md link breaks offline often |
| `disable-model-invocation: true` on setup | Only if auto-invoke becomes noisy |
| `paths` on a future code-specific skill | e.g. Sui Move helpers under `packages/sui-contracts/` |

---

## 9. Compliance mapping

| ID | Requirement | Status |
|----|-------------|--------|
| B2 | memwal-setup — `name`, `description` | ☑ |
| B3 | memwal-workflows — `name`, `description` | ☑ |
| E2 | Do not remember secrets | ☑ (both skills) |
| E3 | Do not read credentials file | ☑ (memwal-setup) |
| G5 | `/setup` → setup skill | ☑ |

---

## 10. Sign-off

| Role | Name | Date |
|------|------|------|
| Publisher | Vo Quoc Cuong | 2026-06-18 |
| Reference | [cursor.com/docs/skills](https://cursor.com/docs/skills) | 2026-06-18 |
