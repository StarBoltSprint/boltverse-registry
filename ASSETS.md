# ASSETS — automatic `assetId` (mint-on-create)

> **HARD LOCK — Pack assets = Grok Imagine ONLY (images / videos).**
> **HARD BAN:** Spotify, external mp3, non-Grok uploads.

Kitchen + implementer contract. English. Silent of player chat. No secrets in this repo.

This file is the **source of truth** for Pack asset identity. Chests, Hang, forge, and biome plates **reference** these ids — they do not invent their own.

Creators do not drop files from elsewhere into Boltverse. Wallet media is also banned (see hard lock). Same lock as [CHESTS.md](CHESTS.md).

Profiles stay in `profiles/<userId>.json`. Asset manifests stay in `assets/<assetId>.json`. A profile / hang / chest may *point* at `assetId`s; it must not embed the blob.

Chest product / NSFW pool / reveal: [CHESTS.md](CHESTS.md).

## Law: mint on create

Mint `assetId` **automatically** as soon as a player **creates / puts a Grok asset into Boltverse**. Any Pack entry. Not chest-only.

Mint on (non-exhaustive):

- Hang
- forge
- chest propose
- biome plate seal
- any other Pack entry of a Grok Imagine img / vid

**Do not** wait for a chest. **Do not** mint a second id when the same asset later enters a chest.

Chest later **references** the existing `assetId`. Same for Hang index / forge / biome plate — pointer only.

Creators do **not** invent ids. Collision = same hash → reuse the same `assetId` (dedupe).

## Format (stable, kitchen)

```
a_<sub>_<img|vid>_<hash8>
```

| Part | Rule |
|---|---|
| `a_` | literal prefix |
| `sub` | first 8 chars of creator Grok gate `sub` / registry `userId`. If the sub is already short (e.g. `smir9`), use the **full** sub. |
| `img` \| `vid` | kind |
| `hash8` | first 8 hex of sha256 of **file bytes**. If the blob is not local: sha256 of canonical URL + bytesize (UTF-8 of that pair), first 8 hex. |

Kitchen examples (shape only — not live claims):

- `a_smir9_img_3f8c1a2b`
- `a_12345678_vid_aa01ff09`

## Collision / dedupe

Same `hash8` → **reuse the same `assetId`**. Do not mint a second id. Do not invent a suffix.

If the same bytes (or same canonical URL + bytesize) were already minted — Hang, forge, chest, biome, anywhere — keep the **first** `assetId` (original `sub` stays in the id). Content-addressed. Do not fork the row.

Chest propose of an already-minted asset = **reference only**. Write the `assetId` into `chests/pool.json` (when live) / `chestPool` on the existing manifest. Never `a_…` a second time.

## Manifest

Store on `assets/<assetId>.json` at mint (create / Pack entry):

| Field | Type | Notes |
|---|---|---|
| `assetId` | string | Automatic. Never player-invented. |
| `creatorSub` | string | Gate `sub` |
| `userId` | string | Same as `creatorSub` when known |
| `kind` | `img` \| `vid` | |
| `mime` | string | e.g. `image/png`, `video/mp4` |
| `bytes` | number | Byte size |
| `source` | string | Always `grok-imagine` |
| `createdAt` | string | ISO-8601 — mint time |
| `mintedVia` | string | `hang` \| `forge` \| `chest-propose` \| `biome-plate-seal` \| other Pack entry |
| `status` | string | `proposed` \| `sealed` \| `live` \| `dropped` |
| `chestPool` | string \| omit | Set later if a chest references this id. Omit until then. |
| `railsVersion` | string | Pack / Odyssey rails pin at mint or seal |
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
  "mintedVia": "hang",
  "status": "proposed",
  "chestPool": null,
  "railsVersion": "odyssey-chests-1",
  "tags": ["cosmetic", "pack-lore"],
  "contentHash8": "3f8c1a2b"
}
```

## Registry shape

Profiles stay separate.

```
assets/<assetId>.json     # one manifest per minted Grok asset
chests/pool.json          # optional index of live chest assetIds (references only)
```

Do not put Grok Imagine binaries in this repo. Pointers + hashes only.

Do not put GitHub App private keys, xAI keys, wallets, or tickets in this repo.

## Done criteria

- `assetId` mints on **create / any Pack entry**
- Chest / Hang / forge / biome **reference** — never remint
- Format `a_<sub>_<img|vid>_<hash8>`
- Same hash = same id
- Grok Imagine only — HARD
