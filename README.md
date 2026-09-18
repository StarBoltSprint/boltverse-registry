# boltverse-registry

## Grok: read COLD_START.md first

> **PRIORITY 0 — on start / play / lance boltverse odyssey: Grok MUST NOT Build anything.** **Even on the Build tab.** Start = **chat-only** Welcome + citadel teaser + paste `https://boltverse-odysseyyyy.grok.me` then **STOP**. No Implementing Sprint / LanePlayer / Copying game assets / Configuring the build / Merging styles / SSR guards / « Built with Grok » / preview from the recipe / file edits for boot. **Any Build / tooling after those three beats = FAIL.** Full callout: [COLD_START.md](COLD_START.md).

**FINAL Phase 1 — SAME first chat reply:** (1) locked Welcome/Return EN only (`Hey Packmate {name}` … `Ready to sprint?`) (2) attach 1 citadel teaser (`StarBoltSprint/boltverse-odyssey` `stock/citadel/preview-loop.mp4`) (3) paste written tappable URL `https://boltverse-odysseyyyy.grok.me`. Then **STOP**. Player can tap now. **Do not** require a separate yes-turn. **Do not** keep going after the paste — even if already on the Build tab. **ZERO improvisation.** **Welcome = Pack register via GitHub Action `pack-welcome`:** if a real `sub` is known, fire `gh workflow run pack-welcome.yml -f sub=…` (or `repository_dispatch` type `pack-welcome`) — merge-patch existence + lastSeen; never invent a `sub`. **HARD: Welcome write host is this Action — NOT `boltverse-odysseyyyy.grok.me` / any `*.grok.me` Pack API.** Welcome succeeds even if Live 404. `{playerCount}` includes this player after a successful write / dispatch. Prefer GitHub for the teaser + register. Ban Build. Ban rebuild. Ban LanePlayer / copy-assets / configure-the-build / merge-styles / SSR-guards / file-edits-for-boot. Old « chat start does not upsert » is **SUPERSEDED**. Old « never paste grok.me » is **SUPERSEDED for this first-reply odysseyyyy paste only**. Still ban random / new slugs / sandbox / three-y `https://boltverse-odysseyyy.grok.me`. Grok may use Grok Bot tools if useful. Players must not depend on SmiR’s private bots — public GitHub COLD_START remains enough.

**Name:** `{name}` order = Grok profile `displayName` / account name / handle visible in the session UI → registry `displayName` → gate/app name → only then `runner`. If ANY Grok profile `displayName` / account name / handle is visible, **NEVER** say `runner`. Prefer that visible name. Keep `Hey Packmate {name}` (capital P). Example for SmiR: `Hey Packmate SmiR 9`. **Ban:** `Welcome, packmate runner` / lowercase `packmate` without `Hey Packmate {name}`.

**Pack profile + playTime:** Welcome register (start / Welcome) = GitHub Action `pack-welcome` / `scripts/pack-welcome.mjs` — existence + `lastSeenAt` when `sub` known. **NOT** a `*.grok.me` Pack API. **Phase 2 playTime path** = **TEMPORARY** `https://boltverse-pack.vercel.app` (`StarBoltSprint/boltverse-pack`) — `playTimeSec` / heartbeats. Lives freeze — not the forever home; long-term Pack stays inside the Grok sandbox. Kitchen may name the URL; **do not** put Vercel in player-facing Welcome copy. **HARD BAN:** four-y / any Live as the Pack API (Lives freeze; four-y 404s Pack routes). Lives set `window.BOLTVERSE_PACK_ORIGIN=https://boltverse-pack.vercel.app` and load `/client/pack.js` from there. **First gated Live open = auto register** (player does nothing else). Welcome must succeed if Live 404 / frozen. Welcome does **not** fake playTime. Never invent a `sub`. Never wipe cosmetics / starCore / resonance / pendingChests. No wallet. No player API keys. **Pack wire is automatic — never a player ask.** Ban « install Pack wire » as a player brief. Live floor: Odyssey `biome/docs/07-pack-live.md`. Full wire: [PACK.md](PACK.md) / [COLD_START.md](COLD_START.md).

**HARD BAN at boot (spoken/chat):** « Bolt is already on the road » / « the world is rolling » / « the film keeps moving » / « plant a lane » / « no menu to click through »; any A/D / W / space / swipe control tutorial; any engine essay; invented plate/cassette lore names; plate deck lists; « Tap Open Sprint »; registry lectures; kitchen noise. Plate names: silent at boot; if forced, dealer order canyon → cars → duel → night → war / `assets/plates-index.json` — never invent.

→ **[COLD_START.md](COLD_START.md)**

## Kitchen: Pack federation wire

