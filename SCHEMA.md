# Profile schema (v1)

See `profiles/smir9.json` for a filled example.

| Field | Type | Notes |
|---|---|---|
| userId | string | Equals the Grok gate `sub` when known (`userId` === `gateSub` === `profiles/<sub>.json` stem). Filled on Welcome register when `sub` known (or first gated boot). Never invent. Placeholder only if no `sub` yet. |
| gateSub | string \| null | Gate claim `sub`. Filled on Welcome register when `sub` known, or first gated boot. Never invent. |
| handle | string | `@handle` from X/Grok when available |
| displayName | string | From Grok profile on Welcome register when known |
| playUrl | string | Welcome register (GitHub Action `pack-welcome`, not a grok.me API) sets canonical `https://boltverse-odysseyyyy.grok.me`. Phase 2 boot / heartbeat on `StarBoltSprint/boltverse-pack` may update to last Live origin opened (`location.origin`) — federated `*.grok.me`. Kitchen Pack Play paste = `https://boltverse-odysseyyyy.grok.me` (four y’s). **HARD BAN:** four-y / any Live as the Pack API / playTime host. Old three-y `https://boltverse-odysseyyy.grok.me` is superseded — not Beat 3 / not Pack Play. |
| remixEnabled | boolean | |
| citadel | object | e.g. `{ \"defaultRoom\": \"frost\" }` |
| hangs | array | Short list of hung room ids / urls |
| resonance | object | `{ peak, lastRunAt }` — crystal feel, not XP |
| starCore | object | `{ charge, stage }` — Welcome `{stage}` |
| cosmetics | object | `{ packTitle, inventory, badges }`. **Never wipe.** `inventory` = badges + won assets for this player `sub`. Optional `badges[]` mirrors badge rows. See below. |
| sessionStartedAt | string \| null | ISO-8601 session start from Play client |
| lastSeenAt | string \| null | ISO-8601 last Welcome register / boot / heartbeat. `null` = New (COLD_START) |
| playTimeSec | number | Accumulated open-Play seconds from Phase 2 `boltverse-pack` heartbeats only (not Welcome, not any Live Pack API). Welcome register does **not** increment. |
| pendingChests | array | Run / Peak chests earned, not yet opened. Rows: `tier` (`run` / `peak`), `status` (`pending` → `opened` / `consumed` on chat or Live open), `id`, `earnedAt`, optional `rarity` / `pool`. Chat open cues look this up. Law: [CHESTS.md](CHESTS.md). Never invent a row from chat. Never wipe the array. |
| updatedAt | string | ISO-8601 |

**Kitchen Pack Play paste:** `https://boltverse-odysseyyyy.grok.me` (four y’s). **Welcome register host = GitHub Action `pack-welcome` — not this Live.** **playTime host = TEMPORARY `https://boltverse-pack.vercel.app` (`StarBoltSprint/boltverse-pack`) — HARD BAN this Live as the Pack API.** Old `https://boltverse-odysseyyy.grok.me` (three y’s) is superseded — not Beat 3 / not Pack Play.

Federation write rules (Welcome register + boot + heartbeat): merge-patch only — never wipe `resonance` / `starCore` / `cosmetics` (including `cosmetics.inventory` / `cosmetics.badges`) / `pendingChests`. Always set `userId`=`gateSub`=`sub`, `playUrl`, `lastSeenAt=now`, `updatedAt=now` when a real `sub` is known. **Welcome write host = GitHub Action `pack-welcome` / `scripts/pack-welcome.mjs` — NOT any `*.grok.me` Pack API.** **playTime write host = TEMPORARY `https://boltverse-pack.vercel.app` (`StarBoltSprint/boltverse-pack`) — NOT any Live.** Welcome register `playUrl` = canonical `https://boltverse-odysseyyyy.grok.me`. Welcome register does **not** increment `playTimeSec`. Welcome register does **not** grant the First Sprint badge. First Sprint = first chest after Live ~5s+ (`guaranteedFirst`). Chat open cues (`Open my pending Run chest` / `Open my pending Peak chest`) look up `pendingChests[]` — [CHESTS.md](CHESTS.md). Never invent a `sub`. Welcome succeeds if Live 404 / frozen. Full wire: [PACK.md](PACK.md). Law: [COLD_START.md](COLD_START.md). First badge: [CHESTS.md](CHESTS.md).

## cosmetics.inventory / badges (HARD — won rewards)

`profiles/<sub>.json` → `cosmetics.inventory` = array of rewards **this player** won: **badges + won assets**. Optional `cosmetics.badges[]` may hold the same badge objects. **Never wipe.** Prefer **one entry per `assetId`** and **one entry per badge `id`** (dedupe — keep first `wonAt`). Creator plates are **not** inventory unless that id was won via chest or grant. Product + chat: [CHESTS.md](CHESTS.md).

