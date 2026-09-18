# CHESTS — Pack SoT for run-earned rewards

> **HARD LOCK — chest contents = Grok Imagine cook-rail assets ONLY (images / videos).**
> **HARD LOCK — surface = Grok chat app ONLY (tabs: Chat + Imagine + Build).** Everything chest-related for players and creators is doable **inside the Grok chat app**. No external website. No separate creator portal. No desktop-only tool.
> **HARD LOCK — engine overlay / creator zero wire.** Chests appear in Play **WITHOUT** the biome / link creator doing anything. Chest UI + earn + open = **Pack Engine layer** (canonical Play / Pack client), **NOT** the creator’s biome plate recipe. Engine watches Resonance / Peak run thresholds → overlays Pack stock Peak chest (closed still) in-picture on whatever biome is playing. Tap = Pack stock open video (~6s closed→empty glow) → engine reveals sealed `assetId`. Federated `*.grok.me` / hung-biome creator: **ZERO code, ZERO UI, ZERO wire.** Optional only: put-in-chest. Ignoring put-in-chest still means players earn Pack pool chests on that link.
> **HARD BAN — creator plate / chrome / host duty.** Do **not** require creators to bake chests into plates, host open videos, or add Open Chest chrome.
> **Cook asset** = Imagine (in app). **Play / earn chest / open reveal** = Pack Engine overlay inside **Build** game console / in-chat Live preview (in app). **Put asset in chest** = optional action from Grok chat or Build after mint — still in app.
> **HARD LOCK — put-in-chest Pack receipt.** Immediate confirmation in the Grok chat app. Never a silent drop. Success = Pack-voice line + matching emojis (1–3) + Imagine-plate visual + `assetId` chip / tier / ownership. Soft refuse = Pack-voice refuse, no registry write.
> **HARD LOCK — chest chat copy = English Pack voice + matching emojis.** When Grok speaks chest lines in chat (pending / seal / open / reward): stay English Pack voice. Add fitting emojis next to the meaning — stylish / hype, not spam (**1–3 per short line**). Examples are **shape**, not frozen strings (no locked Mandarin / FR). **HARD BAN:** emoji walls · random unrelated emoji. **Soft chat open** = **same message**: open video then reward media. Engine timed gate (~6s) remains **Live-only**.
> **v1 creator flow** does **not** require an external Pack website.
> **Mint happens on the Imagine cook rail** — see [ASSETS.md](ASSETS.md). Chests **reference** an existing `assetId`. They never mint.
> **Only the creator can put THEIR `assetId` into a chest.** Caller ticket / JWT `sub` MUST match `assetId.creatorSub` — else refuse.
> **Provenance is automatic.** No player proof screenshot, certificate, or ownership-claim form.
> **HARD LOCK — cosmetics only. Never pay-to-win. Never play-to-win.** Chest rewards = skins / titles / Pack lore looks. Never speed, Resonance power, score multiplier, path advantage, easier Hit windows, extra lives, paid skill, or wallet boost. Pack Pass / tips / X subs never buy gameplay power — only cosmetic / drop-count soft.
> **HARD LOCK — first reward = Pack badge (not a plate).** First gated Live touch on `https://boltverse-odysseyyyy.grok.me` (heartbeat `playTimeSec` ≥ ~5s, soft) grants **once** `pack-first-sprint` / First Sprint into `cosmetics.inventory` / `badges[]`. Welcome register alone does **not** grant. Cosmetic only. Idempotent. Law below.
> **HARD LOCK — Pack inventory = won rewards on the player profile.** Open a chest → append the won `assetId` to `profiles/<sub>.json` `cosmetics.inventory`. Prefer `{ assetId, wonAt, fromChest, rarity }`. Inventory List shows **badges + won assets**. Never wipe. Prefer one entry per `assetId` / badge `id`. Creator plates ≠ inventory unless won via chest (or explicit grant). Chat `show my inventory` / `mes gains` / `what I won` = List vs Focus like plates. Law below + [SCHEMA.md](SCHEMA.md).
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
| Show inventory / what I won | **Grok chat.** List vs Focus of `cosmetics.inventory` + `badges[]` (**badges + won assets** for that player `sub`). Not the creator plate list. First row is often the First Sprint badge. |

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
- Creators **may** put **only their own** Grok Imagine cook-rail assets into chests: images or videos (ultra quality). No other source. Cook in **Imagine** (in app). Put-in-chest from **Grok chat** or **Build** after mint. Immediate Pack receipt in Grok chat — never a silent drop. Receipt line = English Pack voice + 1–3 matching emojis. This is **optional**. Skipping it does not remove Pack pool overlays from their federated link.
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
- No silent chest-open without an inventory append (once the reward `assetId` is known)
- No wiping `cosmetics.inventory` / `badges[]` on Welcome / boot / heartbeat / open
- No granting First Sprint on Welcome register alone (need gated Live touch ~5s)
- No treating the First Sprint badge as a plate / Imagine attach
- No chat-only « Packmate » badge unless SmiR asks (this badge is first Live sprint)
- No kitchen noise (GitHub URLs, API jargon, registry paths) in player/creator-facing chat lines
- **No emoji walls / random unrelated emoji** on chest chat lines (pending / seal / open / reward / inventory List)

