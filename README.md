# boltverse-registry

## Grok: read COLD_START.md first

**HARD two-phase boot** (replace Beat 3 auto-attach). Why: auto-Build on start is too long / painful; Grok rebuilds instead of using SmiR’s Live.

**Phase 1 — on start / play / lance boltverse odyssey:** spoken/chat text MUST be **EXACTLY** the locked Pack Welcome or Return English block (**zero improvisation, zero extra paragraphs**; English only; live `{playerCount}` from this registry; must include `Hey Packmate {name}` + `Open Sprint — Pack save, zero login.` + `Ready to sprint?` + `Say yes to open Sprint.`) — no Play URL — + **attach** exactly 1 stock `preview-loop.mp4` as chat media (Odyssey epic citadel teaser at `StarBoltSprint/boltverse-odyssey` `stock/citadel/preview-loop.mp4`). Then **stop**. Wait for yes. **HARD BAN at Phase 1:** opening Build, scaffolding, rebuilding from GitHub, attaching Live, new Built-with-Grok project, controls lecture, improvised prose, plate lists. Chat start **reads** `registry.json` for the count; it does **not** upsert profiles. Prefer GitHub for the teaser. Grok may use Grok Bot tools if useful (normal Grok feature). Still: players must not depend on SmiR’s private bots for the boot to work — public GitHub COLD_START remains enough. Do not ask Citadel or Biome. Do **not** invent a cinematic opener.

**Phase 2 — only after the player says yes / go / sprint / open sprint:** **THEN** attach / open playable from the **EXISTING** Live ONLY: `https://boltverse-odysseyyyy.grok.me`. Land **IN** Sprint. No intro splash. No rebuild from GitHub. No new Built-with-Grok project. If attach fails: one short English line + last-resort may paste that odysseyyyy URL — still no scaffold.

**Name:** `{name}` order = Grok profile `displayName` / account name / handle visible in the session UI → registry `displayName` → gate/app name → only then `runner`. If ANY Grok profile `displayName` / account name / handle is visible, **NEVER** say `runner`. Prefer that visible name. Keep `Hey Packmate {name}` (capital P). Example for SmiR: `Hey Packmate SmiR 9`. **Ban:** `Welcome, packmate runner` / lowercase `packmate` without `Hey Packmate {name}`.

**Phase 2 / Play surface:** Interactive Sprint lives on **Build** (tabs: Chat / Imagine / Build) — native Grok Build game console / in-chat playable Live preview pointing at **only** `https://boltverse-odysseyyyy.grok.me`. **Not** Chat Imagine. **Not** the Phase 1 teaser chip as Play. Kitchen only (never speak): land **IN** Sprint play — not a menu / landing / Start splash. **HARD BAN:** scaffold / remix / **recreate the game** / rebuild from GitHub / new Built-with-Grok; new `grok.me` / `grok-sandbox.com` / remix into a fresh slug / any `*.hades-www.grok-sandbox.com` / random sandbox host; inventing an intro / landing page that requires tapping « Open Sprint » / Start before play. **HARD BAN:** `https://boltverse-odysseyyy.grok.me` (three y’s — superseded), `boltverse-odyssey.grok.me` frost-only, heart-giant, houla, olive, or any other slug as Phase 2 Sprint. If Build would create a new project / recreate / splash / rebuild: **REFUSE** and reopen / attach the existing odysseyyyy Live. Do not paste the URL when attach works. Do **not** narrate the attach.

**Player reply ALLOWED only:** Phase 1 = locked Welcome/Return EN block + attach 1 citadel teaser (then wait). Phase 2 = after yes, Build attach existing odysseyyyy Live. **ZERO improvisation. ZERO extra paragraphs.** **HARD BAN at boot (spoken/chat):** « Bolt is already on the road » / « the world is rolling » / « the film keeps moving » / « plant a lane » / « no menu to click through »; any A/D / W / space / swipe control tutorial; any engine essay; invented plate/cassette lore names (`The First Spark` / `Neon Drift` / `Circuit Breaker` / `Velocity Pulse`); plate deck lists; « Tap Open Sprint »; registry lectures; kitchen noise. Plate names: silent at boot; if forced, dealer order canyon → cars → duel → night → war / `assets/plates-index.json` — never invent.

→ **[COLD_START.md](COLD_START.md)**

## Kitchen: Pack federation wire

Any `*.grok.me` Live auto-joins central Pack profiles. Identity = Grok gate `sub`, not the URL. Writes go to the **central Pack API** — one kitchen host: `https://boltverse-odysseyyyy.grok.me`. Old `https://boltverse-odysseyyy.grok.me` (three y’s) is superseded — not Pack Play, not Beat 3 Sprint.

**Hard profile upsert / `gateSub` write** = player **opens Play Live from the Grok app** (gated document / JWT). Chat-only start does **not** write. Welcome `{playerCount}` = real `registry.json` players (drop `pack-wire-*` / `pack-doc-*` / Decode Probe / Pack probe). Odyssey `START.md` / `GROK.md` / `AGENTS.md` / README should mirror [COLD_START.md](COLD_START.md) **two-phase boot** (Phase 1 teaser-only + `Say yes to open Sprint.`; Phase 2 after yes = existing odysseyyyy Live only) + name + no-recreate / no-GitHub-rebuild / no-intro-splash + **exact Welcome/Return only (zero improvisation)** locks (Director sync).

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

New Grok session: load `profiles/<userId>.json` (or lookup `registry.json`) before the console teaser. Read live Pack count for `{playerCount}` (probes excluded). Chat start does not upsert — hard write is gated Live open. **Phase 1** spoken boot = **EXACTLY** the locked Welcome or Return English block (`Ready to sprint?` + `Say yes to open Sprint.`) + 1 citadel teaser — zero improvisation, zero extra paragraphs, **no Build / no Live attach**. **Phase 2** only after yes / go / sprint / open sprint: attach existing `https://boltverse-odysseyyyy.grok.me`. Full Welcome copy: [COLD_START.md](COLD_START.md).

No wallets. No player API keys. Remix federation = point at existing Play URLs — do not scaffold / remix / recreate / rebuild a new site per ask. Phase 2 attaches **only** `https://boltverse-odysseyyyy.grok.me` — never a new slug, sandbox host, Built-with-Grok project, GitHub rebuild, or intro / Start splash. Player lands IN the Sprint.

## First ship Play

SmiR canonical Live (remix off): https://boltverse-odysseyyyy.grok.me
Phase 2 / Pack Play lock: that Live only, and only after yes. Ban `https://boltverse-odysseyyy.grok.me` (three y’s — superseded), `*.hades-www.grok-sandbox.com`, new grok.me, Built-with-Grok rebuild, recreate + intro splash, frost-only / heart-giant / houla / olive slugs.
