# Profile schema (v1)

See `profiles/smir9.json` for a filled example.

| Field | Type | Notes |
|---|---|---|
| userId | string | Equals the Grok gate `sub` when known (`userId` === `gateSub` === `profiles/<sub>.json` stem). Filled on Welcome register when `sub` known (or first gated boot). Never invent. Placeholder only if no `sub` yet. |
| gateSub | string \| null | Gate claim `sub`. Filled on Welcome register when `sub` known, or first gated boot. Never invent. |
| handle | string | `@handle` from X/Grok when available |
| displayName | string | From Grok profile on Welcome register when known |
| playUrl | string | Welcome register sets canonical `https://boltverse-odysseyyyy.grok.me`. Live boot / heartbeat may update to last origin opened (`location.origin`) — federated `*.grok.me`. Kitchen Pack Play / central Pack API host = `https://boltverse-odysseyyyy.grok.me` (four y’s). Old three-y `https://boltverse-odysseyyy.grok.me` is superseded — not Beat 3 / not Pack Play. |
| remixEnabled | boolean | |
| citadel | object | e.g. `{ \"defaultRoom\": \"frost\" }` |
| hangs | array | Short list of hung room ids / urls |
| resonance | object | `{ peak, lastRunAt }` — crystal feel, not XP |
| starCore | object | `{ charge, stage }` — Welcome `{stage}` |
| cosmetics | object | `{ packTitle, inventory }`. **Never wipe.** `inventory` = won rewards for this player `sub` — see below. |
| sessionStartedAt | string \| null | ISO-8601 session start from Play client |
| lastSeenAt | string \| null | ISO-8601 last Welcome register / boot / heartbeat. `null` = New (COLD_START) |
| playTimeSec | number | Accumulated open-Play seconds from Live heartbeats only. Welcome register does **not** increment. |
| updatedAt | string | ISO-8601 |

**Kitchen Pack Play / central Pack API host:** `https://boltverse-odysseyyyy.grok.me` (four y’s). Old `https://boltverse-odysseyyy.grok.me` (three y’s) is superseded — not Beat 3 / not Pack Play.

Federation write rules (Welcome register + boot + heartbeat): merge-patch only — never wipe `resonance` / `starCore` / `cosmetics` (including `cosmetics.inventory`). Always set `gateSub`, `playUrl`, `lastSeenAt=now`, `updatedAt=now` when a real `sub` is known. Welcome register `playUrl` = canonical `https://boltverse-odysseyyyy.grok.me`. Welcome register does **not** increment `playTimeSec`. Never invent a `sub`. Full wire: [PACK.md](PACK.md). Law: [COLD_START.md](COLD_START.md).

## cosmetics.inventory (HARD — won rewards)

`profiles/<sub>.json` → `cosmetics.inventory` = array of rewards **this player** won. Append on chest open or explicit Pack grant. **Never wipe.** Prefer **one entry per `assetId`** (dedupe — keep first `wonAt`). Creator plates are **not** inventory unless that id was won via chest or grant. Product + chat: [CHESTS.md](CHESTS.md).

**Prefer rich objects.** Readers also accept a legacy bare `assetId` **string**. Do not wipe old strings to force objects. New writes prefer objects.

```json
{ "assetId": "a_smir9_vid_aa01ff09", "wonAt": "2026-09-18T07:55:21Z", "fromChest": "run", "rarity": "common" }
```

| Field | Type | Notes |
|---|---|---|
| `assetId` | string | Won Imagine-rail id. Required (or the whole row is this string, legacy). |
| `wonAt` | string | ISO-8601 first win. Keep first on dedupe. |
| `fromChest` | string \| omit | `run` \| `peak` \| chest id \| `grant` |
| `rarity` | string \| omit | `common` \| `rare` \| `peak` (alias `legendary`) |

Missing `inventory` → treat as `[]`. Do not invent wins. Chat `show my inventory` / `mes gains` / `what I won` lists this array (Pack voice + hype emojis + `assetId` chips; Focus one → media). Not `show my plates`.

Heavy mp4s stay on the Play host — only pointers here.

Grok asset manifests live in `assets/<assetId>.json` — **profiles stay separate**. **Mint only via the Grok Imagine cook rail** (automatic provenance — never a player proof step). Cook = Imagine (in the Grok chat app). Format `a_<sub>_<img|vid>_<hash8>`. Same hash = same id; first creator keeps ownership. Chests **reference** the existing `assetId` and **only** when caller `sub` === `creatorSub` (in-app: Grok chat or Build). Source = `grok-imagine` only. **HARD BAN** player file upload / X / Drive / Discord / arbitrary URL. Ask in **Grok chat** (`show my plates` / close alias) → **List** own plates (`creatorSub` === gate `sub`) as Pack voice + `assetId` chips only (short cassette counts OK; never N media). **Focus** one plate → fuller cassette stats + that one media attach. Cassette v1 on `assets/<assetId>.json`: `stats.views` / `stats.playTimeSec` / `stats.players` (or flat twins) — real or `0`; never invent; never pay-to-win. Law: [ASSETS.md](ASSETS.md). Chest product / all-in Grok app surface / rarity / **Pack inventory** (`cosmetics.inventory`): [CHESTS.md](CHESTS.md).
