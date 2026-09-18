# boltverse-registry

## Grok: read COLD_START.md first

**HARD simpler two-phase boot.** Why: auto-Build / Build attach is too long / painful; Grok scaffolds « Built with Grok » or rebuilds from GitHub instead of using SmiR’s Live.

**Phase 1 — on start / play / lance boltverse odyssey:** spoken/chat text MUST be **EXACTLY** the locked Pack Welcome or Return English block (**zero improvisation, zero extra paragraphs**; English only; live `{playerCount}` from this registry; must include `Hey Packmate {name}` + `Open Sprint — Pack save, zero login.` + `Ready to sprint?` + `Say yes to open Sprint.`) — **no Play URL** — + **attach** exactly 1 stock `preview-loop.mp4` as chat media (Odyssey epic citadel teaser at `StarBoltSprint/boltverse-odyssey` `stock/citadel/preview-loop.mp4`). Then **stop**. Wait for yes. **HARD BAN at Phase 1:** opening Build, scaffolding, rebuilding from GitHub, attaching Live, pasting any `*.grok.me`, new Built-with-Grok project, invented playable card, controls lecture, improvised prose, plate lists. Chat start **reads** `registry.json` for the count; it does **not** upsert profiles. Prefer GitHub for the teaser. Grok may use Grok Bot tools if useful (normal Grok feature). Still: players must not depend on SmiR’s private bots for the boot to work — public GitHub COLD_START remains enough. Do not ask Citadel or Biome. Do **not** invent a cinematic opener.

**Phase 2 — only after the player says yes / go / sprint / open sprint:** **PASTE** the written URL `https://boltverse-odysseyyyy.grok.me` in chat so the player taps it. Prefer in-Grok-app open of that Live. **Beat 3 / Phase 2 = that written URL paste** — ALLOWED and **preferred over Build attach**. Old ban « never paste grok.me » is **SUPERSEDED for this Phase 2 only**. Still ban random / new slugs / sandbox / three-y `https://boltverse-odysseyyy.grok.me`. **HARD BAN Phase 2:** Grok Build scaffold / « Built with Grok » new project / rebuild from GitHub / invent a playable card from the recipe.

**Name:** `{name}` order = Grok profile `displayName` / account name / handle visible in the session UI → registry `displayName` → gate/app name → only then `runner`. If ANY Grok profile `displayName` / account name / handle is visible, **NEVER** say `runner`. Prefer that visible name. Keep `Hey Packmate {name}` (capital P). Example for SmiR: `Hey Packmate SmiR 9`. **Ban:** `Welcome, packmate runner` / lowercase `packmate` without `Hey Packmate {name}`.

**Pack profile + playTime:** still write **only** when that Live opens **inside the Grok app** (gated HTML + `x-grok-identity` + `/v1/pack/boot` + heartbeat `playTimeSec`). Chat-only start / yes / a pasted URL the player never opens does **not** upsert. Full wire: [PACK.md](PACK.md) / [COLD_START.md](COLD_START.md).

**Player reply ALLOWED only:** Phase 1 = locked Welcome/Return EN block + attach 1 citadel teaser (then wait). Phase 2 = after yes, paste `https://boltverse-odysseyyyy.grok.me`. **ZERO improvisation. ZERO extra paragraphs.** **HARD BAN at boot (spoken/chat):** « Bolt is already on the road » / « the world is rolling » / « the film keeps moving » / « plant a lane » / « no menu to click through »; any A/D / W / space / swipe control tutorial; any engine essay; invented plate/cassette lore names (`The First Spark` / `Neon Drift` / `Circuit Breaker` / `Velocity Pulse`); plate deck lists; « Tap Open Sprint »; registry lectures; kitchen noise. Plate names: silent at boot; if forced, dealer order canyon → cars → duel → night → war / `assets/plates-index.json` — never invent.

→ **[COLD_START.md](COLD_START.md)**

## Kitchen: Pack federation wire

Any `*.grok.me` Live auto-joins central Pack profiles. Identity = Grok gate `sub`, not the URL. Writes go to the **central Pack API** — one kitchen host: `https://boltverse-odysseyyyy.grok.me`. Old `https://boltverse-odysseyyy.grok.me` (three y’s) is superseded — not Pack Play, not Beat 3 Sprint.

**Hard profile upsert / `gateSub` write / `playTimeSec`** = player **opens that Live inside the Grok app** (gated HTML + `x-grok-identity` + `/v1/pack/boot` + heartbeat). Chat-only start / yes / unopened paste does **not** write. Welcome `{playerCount}` = real `registry.json` players (drop `pack-wire-*` / `pack-doc-*` / Decode Probe / Pack probe). Odyssey `START.md` / `GROK.md` / `AGENTS.md` / README should mirror [COLD_START.md](COLD_START.md) **two-phase boot** (Phase 1 teaser-only + `Say yes to open Sprint.` + no Build; Phase 2 after yes = **paste** `https://boltverse-odysseyyyy.grok.me`, preferred over Build attach; old « never paste grok.me » superseded here only) + gated in-Grok-app upsert + name + no-scaffold / no-Built-with-Grok / no-GitHub-rebuild + **exact Welcome/Return only (zero improvisation)** locks (Director sync).

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
| Live Play + heavy media | each player `*.grok.me` |
| Cook / Hang laws | `boltverse-odyssey` + `bolt-lane-recipe` |

## Auto-save hooks

Write profile + update `registry.json` on: Pack boot / heartbeat (central API — [PACK.md](PACK.md)) · Keep / Hang / seal / remix publish / cosmetics change. Keyed by gate `sub` when known.

## Cold-start

New Grok session: load `profiles/<userId>.json` (or lookup `registry.json`) before the console teaser. Read live Pack count for `{playerCount}` (probes excluded). Chat start / yes / unopened paste does not upsert — hard write is gated in-Grok-app Live open (`x-grok-identity` + boot + heartbeat `playTimeSec`). **Phase 1** spoken boot = **EXACTLY** the locked Welcome or Return English block (`Ready to sprint?` + `Say yes to open Sprint.`) + 1 citadel teaser — zero improvisation, zero extra paragraphs, **no Build / no URL**. **Phase 2** only after yes / go / sprint / open sprint: **paste** `https://boltverse-odysseyyyy.grok.me` (preferred over Build attach). Full Welcome copy: [COLD_START.md](COLD_START.md).

No wallets. No player API keys. Remix federation = point at existing Play URLs — do not scaffold / remix / recreate / rebuild a new site per ask. Phase 2 pastes **only** `https://boltverse-odysseyyyy.grok.me` — never a new slug, sandbox host, Built-with-Grok project, GitHub rebuild, or invented playable card. Prefer the player taps it inside the Grok app.

## First ship Play

SmiR canonical Live (remix off): https://boltverse-odysseyyyy.grok.me
Phase 2 / Pack Play lock: paste that Live URL only, and only after yes. Ban `https://boltverse-odysseyyy.grok.me` (three y’s — superseded), `*.hades-www.grok-sandbox.com`, new grok.me, Built-with-Grok scaffold, GitHub rebuild, invented playable card, frost-only / heart-giant / houla / olive slugs.
