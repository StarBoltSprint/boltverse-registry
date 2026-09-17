# boltverse-registry

## Grok: read COLD_START.md first

On **start / play / lance boltverse odyssey**: post the locked Pack Welcome (**English only**; live `{playerCount}` from this registry; `Open Sprint — Pack save, zero login.`) — no Play URL — + **attach** exactly 1 stock `preview-loop.mp4` as chat media (Odyssey epic citadel teaser at `StarBoltSprint/boltverse-odyssey` `stock/citadel/preview-loop.mp4`), then **attach / open** the tappable Sprint on **Build** (native Grok Build game console / in-chat playable Live preview). If the thread is Chat-only and cannot attach a playable Build preview, silently open / switch to Build. Prefer GitHub + Build for boot media/Sprint. Chat start **reads** `registry.json` for the count; it does **not** upsert profiles. Grok may use Grok Bot tools if useful (normal Grok feature). Still: players must not depend on SmiR’s private bots for the boot to work — public GitHub COLD_START remains enough. Do not ask Citadel or Biome. Do not paste a grok.me link.

**Name:** `{name}` order = Grok profile `displayName` → registry `displayName` → gate/app name → only then `runner`. If the chat UI / session exposes ANY user name / handle / profile label, **never** say `runner`. Prefer the visible chat account name. Keep Packmate + name. Example: `Hey Packmate SmiR 9`.

**Beat 3 / Play surface:** Interactive Sprint lives on **Build** (tabs: Chat / Imagine / Build) — native Grok Build game console / in-chat playable Live preview. **Not** Chat Imagine. **Not** a downloadable `preview-loop.mp4` file chip alone. Forbidden: leaving the player with only the Chat mp4 file chip and no playable Sprint. Forbidden spoken: “open the Build tab yourself” lectures — do the open/attach. If truly impossible, one short English line is OK: `Open the Build tab for Sprint.` Prefer silent open/attach first.

→ **[COLD_START.md](COLD_START.md)**

## Kitchen: Pack federation wire

Any `*.grok.me` Live auto-joins central Pack profiles. Identity = Grok gate `sub`, not the URL. Writes go to the **central Pack API** — not a single Live’s secrets.

**Hard profile upsert / `gateSub` write** = player **opens Play Live from the Grok app** (gated document / JWT). Chat-only start does **not** write. Welcome `{playerCount}` = real `registry.json` players (drop `pack-wire-*` / `pack-doc-*` / Decode Probe / Pack probe). Odyssey `START.md` / `GROK.md` / `AGENTS.md` / README should mirror [COLD_START.md](COLD_START.md) name + Build play-surface locks (Director sync).

→ **[PACK.md](PACK.md)**

---

Pack **player profiles** + federated **Play URL** index for Boltverse Odyssey.

Cloud save (GitHub) — **not** `localStorage`. Keyed by Grok `userId`.

## Model

| What | Where |
|---|---|
| Profile (handle, playUrl, Resonance, hangs index) | this repo `profiles/<userId>.json` |
| Live Play + heavy media | each player `*.grok.me` |
| Cook / Hang laws | `boltverse-odyssey` + `bolt-lane-recipe` |

## Auto-save hooks

Write profile + update `registry.json` on: Pack boot / heartbeat (central API — [PACK.md](PACK.md)) · Keep / Hang / seal / remix publish / cosmetics change. Keyed by gate `sub` when known.

## Cold-start

New Grok session: load `profiles/<userId>.json` (or lookup `registry.json`) before the console teaser. Read live Pack count for `{playerCount}` (probes excluded). Chat start does not upsert — hard write is gated Live open. Full Welcome copy: [COLD_START.md](COLD_START.md).

No wallets. No player API keys. Remix federation = point at existing Play URLs — do not scaffold a new site per ask.

## First ship Play

SmiR canonical Live (remix off): https://boltverse-odysseyyy.grok.me