## Soft earn

Chest drops from **run thresholds** — Resonance / peak / picture-time / Loom — with a **soft daily cap**. The **Pack Engine** watches those thresholds during play, then overlays + opens in **Build** / in-chat Live preview (in app). The biome plate does not implement earn.

**v1 knobs are law in this file.** Odyssey implements them. Do not fork a second number set in Odyssey rails.

Day clock = **player local calendar day** (Europe-friendly: the day rolls at the player’s local midnight — e.g. Europe/Paris `00:00`. Do **not** use a UTC-only day that resets mid-morning for Europe). Kitchen date key = `YYYY-MM-DD` in that local zone.

Cap is a **run-earn** throttle. **Not** a daily login reward. **Not** an AFK wall-clock. Sitting in picture without a Peak arm does not mint a chest.

When a Run / Peak chest arms, Grok speaks a **pending** ready line in chat (⚡ chest / 💎 Peak — chest chat copy). Do not stay silent.

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

Chest rewards = **cosmetics only**: skins, titles, Pack lore looks, **Pack badges**. Won `assetId`s land in that player’s **Pack inventory** (`cosmetics.inventory`). **First reward** = First Sprint **badge** (not a plate) — next section. Badges + won assets both list in inventory.

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

Chest propose: **only** reference an existing `assetId` where `creatorSub` matches the caller’s gate `sub` (automatic check). **No** manual ownership claim form. Propose / put-in-chest is an **optional** action from **Grok chat** or **Build** after mint — still in the Grok chat app. No creator portal. Always return a **Pack receipt** in Grok chat (receipt section). Never silent.

A stolen X video cannot enter because there is **no upload path** — only Imagine rail output enters.

Put-in-chest is how a creator **adds their cook to the Pack pool**. It is **not** how chests appear on their link. Appearance = engine overlay (previous section). A creator who never put-in-chest still hosts Pack pool overlays when players run on their federated Live.

## Chest chat copy (HARD — pending / seal / open / reward)

When Grok speaks chest lines in **Grok chat** (pending ready, Pack receipt / seal, open, reward, **First Sprint badge**, inventory):

- **English Pack voice still.** Pack words. EN only. Examples below are **shape**, not frozen strings. Do **not** lock Mandarin / FR / any other language as the spoken line.
- **Matching emojis** next to the meaning — stylish / hype, not spam. **1–3 per short line.**
- Emoji sits **beside the meaning** it marks. Do not decorate every noun. Do not invent a second caption.

