# ASSETS — automatic `assetId` (Imagine-rail mint)

> **HARD LOCK — Pack assets = Grok Imagine cook-rail output ONLY (images / videos).**
> **Cook asset = Imagine (in the Grok chat app).** Mint `assetId` ONLY when a Grok Imagine cook completes through the Pack / Boltverse cook rail (Imagine in-app — Build hooks / Imagine session attached to gated Live / cook-room path — whatever the Pack wire uses).
> **HARD LOCK — own-plates list = Grok chat app ONLY.** Ask in chat (`show my plates` / `mes plaques` / `list my assets` / `what did I cook` / any close alias) → reply **in Grok chat** with the player’s own `creatorSub` rows + `assetId` chips + visuals. **Never** Sprint HUD / overlay chrome for this list.
> **Chest surface law** (play / earn / open / put-in-chest) = Grok chat app only — see [CHESTS.md](CHESTS.md). No external Pack website required to cook.
> **Chest overlay = Pack Engine, not the biome plate.** Chests, Hang, forge, and biome plates **reference** `assetId`s. They do **not** host chest UI. Federated `*.grok.me` / hung-biome creators: ZERO chest wire. Put-in-chest is optional.
> **Provenance is automatic.** The server / rail writes it at mint. The player **never** supplies proof.
> **HARD BAN:** player file upload · X/Twitter URL paste · Drive / Discord drop · arbitrary mp4/img URL as a Pack asset entry · Spotify · external mp3 · non-Grok uploads · player-uploaded “proof” screenshot · pasted certificate · manual ownership claim · GitHub / `raw.githubusercontent` / registry-path dumps in the player plate list · Sprint HUD as the plate list.

Kitchen + implementer contract. English. Silent of player chat. No secrets in this repo.

This file is the **source of truth** for Pack asset identity **and** the player chat list of own plates. Chests, Hang, forge, and biome plates **reference** these ids — they do not invent their own. Biome plates do **not** implement chest UI; overlay + earn + open = Pack Engine ([CHESTS.md](CHESTS.md) engine overlay / creator zero wire). The own-plates list lives in **Grok chat**, not on the Sprint HUD.

Creators do not drop files from elsewhere into Boltverse. Wallet media is also banned (see hard lock). Same lock as [CHESTS.md](CHESTS.md).

Profiles stay in `profiles/<userId>.json`. Asset manifests stay in `assets/<assetId>.json`. A profile / hang / chest may *point* at `assetId`s; it must not embed the blob.

Chest product / NSFW pool / reveal / **creator-only chest entry** / **engine overlay + creator zero wire**: [CHESTS.md](CHESTS.md).

## Law: mint only via the Imagine cook rail

Mint `assetId` **automatically** the moment a **Grok Imagine cook completes** through the Pack / Boltverse cook rail — **Imagine in the Grok chat app**, Build hooks, Imagine session on a gated Live, cook-room path, whatever that Pack wire is. Creators cook **in app**. No external cook website.

**Do not** mint from Hang, forge, chest propose, biome plate, or a player form. Those later **reference** the existing `assetId`.

**Do not** wait for a chest. **Do not** mint a second id when the same asset later enters a chest.

**Do not** mint because a player uploaded a file, pasted an X / Drive / Discord / mp4 URL, or attached a “proof” screenshot.

Creators do **not** invent ids. Collision = same hash → reuse the same `assetId` (dedupe). First cook keeps ownership.

A stolen X video **cannot enter**. There is no upload path. Only Imagine rail output enters.

## Automatic provenance (never a player proof step)

Provenance fields are written **by the server / rail automatically** at mint time. There is **no** player-uploaded proof screenshot, **no** pasted certificate, **no** “I cooked this” form.

Automatic mint payload (server-side — minimum):

| Field | Rule |
|---|---|
| `creatorSub` | Grok `sub` of the cook, from `x-grok-identity` / gate JWT / Imagine rail. Automatic. Never a player claim. |
| `source` | Always `grok-imagine` |
| `contentHash` | sha256 of the Imagine **rail output bytes**. Not a player-supplied URL. |
| `kind` | `img` \| `vid` — from the rail cook |
| `createdAt` | ISO-8601 mint time — rail clock |
| `cookId` / `threadId` / `railsVersion` | Optional. Stamped by the rail when it has them. |

All of the above are **server-side**. The player never types, pastes, or uploads any of it.

## Hard bans (entry path)

**No Pack asset entry** via:

- Player file upload
- X / Twitter URL paste
- Drive / Discord drop
- Arbitrary mp4 / img URL
- Spotify / external mp3 / non-Grok uploads
- Player-uploaded “proof” screenshot or pasted certificate
- Manual ownership claim form (“this URL is mine”)

Never “paste someone else’s URL” as ownership — there is **no external URL entry path** anyway.

## Format (stable, kitchen)

```
a_<sub>_<img|vid>_<hash8>
```

| Part | Rule |
|---|---|
| `a_` | literal prefix |
| `sub` | first 8 chars of creator Grok gate `sub` / registry `userId`. If the sub is already short (e.g. `smir9`), use the **full** sub. |
| `img` \| `vid` | kind (from the rail) |
| `hash8` | first 8 hex of `contentHash` (sha256 of **Imagine rail output bytes**) |

