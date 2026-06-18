# Privacy disclosure

How **memwal-agent-memory** handles data. Required for transparent Marketplace listing.

**Last updated:** 2026-06-18

---

## Summary

| Tier | Where data lives | Network |
|------|------------------|---------|
| **Pro Local** | User machine — SQLite under `MEMWAL_MCP_DATA_DIR` (default `~/.memwal-agent-memory/mcp`) | No cloud required |
| **+ Walrus Sync** | Same local SQLite **plus** encrypted blobs via MemWal relayer → Walrus | Network on `sync` / durable reads |

**This plugin repository stores no user data.** The plugin is configuration, rules, skills, and MCP wiring only.

---

## Data the MCP server processes

When users invoke MCP tools via `@memwalpp/mcp`:

| Data type | Pro Local | + Walrus Sync |
|-----------|-----------|---------------|
| Memory text user asks to remember | Stored locally | Stored locally; copy may promote to Walrus after redaction/gate |
| Search / recall queries | Processed locally | May query durable layer |
| Metadata (namespace, hashes, lineage) | Local SQLite | Local + optional chain/Walrus refs |
| Credentials | Not stored by plugin | User sets env in Cursor MCP settings |

---

## What we do not collect

- No telemetry bundled in this **plugin repo**
- No phoning home from plugin manifest files
- Plugin maintainer does not receive user memory content via this repository

Upstream `@memwalpp/mcp` behavior is defined in [memwal-agent-memory](https://github.com/Olympusxvn/memwal-agent-memory). When Walrus Sync is enabled, Mysten MemWal relayer terms apply to data sent to Walrus.

---

## User responsibilities

Users should **not** store via MCP:

- Passwords, API keys, private keys, seeds
- Personal identifiable information they would not store in a dev notes file

Rules and skills instruct the AI agent accordingly; enforcement also occurs server-side (redaction on sync).

---

## Third parties

| Party | Role | When involved |
|-------|------|---------------|
| **npm** | Distributes `@memwalpp/mcp` package | Install |
| **MemWal relayer** | Durable memory API | + Walrus Sync only |
| **Walrus** | Blob storage | After successful sync |
| **Sui RPC** | Read-only chain queries | Optional verify/lineage layers |

---

## Data retention & deletion

| Action | Effect |
|--------|--------|
| `softDelete` MCP tool | Tombstones local record |
| Remove MCP server / uninstall plugin | Local SQLite remains on disk until user deletes directory |
| Walrus blobs | Governed by MemWal / Walrus retention — not controlled by this plugin repo |

Users may delete local data by removing `MEMWAL_MCP_DATA_DIR`.

---

## Children

Not directed at children under 13. Developer tool.

---

## Changes

Material changes to data flows require:

1. Update this document
2. Bump plugin version
3. Request marketplace re-index

---

## Contact

Questions: GitHub Issues on [cursor-plugin-memwal-agent-memory](https://github.com/Olympusxvn/cursor-plugin-memwal-agent-memory).

Security/privacy incidents: see [SECURITY.md](./SECURITY.md).

---

## No model training

Per Cursor Publisher Terms, plugin publishers must not use Plugin Data or User Content to train machine learning models. This project complies.
