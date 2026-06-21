# Publisher obligations

Summary of duties under [Cursor Marketplace Publisher Terms](https://cursor.com/marketplace-publisher-terms) as they apply to **memwal-agent-memory**.

This is a maintainer reference — not legal advice.

---

## 1. Application & approval

| Obligation | Your commitment |
|------------|-----------------|
| Submit via [marketplace/publish](https://cursor.com/marketplace/publish) | One application; re-index for updates |
| Truthful application info | Accurate repo URL, description, support contacts |
| Sole responsibility | You operate, maintain, and support the plugin |
| Review cooperation | Provide source/docs if Cursor requests |
| No guaranteed approval | Rejection possible without reason |

---

## 2. Distribution & licensing

| Rule | Detail |
|------|--------|
| **Free to users** | No fees for marketplace plugin access |
| **Permissive OSS only** | MIT in this repo — no copyleft |
| **License to Cursor** | Hosting, promotion, distribution on Marketplace |
| **License to users** | Install and use with Cursor |
| **Open source** | All marketplace plugins must be inspectable |

---

## 3. Development & maintenance

| Duty | Standard |
|------|----------|
| Keep plugin functioning | Compatible with current Cursor |
| Security practices | Commercially reasonable |
| Accurate metadata | Descriptions match actual behavior |
| End-user support | You — not Cursor — support plugin users |
| Security incidents | Notify `legal@cursor.com` promptly |
| Updates | Request re-index; address review feedback |

---

## 4. Data & privacy

| Rule | Application to this plugin |
|------|----------------------------|
| **Plugin Data responsibility** | User memory content flows through `@memwalpp/mcp` — see [PRIVACY.md](./PRIVACY.md) |
| **No model training** | Do not train ML models on Plugin Data or User Content |
| **Minimal collection** | Plugin repo stores no user data — local SQLite on user machine |
| **Disclosures visible** | [PRIVACY.md](./PRIVACY.md) + [PLUGIN-TERMS.md](./PLUGIN-TERMS.md) linked from README |
| **No selling Plugin Data** | Prohibited |

---

## 5. Prohibited conduct

The plugin must **not**:

- Introduce malware or harmful code
- Disrupt Cursor or user workflows
- Collect data beyond disclosed functionality
- Sell or transfer user data to third parties
- Make false claims about security or compatibility

See [DO-NOT.md](./DO-NOT.md) for maintainer-specific avoid list.

---

## 6. Brand & trademarks

| Do | Don't |
|----|-------|
| Say **Cursor** | Say "Cursor AI", "Cursor Code" |
| Follow [cursor.com/brand](https://cursor.com/brand) | Imply Cursor endorses your plugin |
| Use your MemWal branding | Use Cursor trademarks without permission |

Approval ≠ endorsement by Cursor.

---

## 7. Intellectual property

- You retain ownership of plugin content
- Users retain User Content
- Do not claim ownership of user memories
- Cursor retains Marketplace / Service IP

---

## 8. Removal & delisting

Cursor may remove the plugin if:

- Security vulnerability confirmed
- Maintainer unresponsive to reports
- Terms violation
- Failure to cooperate with review

You may remove listing by request; trademark rights to "Cursor" revoke on removal.

---

## 9. Maintainer checklist (ongoing)

- [ ] Monitor GitHub Issues weekly
- [ ] Respond to security reports within 72 hours
- [ ] Pin `@memwalpp/mcp` to tested semver in `mcp.json`
- [ ] Bump plugin version + CHANGELOG on each release
- [ ] Request re-index after material changes
- [ ] Keep PRIVACY.md accurate when upstream MCP data flows change

---

## References

- [Publisher Terms](https://cursor.com/marketplace-publisher-terms)
- [Marketplace security](https://cursor.com/help/security-and-privacy/marketplace-security)
- [Plugins reference](https://cursor.com/docs/reference/plugins)