**First reward = Pack badge (not a plate).** **KEEP.** Stock **9:16** in the **Common** pool as **`guaranteedFirst`**. After first gated Live on `https://boltverse-odysseyyyy.grok.me` / first heartbeat `playTimeSec` ≥ ~5s (soft), **any first chest** auto-includes this asset as a **direct reward**. Write **once** on that first-chest open:

```json
{
  "kind": "badge",
  "id": "pack-first-sprint",
  "title": "First Sprint",
  "wonAt": "2026-09-18T08:00:00Z",
  "from": "first-chest",
  "fromChest": "guaranteedFirst",
  "rarity": "common",
  "image": "stock/badges/first-sprint-9x16.png",
  "assetId": null,
  "aspect": "9:16"
}
```

Write into `inventory` and/or `badges[]`. Idempotent on `id`. Welcome register alone does **not** grant. Cosmetic only. No chat-only « Packmate » badge unless SmiR asks.

**Reward still HARD — KEEP 9:16.** The badge **MUST** point at Pack stock badge art — `image` and/or `assetId`. Kitchen KEEP: `boltverse-odyssey` `stock/badges/first-sprint-9x16.png`. Do not invent a substitute. Do not use `pack-first-sprint.png`. Once the stock still is minted, set `assetId` to that **stock** id (same for every player — reference, never remint per grant). Inventory **Focus shows that image**. First-chest open attaches it as the direct reward. List does not attach it (spam). Until the KEEP file is on Odyssey, `image` is the KEEP path and `assetId` may be `null`.

**`guaranteedFirst` (pool):** `chests/pool.json` carries this object (id + image + `pool: "common"` + `aspect: "9:16"`). First chest after Live ~5s+ **always** includes it. Not a `live[]` roll.

**Won assets — prefer rich objects.** Readers also accept a legacy bare `assetId` **string**. Do not wipe old strings to force objects. New writes prefer objects.

```json
{ "assetId": "a_smir9_vid_aa01ff09", "wonAt": "2026-09-18T07:55:21Z", "fromChest": "run", "rarity": "common" }
```

| Field | Type | Notes |
|---|---|---|
| `kind` | string \| omit | `badge` \| `asset`. Omit on legacy asset rows. |
| `id` | string | Badge id (e.g. `pack-first-sprint`). Required on badges. |
| `title` | string \| omit | Badge title (e.g. `First Sprint`). |
| `from` | string \| omit | Badge source (`first-chest` / `first-run`). |
| `image` | string \| omit | Stock badge still path. Required on badges until/alongside `assetId`. First Sprint KEEP: `stock/badges/first-sprint-9x16.png` (9:16). |
| `aspect` | string \| omit | Badge frame. First Sprint KEEP: `9:16`. |
| `assetId` | string \| null | Won Imagine-rail id on **asset** rows (or the whole row is this string, legacy). On **badges**: optional stock `assetId` for the badge still (shared — not a per-player mint). |
| `wonAt` | string | ISO-8601 first win. Keep first on dedupe. |
| `fromChest` | string \| omit | Badge: `guaranteedFirst`. Assets: `run` \| `peak` \| chest id \| `grant`. |
| `rarity` | string \| omit | `common` \| `rare` \| `peak` (alias `legendary`) |

Missing `inventory` / `badges` → treat as `[]`. Do not invent wins or badges. Chat `show my inventory` / `mes gains` / `what I won` lists **badges + won assets** (Pack voice + hype emojis + chips; Focus asset → media; Focus badge → **stock still** via `image` / `assetId`). Not `show my plates`.

Heavy mp4s stay on the Play host — only pointers here.

Grok asset manifests live in `assets/<assetId>.json` — **profiles stay separate**. **Mint only via the Grok Imagine cook rail** (automatic provenance — never a player proof step). Cook = Imagine (in the Grok chat app). Format `a_<sub>_<img|vid>_<hash8>`. Same hash = same id; first creator keeps ownership. Chests **reference** the existing `assetId` and **only** when caller `sub` === `creatorSub` (in-app: Grok chat or Build). Source = `grok-imagine` only. **HARD BAN** player file upload / X / Drive / Discord / arbitrary URL. Ask in **Grok chat** (`show my plates` / close alias) → **List** own plates (`creatorSub` === gate `sub`) as Pack voice + `assetId` chips only (short cassette counts OK; never N media). **Focus** one plate → fuller cassette stats + that one media attach. Cassette v1 on `assets/<assetId>.json`: `stats.views` / `stats.playTimeSec` / `stats.players` (or flat twins) — real or `0`; never invent; never pay-to-win. Law: [ASSETS.md](ASSETS.md). Chest product / all-in Grok app surface / rarity / **Pack inventory** (`cosmetics.inventory` / `badges[]`) / First Sprint **`guaranteedFirst`** (9:16 `stock/badges/first-sprint-9x16.png`): [CHESTS.md](CHESTS.md).
