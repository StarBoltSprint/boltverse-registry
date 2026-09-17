# CHESTS — Pack SoT for run-earned rewards

> **HARD LOCK — chest contents = Grok Imagine cook-rail assets ONLY (images / videos).**
> **HARD LOCK — surface = Grok chat app ONLY (tabs: Chat + Imagine + Build).** Everything chest-related for players and creators is doable **inside the Grok chat app**. No external website. No separate creator portal. No desktop-only tool.
> **HARD LOCK — engine overlay / creator zero wire.** Chests appear in Play **WITHOUT** the biome / link creator doing anything. Chest UI + earn + open = **Pack Engine layer** (canonical Play / Pack client), **NOT** the creator’s biome plate recipe. Engine watches Resonance / Peak run thresholds → overlays Pack stock Peak chest (closed still) in-picture on whatever biome is playing. Tap = Pack stock open video (~6s closed→empty glow) → engine reveals sealed `assetId`. Federated `*.grok.me` / hung-biome creator: **ZERO code, ZERO UI, ZERO wire.** Optional only: put-in-chest. Ignoring put-in-chest still means players earn Pack pool chests on that link.
> **HARD BAN — creator plate / chrome / host duty.** Do **not** require creators to bake chests into plates, host open videos, or add Open Chest chrome.
> **Cook asset** = Imagine (in app). **Play / earn chest / open reveal** = Pack Engine overlay inside **Build** game console / in-chat Live preview (in app). **Put asset in chest** = optional action from Grok chat or Build after mint — still in app.
> **HARD LOCK — put-in-chest Pack receipt.** Immediate confirmation in the Grok chat app. Never a silent drop. Success = Pack-voice line + Imagine-plate visual + `assetId` chip / tier / ownership. Soft refuse = Pack-voice refuse, no registry write.
> **v1 creator flow** does **not** require an external Pack website.
> **Mint happens on the Imagine cook rail** — see [ASSETS.md](ASSETS.md). Chests **reference** an existing `assetId`. They never mint.
> **Only the creator can put THEIR `assetId` into a chest.** Caller ticket / JWT `sub` MUST match `assetId.creatorSub` — else refuse.
> **Provenance is automatic.** No player proof screenshot, certificate, or ownership-claim form.
> **HARD LOCK — cosmetics only. Never pay-to-win. Never play-to-win.** Chest rewards = skins / titles / Pack lore looks. Never speed, Resonance power, score multiplier, path advantage, easier Hit windows, extra lives, paid skill, or wallet boost. Pack Pass / tips / X subs never buy gameplay power — only cosmetic / drop-count soft.
> **HARD BAN:** player file upload · X/Twitter URL paste · Drive / Discord drop · arbitrary mp4/img URL · Spotify · external mp3 · non-Grok uploads · paste-someone-else’s-URL as ownership · external Pack website / creator portal / desktop-only tool as a required player or creator UI · requiring biome / link creators to wire chests.

Kitchen + implementer contract. English. Silent of player chat. No secrets in this repo.

This file is the **source of truth** for chest law. Odyssey holds the Peak crystal KEEP still only — `StarBoltSprint/boltverse-odyssey` `stock/chests/peak-closed.png`. Do not fork a second law in Odyssey. Do not fork chest UI into biome plates.

Asset identity (Imagine-rail mint, automatic provenance): **[ASSETS.md](ASSETS.md)**. Chests **reference** an existing `assetId` — they do not mint a second id.

Creators do not drop files from elsewhere into the pool. Wallet media is also banned (see hard lock).

Profiles stay in `profiles/<userId>.json`. Chest assets are **not** profile fields. A profile may later *point* at `assetId`s; it must not embed the blob.

## Surface (HARD — all-in Grok chat app)

The **Grok chat app** (Chat + Imagine + Build) is the **only** player/creator UI. Kitchen backends may still write this registry — players and creators never leave the app for a required chest step.

| Action | Where (in app) |
|---|---|
| Cook asset | **Imagine** (in app) |
| Play / earn chest / open reveal | **Pack Engine overlay** in **Build** game console / in-chat Live preview (in app). Not the biome plate. |
| Put asset in chest | **Optional.** Action from **Grok chat** or **Build** after mint — still in app. Immediate **Pack receipt** in Grok chat (never silent). Skipping this does **not** stop Pack pool chests on the creator’s link. |

**HARD BAN (surface):**

- External website as a required player or creator step
- Separate creator portal
- Desktop-only tool required for players or creators
- External Pack website required for the v1 creator flow
- Chest UI / earn / open as part of a creator biome plate recipe
- Requiring a federated `*.grok.me` / hung-biome creator to add chest code, chest UI, or a chest wire

