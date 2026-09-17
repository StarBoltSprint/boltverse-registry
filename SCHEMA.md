# Profile schema (v1)

See `profiles/smir9.json` for a filled example.

| Field | Type | Notes |
|---|---|---|
| userId | string | Equals the Grok gate `sub` when known (`userId` === `gateSub` === `profiles/<sub>.json` stem). Placeholder ok until first gated open. |
| gateSub | string \| null | Gate claim `sub`. Filled on first gated boot. Never invent. |
| handle | string | `@handle` from X/Grok when available |
| displayName | string | |
| playUrl | string | Last origin opened (`location.origin`) — federated `*.grok.me`. Kitchen Pack Play / central Pack API host = `https://boltverse-odysseyyyy.grok.me` (four y’s). Old three-y `https://boltverse-odysseyyy.grok.me` is superseded — not Beat 3 / not Pack Play. |
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

**Kitchen Pack Play / central Pack API host:** `https://boltverse-odysseyyyy.grok.me` (four y’s). Old `https://boltverse-odysseyyy.grok.me` (three y’s) is superseded — not Beat 3 / not Pack Play.

Federation write rules (boot + heartbeat): merge-patch only — never wipe `resonance` / `starCore` / `cosmetics`. Always set `gateSub`, `playUrl` (from body), `lastSeenAt=now`, `updatedAt=now`. Full wire: [PACK.md](PACK.md).

Heavy mp4s stay on the Play host — only pointers here.

Grok asset manifests live in `assets/<assetId>.json` — **profiles stay separate**. **Mint only via the Grok Imagine cook rail** (automatic provenance — never a player proof step). Format `a_<sub>_<img|vid>_<hash8>`. Same hash = same id; first creator keeps ownership. Chests **reference** the existing `assetId` and **only** when caller `sub` === `creatorSub`. Source = `grok-imagine` only. **HARD BAN** player file upload / X / Drive / Discord / arbitrary URL. Law: [ASSETS.md](ASSETS.md). Chest product: [CHESTS.md](CHESTS.md).
