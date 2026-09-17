# CHESTS — Pack SoT for run-earned rewards

> **HARD LOCK — chest contents = Grok Imagine assets ONLY (images / videos).**
> **HARD BAN:** Spotify, external mp3, non-Grok uploads.

Kitchen + implementer contract. English. Silent of player chat. No secrets in this repo.

This file is the **source of truth** for chest law. Odyssey holds the Peak crystal KEEP still only — `StarBoltSprint/boltverse-odyssey` `stock/chests/peak-closed.png`. Do not fork a second law in Odyssey.

Asset identity (mint-on-create, any Pack entry): **[ASSETS.md](ASSETS.md)**. Chests **reference** an existing `assetId` — they do not mint a second id.

Creators do not drop files from elsewhere into the pool. Wallet media is also banned (see hard lock).

Profiles stay in `profiles/<userId>.json`. Chest assets are **not** profile fields. A profile may later *point* at `assetId`s; it must not embed the blob.

## Product

- Chests are **run-earned cosmetics**. **Not** a daily login calendar box.
- Container skin = Peak crystal KEEP (`boltverse-odyssey` `stock/chests/peak-closed.png`).
- **Crystal never chrome.** No wood / iron lootbox chrome. No invented closed plate.
- Closed UX = mystery card / `?` flip (suspense). Reveal = the sealed creator **Grok Imagine** asset.
- Creators put **only Grok Imagine assets** into chests: images or videos (ultra quality). No other source.
- Cosmetics / Pack lore only — **never pay-to-win**.

### Hard bans (product)

- **No Spotify / external mp3 / non-Grok uploads** (hard lock — see top)
- No daily-login streak chest
- No wallet / NFT / connect-wallet
- No chrome / generic lootbox skin
- No baking one fixed object into a shared open plate for all creators

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

## Automatic `assetId` (mint-on-create — not chest-only)

**Law:** mint `assetId` as soon as a player **creates / puts a Grok asset into Boltverse**. Any Pack entry: Hang, forge, chest propose, biome plate seal, or other. **Not** only when entering a chest.

Full identity law: **[ASSETS.md](ASSETS.md)**.

Chest later **references** the existing `assetId`. Do **not** mint a second id for the chest.

### Format (stable, kitchen)

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

Creators do **not** invent ids. Same hash → same `assetId` (dedupe). If the bytes were already minted on Hang / forge / biome / anywhere, the chest **reuses** that id.

### Manifest + registry shape

Store on `assets/<assetId>.json` at **mint** (create / Pack entry) — see [ASSETS.md](ASSETS.md). Profiles stay separate.

```
assets/<assetId>.json     # minted on create / any Pack entry
chests/pool.json          # live chest index — references existing assetIds only
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

When a chest proposes / seals / hangs an already-minted asset: set `chestPool` on the **existing** manifest and/or append the same `assetId` to `live[]`. Never write `assets/a_…-2.json`.

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

- `proposed` = minted on create / Pack entry (Hang, forge, chest propose, biome plate seal, …). Soft queue. Not in `chests/pool.json`.
- `sealed` = Pack seal passed layers 1–5. Still not live in a chest until hung into the pool.
- `live` = referenced in the live chest pool. Players can earn / open it.
- `dropped` = report, lint fail after the fact, or Pack pull. Remove from `live[]`. Repeat offenders → ban from proposing.

An asset minted on Hang / forge / biome may stay `proposed` or `sealed` forever and **never** enter a chest. That is fine — the `assetId` still exists.

No auto-publish `proposed → live` at v1. Chest entry never remints.

## Odyssey pointer

Odyssey kitchen map should say: chests law = this file; stock KEEP = `stock/chests/peak-closed.png`. Do not copy the law into Odyssey.

## Done criteria

- This file is the chest law; [ASSETS.md](ASSETS.md) is the mint-on-create law
- `assetId` mints on create / any Pack entry; chests **reference** only
- Format `a_<sub>_<img|vid>_<hash8>` — same hash = same id
- Grok Imagine only — HARD (no Spotify / external mp3 / non-Grok upload)
- NSFW / safety layers 1–7 are hard
- Peak crystal KEEP is the only closed container
- Cosmetics only — never pay-to-win
