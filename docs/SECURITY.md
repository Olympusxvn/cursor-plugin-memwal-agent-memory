# Security policy

Security practices and reporting for **memwal-agent-memory** Cursor plugin.

---

## Scope

| In scope | Out of scope |
|----------|--------------|
| This plugin repo (manifest, rules, skills, mcp.json) | MemWal relayer / Walrus infrastructure (report to Mysten) |
| `@memwalpp/mcp` npm package (upstream) | Cursor IDE vulnerabilities (report to Cursor) |
| User misconfiguration (exposed keys in chat) | User machine compromise |

---

## Supported versions

| Plugin version | Supported |
|----------------|-----------|
| 0.1.x | Yes |
| < 0.1.0 | No |

Pin `@memwalpp/mcp` semver in `mcp.json` — update when upstream security patches release.

---

## Security design

1. **No secrets in plugin repo** — credentials only in user Cursor MCP env
2. **Delegate keys only** — upstream MCP refuses owner keys (ADR-002)
3. **Server-side redaction** on Walrus promote path
4. **Bypass flags rejected** by MCP server (S-1)
5. **Local-first default** — Pro Local works air-gapped
6. **npm supply chain** — pin exact `@memwalpp/mcp` version; verify checksums on publish

---

## Reporting a vulnerability

**Do not** open public GitHub issues for exploitable vulnerabilities.

1. Email **vo.q.cuong@gmail.com** (subject: `[memwal-agent-memory] security`)
2. Or use **GitHub private vulnerability reporting** on [cursor-plugin-memwal-agent-memory](https://github.com/Olympusxvn/cursor-plugin-memwal-agent-memory) when enabled
3. Include: description, reproduction, impact, suggested fix
4. Allow 90 days coordinated disclosure before public details

If the issue affects Cursor Marketplace integration or user data at scale, also notify **legal@cursor.com** per Publisher Terms.

---

## Incident response

See [OPERATIONS-AND-SUPPORT.md](./OPERATIONS-AND-SUPPORT.md).

1. Acknowledge report within 24–72 hours
2. Triage plugin vs upstream MCP
3. Patch plugin listing or coordinate upstream npm release
4. Request marketplace re-index
5. Publish advisory in GitHub Security Advisories when fixed

---

## User security guidance

Include in support responses:

- Never paste private keys into chat
- Set Walrus credentials in Cursor MCP env UI only
- Use Pro Local when cloud export is not needed
- Keep Node.js updated (20+)
- Review plugin source on GitHub before install (marketplace is open source)

---

## Known limitations (honest disclosure)

| Limitation | Mitigation |
|------------|------------|
| Walrus blob verify API gaps | Documented in upstream FINAL_FEEDBACK |
| `sync` may accept job before blobId | Use `verify` tool; see Comparison.md |
| SQLite file unencrypted at rest | OS disk encryption recommended |
| Agent may ignore rules | MCP server still enforces on sync path |

Do not claim end-to-end encryption unless accurately describing MemWal Seal behavior for Walrus tier.

---

## Compliance

- Cursor [Marketplace security](https://cursor.com/help/security-and-privacy/marketplace-security)
- [Publisher Terms §4.3](https://cursor.com/marketplace-publisher-terms) — security notification duty

Report marketplace plugin abuse: **security-reports@cursor.com**