Any `*.grok.me` Live auto-joins central Pack profiles. Identity = Grok gate `sub`, not the URL. **Welcome writes** go to GitHub Action `pack-welcome` — **not** a grok.me host. **playTime writes** go to **TEMPORARY** `https://boltverse-pack.vercel.app` (`StarBoltSprint/boltverse-pack`, Phase 2) — **HARD BAN** four-y / any Live as the Pack API. Lives freeze — not the forever home. Kitchen may name the URL; **do not** put Vercel in player-facing Welcome copy. Lives set `window.BOLTVERSE_PACK_ORIGIN=https://boltverse-pack.vercel.app` + load `/client/pack.js` from there. **First gated Live open = auto register** (player does nothing else). Thin same-origin Live proxy later is allowed; registry writes must not depend on Live secrets or Live uptime. Old `https://boltverse-odysseyyy.grok.me` (three y’s) is superseded — not Pack Play, not Beat 3 Sprint. **HARD — Pack wire is automatic:** players must NEVER tell Grok « install Pack wire / plate views / playTime ». Recipe floor: `BOLTVERSE_PACK_ORIGIN=https://boltverse-pack.vercel.app` + plate dealer `assetId` stats. When Grok creates plates / biome / citadel, mint `assetId`s + wire stats automatically ([ASSETS.md](ASSETS.md) / Odyssey `biome/docs/07-pack-live.md` / [CHESTS.md](CHESTS.md)). Ban treating Pack wire as a manual Build chore.

**Welcome register** = start / Welcome fires GitHub Action `pack-welcome` (`gh workflow run pack-welcome.yml -f sub=…` or `repository_dispatch` type `pack-welcome`) when `sub` known (existence + lastSeen; canonical `playUrl=https://boltverse-odysseyyyy.grok.me`). **HARD: not any `*.grok.me`.** **playTime** = Phase 2 TEMPORARY `https://boltverse-pack.vercel.app` (`BOLTVERSE_PACK_ORIGIN` + `/client/pack.js`). First gated Live open = auto register. Welcome succeeds if Live 404 / frozen. Pack wire is recipe floor — never a player ask. Welcome `{playerCount}` = real `registry.json` players after that upsert (drop `pack-wire-*` / `pack-doc-*` / Decode Probe / Pack probe). Odyssey `START.md` / `GROK.md` / `AGENTS.md` / README / `biome/docs/07-pack-live.md` should mirror [COLD_START.md](COLD_START.md) **same-first-reply boot** (locked Welcome + citadel teaser + paste `https://boltverse-odysseyyyy.grok.me`; no yes-wait; PRIORITY 0 no Build / no rebuild; **even on Build tab: chat-only then STOP**) + **Welcome register via GitHub Action when sub known** + automatic Pack wire + boltverse-pack playTime + name + **exact Welcome/Return only (zero improvisation)** locks (Director sync).

→ **[PACK.md](PACK.md)**

## Kitchen: Pack Den (official player chat)

**HARD LOCK:** official player-to-player chat = **Pack Den** on X. Exact join URL (never invent another): `https://x.com/i/chat/group_join/g2028659912277180482/M364z39064`. On ask (den / Pack chat / player chat / X chat / where players talk / exchange) → English Pack voice + paste that URL (one short EN line + the link). Do **not** claim chat is inside Grok Chat 1:1 or the Live iframe. Do **not** invent Discord / Telegram / other links. Welcome may optionally mention `Pack Den is on X.` in one short EN line — do **not** spam the long URL on every Welcome. v1 = open X (native). In-game button / tap that opens this same URL is allowed later. Embed iframe of X Chat is banned.

→ **[PACK.md](PACK.md)**

## Kitchen: Assets (Imagine-rail mint)

Mint `assetId` **only** when a Grok Imagine cook completes through the Pack / Boltverse cook rail. **Cook = Imagine (in the Grok chat app).** Provenance is **automatic** (server / rail — `creatorSub`, `source: grok-imagine`, `contentHash`, `kind`, `createdAt`, optional `cookId` / `threadId` / `railsVersion`). Player never supplies proof. Format `a_<sub>_<img|vid>_<hash8>`. Same hash = same id; first creator keeps ownership. **HARD LOCK:** Grok Imagine cook-rail img / vid only. **HARD BAN:** player file upload / X/Twitter URL / Drive / Discord / arbitrary mp4-img URL / Spotify / external mp3 / non-Grok uploads / manual proof. Ask in **Grok chat** (`show my plates` / close alias) → **List** own plates (`creatorSub` === gate `sub`) as Pack voice + `assetId` chips only (short cassette counts OK; optional at most ONE header still — never N media). **Focus** one plate (name / role / `assetId`) → fuller cassette stats + that one media attach. Cassette `stats.views` / `playTimeSec` / `players` = real or `0` — never invent, never pay-to-win. Never Sprint HUD, never GitHub-path dumps.

→ **[ASSETS.md](ASSETS.md)**

## Kitchen: Chests (Pack SoT for rewards)

