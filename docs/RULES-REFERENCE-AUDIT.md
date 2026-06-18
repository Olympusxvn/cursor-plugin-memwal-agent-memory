# Rules Reference audit — memwal-agent-memory

**Audit date:** 2026-06-18  
**Reference:** [Cursor Rules](https://cursor.com/docs/rules)  
**Rule file:** `rules/memwal-hybrid-memory.mdc`  
**Plugin version:** 0.1.3  
**Publisher:** Vo Quoc Cuong · vo.q.cuong@gmail.com

Related: [PLUGINS-REFERENCE-AUDIT.md](./PLUGINS-REFERENCE-AUDIT.md)

---

## Executive summary

| Area | Verdict |
|------|---------|
| **File format** | **Pass** — `.mdc` with valid YAML frontmatter |
| **Apply mode** | **Pass** — Apply Intelligently (`description` + `alwaysApply: false`) |
| **Content quality** | **Pass** — focused, actionable, &lt;500 lines |
| **Security guidance** | **Pass** — no secrets, delegate keys, out-of-scope chain tools |
| **Plugin wiring** | **Pass** — `"rules": "./rules/"` in manifest |

**Conclusion:** Rule meets Cursor Rules documentation. No blocking changes required.

---

## 1. Rule types (reference § How rules work)

Plugin ships **one** rule. In Cursor UI this maps to:

| UI label | This rule | Status |
|----------|-----------|--------|
| Always Apply | `alwaysApply: true` | Not used |
| **Apply Intelligently** | `alwaysApply: false` + `description` set, no `globs` | **Active mode** |
| Apply to Specific Files | `globs` pattern | Not used (correct — memory is not file-scoped) |
| Apply Manually | `@`-mention in chat | Also available |

**Frontmatter matrix (reference):**

| `alwaysApply` | `description` | `globs` | Behavior |
|---------------|---------------|---------|----------|
| `false` | ✓ provided | omitted | Agent pulls rule when description is relevant |

**Status:** **Pass** — appropriate for a memory MCP plugin (should not run on every chat).

---

## 2. File structure (reference § Project rules / Rule file structure)

| Requirement | This plugin | Status |
|-------------|-------------|--------|
| Use `.mdc` extension | `memwal-hybrid-memory.mdc` | Pass |
| Do not use plain `.md` in rules dir | Only `.mdc` present | Pass |
| Frontmatter with `description` | Present | Pass |
| Frontmatter with `alwaysApply` | `false` | Pass |
| Body markdown content | Structured sections | Pass |

**Note:** Marketplace plugins use `rules/` at repo root (manifest path), not `.cursor/rules/`. Cursor loads them via plugin manifest — equivalent to project rules once the plugin is enabled.

---

## 3. Frontmatter audit

```yaml
---
description: Use memwal-agent-memory MCP for persistent project memory — remember decisions, recall context, optional Walrus sync. Enable when the MCP server is connected.
alwaysApply: false
---
```

| Field | Required for mode | Value | Status |
|-------|-------------------|-------|--------|
| `description` | Yes (intelligent apply) | Clear, specific triggers | Pass |
| `alwaysApply` | Yes | `false` | Pass |
| `globs` | Optional | Omitted (intentional) | Pass |

**Description quality:** Names MCP server, lists use cases (remember/recall/sync), mentions Walrus — sufficient for Agent relevance matching.

---

## 4. Content audit (reference § Best practices)

| Best practice | This rule | Status |
|---------------|-----------|--------|
| Under 500 lines | ~60 lines | Pass |
| Focused, actionable | When to call each MCP tool | Pass |
| Concrete triggers | Architecture decisions, bugs, refactors | Pass |
| Avoid vague guidance | Explicit do / do-not sections | Pass |
| No full style guide dump | N/A | Pass |
| No duplicate of codebase | Points to MCP tool names, not copied schemas | Pass |
| Security | Do-not-remember secrets; delegate keys only | Pass |

### Sections covered

| Section | Purpose | Status |
|---------|---------|--------|
| When to `remember` | Capture decisions, bugs, IDs | Pass |
| When to `recall` / `search` | Session continuity | Pass |
| When to `sync` | Walrus tier, no auto-sync spam | Pass |
| When to `verify` / `getLineage` | Audit / proof | Pass |
| Do not `remember` | Secrets, PII, full files | Pass |
| Namespace | Consistent `MEMWAL_NAMESPACE` | Pass |
| Privacy | Pro Local default, no bypass | Pass |
| Out of scope | No chain/marketplace writes | Pass |
| Smoke test | User verification path | Pass |
| Setup (cross-ref) | Points to `@memwal-setup` / `/setup` | Pass |

---

## 5. What to avoid (reference § What to avoid in rules)

| Anti-pattern | Present? | Status |
|--------------|----------|--------|
| Entire style guide | No | Pass |
| Every CLI command documented | No | Pass |
| Rare edge-case overload | No | Pass |
| Duplicated codebase content | No | Pass |

---

## 6. Plugin manifest linkage (reference § Plugins + Rules)

```json
"rules": "./rules/"
```

| Check | Status |
|-------|--------|
| Manifest declares rules path | Pass |
| File exists at declared path | Pass |
| Relative path (no `..`) | Pass |

---

## 7. Optional improvements (non-blocking)

| Item | Recommendation | Priority |
|------|----------------|----------|
| `globs` for docs-only | e.g. `**/*.md,**/*.mdc` if you want file-scoped memory hints | Low — intelligent apply is better default |
| Split rules | Separate `memwal-privacy.mdc` only if rule grows past ~150 lines | Low |
| `@` file refs | Already references skill/command for setup | Done in 0.1.3 |

---

## 8. Compliance mapping

| COMPLIANCE ID | Rule requirement | Status |
|---------------|------------------|--------|
| B1 | `description`, `alwaysApply` | ☑ |
| E2 | Do not remember secrets | ☑ |
| E5 | Accurate local + Walrus disclosure | ☑ |

---

## 9. Sign-off

| Role | Name | Date |
|------|------|------|
| Publisher | Vo Quoc Cuong | 2026-06-18 |
| Reference | [cursor.com/docs/rules](https://cursor.com/docs/rules) | 2026-06-18 |
