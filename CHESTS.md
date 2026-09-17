# CHESTS — Pack SoT for run-earned rewards

> **HARD LOCK — chest contents = Grok Imagine cook-rail assets ONLY (images / videos).**
> **HARD LOCK — surface = Grok chat app ONLY (tabs: Chat + Imagine + Build).** Everything chest-related for players and creators is doable **inside the Grok chat app**. No external website. No separate creator portal. No desktop-only tool.
> **Cook asset** = Imagine (in app). **Play / earn chest / open reveal** = Build game console / in-chat Live preview (in app). **Put asset in chest** = action from Grok chat or Build after mint — still in app.
> **v1 creator flow** does **not** require an external Pack website.
> **Mint happens on the Imagine cook rail** — see [ASSETS.md](ASSETS.md). Chests **reference** an existing `assetId`. They never mint.
> **Only the creator can put THEIR `assetId` into a chest.** Caller ticket / JWT `sub` MUST match `assetId.creatorSub` — else refuse.
> **Provenance is automatic.** No player proof screenshot, certificate, or ownership-claim form.
> **HARD BAN:** player file upload · X/Twitter URL paste · Drive / Discord drop · arbitrary mp4/img URL · Spotify · external mp3 · non-Grok uploads · paste-someone-else’s-URL as ownership · external Pack website / creator portal / desktop-only tool as a required player or creator UI.

Kitchen + implementer contract. English. Silent of player chat. No secrets in this repo.

This file is the **source of truth** for chest law. Odyssey holds the Peak crystal KEEP still only — `StarBoltSprint/boltverse-odyssey` `stock/chests/peak-closed.png`. Do not fork a second law in Odyssey.

Asset identity (Imagine-rail mint, automatic provenance): **[ASSETS.md](ASSETS.md)**. Chests **reference** an existing `assetId` — they do not mint a second id.

Creators do not drop files from elsewhere into the pool. Wallet media is also banned (see hard lock).

Profiles stay in `profiles/<userId>.json`. Chest assets are **not** profile fields. A profile may later *point* at `assetId`s; it must not embed the blob.

## Surface (HARD — all-in Grok chat app)

The **Grok chat app** (Chat + Imagine + Build) is the **only** player/creator UI. Kitchen backends may still write this registry — players and creators never leave the app for a required chest step.

| Action | Where (in app) |
|---|---|
| Cook asset | **Imagine** (in app) |
| Play / earn chest / open reveal | **Build** game console / in-chat Live preview (in app) |
| Put asset in chest | Action from **Grok chat** or **Build** after mint — still in app |

**HARD BAN (surface):**

- External website as a required player or creator step
- Separate creator portal
- Desktop-only tool required for players or creators
- External Pack website required for the v1 creator flow

The Pack Play Live attached as Build / in-chat Live preview **is** the in-app play surface — it is not a “go open this site in a browser” step. Do not invent a second Pack site, a Hang website, or a chest-studio desktop for v1.

## Product

- Chests are **run-earned cosmetics**. **Not** a daily login calendar box.
- Container skin = Peak crystal KEEP (`boltverse-odyssey` `stock/chests/peak-closed.png`).
- **Crystal never chrome.** No wood / iron lootbox chrome. No invented closed plate.
- Closed UX = mystery card / `?` flip (suspense). Reveal = the sealed creator **Grok Imagine** asset — shown in **Build** / in-chat Live preview after the ~6s open.
- Creators put **only their own** Grok Imagine cook-rail assets into chests: images or videos (ultra quality). No other source. Cook in **Imagine** (in app). Put-in-chest from **Grok chat** or **Build** after mint.
- Cosmetics / Pack lore only — **never pay-to-win**.

### Hard bans (product)

- **No Spotify / external mp3 / non-Grok uploads** (hard lock — see top)
- **No player file upload, X/Twitter URL paste, Drive / Discord drop, arbitrary mp4/img URL**
- **No player manual proof** (screenshot, certificate, “this URL is mine”)
- **No external Pack website / creator portal / desktop-only tool** as a required player or creator UI (surface HARD)
- No daily-login streak chest
- No wallet / NFT / connect-wallet
- No chrome / generic lootbox skin
- No baking one fixed object into a shared open plate for all creators
- No beauty / pixel / AI aesthetic score as rarity

## Soft earn

Chest drops from **run thresholds** — Resonance / peak / picture-time / Loom — with a **soft daily cap**. Earn and open happen in **Build** / in-chat Live preview (in app).

- Cap is a run-earn throttle, **not** a calendar login reward.
- Exact threshold knobs live in Play rails (Odyssey). This file is the law, not the numbers.
- Optional **Pack Pass** later = more drops. Still cosmetic. Pass / tips **never** bypass safety.
- Loom / Resonance / tips / low supply may **signal Rare** (see rarity). They do not invent a beauty score.

## Rarity (HARD — not a beauty score)

Rarity is **not** a beauty / pixel / AI aesthetic score. Do **not** rank cooks by how pretty a model thinks they look. Do **not** score pixels to pick Common / Rare / Peak.

| Tier | Law |
|---|---|
| **Common** | Auto seal. Large pool. |
| **Rare** | Loom / Resonance / tips / low supply signals. |
| **Peak / Legendary** | Pack seal + soft supply cap. |

