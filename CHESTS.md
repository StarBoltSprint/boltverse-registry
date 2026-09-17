# CHESTS — Pack SoT for run-earned rewards

Kitchen + implementer contract. English. Silent of player chat. No secrets in this repo.

This file is the **source of truth** for chest law. Odyssey holds the Peak crystal KEEP still only — `StarBoltSprint/boltverse-odyssey` `stock/chests/peak-closed.png`. Do not fork a second law in Odyssey.

Profiles stay in `profiles/<userId>.json`. Chest assets are **not** profile fields. A profile may later *point* at `assetId`s; it must not embed the blob.

## Product

- Chests are **run-earned cosmetics**. **Not** a daily login calendar box.
- Container skin = Peak crystal KEEP (`boltverse-odyssey` `stock/chests/peak-closed.png`).
- **Crystal never chrome.** No wood / iron lootbox chrome. No invented closed plate.
- Closed UX = mystery card / `?` flip (suspense). Reveal = the sealed creator **Grok Imagine** asset.
- Creators put **only Grok Imagine assets** into chests: images or videos (ultra quality).
- Cosmetics / Pack lore only — **never pay-to-win**.

### Hard bans (product)

- No daily-login streak chest
- No Spotify / external mp3
- No wallet / NFT / connect-wallet
- No chrome / generic lootbox skin
- No baking one fixed object into a shared open plate for all creators
- No non–Grok Imagine media in the pool

## Soft earn

Chest drops from **run thresholds** — Resonance / peak / picture-time / Loom — with a **soft daily cap**.

- Cap is a run-earn throttle, **not** a calendar login reward.
- Exact threshold knobs live in Play rails (Odyssey). This file is the law, not the numbers.
- Optional **Pack Pass** later = more drops. Still cosmetic. Pass / tips **never** bypass safety.

## Safety / NSFW (hard)

Every asset must pass **all** layers before it can be live in a chest pool. Fail any layer → not hung.

1. **Grok Imagine safety** — first net. Imagine-blocked assets never enter the queue.
2. **Pack allowlist tags** on chest entry — only: `bolt` · `biome` · `citadel` · `cosmetic` · `pack-lore`
3. **Explicit bans:** NSFW / porn, gore, hate, doxx / IRL harassment, off-lore weird that breaks Pack
4. **Smoke / lint FAIL** → not hung into the live chest pool
5. **Creator proposes → Pack seal.** No auto-publish to the live pool at v1. Soft queue / trust tier.
6. **Player report** → drop from pool + repeat ban
7. **Pack Pass / tips never bypass filters**

v1: proposed assets wait for Pack seal. A later trust tier may shorten the queue — it does **not** skip layers 1–4 or 7.

## Automatic `assetId`

Creators do **not** invent ids. The registry assigns one when an asset is proposed for a chest (or Hang into the pool).

### Format (stable, kitchen)

```
a_<gateSubShort>_<kind>_<contentHash8>
```

| Part | Rule |
|---|---|
| `a_` | literal prefix |
| `gateSubShort` | first 8 chars of creator Grok `sub` / registry `userId`. If the sub is already short (e.g. `smir9`), use the **full** sub. |
| `kind` | `img` \| `vid` |
| `contentHash8` | first 8 hex of sha256 of **file bytes**. If the blob is not local: sha256 of canonical URL + bytesize (UTF-8 of that pair), first 8 hex. |

Kitchen examples (shape only — not live claims):

- `a_smir9_img_3f8c1a2b`
- `a_12345678_vid_aa01ff09`

### Collision / dedupe

Same `contentHash8` → **reuse the same `assetId`**. Do not mint a second id. Do not invent a suffix.

If the same bytes (or same canonical URL + bytesize) were already proposed, keep the **first** `assetId` (original `gateSubShort` stays in the id). Content-addressed. Do not fork the pool row.

### Manifest fields

Store on `assets/<assetId>.json`:

| Field | Type | Notes |
|---|---|---|
| `assetId` | string | Automatic. Never player-invented. |
| `creatorSub` | string | Gate `sub` |
| `userId` | string | Same as `creatorSub` when known |
| `kind` | `img` \| `vid` | |
| `mime` | string | e.g. `image/png`, `video/mp4` |
| `bytes` | number | Byte size |
| `source` | string | Always `grok-imagine` |
| `createdAt` | string | ISO-8601 |
| `status` | string | `proposed` \| `sealed` \| `live` \| `dropped` |
| `chestPool` | string \| omit | Optional pool id |
| `railsVersion` | string | Pack / Odyssey rails pin at propose or seal |
| `tags` | string[] | Allowlist only (`bolt`, `biome`, `citadel`, `cosmetic`, `pack-lore`) |
| `contentHash8` | string | The 8 hex used in the id |
| `url` | string \| omit | Pointer to the Imagine blob / Play host. Heavy bytes stay off this repo. |

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
  "createdAt": "2026-09-17T00:00:00.000Z",
  "status": "proposed",
  "chestPool": null,
  "railsVersion": "odyssey-chests-1",
  "tags": ["cosmetic", "pack-lore"],
  "contentHash8": "3f8c1a2b"
}
```

### Registry shape

Profiles stay separate.

```
assets/<assetId>.json     # one manifest per asset
chests/pool.json          # optional index of live sealed assetIds
```

`chests/pool.json` (sketch):

```json
{
  "version": 1,
  "railsVersion": "odyssey-chests-1",
  "live": ["a_smir9_img_3f8c1a2b"]
}
```

Only `status: live` ids belong in `live[]`. `proposed` / `sealed` / `dropped` stay out.

Do not put Grok Imagine binaries in this repo. Pointers + hashes only. Heavy media stays on the Play host / Imagine source.

Do not put GitHub App private keys, xAI keys, wallets, or tickets in this repo.

## Open / reveal

- Shared Peak container (KEEP closed still) + mystery `?` flip.
- Reveal slot plays / shows the **sealed** Grok asset (`img` or `mp4`).
- **Do not** bake one fixed object into a still open plate for all creators.
- Open video optional later: first frame = KEEP closed; last = open empty glow; the sealed asset composites in the engine. Until that KEEP exists, closed still + reveal slot is enough.

`boltverse-odyssey` `stock/chests/peak-open.png` is TBD — do not invent an open plate.

## Status machine

```
proposed  →  sealed  →  live
                ↓
             dropped   ←  also from live on report
```

- `proposed` = creator Hang / propose. Soft queue. Not in `chests/pool.json`.
- `sealed` = Pack seal passed layers 1–5. Still not live until hung into the pool.
- `live` = in the live chest pool. Players can earn / open it.
- `dropped` = report, lint fail after the fact, or Pack pull. Remove from `live[]`. Repeat offenders → ban from proposing.

No auto-publish `proposed → live` at v1.

## Odyssey pointer

Odyssey kitchen map should say: chests law = this file; stock KEEP = `stock/chests/peak-closed.png`. Do not copy the law into Odyssey.

## Done criteria

- This file is the law
- `assetId` is automatic; creators do not invent ids
- NSFW / safety layers 1–7 are hard
- Peak crystal KEEP is the only closed container
- Cosmetics only — never pay-to-win