| Beat | Meaning | Emoji next to it (shape) |
|---|---|---|
| **Pending** — Peak / Run chest ready | chest armed / waiting | ⚡ chest · 💎 Peak |
| **Sealed / Pack receipt** | seal + into tier | ✨ sealed · 🎁 into Common / Rare / Peak |
| **Open** | opening beat | 🔓 opening… then attach peak-open ~6s |
| **Reward** | asset reveal | 🏆 · 🎬 + `assetId` chip |
| **First Sprint badge** | first Live reward (not a plate) | 🐺⚡ First Sprint — you’re in the Pack |

**Soft chat open vs Live timed gate:**

- **Soft chat open** = **same message**: Pack-voice 🔓 line + attach the peak-open ~6s stock video **then** the reward media (🏆 / 🎬 asset + `assetId` chip). No chat-side wait. Do **not** hold the reward for a second turn. Do **not** simulate a 6s gate in chat.
- **Engine timed gate** (~6s closed→empty glow before reveal) remains **Live-only** — Pack Engine overlay in **Build** / in-chat Live preview. Chat does not time the gate.

**HARD BAN:** emoji walls · stacked sticker dumps · random unrelated emoji (no 🔥😂🚀 spam) · kitchen noise in the same line · frozen Mandarin as the receipt / pending / open / reward line.

## Pending chest (HARD — Grok chat)

When a **Run** or **Peak** chest is earned and still pending (profile `pendingChests[]` / engine overlay armed — ready, not opened):

Speak a **short Pack-voice ready line** in Grok chat. English. 1–3 matching emojis. Same turn.

Examples (shape, not locked):

- `⚡ Run chest ready.`
- `💎 Peak chest ready.`
- `⚡ Chest armed — 💎 Peak is lit.`

Do **not** dump `pendingChests` JSON. Do **not** lecture the grant reason / Director stand-in. Do **not** attach the open video until the player opens. Closed still optional (one Peak crystal) — never N media.

Pending is the **ready** beat. Open / reward follows when the player opens (soft chat open or Live engine).

## Put-in-chest Pack receipt (HARD — Grok chat app only)

When a creator puts an asset into a chest, they **MUST** get an **immediate confirmation in the Grok chat app**. Never a silent drop. Receipt lands in **Grok chat** (same turn / same thread) even if the put-in-chest action started from **Build**.

### Success (all three, same chat turn)

1. **Short Pack-voice line (EN only) + matching emojis (1–3).** Examples (shape, not locked to one string — not frozen Mandarin):
   - `✨ Asset sealed for the 💎 Peak chest.`
   - `✨ Sealed — 🎁 into the Rare pool.`
   - `✨ Sealed — 🎁 into Common.`
   - Other tiers: same voice — ✨ sealed + 🎁 into chest / pool.
2. **Visual of what they put in.** Attach the cook still or short clip of the asset — the **Imagine plate itself** — in the same chat turn.
3. **Chips.** Show `assetId` chip + chest tier (`Common` / `Rare` / `Peak`) + `creatorSub` ownership note (`owned by you` / gate `sub`).

Do not skip the visual. Do not skip the chips. Do not speak kitchen instead of Pack-voice. Do not drop the emojis. Do not replace the line with an emoji wall.

### Soft refuse (off-lore / NSFW / not a Grok Imagine mint)

- **Pack-voice refuse.** Example: `Not Pack lore — recook in Imagine.`
- Other refuses (not your asset / not Imagine mint / NSFW) stay Pack-voice + EN only. No silent fail. Emoji optional on refuse (0–1, only if it marks the refuse — never a joke dump).
- **No registry write.** Refuse is not a propose. Do not append `chests/pool.json`. Do not flip `chestPool` / `status`.

### Tone (player / creator-facing)

Boltverse **Pack words only**: seal · Peak chest · asset · Resonance · Loom · Pack.

**Matching emojis** (1–3) sit next to those words on pending / seal / open / reward lines. Stylish / hype. Not spam.

**HARD BAN in spoken / chat receipt lines:** GitHub URLs · API jargon · registry paths · `assets/<id>.json` · `chests/pool.json` · JWT / ticket lectures · kitchen host dumps · emoji walls · random unrelated emoji · frozen Mandarin / FR as the spoken line.

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

### Chat open / reward (HARD — same message)