The Pack Play Live attached as Build / in-chat Live preview **is** the in-app play surface — it is not a “go open this site in a browser” step. Do not invent a second Pack site, a Hang website, or a chest-studio desktop for v1.

## Engine overlay (HARD — creator zero wire)

Chests appear in Play **without** the biome / link creator doing anything.

**Law:**

- Chest UI + earn + open = **Pack Engine layer** (canonical Play / Pack client). **Not** part of the creator’s biome plate recipe.
- Engine watches **Resonance / Peak run thresholds** during play. When earned, the engine **overlays** Pack stock Peak chest (closed still) **in-picture** on top of whatever biome is playing.
- Tap the chest in picture = play **Pack stock** open video (~6s closed→empty glow) → engine reveals the sealed `assetId` reward.
- Creator of a federated `*.grok.me` link / hung biome: **ZERO code, ZERO UI, ZERO wire** for chests to appear.
- Creator optional only: **put-in-chest** (Imagine mint → Pack receipt in Grok chat). Ignoring put-in-chest still means players can earn **Pack pool** chests on their link.
- **HARD BAN:** requiring creators to bake chests into plates, host open videos, or add Open Chest chrome.

Stock media is Pack / Odyssey KEEP (`stock/chests/peak-closed.png` + shared ~6s open video). The hung biome under the overlay does not change. The engine composites closed still → open video → sealed `assetId`. The biome author never hosts those files.

A hung biome / remix Live that ships **no** chest code is **correct**. Pack pool chests still overlay when the player hits a run threshold on that link.

## Product

- Chests are **run-earned cosmetics**. **Not** a daily login calendar box.
- Container skin = Peak crystal KEEP (`boltverse-odyssey` `stock/chests/peak-closed.png`).
- **Crystal never chrome.** No wood / iron lootbox chrome. No invented closed plate.
- Closed UX = mystery card / `?` flip (suspense). Reveal = the sealed creator **Grok Imagine** asset — shown by the **engine** in **Build** / in-chat Live preview after the ~6s open.
- Creators **may** put **only their own** Grok Imagine cook-rail assets into chests: images or videos (ultra quality). No other source. Cook in **Imagine** (in app). Put-in-chest from **Grok chat** or **Build** after mint. Immediate Pack receipt in Grok chat — never a silent drop. This is **optional**. Skipping it does not remove Pack pool overlays from their federated link.
- Cosmetics / Pack lore only — **never pay-to-win / never play-to-win** (see Soft earn).

### Hard bans (product)

- **No Spotify / external mp3 / non-Grok uploads** (hard lock — see top)
- **No player file upload, X/Twitter URL paste, Drive / Discord drop, arbitrary mp4/img URL**
- **No player manual proof** (screenshot, certificate, “this URL is mine”)
- **No external Pack website / creator portal / desktop-only tool** as a required player or creator UI (surface HARD)
- **No creator plate duty** — do not require biome / link creators to bake chests into plates, host open videos, or add Open Chest chrome
- No daily-login streak chest
- No AFK wall-clock chest
- **No pay-to-win / no play-to-win** — no speed, Resonance power, score multiplier, path advantage, easier Hit windows, extra lives, paid skill, wallet boost
- No Pack Pass / tips / X subs buying gameplay power
- No wallet / NFT / connect-wallet
- No chrome / generic lootbox skin
- No baking one fixed object into a shared open plate for all creators
- No beauty / pixel / AI aesthetic score as rarity
- No silent put-in-chest (success or refuse)
- No kitchen noise (GitHub URLs, API jargon, registry paths) in player/creator-facing chat lines

## Soft earn

Chest drops from **run thresholds** — Resonance / peak / picture-time / Loom — with a **soft daily cap**. The **Pack Engine** watches those thresholds during play, then overlays + opens in **Build** / in-chat Live preview (in app). The biome plate does not implement earn.

**v1 knobs are law in this file.** Odyssey implements them. Do not fork a second number set in Odyssey rails.

Day clock = **player local calendar day** (Europe-friendly: the day rolls at the player’s local midnight — e.g. Europe/Paris `00:00`. Do **not** use a UTC-only day that resets mid-morning for Europe). Kitchen date key = `YYYY-MM-DD` in that local zone.

Cap is a **run-earn** throttle. **Not** a daily login reward. **Not** an AFK wall-clock. Sitting in picture without a Peak arm does not mint a chest.

