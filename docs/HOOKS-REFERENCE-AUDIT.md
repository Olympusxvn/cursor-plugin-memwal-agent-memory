# Hooks Reference audit — memwal-agent-memory

**Audit date:** 2026-06-18  
**Reference:** [Cursor Hooks](https://cursor.com/docs/hooks) · [Plugins Reference — Hooks](https://cursor.com/docs/reference/plugins#hooks-format)  
**Plugin version:** 0.1.5  
**Publisher:** Vo Quoc Cuong · vo.q.cuong@gmail.com

Related: [SKILLS-REFERENCE-AUDIT.md](./SKILLS-REFERENCE-AUDIT.md) · [PLUGINS-REFERENCE-AUDIT.md](./PLUGINS-REFERENCE-AUDIT.md)

---

## Executive summary

| Area | Verdict |
|------|---------|
| **Hooks in plugin bundle** | **N/A (intentional)** — no `hooks/` directory |
| **Marketplace requirement** | **Not required** — hooks are optional per Plugins Reference |
| **Policy coverage without hooks** | **Pass** — rule + skills enforce secret handling |
| **MCP security** | **Pass** — server-side redaction/gates in `@memwalpp/mcp` |
| **Future hook candidates** | Documented below — none blocking |

**Conclusion:** Omitting hooks is correct for this plugin. No submission blocker. Optional hooks may be added in a future semver if enterprise audit logging is needed.

---

## 1. Are hooks required?

Per [Plugins Reference — Submitting a plugin](https://cursor.com/docs/reference/plugins#submitting-a-plugin):

| Component | Required? | This plugin |
|-----------|-----------|-------------|
| `.cursor-plugin/plugin.json` | Yes | ✓ |
| Rules / skills / commands | Recommended | ✓ |
| MCP (`mcp.json`) | This plugin’s core | ✓ |
| **Hooks** | **No** | **Not shipped** |

Plugin manifest has **no** `"hooks"` field — valid. Default discovery looks for `hooks/hooks.json`; absent folder = no hooks loaded from plugin.

---

## 2. Hooks vs what this plugin already provides

[Cursor Hooks](https://cursor.com/docs/hooks) run custom scripts on agent-loop events (stdio JSON). This plugin uses **lighter-weight** mechanisms instead:

| Concern | Hooks approach (optional) | Current plugin approach | Status |
|---------|---------------------------|-------------------------|--------|
| Secret scanning before MCP | `beforeMCPExecution` script | Rule + skills: do not `remember` secrets; MCP server rejects bypass | Pass |
| Post-edit formatting | `afterFileEdit` | Out of scope (memory plugin) | N/A |
| Session context injection | `sessionStart` | MCP `remember` / `recall` tools | Pass |
| MCP usage audit | `afterMCPExecution` | Optional future hook | ◐ |
| Load plugin on workspace open | `workspaceOpen` → `pluginPaths` | Marketplace / user enables plugin in Settings | Pass |

**Design decision:** Memory policy belongs in **MCP server + agent rules/skills**, not shell hooks — fewer moving parts, cross-platform, npm-installable.

---

## 3. Hook categories (reference § Hook categories)

If hooks were added later, these would be relevant:

| Hook | Relevance to memwal-agent-memory | Shipped? |
|------|----------------------------------|----------|
| `beforeMCPExecution` | Could log/block non-memwal MCP calls | No — out of scope |
| `afterMCPExecution` | Audit trail for remember/sync | No — optional v2 |
| `sessionStart` | Inject “use memwal MCP” reminder | No — rule covers this |
| `beforeShellExecution` | Unrelated | No |
| `afterFileEdit` | Unrelated | No |
| `workspaceOpen` | Dynamic plugin load | No — Marketplace install |

**Tab hooks** (`beforeTabFileRead`, `afterTabFileEdit`): Not applicable — plugin targets Agent Chat + MCP, not Tab completions.

---

## 4. Plugin hook format (if added later)

Per Plugins Reference, plugin hooks would live at:

```text
hooks/
└── hooks.json
```

Manifest entry:

```json
"hooks": "./hooks/hooks.json"
```

Minimal valid shape ([Hooks Configuration](https://cursor.com/docs/hooks#configuration)):

```json
{
  "version": 1,
  "hooks": {
    "afterMCPExecution": [
      { "command": "./hooks/audit-mcp.sh" }
    ]
  }
}
```

**Requirements if implemented:**

| # | Requirement |
|---|-------------|
| H1 | Scripts committed with execute bit / shebang |
| H2 | Paths relative to plugin root — no `..` |
| H3 | Cross-platform or document OS-specific scripts |
| H4 | No secrets in hook scripts |
| H5 | Document in README + PRIVACY (audit data) |

---

## 5. Cloud agents limitation (reference § Cloud agent support)

| Hook | Cloud agents |
|------|--------------|
| `beforeMCPExecution` / `afterMCPExecution` | **Not yet wired** |

Even if this plugin added MCP hooks, they would **not** run in cloud agents today. MCP + rules/skills remain the portable path — another reason hooks were deferred.

---

## 6. Compliance without hooks

| ID | Requirement | Without hooks |
|----|-------------|---------------|
| E2 | No secrets in agent memory | Rule + skills + MCP |
| E4 | No obfuscated remote code | npx `@memwalpp/mcp` only |
| B6 | Focused scope | No hook side effects |
| D5 | PRIVACY accurate | No hook telemetry |

---

## 7. Optional roadmap (non-blocking)

| Priority | Hook | Purpose |
|----------|------|---------|
| P3 | `afterMCPExecution` | Enterprise audit log (local file only) |
| P4 | `beforeMCPExecution` | Warn when `remember` payload matches secret patterns |

Not planned for v0.1.x — would require semver bump, PRIVACY update, and compliance re-run.

---

## 8. Checklist summary

| # | Item | Status |
|---|------|--------|
| HK1 | Hooks required for Marketplace? | **No** — N/A |
| HK2 | Plugin manifest valid without `hooks`? | **Yes** |
| HK3 | Security/policy covered elsewhere? | **Yes** — rule, skills, MCP |
| HK4 | Broken hook path references? | **None** (no hooks dir) |
| HK5 | Cloud agent gap documented? | **Yes** — §5 above |

---

## 9. Sign-off

| Role | Name | Date |
|------|------|------|
| Publisher | Vo Quoc Cuong | 2026-06-18 |
| References | [Skills](https://cursor.com/docs/skills) · [Hooks](https://cursor.com/docs/hooks) | 2026-06-18 |
