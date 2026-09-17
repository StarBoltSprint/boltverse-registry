# CHESTS — Pack SoT for run-earned rewards

> **HARD LOCK — chest contents = Grok Imagine cook-rail assets ONLY (images / videos).**
> **Mint happens on the Imagine cook rail** — see [ASSETS.md](ASSETS.md). Chests **reference** an existing `assetId`. They never mint.
> **Only the creator can put THEIR `assetId` into a chest.** Caller ticket / JWT `sub` MUST match `assetId.creatorSub` — else refuse.
> **Provenance is automatic.** No player proof screenshot, certificate, or ownership-claim form.
> **HARD BAN:** player file upload · X/Twitter URL paste · Drive / Discord drop · arbitrary mp4/img URL · Spotify · external mp3 · non-Grok uploads · paste-someone-else’s-URL as ownership.

Kitchen + implementer contract. English. Silent of player chat. No secrets in this repo.

This file is the **source of truth** for chest law. Odyssey holds the Peak crystal KEEP still only — `StarBoltSprint/boltverse-odyssey` `stock/chests/peak-closed.png`. Do not fork a second law in Odyssey.

Asset identity (Imagine-rail mint, automatic provenance): **[ASSETS.md](ASSETS.md)**. Chests **reference** an existing `assetId` — they do not mint a second id.

Creators do not drop files from elsewhere into the pool. Wallet media is also banned (see hard lock).

Profiles stay in `profiles/<userId>.json`. Chest assets are **not** profile fields. A profile may later *point* at `assetId`s; it must not embed the blob.

## Product

- Chests are **run-earned cosmetics**. **Not** a daily login calendar box.
- Container skin = Peak crystal KEEP (`boltverse-odyssey` `stock/chests/peak-closed.png`).
- **Crystal never chrome.** No wood / iron lootbox chrome. No invented closed plate.
- Closed UX = mystery card / `?` flip (suspense). Reveal = the sealed creator **Grok Imagine** asset.
- Creators put **only their own** Grok Imagine cook-rail assets into chests: images or videos (ultra quality). No other source.
- Cosmetics / Pack lore only — **never pay-to-win**.

### Hard bans (product)

- **No Spotify / external mp3 / non-Grok uploads** (hard lock — see top)
- **No player file upload, X/Twitter URL paste, Drive / Discord drop, arbitrary mp4/img URL**
- **No player manual proof** (screenshot, certificate, “this URL is mine”)
- No daily-login streak chest
- No wallet / NFT / connect-wallet
- No chrome / generic lootbox skin
- No baking one fixed object into a shared open plate for all creators

## Soft earn

Chest drops from **run thresholds** — Resonance / peak / picture-time / Loom — with a **soft daily cap**.

- Cap is a run-earn throttle, **not** a calendar login reward.
- Exact threshold knobs live in Play rails (Odyssey). This file is the law, not the numbers.
- Optional **Pack Pass** later = more drops. Still cosmetic. Pass / tips **never** bypass safety.

## Ownership (HARD — only the creator)

**Only the creator can put THEIR `assetId` into a chest.**

- At mint: `creatorSub` = Grok `sub` of the cook (from gate JWT / Imagine rail — automatic)
- At chest entry: caller ticket/JWT `sub` MUST match `assetId.creatorSub` — else refuse
- Stolen file same hash → same `assetId`, ownership stays with first creator — thief cannot remint
- Stolen re-encode (new hash) → player report + drop + ban; Pack seal
- Never “paste someone else’s URL” as ownership — no external URL entry path anyway
- v1 = auth + hash + report (no heavy DRM)

Chest propose: **only** reference an existing `assetId` where `creatorSub` matches the caller’s gate `sub` (automatic check). **No** manual ownership claim form.

A stolen X video cannot enter because there is **no upload path** — only Imagine rail output enters.

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

v1 anti-theft is **auth + hash + report** (this file’s ownership block). No heavy DRM.

## Automatic `assetId` (Imagine-rail mint — not chest-only)

**Law:** mint `assetId` **only** when a Grok Imagine cook completes through the Pack / Boltverse cook rail. Automatic provenance. Player never supplies proof.

Full identity law: **[ASSETS.md](ASSETS.md)**.

