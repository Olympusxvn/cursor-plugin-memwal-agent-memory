# MCP Reference audit — memwal-agent-memory

**Audit date:** 2026-06-18  
**Reference:** [Cursor MCP](https://cursor.com/docs/mcp) · [modelcontextprotocol.io](https://modelcontextprotocol.io)  
**Plugin version:** 0.1.6  
**Publisher:** Vo Quoc Cuong · vo.q.cuong@gmail.com

Related: [PLUGINS-REFERENCE-AUDIT.md](./PLUGINS-REFERENCE-AUDIT.md) · upstream [@memwalpp/mcp](https://www.npmjs.com/package/@memwalpp/mcp)

---

## Executive summary

| Area | Verdict |
|------|---------|
| **Transport** | **Pass** — `stdio` via `npx` (local, single-user) |
| **`mcp.json` shape** | **Pass** — command, args, env, interpolation |
| **Secrets** | **Pass** — none in repo; Walrus keys user MCP env only |
| **npm supply chain** | **Pass** — pinned `@memwalpp/mcp@0.1.0` on public registry |
| **Protocol surface** | **Pass** — 9 MCP **Tools** (v1 scope) |
| **Remote / OAuth** | **N/A** — plugin ships stdio only (correct for Marketplace default) |

**Conclusion:** MCP wiring meets [cursor.com/docs/mcp](https://cursor.com/docs/mcp). One doc-alignment fix applied: explicit `"type": "stdio"` in production `mcp.json`.

---

## 1. Transport (reference § How it works)

| Transport | This plugin | Fit |
|-----------|-------------|-----|
| **stdio** | **Yes** — `npx … --transport stdio` | Primary — Cursor-managed, single user |
| SSE | No | N/A — not needed for local memory |
| Streamable HTTP | No in plugin | Optional upstream (`MCP_TRANSPORT=http`) — not bundled |

Marketplace users get **stdio** — matches Cursor doc recommendation for local CLI servers.

---

## 2. Production `mcp.json` audit

**File:** `mcp.json` (referenced by manifest `"mcpServers": "./mcp.json"`)

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

### STDIO fields ([STDIO server configuration](https://cursor.com/docs/mcp#stdio-server-configuration))

| Field | Required (docs) | Value | Status |
|-------|-----------------|-------|--------|
| `type` | Yes | `"stdio"` | Pass (added v0.1.6) |
| `command` | Yes | `"npx"` | Pass — on PATH with Node |
| `args` | No | pinned package + `--transport stdio` | Pass |
| `env` | No | namespace + data dir only | Pass — no secrets |
| `envFile` | No | omitted | Pass — no `.env` in repo |

### Config interpolation ([Config interpolation](https://cursor.com/docs/mcp#config-interpolation))

| Variable | Used | Status |
|----------|------|--------|
| `${userHome}` | `MEMWAL_MCP_DATA_DIR` | Pass |
| `${env:…}` | Walrus creds (user adds in Settings) | Pass — not in repo |
| `${workspaceFolder}` | Not used | N/A — global plugin, not project-scoped |

---

## 3. Dev vs production configs

| File | Purpose | Marketplace? | Status |
|------|---------|--------------|--------|
| `mcp.json` | Production — `npx` + pinned semver | **Yes** | Pass |
| `mcp.dev.json` | Local monorepo — absolute `node` path | **No** — dev only | Pass |
| `mcp.local.example.json` | Removed / replaced by `mcp.dev.json` | N/A | Pass |

**Rule:** Never ship absolute paths in production `mcp.json`.

---

## 4. Protocol capabilities (reference § Protocol and extension support)

| Feature | Cursor support | `@memwalpp/mcp@0.1.0` | Plugin disclosure |
|---------|----------------|------------------------|-------------------|
| **Tools** | Supported | **9 tools** | Pass — core value |
| Prompts | Supported | Not exposed | N/A v1 |
| Resources | Supported | Not exposed | N/A v1 |
| Roots | Supported | Not exposed | N/A v1 |
| Elicitation | Supported | Not exposed | N/A v1 |
| MCP Apps | Supported | Not exposed | N/A v1 |

**Tools registered (v1):** `remember`, `recall`, `search`, `sync`, `getVersionHistory`, `getLineage`, `verify`, `softDelete`, `getStats`.

Chain/marketplace write tools intentionally **not** registered — aligns with rule B6.

---

## 5. Authentication (reference § Authentication)

| Method | This plugin |
|--------|-------------|
| Env vars in `mcp.json` | Safe defaults only |
| User secrets | `MEMWAL_PRIVATE_KEY`, `MEMWAL_ACCOUNT_ID`, `MEMWAL_SERVER_URL` via **Cursor Settings → MCP → Environment** |
| OAuth / remote `auth` block | N/A — stdio server |
| HTTP bearer (upstream) | Optional self-hosted HTTP mode — not in plugin bundle |

Documented in README, PRIVACY, memwal-setup skill.

---

## 6. Security (reference § Security considerations)

| Doc recommendation | Implementation | Status |
|--------------------|----------------|--------|
| Verify trusted source | Open-source MIT; npm `@memwalpp`; GitHub plugin repo | Pass |
| Review permissions | Local SQLite + optional Walrus; PRIVACY.md | Pass |
| Limit API keys | Delegate key only; rule forbids owner keys | Pass |
| Audit code | Upstream monorepo public; pinned npm version | Pass |
| No hardcoded secrets | mcp.json clean | Pass |

---

## 7. Using MCP in chat (reference § Using MCP in chat)

| Topic | Guidance for users |
|-------|-------------------|
| Tool discovery | Settings → MCP → green server; 9 tools listed |
| Tool approval | Default ask-before-run; user may allowlist in `permissions.json` |
| Debugging | Output panel → **MCP Logs** |
| Disable server | Settings → MCP toggle (troubleshooting) |
| Update server | Bump pin in `mcp.json` + marketplace re-index |

Documented in README smoke test + memwal-setup skill.

---

## 8. npm update path (reference § FAQ)

When `@memwalpp/mcp` patches release:

1. Publish new semver to npm
2. Update `args` pin in `mcp.json`
3. Bump `plugin.json` version + CHANGELOG
4. Request Marketplace re-index

Current pin: **`@memwalpp/mcp@0.1.0`**

---

## 9. Gaps fixed in 0.1.6

| Gap | Fix |
|-----|-----|
| Missing explicit `"type": "stdio"` per latest MCP docs | Added to production `mcp.json` |

---

## 10. Optional follow-ups (non-blocking)

| Item | When |
|------|------|
| Document Streamable HTTP in plugin README appendix | If users request remote shared MCP |
| MCP Resources for memory export | Upstream v2 feature |
| `permissions.json` template for auto-run `getStats` / read tools | Power-user doc only |

---

## 11. Compliance mapping

| ID | Requirement | Status |
|----|-------------|--------|
| C1–C7 | MCP configuration section | ☑ |
| E4 | npm fetch only pinned package | ☑ |
| B6 | 9 tools, no chain writes | ☑ |

---

## 12. Sign-off

| Role | Name | Date |
|------|------|------|
| Publisher | Vo Quoc Cuong | 2026-06-18 |
| Reference | [cursor.com/docs/mcp](https://cursor.com/docs/mcp) | 2026-06-18 |