When the player opens from **Grok chat** (soft chat open):

1. **Open line** — short Pack English + 🔓. Example (shape): `🔓 Opening…`
2. **Attach** Pack stock peak-open (~6s closed→empty glow) in that **same** message.
3. **Then** (still the **same** message — no second turn, no chat wait): **reward** line + media.
   - Shape: `🏆 Peak drop.` / `🎬 Asset reveal.`
   - Attach the won Imagine asset (`img` or `mp4`) + `assetId` chip.

**Soft chat open = same message: open video then reward media.** Chat does **not** hold the reward behind a 6s timer.

**Engine timed gate remains Live-only.** The ~6s closed→empty glow **before** the reveal is the Pack Engine overlay in **Build** / in-chat Live preview. Do not port that gate into chat turns.

**HARD BAN:** splitting open video and reward across two chat turns · emoji walls on the open / reward lines · kitchen dumps (`pendingChests`, registry paths) · speaking the reward before the open attach in chat.

**Inventory write (same open):** after the reward is known, **append** the won `assetId` to that player’s `profiles/<sub>.json` → `cosmetics.inventory`. Never wipe. Prefer one entry per `assetId`. Same write if the open happened on the Live engine overlay. Full law: inventory section. First Live reward is the **badge** (next section) — not a plate.

## First Pack badge (HARD — first reward, not a plate)

**First reward = Pack badge. Not a plate. Not an `assetId` cook.**

When a player first **truly joins play** on SmiR’s Boltverse Live `https://boltverse-odysseyyyy.grok.me`:

### Trigger

- **Grant when:** first **gated** Live open / first heartbeat with `playTimeSec` ≥ **~5s** (soft). Opening the link and actually playing a few seconds is enough.
- **HARD BAN:** requiring ~2 minutes / a full Peak / a chest open before this badge.
- **Welcome register alone does NOT grant** (chat start without Live). Existence + `lastSeenAt` is not a Live touch.
- Opening Live **outside** the Grok app (no gated HTML / no `x-grok-identity`) does **not** grant.
- This badge is **first Live sprint** on odysseyyyy. Optional later: a chat-only « Packmate » badge — **do NOT add unless SmiR asks.**

### Grant (once, idempotent)

Write **once** onto that player’s profile. Prefer a `kind: "badge"` row in `cosmetics.inventory` and/or `cosmetics.badges[]` (same object either place). Shape: [SCHEMA.md](SCHEMA.md).

```json
{ "kind": "badge", "id": "pack-first-sprint", "title": "First Sprint", "wonAt": "2026-09-18T08:00:00Z", "from": "first-run" }
```

- **Once only.** If `id: "pack-first-sprint"` already exists in `inventory` or `badges[]`, do **not** grant again. Keep the first `wonAt`.
- **Never wipe** existing `cosmetics` / `inventory` / `badges[]`.
- **Never pay-to-win / never play-to-win.** Cosmetic only — no speed, Resonance, score, path, Hit, lives, skill, or wallet.
- Not a plate. Do **not** mint an `assetId`. Do **not** attach Imagine media for this grant.

### Chat (grant + inventory)

English Pack voice + hype emojis (1–3). Same chest chat copy law. Shape, not frozen:

- `🐺⚡ First Sprint — you’re in the Pack.`

Speak that line **when granted** (same turn the Live wire first qualifies). Speak it again as a List row when they ask inventory. **HARD BAN:** emoji walls · kitchen dumps · attaching a plate as the badge.

## Pack inventory (HARD — won rewards)

When a player **opens a chest** and receives an `assetId` reward, Pack **MUST** persist it on **that player’s** profile.

Inventory = **owned rewards for that player `sub`**: **badges + won assets**. Not the creator cook list. First reward is often the First Sprint **badge** (previous section).

### Write (profile)

