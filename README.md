# boltverse-registry

## Grok: read COLD_START.md first

On **start / play / lance boltverse odyssey**: post the locked Pack Welcome (**English only**; live `{playerCount}` from this registry; `Open Sprint — Pack save, zero login.`) — no Play URL — + **attach** exactly 1 stock `preview-loop.mp4` as chat media (Odyssey epic citadel teaser at `StarBoltSprint/boltverse-odyssey` `stock/citadel/preview-loop.mp4`), then **attach / open** the tappable Sprint on **Build** (native Grok Build game console / in-chat playable Live preview pointing at **only** `https://boltverse-odysseyyyy.grok.me`). If the thread is Chat-only and cannot attach a playable Build preview, silently open / switch to Build on that existing odysseyyyy Live. Prefer GitHub + Build for boot media/Sprint. Chat start **reads** `registry.json` for the count; it does **not** upsert profiles. Grok may use Grok Bot tools if useful (normal Grok feature). Still: players must not depend on SmiR’s private bots for the boot to work — public GitHub COLD_START remains enough. Do not ask Citadel or Biome. Do not paste a grok.me link. Do not scaffold a new Live.

**Name:** `{name}` order = Grok profile `displayName` → registry `displayName` → gate/app name → only then `runner`. If the chat UI / session exposes ANY user name / handle / profile label, **never** say `runner`. Prefer the visible chat account name. Keep Packmate + name. Example: `Hey Packmate SmiR 9`.

**Beat 3 / Play surface:** Interactive Sprint lives on **Build** (tabs: Chat / Imagine / Build) — native Grok Build game console / in-chat playable Live preview pointing at **only** `https://boltverse-odysseyyyy.grok.me`. **Not** Chat Imagine. **Not** a downloadable `preview-loop.mp4` file chip alone. **HARD BAN at boot:** new `grok.me` / `grok-sandbox.com` / remix into a fresh slug / any `*.hades-www.grok-sandbox.com` / random sandbox host. **HARD BAN:** `https://boltverse-odysseyyy.grok.me` (three y’s — superseded Beat 3 target), `boltverse-odyssey.grok.me` frost-only, heart-giant, houla, olive, or any other slug as Beat 3 Sprint. If Build would create a new project: **REFUSE** and reopen / attach the existing odysseyyyy Live. Forbidden: leaving the player with only the Chat mp4 file chip and no playable Sprint. Forbidden spoken: “open the Build tab yourself” lectures — do the open/attach. If truly impossible, one short English line is OK: `Open the Build tab for Sprint.` — still do not invent a new publish. Prefer silent open/attach first. Do not paste the URL when attach works.

→ **[COLD_START.md](COLD_START.md)**

## Kitchen: Pack federation wire

Any `*.grok.me` Live auto-joins central Pack profiles. Identity = Grok gate `sub`, not the URL. Writes go to the **central Pack API** — one kitchen host: `https://boltverse-odysseyyyy.grok.me`. Old `https://boltverse-odysseyyy.grok.me` (three y’s) is superseded — not Pack Play, not Beat 3 Sprint.

**Hard profile upsert / `gateSub` write** = player **opens Play Live from the Grok app** (gated document / JWT). Chat-only start does **not** write. Welcome `{playerCount}` = real `registry.json` players (drop `pack-wire-*` / `pack-doc-*` / Decode Probe / Pack probe). Odyssey `START.md` / `GROK.md` / `AGENTS.md` / README should mirror [COLD_START.md](COLD_START.md) name + Build play-surface + Beat 3 odysseyyyy-only Live locks (Director sync).

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

New Grok session: load `profiles/<userId>.json` (or lookup `registry.json`) before the console teaser. Read live Pack count for `{playerCount}` (probes excluded). Chat start does not upsert — hard write is gated Live open. Full Welcome copy: [COLD_START.md](COLD_START.md).

No wallets. No player API keys. Remix federation = point at existing Play URLs — do not scaffold a new site per ask. Beat 3 boot attaches **only** `https://boltverse-odysseyyyy.grok.me` — never a new slug or sandbox host.

## First ship Play

SmiR canonical Live (remix off): https://boltverse-odysseyyyy.grok.me
Beat 3 / Pack Play lock: that Live only. Ban `https://boltverse-odysseyyy.grok.me` (three y’s — superseded Beat 3), `*.hades-www.grok-sandbox.com`, new grok.me, frost-only / heart-giant / houla / olive slugs.