Chest later **references** the existing `assetId`. Do **not** mint a second id for the chest. Do **not** accept a player-uploaded file or pasted URL as the chest payload.

### Format (stable, kitchen)

```
a_<sub>_<img|vid>_<hash8>
```

| Part | Rule |
|---|---|
| `a_` | literal prefix |
| `sub` | first 8 chars of creator Grok gate `sub` / registry `userId`. If the sub is already short (e.g. `smir9`), use the **full** sub. |
| `img` \| `vid` | kind |
| `hash8` | first 8 hex of sha256 of **Imagine rail output bytes** |

Kitchen examples (shape only — not live claims):

- `a_smir9_img_3f8c1a2b`
- `a_12345678_vid_aa01ff09`

Creators do **not** invent ids. Same hash → same `assetId` (dedupe). First creator keeps ownership. If the bytes were already minted on the Imagine rail, the chest **reuses** that id — and only if the caller `sub` matches `creatorSub`.

### Manifest + registry shape

Store on `assets/<assetId>.json` at **mint** (Imagine cook complete — rail writes provenance) — see [ASSETS.md](ASSETS.md). Profiles stay separate.

```
assets/<assetId>.json     # minted on Imagine cook rail
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

When a chest proposes / seals / hangs an already-minted asset: **refuse** unless caller ticket / JWT `sub` === `creatorSub`. Then set `chestPool` on the **existing** manifest and/or append the same `assetId` to `live[]`. Never write `assets/a_…-2.json`.

Do not put Grok Imagine binaries in this repo. Pointers + hashes only. Heavy media stays on the Play host / Imagine rail.

Do not put GitHub App private keys, xAI keys, wallets, or tickets in this repo.

## Open / reveal

- Shared Peak container (KEEP closed still) + mystery `?` flip.
- **Shared Peak open video ~6s:** closed → empty glow. **No baked reward** in the plate.
- After the video ends, the **engine** shows the won `assetId` asset (`img` or `mp4`).
- **Do not** bake one fixed object into a still open plate for all creators.
- Until that KEEP open video exists, closed still + reveal slot is enough.

`boltverse-odyssey` `stock/chests/peak-open.png` is TBD — do not invent an open plate. The ~6s open video is the shared empty-glow beat; the won asset is engine-composited after.

## Status machine

```
proposed  →  sealed  →  live
                ↓
             dropped   ←  also from live on report
```

- `proposed` = minted on Imagine cook rail (automatic provenance). Soft queue. Not in `chests/pool.json`.
- `sealed` = Pack seal passed layers 1–5 **and** creator-only chest entry (`sub` === `creatorSub`). Still not live in a chest until hung into the pool.
- `live` = referenced in the live chest pool. Players can earn / open it.
- `dropped` = report, lint fail after the fact, stolen re-encode pull, or Pack pull. Remove from `live[]`. Repeat offenders → ban from proposing.

An asset minted on the Imagine rail may stay `proposed` or `sealed` forever and **never** enter a chest. That is fine — the `assetId` still exists.

No auto-publish `proposed → live` at v1. Chest entry never remints. Chest entry never accepts a non-creator `sub`.

## Odyssey pointer

Odyssey kitchen map should say: chests law = this file; stock KEEP = `stock/chests/peak-closed.png`. Do not copy the law into Odyssey.

## Done criteria

- This file is the chest law; [ASSETS.md](ASSETS.md) is the Imagine-rail mint + automatic-provenance law
- `assetId` mints **only** via the Grok Imagine cook rail; chests **reference** only
- **Only the creator** can put THEIR `assetId` into a chest (`sub` === `creatorSub`)
- No player manual proof; no external upload / URL entry
- Format `a_<sub>_<img|vid>_<hash8>` — same hash = same id; first creator keeps ownership
- Stolen re-encode → report + drop + ban; Pack seal
- v1 = auth + hash + report (no heavy DRM)
- Grok Imagine only — HARD (no Spotify / X / Drive / Discord / external upload)
- NSFW / safety layers 1–7 are hard
- Shared Peak open video ~6s closed→empty glow; engine then shows won `assetId`
- Cosmetics only — never pay-to-win