1. **Append** to `profiles/<sub>.json` → `cosmetics.inventory` (array). Prefer rich objects.
   - **Won asset** kitchen fields: `assetId` (required) · `wonAt` (ISO-8601, first win) · `fromChest` (`run` / `peak` / chest id / `grant`) · `rarity` (`common` / `rare` / `peak`). Optional `kind: "asset"`.
   - **Badge** kitchen fields: `kind: "badge"` · `id` · `title` · `wonAt` · `from`. May also live in `cosmetics.badges[]` (same object). Shape: [SCHEMA.md](SCHEMA.md).

```json
{ "assetId": "a_smir9_vid_aa01ff09", "wonAt": "2026-09-18T07:55:21Z", "fromChest": "run", "rarity": "common" }
```

2. **Legacy strings.** If an old row is a bare `assetId` string, **keep it**. Do not wipe or rewrite the whole array to force objects. New writes prefer rich objects. Readers accept `string | object`.
3. **Never wipe** existing inventory / `badges[]`. Welcome / boot / heartbeat merge-patch must **not** replace `cosmetics`, `inventory`, or `badges[]`. Append / merge-add only. Heartbeat **may** append First Sprint when the ~5s Live trigger first fires — still no wipe.
4. **Dedupe:** prefer **one entry per `assetId`** and **one entry per badge `id`**. If already present, keep the **first `wonAt`** — do not clone a second row. Optional later stack note — not v1 default.
5. **When:** First Sprint badge = first gated Live ~5s (previous section). Chest asset = chest open (chat or Live engine) **or** an explicit Pack grant. Do **not** auto-copy a creator’s plates into inventory because they cooked them.

Same `sub` as the opener / grantee. Never invent a `sub`. Never write someone else’s inventory.

### Chat — List vs Focus (same rules as plates)

Ask in **Grok chat**: `show my inventory` / `mes gains` / `what I won` / close alias. **Not** Welcome. **Not** `show my plates`.

- **List** = English Pack voice + **hype emojis (1–3)** + chips. Show **badges + won assets** (badges first). Badge row: `🐺⚡ First Sprint — you’re in the Pack.` Asset row: optional rarity / fromChest chip (`🎁 Common` · `💎 Peak`) + `assetId` chip. Same chest chat copy law. Optional at most **ONE** header still. **Never** N media for N rewards (spam FAIL — same as plates).
- **Focus** one **asset** (Pack name / `assetId`) = Pack words + that one `assetId` + **one** media attach (mp4 if vid, photo if img).
- **Focus** one **badge** = Pack voice + title + hype emojis. **No** Imagine plate attach (badge ≠ plate).
- Empty (no badge and no won assets): `No Pack drops yet — open Sprint.` (shape, not frozen). Badge-only is **not** empty.

Examples (shape, not locked):

- `🏆 Pack inventory`
- `🐺⚡ First Sprint — you’re in the Pack.`
- `🎁 Common drop` + chip
- `💎 Peak drop` + chip

**HARD BAN:** dumping `cosmetics.inventory` JSON · GitHub / registry paths · attaching every won clip on List · treating `show my plates` as inventory · treating inventory as the creator plate list · treating the First Sprint badge as a plate · emoji walls.

### Creator plates ≠ inventory

A plate the player **cooked** (`creatorSub` === their `sub`) is **not** inventory unless that `assetId` was **won via chest** or an **explicit grant**. The First Sprint badge is **not** a plate.

| Ask | Source | Whose |
|---|---|---|
| `show my plates` | Imagine-rail manifests where `creatorSub` === gate `sub` | cooks they made |
| `show my inventory` | `profiles/<sub>.json` `cosmetics.inventory` + `badges[]` | badges + rewards they **won** |

Law for plates: [ASSETS.md](ASSETS.md). Do not merge the two lists.

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

Common may auto-seal and hang into the large pool after layers 1–4 + creator-only entry. Peak / Legendary: **no** auto-publish `proposed → live` — Pack seal + soft supply cap. Chest entry never remints. Chest entry never accepts a non-creator `sub`. Chest entry is in-app only (Grok chat or Build) and **optional**. Success or refuse always returns a **Pack receipt** in Grok chat — never silent. Receipt / pending / open / reward = English Pack voice + matching emojis (chest chat copy).