Kitchen examples (shape only — not live claims):

- `a_smir9_img_3f8c1a2b`
- `a_12345678_vid_aa01ff09`

## Collision / dedupe / stolen bytes

Same `contentHash` / `hash8` → **reuse the same `assetId`**. Do not mint a second id. Do not invent a suffix.

If the same Imagine-rail bytes were already minted — keep the **first** `assetId` (original `sub` stays in the id). Content-addressed. Do not fork the row.

**Stolen file, same hash** → same `assetId`. Ownership stays with the **first creator**. Thief cannot remint.

**Stolen re-encode (new hash)** → not the same id. Player report + drop + ban. Pack seal. v1 = auth + hash + report (no heavy DRM). See [CHESTS.md](CHESTS.md) ownership block.

Chest propose of an already-minted asset = **reference only**, and **only** when the caller’s gate `sub` matches `creatorSub`. Action from **Grok chat** or **Build** after mint (in app) — [CHESTS.md](CHESTS.md) surface law. Write the `assetId` into `chests/pool.json` (when live) / `chestPool` on the existing manifest. Never `a_…` a second time. No manual ownership claim form. No creator portal.

## Manifest

Store on `assets/<assetId>.json` at mint (Imagine cook complete — rail writes this):

| Field | Type | Notes |
|---|---|---|
| `assetId` | string | Automatic. Never player-invented. |
| `creatorSub` | string | Gate `sub` of the cook (`x-grok-identity` / gate JWT / Imagine rail). Automatic. |
| `userId` | string | Same as `creatorSub` when known |
| `kind` | `img` \| `vid` | From the rail |
| `mime` | string | e.g. `image/png`, `video/mp4` |
| `bytes` | number | Byte size of rail output |
| `source` | string | Always `grok-imagine` |
| `contentHash` | string | sha256 of Imagine rail output bytes |
| `contentHash8` | string | First 8 hex used in the id |
| `createdAt` | string | ISO-8601 — mint time (rail) |
| `mintedVia` | string | Live rail = `imagine-cook`. One-shot hung-plate kitchen mint = `imagine-cook-backfill` (see below). |
| `cookId` | string \| omit | Optional. Rail stamp. |
| `threadId` | string \| omit | Optional. Rail stamp. |
| `railsVersion` | string | Pack / Odyssey rails pin at mint — rail stamp |
| `status` | string | `proposed` \| `sealed` \| `live` \| `dropped` |
| `chestPool` | string \| omit | Set later if a chest references this id. Omit until then. |
| `tags` | string[] | Allowlist only (`bolt`, `biome`, `citadel`, `cosmetic`, `pack-lore`) |
| `url` | string \| omit | Pointer to the Imagine **rail** blob / Play host. Never a player-pasted external URL. Heavy bytes stay off this repo. **Kitchen only** — never dump this URL in the player plate list. |
| `label` | string \| omit | Optional kitchen short name (e.g. `plate-road`). Chat may map it to a Pack label. Never speak the kitchen stem alone. |
| `role` | string \| omit | Optional one-line role. Chat may show this as the row’s extra line. |
| `playPath` | string \| omit | Optional hung path (e.g. `biome/master/road.mp4`). **Kitchen only** — never dump to the player. |

Sketch:

```json
{
  "assetId": "a_smir9_img_3f8c1a2b",
  "creatorSub": "smir9",
  "userId": "smir9",
  "kind": "img",
  "mime": "image/png",
  "bytes": 184320,
  "source": "grok-imagine",
  "contentHash": "3f8c1a2b00000000000000000000000000000000000000000000000000000000",
  "contentHash8": "3f8c1a2b",
  "createdAt": "2026-09-17T00:00:00.000Z",
  "mintedVia": "imagine-cook",
  "cookId": "cook_optional_rail_stamp",
  "threadId": "thread_optional_rail_stamp",
  "railsVersion": "odyssey-chests-1",
  "status": "proposed",
  "chestPool": null,
  "tags": ["cosmetic", "pack-lore"]
}
```

`contentHash` in the sketch is shape only — live rows use the real sha256 of rail output bytes.

## Registry shape

Profiles stay separate.

```
assets/<assetId>.json       # one manifest per minted Imagine-rail cook
assets/plates-index.json    # hung biome/master/ path → assetId (Odyssey / Engine)
chests/pool.json            # optional index of live chest assetIds (references only)
```

Do not put Grok Imagine binaries in this repo. Pointers + hashes only.

Do not put GitHub App private keys, xAI keys, wallets, or tickets in this repo.

## Kitchen backfill (once)

Hung Imagine kitchen plates already on `StarBoltSprint/boltverse-odyssey` `biome/master/` were minted **once** (`mintedVia: imagine-cook-backfill`) — they never got live rail manifests. Index: [`assets/plates-index.json`](assets/plates-index.json). Future cooks mint live on the Imagine rail (`mintedVia: imagine-cook`). Same `contentHash` → reuse the same `assetId`. Do not remint.

