# Plugin Terms of Service

**Plugin:** `memwal-agent-memory`  
**Publisher:** Vo Quoc Cuong · vo.q.cuong@gmail.com · [GitHub @Olympusxvn](https://github.com/Olympusxvn)  
**Effective:** 2026-06-18  
**Applies to:** Installation and use of this plugin through the [Cursor Marketplace](https://cursor.com/marketplace) or from this repository.

These Plugin Terms govern your use of the **memwal-agent-memory** Cursor plugin. They supplement the [MIT License](../LICENSE) and are separate from [Cursor’s Terms of Service](https://cursor.com/terms) and [Cursor Marketplace Publisher Terms](https://cursor.com/marketplace-publisher-terms) (which govern Marketplace publication).

**Related disclosures:** [Privacy](PRIVACY.md) · [Security](SECURITY.md)

---

## 1. Acceptance

By installing or using this plugin, you agree to these Plugin Terms. If you do not agree, do not install or use the plugin.

---

## 2. What this plugin is

This plugin provides:

- Cursor **rules**, **skills**, and a **command** for hybrid agent memory workflows
- **MCP configuration** that runs [`@memwalpp/mcp`](https://www.npmjs.com/package/@memwalpp/mcp) via `npx`

The plugin **wraps** Mysten’s MemWal SDK through our open-source stack. It **does not fork** [Walrus Memory](https://docs.wal.app). It is **not** affiliated with, endorsed by, or certified by Anysphere (Cursor) or Mysten Labs.

**Marketplace listing approval does not mean Cursor endorses this plugin** or certifies its security or functionality.

---

## 3. License

The plugin source code is licensed under the **MIT License** — see [LICENSE](../LICENSE). You may use, modify, and distribute the plugin subject to the MIT License terms.

Use of the plugin inside **Cursor** is also subject to Cursor’s applicable service terms.

---

## 4. Provided “as is” — no warranty

THE PLUGIN AND ALL RELATED MATERIALS ARE PROVIDED **“AS IS”** AND **“AS AVAILABLE”**, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, OR NON-INFRINGEMENT.

We do **not** warrant that:

- The plugin will be uninterrupted, error-free, or free of harmful components
- Memory stored via MCP will be complete, accurate, or permanently retained
- Walrus sync, verification, or recall will succeed in every environment
- The plugin will remain compatible with every future version of Cursor

**We do not claim** that the plugin is “100% secure,” “unbreakable,” or “Cursor certified.”

---

## 5. Support

**Publisher support** for this plugin is provided via GitHub Issues only:

[github.com/Olympusxvn/cursor-plugin-memwal-agent-memory/issues](https://github.com/Olympusxvn/cursor-plugin-memwal-agent-memory/issues)

- **Cursor** does not provide support for third-party plugins.
- **Upstream MCP bugs** (`@memwalpp/mcp`): [memwal-agent-memory/issues](https://github.com/Olympusxvn/memwal-agent-memory/issues)
- **Security reports:** see [SECURITY.md](SECURITY.md) — do not file exploitable issues publicly.

We use commercially reasonable efforts to respond to Issues but do **not** guarantee response times or resolution unless required by applicable law.

---

## 6. Third-party services and software

Use of this plugin may invoke third parties outside this repository:

| Third party | Role |
|-------------|------|
| **npm** | Distributes and serves `@memwalpp/mcp` at install/runtime |
| **MemWal relayer** | Optional durable memory API (+ Walrus Sync tier) |
| **Walrus** | Optional blob storage after successful sync |
| **Sui RPC** | Optional read-only chain queries (verify / lineage) |

Your use of those services is subject to **their** terms and policies. We are not responsible for third-party outages, pricing, data handling, or policy changes.

Details: [PRIVACY.md](PRIVACY.md) · upstream [Comparison.md](https://github.com/Olympusxvn/memwal-agent-memory/blob/main/Comparison.md)

---

## 7. Your data and responsibilities

- **User Content** (including text you ask the agent to remember) remains yours.
- We do **not** claim ownership of your memories or project data.
- We do **not** use Plugin Data or User Content to **train** machine learning models — see [PRIVACY.md § No model training](PRIVACY.md#no-model-training).
- Do **not** store passwords, API keys, private keys, or other secrets via MCP tools.
- **Pro Local** stores data on your machine (SQLite). **+ Walrus Sync** may send redacted content to MemWal/Walrus when you run `sync`.

Full data flows: [PRIVACY.md](PRIVACY.md)

---

## 8. Limitation of liability

TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE PUBLISHER AND CONTRIBUTORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA, PROFITS, OR GOODWILL, ARISING FROM YOUR USE OF OR INABILITY TO USE THE PLUGIN, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

---

## 9. Governing law

These Plugin Terms are governed by the **laws of the State of California**, USA, excluding its conflict-of-laws principles, except where mandatory local law requires otherwise.

Disputes between you and the Publisher that are not resolved through GitHub Issues may be subject to the dispute resolution provisions in [Cursor Marketplace Publisher Terms](https://cursor.com/marketplace-publisher-terms) **only to the extent you are the Publisher**; end-user disputes with the Publisher are handled under applicable consumer protection law in your jurisdiction where required.

---

## 10. Changes

We may update these Plugin Terms by committing changes to this file and bumping the plugin version. Material changes will be noted in [CHANGELOG.md](../CHANGELOG.md).

**Maintainer note (Marketplace):** After each material plugin update, request a **Marketplace re-index** per [Cursor Publisher Terms §2.1](https://cursor.com/marketplace-publisher-terms) so listing metadata stays current.

Continued use after the effective date of an update constitutes acceptance of the revised terms.

---

## 11. Contact

| Topic | Contact |
|-------|---------|
| General / support | [GitHub Issues](https://github.com/Olympusxvn/cursor-plugin-memwal-agent-memory/issues) |
| Email | vo.q.cuong@gmail.com |
| Security | [SECURITY.md](SECURITY.md) |
| Privacy | [PRIVACY.md](PRIVACY.md) |
| Cursor Marketplace / legal (Publisher) | legal@cursor.com |

---

*These Plugin Terms are a user-facing summary for transparency. They are not legal advice. For Publisher obligations, see [PUBLISHER-OBLIGATIONS.md](PUBLISHER-OBLIGATIONS.md).*
