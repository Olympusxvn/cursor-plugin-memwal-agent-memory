# Do not — avoid delisting & review rejection

Actions **maintainers and plugin content must avoid**. Violations risk marketplace rejection, removal, or loss of publisher standing.

---

## Repository & submission

| Do not | Why |
|--------|-----|
| Commit secrets, `.env`, private keys, `credentials.json` | Immediate security rejection |
| Use GPL, AGPL, LGPL, or other copyleft license | Marketplace prohibits copyleft |
| Charge users for plugin access | Marketplace plugins must be free |
| Submit before `@memwalpp/mcp` is on npm public | Functional review fails |
| Use absolute paths or `..` in manifest | Invalid plugin structure |
| Ship binaries or obfuscated executables in plugin repo | Marketplace expects markdown + config |
| Fork and rebrand Mysten MemWal as your own product | Misleading; use "wraps" language |

---

## Marketing & metadata

| Do not | Why |
|--------|-----|
| Claim "Cursor certified" or official endorsement | Publisher Terms — approval ≠ endorsement |
| Say "Cursor AI" or "Cursor Code" | Brand Guidelines violation |
| Promise "100% secure" or "unbreakable encryption" | Unsubstantiated claims |
| Hide that Walrus tier sends data to MemWal relayer | Misleading privacy disclosure |
| Omit that Pro Local stores SQLite on user disk | Incomplete disclosure |

---

## MCP & agent behavior (rules/skills)

| Do not | Why |
|--------|-----|
| Instruct agent to read `~/.memwal/credentials.json` | Secret exposure |
| Instruct agent to echo `MEMWAL_PRIVATE_KEY` in chat | Secret exposure |
| Encourage remembering passwords, tokens, wallet keys | User harm + policy |
| Document bypass flags (`skipRedaction`, `bypassGate`) | MCP rejects; bad faith |
| Auto-sync every message to Walrus | Misrepresents hybrid design; cost/quota abuse |
| Replace whole user `mcp.json` | Setup skill rule — merge only |

---

## Data & privacy

| Do not | Why |
|--------|-----|
| Train ML models on user memory content | Publisher Terms §6.3 |
| Send Plugin Data to analytics without disclosure | Policy violation |
| Sell or rent user memory data | Prohibited |
| Collect data beyond MCP disclosed functionality | Publisher Terms §4.7 |

---

## Security

| Do not | Why |
|--------|-----|
| Add remote script download outside npm `@memwalpp/mcp` | Supply chain risk |
| Disable or circumvent Cursor MCP allowlist | User governance bypass |
| Ignore security reports | Delisting risk |
| File public GitHub issues for active 0-days | Responsible disclosure |

---

## Operations

| Do not | Why |
|--------|-----|
| Push marketplace updates without re-index request | Users may get stale listing |
| Pin `@memwalpp/mcp` to `latest` or floating range | Non-reproducible installs |
| Abandon Issues for 30+ days during active incidents | Marketplace maintenance expectation |
| Amend git history to remove leaked secrets without rotation | Rotate keys + force push still risky — rotate credentials |

---

## Relationship to official Walrus Memory

| Do not | Why |
|--------|-----|
| Claim this plugin replaces `@mysten-incubation/memwal-mcp` | Different product — complementary |
| Block or discourage official MemWal in docs | Bad faith vs ecosystem |
| Copy official setup skill verbatim without attribution | IP / trust issues |

**Do:** Link [Comparison.md](https://github.com/Olympusxvn/memwal-agent-memory/blob/main/Comparison.md) and official `memory.walrus.xyz/skills/setup`.

---

## Pre-submit self-audit

Ask:

1. Would I trust this plugin on a clean laptop with no secrets in repo?
2. Does README match what MCP actually does?
3. Can a reviewer run `npx` and get 10 tools in 5 minutes?
4. Are privacy flows honest for Pro Local **and** Walrus Sync?

If any answer is **no**, fix before submit.