## Ownership (chest entry)

**Only the creator can put THEIR `assetId` into a chest.**

At mint: `creatorSub` = Grok `sub` of the cook (gate JWT / Imagine rail — automatic).

At chest entry: caller ticket / JWT `sub` **MUST** match `assetId.creatorSub` — else refuse. Automatic check. No manual ownership claim form. Put-in-chest is **optional** and in-app (Grok chat or Build). Immediate **Pack receipt** in Grok chat — never silent. Skipping put-in-chest does **not** stop Pack Engine chest overlays on the creator’s federated link.

Full ownership + surface + rarity + engine overlay / creator zero wire law: [CHESTS.md](CHESTS.md).

## Player chat list (HARD — Grok chat app only)

When a player asks in **Grok chat** to see their plates / creations / biomes / hung films (any close alias: `show my plates`, `mes plaques`, `list my assets`, `what did I cook`…):

This is **not** Welcome. Do **not** fire [COLD_START.md](COLD_START.md) three-beats. Do **not** attach the citadel teaser as the list. Do **not** open Sprint / Build as the list.

### 1. Resolve owner

Gate `sub` / Pack `userId` — same stem as `profiles/<sub>.json`. From `x-grok-identity` / gate JWT / session. Never invent a sub. Never ask the player to paste a `userId`.

### 2. Filter — own `creatorSub` only

List **ONLY** assets where `creatorSub` === that `sub`.

Kitchen sources (read; never dump paths to the player):

- `assets/<assetId>.json` rows in this repo
- and/or [`assets/plates-index.json`](assets/plates-index.json) **filtered by ownership** (resolve each `assetId` → manifest `creatorSub`, keep matches only)

**Default = own `creatorSub` only.** Other creators’ assets: **never** list unless the player asks for a **Pack seal** / **public live pool**. That is a different ask. This trigger = own plates.

Skip `dropped` rows. Kitchen probes are not plates.

### 3. Reply in Grok chat (Pack voice + visuals)

Reply **IN CHAT** (Grok chat app). English Pack voice for player-facing lines.

Attach visuals when possible (thumb / Imagine plate still) — **never** a silent text dump of kitchen paths only.

**HARD BAN:** in-game Sprint HUD / overlay chrome for this list. Chat only. Do not paint plates onto the lane. Do not invent list UI on the biome plate.

### 4. Each row

Same chat turn, one row per owned asset:

1. Short **Pack label** (e.g. `Peak road plate` / `Bolt cutout`) — Pack words, not kitchen filenames
2. `assetId` chip (`a_<sub>_…`)
3. kind `img` \| `vid`
4. Optional one-line **role** from the manifest (`role`, or a Pack reading of `label`)

Do not skip the chip. Do not skip the visual when a still / thumb can attach.

### 5. Empty

No owned rows → Pack-voice, this line:

```
No Pack plates sealed yet — cook in Imagine.
```

Then stop. Do not lecture GitHub. Do not fire Welcome.

### 6. HARD BAN (player-facing)

Kitchen may read GitHub. The player sees **Pack words + `assetId` + visuals**.

**Never** dump to the player:

- GitHub URLs
- `raw.githubusercontent.com`
- registry paths (`assets/<id>.json`, `assets/plates-index.json`, `biome/master/…`)
- kitchen noise (`playPath`, `contentHash`, `mintedVia`, `railsVersion`, JWT / ticket lectures)

### Tone

Boltverse **Pack words only**: plate · Peak · Bolt cutout · asset · cook · Imagine · Pack.

**HARD BAN in spoken / chat list lines:** GitHub URLs · API jargon · registry paths · `assets/<id>.json` · `plates-index.json` · `biome/master/` · JWT / ticket lectures · kitchen host dumps.

Odyssey `biome/master/ASSETS.md` stays a **pointer** at this file. Do not fork a second chat-list law there.

## Done criteria

- `assetId` mints **only** when a Grok Imagine cook completes through the Pack / Boltverse cook rail
- Cook = **Imagine in the Grok chat app** — no external cook website
- Provenance is **automatic** (server / rail) — no player manual proof step
- **HARD BAN** player file upload, X/Twitter URL paste, Drive / Discord drop, arbitrary mp4/img URL
- Format `a_<sub>_<img|vid>_<hash8>`
- Same hash = same id; first creator keeps ownership
- Chest / Hang / forge / biome **reference** — never remint
- Chest propose only if caller `sub` === `creatorSub` (in-app: Grok chat or Build)
- Grok Imagine only — HARD
- Chest surface + rarity + engine overlay / creator zero wire: [CHESTS.md](CHESTS.md)
- Ask in **Grok chat** (`show my plates` / close alias) → **own** plates list (`creatorSub` === gate `sub`) with `assetId` chips + visuals **in the Grok chat app**
- Empty list = `No Pack plates sealed yet — cook in Imagine.`
- **HARD BAN** GitHub / `raw.githubusercontent` / registry-path dumps in the player list
- **HARD BAN** Sprint HUD / overlay chrome as the plate list — chat only
- Other creators’ assets: never list on this trigger (Pack seal / public live pool = a different ask)
