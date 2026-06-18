# Repository plan — single-plugin repo

**Target repository:** `https://github.com/Olympusxvn/cursor-plugin-memwal-agent-memory`

This document defines the **new repo** separate from the upstream MCP implementation monorepo.

---

## Why two repos?

| Repo | Role |
|------|------|
| [memwal-agent-memory](https://github.com/Olympusxvn/memwal-agent-memory) | MCP server implementation, tests, Walrus integration |
| **cursor-plugin-memwal-agent-memory** (this repo) | Cursor Marketplace **distribution bundle** — manifest, rules, skills, MCP wiring, compliance docs |

Cursor Marketplace expects a **focused plugin repo** with `.cursor-plugin/plugin.json`. Binaries are not shipped; the plugin invokes `@memwalpp/mcp` via `npx`.

---

## Directory layout

```text
cursor-plugin-memwal-agent-memory/
├── .cursor-plugin/
│   └── plugin.json
├── assets/
│   └── logo.png
├── commands/
│   └── setup.md
├── docs/
│   ├── COMPLIANCE-CHECKLIST.md
│   ├── DO-NOT.md
│   ├── OPERATIONS-AND-SUPPORT.md
│   ├── PRIVACY.md
│   ├── PUBLISHER-OBLIGATIONS.md
│   ├── REPO-PLAN.md
│   ├── SECURITY.md
│   └── SUBMIT-PLAYBOOK.md
├── rules/
│   └── memwal-hybrid-memory.mdc
├── skills/
│   ├── memwal-setup/
│   │   └── SKILL.md
│   └── memwal-workflows/
│       └── SKILL.md
├── CHANGELOG.md
├── LICENSE
├── README.md
├── mcp.json
└── mcp.dev.json
```

---

## Critical prerequisite — npm publish

**Status (2026-06-18): `@memwalpp/mcp@0.1.0` is live on npm.**

Marketplace users run:

```bash
npx -y @memwalpp/mcp@0.1.0 --transport stdio
```

Verify after upstream bumps:

```bash
npm view @memwalpp/mcp version
npx -y @memwalpp/mcp@<pin> --transport stdio
```

### Publish sequence (upstream monorepo)

1. Bundle or publish workspace packages per [npm-publish.md](https://github.com/Olympusxvn/memwal-agent-memory/blob/main/docs/product/npm-publish.md)
2. Verify: `npx -y @memwalpp/mcp@0.1.0 --transport stdio`
3. Tag upstream release `mcp-v0.1.0`
4. Pin version in this plugin's `mcp.json` (exact semver)

---

## Initialize GitHub repo

```bash
cd ~/cursor-plugin-memwal-agent-memory   # or copy from ~/.cursor/plugins/local/memwal-agent-memory/
git init
git add .
git commit -m "feat: initial Cursor Marketplace plugin for MemWal Agent Memory MCP"
gh repo create Olympusxvn/cursor-plugin-memwal-agent-memory --public --source=. --push
```

---

## Local testing (upstream MCP dev)

1. Copy plugin to `~/.cursor/plugins/local/memwal-agent-memory/`
2. Build upstream MCP: `pnpm --filter @memwalpp/mcp build` in memwal-agent-memory clone
3. Copy `mcp.dev.json` → `mcp.json` and replace `REPO_ROOT` with your monorepo path
4. Reload Cursor → verify 9 tools → smoke test remember/recall
5. Restore production `mcp.json` before marketplace release bumps

---

## Versioning policy

| Artifact | Version source |
|----------|----------------|
| Plugin (`plugin.json`) | Independent semver — bump on rule/skill/doc/MCP config changes |
| MCP npm (`@memwalpp/mcp`) | Upstream semver — pin in `mcp.json` |
| Changelog | `CHANGELOG.md` in this repo |

When upstream MCP bumps, update `mcp.json` args pin and `CHANGELOG.md`, request Cursor re-index.

---

## Marketplace listing copy (draft)

**Title:** MemWal Agent Memory

**Short description:** Hybrid agent memory for AI development — local SQLite speed, optional Walrus durability, privacy gates, verifiable recall.

**Category:** developer-tools

**Keywords:** mcp, memory, walrus, memwal, agent, local-first, ai-development

---

## Goal alignment — phát triển AI

Plugin này phục vụ **phát triển phần mềm bằng AI**:

- Agent nhớ quyết định kiến trúc, convention, bugfix across sessions
- Pro Local = không cần key, phù hợp daily Cursor coding
- Walrus Sync = backup durable khi cần verifiable memory
- Rule + skills hướng agent **không lưu secret**, **sync có chủ đích**

Upstream implementation remains in memwal-agent-memory; this repo is the **distribution and compliance layer** only.