| Knob | v1 law |
|---|---|
| Soft daily cap | **max 2 chests / calendar day** (player local) |
| **Run chest** | Common / Rare pool. 1st armed Peak of a run — ~**45–60s** bone picture-time + `m` high enough for Peak arm. Soft max **1 Run chest / day**. |
| **Peak chest** | Peak / Legendary pool path. 2nd higher threshold **same day** (stronger `m` / Legendary lean). Soft max **1 Peak chest / day**. |
| Total | Soft max **1–2 / day** (0 if no Peak arm; 1 if only Run; 2 if Run + Peak). |
| Pack Pass (optional, later) | **+1** soft drop. Still **cosmetic only**. Never gameplay power. Never bypass safety. |

- Earn on a federated `*.grok.me` / hung biome uses the **same** Pack pool + engine overlay + these numbers. The link creator does not wire a local chest.
- Loom / Resonance / tips / low supply may **signal Rare** (see rarity). They do not invent a beauty score. Tips never buy a bypass or a third chest.

### Cosmetics (HARD — never pay-to-win / never play-to-win)

Chest rewards = **cosmetics only**: skins, titles, Pack lore looks.

**Never** grant:

- Speed
- Resonance power
- Score multiplier
- Path advantage
- Easier Hit windows
- Extra lives
- Paid skill
- Wallet boost

**Pack Pass / tips / X subs** never buy gameplay power — only cosmetic / drop-count soft (`+1` later, still cosmetic). Playing more does not buy a stronger lane. Paying does not buy a stronger lane.

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

Chest propose: **only** reference an existing `assetId` where `creatorSub` matches the caller’s gate `sub` (automatic check). **No** manual ownership claim form. Propose / put-in-chest is an **optional** action from **Grok chat** or **Build** after mint — still in the Grok chat app. No creator portal. Always return a **Pack receipt** in Grok chat (next section). Never silent.

A stolen X video cannot enter because there is **no upload path** — only Imagine rail output enters.

Put-in-chest is how a creator **adds their cook to the Pack pool**. It is **not** how chests appear on their link. Appearance = engine overlay (previous section). A creator who never put-in-chest still hosts Pack pool overlays when players run on their federated Live.

## Put-in-chest Pack receipt (HARD — Grok chat app only)

When a creator puts an asset into a chest, they **MUST** get an **immediate confirmation in the Grok chat app**. Never a silent drop. Receipt lands in **Grok chat** (same turn / same thread) even if the put-in-chest action started from **Build**.

### Success (all three, same chat turn)

1. **Short Pack-voice line (EN only).** Examples (shape, not locked to one string):
   - `Asset sealed for the Peak chest.`
   - `Sealed into the Rare pool.`
   - Common / other tiers: same voice — seal + chest / pool.
2. **Visual of what they put in.** Attach the cook still or short clip of the asset — the **Imagine plate itself** — in the same chat turn.
3. **Chips.** Show `assetId` chip + chest tier (`Common` / `Rare` / `Peak`) + `creatorSub` ownership note (`owned by you` / gate `sub`).

Do not skip the visual. Do not skip the chips. Do not speak kitchen instead of Pack-voice.

### Soft refuse (off-lore / NSFW / not a Grok Imagine mint)

- **Pack-voice refuse.** Example: `Not Pack lore — recook in Imagine.`
- Other refuses (not your asset / not Imagine mint / NSFW) stay Pack-voice + EN only. No silent fail.
- **No registry write.** Refuse is not a propose. Do not append `chests/pool.json`. Do not flip `chestPool` / `status`.

### Tone (player / creator-facing)

Boltverse **Pack words only**: seal · Peak chest · asset · Resonance · Loom · Pack.

**HARD BAN in spoken / chat receipt lines:** GitHub URLs · API jargon · registry paths · `assets/<id>.json` · `chests/pool.json` · JWT / ticket lectures · kitchen host dumps.

Kitchen may log the refuse reason. The creator sees Pack-voice only.

## Safety / NSFW (hard)

Every asset must pass **all** layers before it can be live in a chest pool. Fail any layer → not hung.

1. **Grok Imagine safety** — first net. Imagine-blocked assets never enter the queue.
2. **Pack allowlist tags** on chest entry — only: `bolt` · `biome` · `citadel` · `cosmetic` · `pack-lore`
3. **Explicit bans:** NSFW / porn, gore, hate, doxx / IRL harassment, off-lore weird that breaks Pack
4. **Smoke / lint FAIL** → not hung into the live chest pool
5. **Rarity-aware seal** — Common = **auto seal** (large pool) after layers 1–4 + creator-only entry. Peak / Legendary = **Pack seal** + soft supply cap — no auto-publish. Rare uses Loom / Resonance / tips / low supply signals. Soft queue / trust tier still applies to Peak. **Not** a beauty / pixel AI score.
6. **Player report** → drop from pool + repeat ban
7. **Pack Pass / tips / X subs never bypass filters** and **never buy gameplay power** — cosmetic / drop-count soft only