- Common: after safety layers 1–4 + creator-only chest entry (`sub` === `creatorSub`), **auto seal** and may hang into the **large** live pool. No Pack-seal wait.
- Rare: signaled by Loom / Resonance / tips / low supply — still must pass layers 1–4 (and 7). Tips never buy a bypass.
- Peak / Legendary: **Pack seal** required + **soft supply cap** before live. No auto-publish.
- Optional kitchen field: `rarity` = `common` \| `rare` \| `peak` (alias `legendary`). Set by the rails from the table above — never from a beauty model.

## Ownership (HARD — only the creator)

**Only the creator can put THEIR `assetId` into a chest.**

- At mint: `creatorSub` = Grok `sub` of the cook (from gate JWT / Imagine rail — automatic)
- At chest entry: caller ticket/JWT `sub` MUST match `assetId.creatorSub` — else refuse
- Stolen file same hash → same `assetId`, ownership stays with first creator — thief cannot remint
- Stolen re-encode (new hash) → player report + drop + ban; Pack seal
- Never “paste someone else’s URL” as ownership — no external URL entry path anyway
- v1 = auth + hash + report (no heavy DRM)

Chest propose: **only** reference an existing `assetId` where `creatorSub` matches the caller’s gate `sub` (automatic check). **No** manual ownership claim form. Propose / put-in-chest is an action from **Grok chat** or **Build** after mint — still in the Grok chat app. No creator portal.

A stolen X video cannot enter because there is **no upload path** — only Imagine rail output enters.

## Safety / NSFW (hard)

Every asset must pass **all** layers before it can be live in a chest pool. Fail any layer → not hung.

1. **Grok Imagine safety** — first net. Imagine-blocked assets never enter the queue.
2. **Pack allowlist tags** on chest entry — only: `bolt` · `biome` · `citadel` · `cosmetic` · `pack-lore`
3. **Explicit bans:** NSFW / porn, gore, hate, doxx / IRL harassment, off-lore weird that breaks Pack
4. **Smoke / lint FAIL** → not hung into the live chest pool
5. **Rarity-aware seal** — Common = **auto seal** (large pool) after layers 1–4 + creator-only entry. Peak / Legendary = **Pack seal** + soft supply cap — no auto-publish. Rare uses Loom / Resonance / tips / low supply signals. Soft queue / trust tier still applies to Peak. **Not** a beauty / pixel AI score.
6. **Player report** → drop from pool + repeat ban
7. **Pack Pass / tips never bypass filters**

v1: Common may auto-seal into the large pool after layers 1–4. Peak / Legendary wait for Pack seal + soft supply cap. A later trust tier may shorten the Peak queue — it does **not** skip layers 1–4 or 7.

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
- Play / earn / open / reveal live in **Build** game console / in-chat Live preview (in app). Not an external site.
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
- `sealed` = rarity-aware: **Common auto-seals** after layers 1–4 **or** Peak / Legendary **Pack seal** + soft supply cap — **and** creator-only chest entry (`sub` === `creatorSub`). Still not live until hung into the pool.
- `live` = referenced in the live chest pool. Players can earn / open it in **Build** / in-chat Live preview. Common → large pool. Peak / Legendary → capped.
- `dropped` = report, lint fail after the fact, stolen re-encode pull, or Pack pull. Remove from `live[]`. Repeat offenders → ban from proposing.

An asset minted on the Imagine rail may stay `proposed` or `sealed` forever and **never** enter a chest. That is fine — the `assetId` still exists.

Common may auto-seal and hang into the large pool after layers 1–4 + creator-only entry. Peak / Legendary: **no** auto-publish `proposed → live` — Pack seal + soft supply cap. Chest entry never remints. Chest entry never accepts a non-creator `sub`. Chest entry is in-app only (Grok chat or Build).

## Odyssey pointer

Odyssey kitchen map should say: chests law = this file; stock KEEP = `stock/chests/peak-closed.png`. Do not copy the law into Odyssey.

## Done criteria

- This file is the chest law; [ASSETS.md](ASSETS.md) is the Imagine-rail mint + automatic-provenance law
- **Surface HARD:** Grok chat app only (Chat + Imagine + Build) — no external website, no creator portal, no desktop-only tool; v1 creator flow does not require an external Pack website
- Cook = Imagine (in app). Play / earn / open reveal = Build / in-chat Live preview (in app). Put-in-chest = Grok chat or Build after mint
- `assetId` mints **only** via the Grok Imagine cook rail; chests **reference** only
- **Only the creator** can put THEIR `assetId` into a chest (`sub` === `creatorSub`)
- No player manual proof; no external upload / URL entry
- Format `a_<sub>_<img|vid>_<hash8>` — same hash = same id; first creator keeps ownership
- Stolen re-encode → report + drop + ban; Pack seal
- v1 = auth + hash + report (no heavy DRM)
- Grok Imagine only — HARD (no Spotify / X / Drive / Discord / external upload)
- NSFW / safety layers 1–7 are hard
- **Rarity HARD:** Common = auto seal, large pool; Rare = Loom / Resonance / tips / low supply signals; Peak / Legendary = Pack seal + soft supply cap. **Not** a beauty / pixel AI score
- Shared Peak open video ~6s closed→empty glow; engine then shows won `assetId`
- Cosmetics only — never pay-to-win