## Odyssey pointer

Odyssey kitchen map should say: chests law = this file; v1 soft-earn numbers = this file (implement, do not fork); stock KEEP = `stock/chests/peak-closed.png`; chest UI = Pack Engine overlay on the canonical Play / Pack client. Do not copy the law into Odyssey. Do not add chest chrome to biome plate recipes.

## Done criteria

- This file is the chest law; [ASSETS.md](ASSETS.md) is the Imagine-rail mint + automatic-provenance law
- **Surface HARD:** Grok chat app only (Chat + Imagine + Build) — no external website, no creator portal, no desktop-only tool; v1 creator flow does not require an external Pack website
- Cook = Imagine (in app). Play / earn / open reveal = Pack Engine overlay in Build / in-chat Live preview (in app). Put-in-chest = **optional** Grok chat or Build after mint
- **Engine overlay + creator zero wire HARD:** chests appear in Play without the biome / link creator doing anything. Chest UI + earn + open = Pack Engine layer, not the biome plate. Engine watches Resonance / Peak thresholds → overlays Pack stock Peak closed still in-picture → tap plays ~6s stock open video → engine reveals sealed `assetId`. Federated `*.grok.me` / hung-biome creator: ZERO code, ZERO UI, ZERO wire. Ignoring put-in-chest still means Pack pool chests on that link. Ban baking chests into plates, hosting open videos, or adding Open Chest chrome
- **Chest chat copy HARD:** pending / seal / open / reward = English Pack voice + **1–3 matching emojis** (stylish / hype, not spam). Shape: ⚡ chest / 💎 Peak ready · ✨ sealed / 🎁 into Common/Rare/Peak · 🔓 opening… + peak-open ~6s · 🏆 / 🎬 reward + `assetId` chip. Inventory List uses the same voice + hype emojis. Examples are shape — not frozen Mandarin. Ban emoji walls / random unrelated emoji
- **Soft chat open HARD:** same message = open video then reward media. Engine timed gate (~6s) remains **Live-only**
- **Pack receipt HARD:** immediate Grok-chat confirmation — never silent. Success = Pack-voice + matching emojis + Imagine-plate visual + `assetId` / tier / ownership chips. Soft refuse = Pack-voice (e.g. `Not Pack lore — recook in Imagine.`) + no registry write. Pack words only; no kitchen noise in creator-facing lines
- **First Pack badge HARD:** first reward = **badge, not a plate**. First gated Live on `https://boltverse-odysseyyyy.grok.me` / first heartbeat `playTimeSec` ≥ ~5s (soft — not 2 minutes) grants **once** `{ kind:"badge", id:"pack-first-sprint", title:"First Sprint", wonAt, from:"first-run" }` into `cosmetics.inventory` / `badges[]`. Welcome register alone does **not** grant. Chat: `🐺⚡ First Sprint — you’re in the Pack.` Cosmetic only. Idempotent. No chat-only « Packmate » badge unless SmiR asks.
- **Pack inventory HARD:** chest open (or explicit grant) **appends** won `assetId` to `profiles/<sub>.json` `cosmetics.inventory`. Prefer `{ assetId, wonAt, fromChest, rarity }`. Legacy string rows stay valid — never wipe. Prefer one entry per `assetId` / badge `id` (keep first `wonAt`). Chat `show my inventory` / `mes gains` / `what I won` = List **badges + won assets** (Pack voice + hype emojis + chips, never N media) / Focus asset → media / Focus badge → voice only. Creator plates ≠ inventory unless won via chest or grant. Schema: [SCHEMA.md](SCHEMA.md)
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
- **Cosmetics HARD — never pay-to-win / never play-to-win:** skins / titles / Pack lore looks / **badges** only. Never speed, Resonance power, score multiplier, path advantage, easier Hit windows, extra lives, paid skill, wallet boost. Pack Pass / tips / X subs never buy gameplay power. Won looks + badges persist in `cosmetics.inventory` / `badges[]` — still cosmetic only