v1: Common may auto-seal into the large pool after layers 1–4. Peak / Legendary wait for Pack seal + soft supply cap. A later trust tier may shorten the Peak queue — it does **not** skip layers 1–4 or 7.

Fail any layer at put-in-chest → Pack-voice refuse in Grok chat + **no registry write**. Never silent.

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

- Shared Peak container (KEEP closed still) + mystery `?` flip — **engine overlay**, in-picture, on whatever biome is playing.
- Play / earn / open / reveal live in the **Pack Engine** inside **Build** game console / in-chat Live preview (in app). Not an external site. Not the biome plate.
- **Shared Peak open video ~6s:** closed → empty glow. **Pack stock.** **No baked reward** in the plate. Creators do **not** host this video.
- After the video ends, the **engine** shows the won `assetId` asset (`img` or `mp4`).
- **Do not** bake one fixed object into a still open plate for all creators.
- **Do not** ask a biome / link creator to add Open Chest chrome.
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
- `live` = referenced in the live chest pool. Players can earn / open it via **engine overlay** in **Build** / in-chat Live preview — on **any** federated Play, including links whose creator never put-in-chest. Common → large pool. Peak / Legendary → capped.
- `dropped` = report, lint fail after the fact, stolen re-encode pull, or Pack pull. Remove from `live[]`. Repeat offenders → ban from proposing.

An asset minted on the Imagine rail may stay `proposed` or `sealed` forever and **never** enter a chest. That is fine — the `assetId` still exists.

Common may auto-seal and hang into the large pool after layers 1–4 + creator-only entry. Peak / Legendary: **no** auto-publish `proposed → live` — Pack seal + soft supply cap. Chest entry never remints. Chest entry never accepts a non-creator `sub`. Chest entry is in-app only (Grok chat or Build) and **optional**. Success or refuse always returns a **Pack receipt** in Grok chat — never silent.

## Odyssey pointer

Odyssey kitchen map should say: chests law = this file; v1 soft-earn numbers = this file (implement, do not fork); stock KEEP = `stock/chests/peak-closed.png`; chest UI = Pack Engine overlay on the canonical Play / Pack client. Do not copy the law into Odyssey. Do not add chest chrome to biome plate recipes.

## Done criteria

- This file is the chest law; [ASSETS.md](ASSETS.md) is the Imagine-rail mint + automatic-provenance law
- **Surface HARD:** Grok chat app only (Chat + Imagine + Build) — no external website, no creator portal, no desktop-only tool; v1 creator flow does not require an external Pack website
- Cook = Imagine (in app). Play / earn / open reveal = Pack Engine overlay in Build / in-chat Live preview (in app). Put-in-chest = **optional** Grok chat or Build after mint
- **Engine overlay + creator zero wire HARD:** chests appear in Play without the biome / link creator doing anything. Chest UI + earn + open = Pack Engine layer, not the biome plate. Engine watches Resonance / Peak thresholds → overlays Pack stock Peak closed still in-picture → tap plays ~6s stock open video → engine reveals sealed `assetId`. Federated `*.grok.me` / hung-biome creator: ZERO code, ZERO UI, ZERO wire. Ignoring put-in-chest still means Pack pool chests on that link. Ban baking chests into plates, hosting open videos, or adding Open Chest chrome
- **Pack receipt HARD:** immediate Grok-chat confirmation — never silent. Success = Pack-voice + Imagine-plate visual + `assetId` / tier / ownership chips. Soft refuse = Pack-voice (e.g. `Not Pack lore — recook in Imagine.`) + no registry write. Pack words only; no kitchen noise in creator-facing lines
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
- **Soft earn NUMBERS HARD (v1):** player-local calendar day (Europe-friendly local midnight). Soft daily cap **max 2**. Run chest = 1st armed Peak (~45–60s bone picture-time + `m` for Peak arm), max **1 / day**, Common/Rare pool. Peak chest = 2nd higher threshold same day (stronger `m` / Legendary lean), max **1 / day**, Peak/Legendary path. Total soft max **1–2 / day**. Not daily login. Not AFK wall-clock. Optional Pack Pass later = +1 soft drop, cosmetic only
- **Cosmetics HARD — never pay-to-win / never play-to-win:** skins / titles / Pack lore looks only. Never speed, Resonance power, score multiplier, path advantage, easier Hit windows, extra lives, paid skill, wallet boost. Pack Pass / tips / X subs never buy gameplay power