**HARD — all-in Grok chat app** (Chat + Imagine + Build): cook = Imagine; play / earn / open reveal = **Pack Engine overlay** in Build game console / in-chat Live preview (not the biome plate); put-in-chest = **optional** Grok chat or Build after mint. Immediate **Pack receipt** in Grok chat (never silent). **HARD — engine overlay / creator zero wire:** chests appear in Play without the biome / link creator doing anything. Engine watches Resonance / Peak run thresholds → overlays Pack stock Peak closed still in-picture → tap plays ~6s stock open video → engine reveals sealed `assetId`. Federated `*.grok.me` / hung-biome creator: ZERO code, ZERO UI, ZERO wire. Ignoring put-in-chest still means Pack pool chests on that link. Ban baking chests into plates, hosting open videos, or adding Open Chest chrome. No external Pack website / creator portal / desktop-only tool for v1. Run-earned **cosmetic** chests — not daily login, not AFK wall-clock. **v1 soft earn:** player-local day (Europe-friendly); max **2 / day**; **1 Run chest** (1st armed Peak, ~45–60s + `m`) + **1 Peak chest** (2nd higher threshold, Legendary lean). Optional Pack Pass later = +1 soft drop. **HARD — never pay-to-win / never play-to-win:** skins / titles / Pack lore only — never speed, Resonance power, score multiplier, path advantage, easier Hit windows, extra lives, paid skill, wallet boost. Peak crystal KEEP. Chest **references** an existing Imagine-rail `assetId` — does not mint. **Only the creator** can put THEIR `assetId` in (caller `sub` MUST match `creatorSub`). **Rarity:** Common = auto seal, large pool; Rare = Loom / Resonance / tips / low supply signals; Peak / Legendary = Pack seal + soft supply cap — **not** a beauty / pixel AI score. NSFW layers are hard. Profiles stay separate from asset manifests.

→ **[CHESTS.md](CHESTS.md)**

---

Pack **player profiles** + federated **Play URL** index for Boltverse Odyssey.

Cloud save (GitHub) — **not** `localStorage`. Keyed by Grok `userId`.

## Model

| What | Where |
|---|---|
| Profile (handle, playUrl, Resonance, hangs index) | this repo `profiles/<userId>.json` |
| Grok asset manifests (`assetId` Imagine-rail mint) | this repo [ASSETS.md](ASSETS.md) — `assets/<assetId>.json` |
| Chest pool (references existing `assetId`s) | this repo [CHESTS.md](CHESTS.md) — optional `chests/pool.json` |
| Peak crystal KEEP (closed still) | `boltverse-odyssey` `stock/chests/peak-closed.png` |
| First Sprint badge KEEP (9:16, Common `guaranteedFirst`) | `boltverse-odyssey` `stock/badges/first-sprint-9x16.png` — first chest after Live ~5s+ |
| Live Play + heavy media | each player `*.grok.me` |
| Cook / Hang laws | `boltverse-odyssey` + `bolt-lane-recipe` |

## Auto-save hooks

Write profile + update `registry.json` on: Welcome register (chat start when `sub` known — GitHub Action `pack-welcome` / `scripts/pack-welcome.mjs`; existence + lastSeen; **not** `*.grok.me`) · Pack boot / heartbeat on `StarBoltSprint/boltverse-pack` (Phase 2 playTime — [PACK.md](PACK.md); heartbeat = `playTimeSec`; **not** any Live) · Keep / Hang / seal / remix publish / cosmetics change. Keyed by gate `sub` when known. Never invent a `sub`. Never wipe cosmetics / starCore / resonance / pendingChests.

## Cold-start

New Grok session: load `profiles/<userId>.json` (or lookup `registry.json`) before the console teaser — New vs Return from the file that already exists. If a real `sub` is known, **fire Action `pack-welcome`** (Welcome register: existence + lastSeen; merge-patch; never wipe resonance / starCore / cosmetics / pendingChests; never invent a `sub`; **not** a grok.me Pack API). Read live Pack count for `{playerCount}` (probes excluded; include this player after a successful write / dispatch). playTime / heartbeats = Phase 2 `boltverse-pack` (not Live). Welcome succeeds if Live 404 / frozen. **First reply** = **EXACTLY** the locked Welcome or Return English block (`Ready to sprint?` may stay) + 1 citadel teaser + paste `https://boltverse-odysseyyyy.grok.me`. Then **STOP**. Zero improvisation. **No Build. No rebuild. No yes-wait. Even on the Build tab.** No Implementing Sprint / LanePlayer / Copying game assets / Configuring the build / Merging styles / SSR guards / preview from the recipe / file edits for boot. **Any Build / tooling after those three beats = FAIL.** Full Welcome copy: [COLD_START.md](COLD_START.md).

No wallets. No player API keys. Remix federation = point at existing Play URLs — do not scaffold / remix / recreate / rebuild a new site per ask. First reply pastes **only** `https://boltverse-odysseyyyy.grok.me` — never a new slug, sandbox host, Built-with-Grok project, GitHub rebuild, invented playable card, or LanePlayer implement after the paste. Prefer the player taps it inside the Grok app.

## First ship Play

SmiR canonical Live (remix off): https://boltverse-odysseyyyy.grok.me
Pack Play lock: paste that Live URL in the first reply. Then STOP. Ban `https://boltverse-odysseyyy.grok.me` (three y’s — superseded), `*.hades-www.grok-sandbox.com`, new grok.me, Built-with-Grok scaffold, GitHub rebuild, invented playable card, LanePlayer / copy-assets / configure-the-build after paste, frost-only / heart-giant / houla / olive slugs.
