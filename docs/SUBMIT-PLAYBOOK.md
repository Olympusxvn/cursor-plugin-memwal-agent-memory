# Submit playbook — Cursor Marketplace

Step-by-step guide to publish **memwal-agent-memory** on [cursor.com/marketplace/publish](https://cursor.com/marketplace/publish).

---

## Phase 0 — Prerequisites (blocking)

| # | Task | Owner | Done |
|---|------|-------|------|
| 0.1 | Publish `@memwalpp/mcp@0.1.0` to npm public | Upstream monorepo | ☐ |
| 0.2 | Verify `npx -y @memwalpp/mcp@0.1.0 --transport stdio` on clean machine | You | ☐ |
| 0.3 | Create public GitHub repo `cursor-plugin-memwal-agent-memory` | You | ☐ |
| 0.4 | MIT license committed (no GPL/AGPL) | This repo | ☑ |

---

## Phase 1 — Local validation

| # | Task | Command / action |
|---|------|------------------|
| 1.1 | Copy plugin to local plugins dir | Already at `~/.cursor/plugins/local/memwal-agent-memory/` |
| 1.2 | Test with npm MCP (post-publish) | Enable plugin → MCP green → 9 tools |
| 1.3 | Pre-publish dev test | Use `mcp.local.example.json` + upstream `pnpm mcp:build` |
| 1.4 | Run compliance checklist | [COMPLIANCE-CHECKLIST.md](./COMPLIANCE-CHECKLIST.md) — all items ☑ |
| 1.5 | Smoke test | remember → recall verification phrase |
| 1.6 | Walrus Sync test (optional) | delegate env in MCP settings → sync → verify |

**Restart Cursor fully** (Cmd+Q) after every MCP config change during testing.

---

## Phase 2 — Repository hygiene

| # | Requirement |
|---|-------------|
| 2.1 | `README.md` — purpose, install, tiers, smoke test, support links |
| 2.2 | `LICENSE` — MIT in repo root |
| 2.3 | `CHANGELOG.md` — semver history |
| 2.4 | `assets/logo.png` — committed, referenced in `plugin.json` |
| 2.5 | All manifest paths relative — no `..`, no absolute paths |
| 2.6 | No secrets in repo — no `.env`, keys, or credentials |
| 2.7 | [PRIVACY.md](./PRIVACY.md) and [SECURITY.md](./SECURITY.md) linked from README |

---

## Phase 3 — Submit application

1. Go to **[cursor.com/marketplace/publish](https://cursor.com/marketplace/publish)**
2. Sign in with GitHub account tied to **Olympusxvn**
3. Submit repository URL:

   ```text
   https://github.com/Olympusxvn/cursor-plugin-memwal-agent-memory
   ```

4. Application information (draft):

   | Field | Suggested value |
   |-------|-----------------|
   | Plugin name | memwal-agent-memory |
   | Description | Hybrid agent memory for AI development — local-first SQLite, optional Walrus sync, privacy gates, nine MCP tools |
   | License | MIT |
   | Support URL | GitHub Issues on plugin repo |
   | Privacy | Link to docs/PRIVACY.md in repo |

5. Confirm representations:
   - Open source, permissive license
   - Free to users (no paid plugin)
   - Accurate description — no false security claims
   - You will maintain and respond to security reports

---

## Phase 4 — Review period

Cursor team will:

- Verify publisher identity
- Review plugin source (manifest, rules, skills, mcp.json)
- Assess security and data handling
- May approve or reject **without stated reason**

**Do not** reference "Cursor AI" — use **Cursor** per Brand Guidelines.

---

## Phase 5 — After approval

| Action | When |
|--------|------|
| Announce on memwal-agent-memory README | After listing live |
| Monitor GitHub Issues | Ongoing |
| Request **re-index** after updates | Any manifest/MCP/skill change |
| Bump `CHANGELOG.md` + `plugin.json` version | Each release |

---

## Phase 6 — Updates

1. Make changes in plugin repo
2. Bump semver in `plugin.json` and `CHANGELOG.md`
3. Push to `main`
4. Request re-index via marketplace publish flow (same application — no new app per update per Publisher Terms)
5. Cooperate with Cursor review questions in good faith

---

## Form-ready summary (copy/paste)

```text
Plugin: memwal-agent-memory
Repo: https://github.com/Olympusxvn/cursor-plugin-memwal-agent-memory
License: MIT
Category: developer-tools

Purpose:
Cursor plugin distributing MemWal Agent Memory MCP — hybrid local + optional
Walrus memory for AI-assisted software development. Includes MCP wiring,
agent rules, setup skills, and compliance documentation.

MCP runtime: npx -y @memwalpp/mcp@0.1.0 --transport stdio
Upstream implementation: https://github.com/Olympusxvn/memwal-agent-memory

No user fees. No secrets in repo. Privacy: docs/PRIVACY.md
Support: GitHub Issues on plugin repository.
```
