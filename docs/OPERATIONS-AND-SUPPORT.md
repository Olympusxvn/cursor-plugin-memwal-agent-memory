# Operations & support

How to operate and support **memwal-agent-memory** after marketplace listing.

---

## Support channels

| Channel | Use for | URL |
|---------|---------|-----|
| **Plugin issues** | Plugin manifest, rules, skills, marketplace listing | `github.com/Olympusxvn/cursor-plugin-memwal-agent-memory/issues` |
| **MCP bugs** | Tool errors, sync, verify, upstream code | `github.com/Olympusxvn/memwal-agent-memory/issues` |
| **Security (private)** | Vulnerabilities — do not public issue | See [SECURITY.md](./SECURITY.md) |
| **Cursor Marketplace** | Listing / re-index / policy | [marketplace/publish](https://cursor.com/marketplace/publish) |

---

## SLA targets (recommended)

| Priority | Response | Resolution target |
|----------|----------|-------------------|
| **P0 Security** | 24 h acknowledge | 72 h patch or mitigation |
| **P1 Broken install** | 48 h | Next plugin patch |
| **P2 Feature / docs** | 1 week | Planned release |
| **P3 Questions** | Best effort | FAQ in README |

Cursor expects authors to **maintain plugins** — chronic no-response risks delisting.

---

## Release process

1. Fix or change in appropriate repo (plugin vs upstream MCP)
2. Bump `plugin.json` `version` + `CHANGELOG.md`
3. If MCP behavior changed: pin new `@memwalpp/mcp` version in `mcp.json`
4. Run [COMPLIANCE-CHECKLIST.md](./COMPLIANCE-CHECKLIST.md)
5. Push to `main`
6. Request marketplace **re-index**
7. Post release notes on GitHub Releases (optional but professional)

---

## Incident response

### Security incident

1. **Do not** disclose details in public GitHub issue
2. Email process in [SECURITY.md](./SECURITY.md)
3. Notify `legal@cursor.com` if user data or Cursor integration affected (Publisher Terms §4.3)
4. Prepare patched plugin version
5. Request urgent re-index if actively exploited

### npm package outage

If `@memwalpp/mcp` unpublished or broken:

1. Publish fixed version upstream immediately
2. Update pin in plugin `mcp.json`
3. Communicate in plugin repo Issues + README banner
4. Request re-index

### MemWal relayer outage

Not plugin maintainer fault — document in Issues:

- Pro Local tier still works
- `sync` returns offline / skip — expected
- Link MemWal status / docs

---

## Monitoring

| Signal | Action |
|--------|--------|
| GitHub Issues spike | Triage; update FAQ |
| npm download errors | Test `npx` on clean VM |
| Cursor MCP governance blocks | Document allowlist steps in README |
| Upstream breaking MCP change | Pin old npm version until fixed |

---

## User troubleshooting (support macro)

**No MCP tools**

1. Node 20+? `node -v`
2. Plugin enabled? Settings → Plugins
3. MCP green? Settings → MCP
4. Full Cursor restart (Cmd+Q)
5. `npx -y @memwalpp/mcp@0.1.0 --transport stdio` works in terminal?

**Empty recall**

- Check `MEMWAL_NAMESPACE` consistency

**sync offline**

- Pro Local only — add Walrus env if user wants + Walrus Sync

**Owner key error**

- Use delegate key only (ADR-002 upstream)

---

## Re-index request

After any change to:

- `.cursor-plugin/plugin.json`
- `mcp.json`
- rules / skills / commands
- security-relevant docs

→ Submit update via marketplace publish portal (same repo URL).

---

## Contacts

| Role | Name | Contact |
|------|------|---------|
| Maintainer | Vo Quoc Cuong | vo.q.cuong@gmail.com · [@Olympusxvn](https://github.com/Olympusxvn) |
| Security | Vo Quoc Cuong | vo.q.cuong@gmail.com · [SECURITY.md](./SECURITY.md) |
| Cursor legal | Anysphere | legal@cursor.com (incidents only) |
