# Profile schema (v1)

See `profiles/smir9.json` for a filled example.

| Field | Type | Notes |
|---|---|---|
| userId | string | Equals the Grok gate `sub` when known (`userId` === `gateSub` === `profiles/<sub>.json` stem). Placeholder ok until first gated open. |
| gateSub | string \| null | Gate claim `sub`. Filled on first gated boot. Never invent. |
| handle | string | `@handle` from X/Grok when available |
| displayName | string | |
| playUrl | string | Last origin opened (`location.origin`) — federated `*.grok.me`, not a single canonical host |
| remixEnabled | boolean | |
| citadel | object | e.g. `{ \"defaultRoom\": \"frost\" }` |
| hangs | array | Short list of hung room ids / urls |
| resonance | object | `{ peak, lastRunAt }` — crystal feel, not XP |
| starCore | object | `{ charge, stage }` — Welcome `{stage}` |
| cosmetics | object | `{ packTitle }` |
| sessionStartedAt | string \| null | ISO-8601 session start from Play client |
| lastSeenAt | string \| null | ISO-8601 last boot/heartbeat. `null` = New (COLD_START) |
| playTimeSec | number | Accumulated open-Play seconds from heartbeats |
| updatedAt | string | ISO-8601 |

Federation write rules (boot + heartbeat): merge-patch only — never wipe `resonance` / `starCore` / `cosmetics`. Always set `gateSub`, `playUrl` (from body), `lastSeenAt=now`, `updatedAt=now`. Full wire: [PACK.md](PACK.md).

Heavy mp4s stay on the Play host — only pointers here.
