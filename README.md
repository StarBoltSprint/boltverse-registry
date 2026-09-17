# boltverse-registry

## Grok: read COLD_START.md first

On **start / play / lance boltverse odyssey**: post the locked Pack Welcome (**English only**; live `{playerCount}` from this registry; `Open Sprint — Pack save, zero login.`) — no Play URL — + **attach** the 2 stock `preview-loop.mp4` teasers as chat media, then **attach / open** the tappable Sprint as an in-chat Build game preview (playable card / Live preview). If that attach is unavailable, silently open the native Build game console. Prefer GitHub + Build for boot media/Sprint. Chat start **reads** `registry.json` for the count; it does **not** upsert profiles. Grok may use Grok Bot tools if useful (normal Grok feature). Still: players must not depend on SmiR’s private bots for the boot to work — public GitHub COLD_START remains enough. Do not ask Citadel or Biome. Do not paste a grok.me link.

→ **[COLD_START.md](COLD_START.md)**

## Kitchen: Pack federation wire

Any `*.grok.me` Live auto-joins central Pack profiles. Identity = Grok gate `sub`, not the URL. Writes go to the **central Pack API** — not a single Live’s secrets.

**Hard profile upsert / `gateSub` write** = player **opens Play Live from the Grok app** (gated document / JWT). Chat-only start does **not** write. Welcome `{playerCount}` = real `registry.json` players (drop `pack-wire-*` / `pack-doc-*` / Decode Probe / Pack probe). Odyssey `START.md` / `GROK.md` / `AGENTS.md` should mirror [COLD_START.md](COLD_START.md) (Director sync).

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

New Grok session: load `profiles/<userId>.json` (or lookup `registry.json`) before console teasers. Read live Pack count for `{playerCount}` (probes excluded). Chat start does not upsert — hard write is gated Live open. Full Welcome copy: [COLD_START.md](COLD_START.md).

No wallets. No player API keys. Remix federation = point at existing Play URLs — do not scaffold a new site per ask.

## First ship Play

SmiR canonical Live (remix off): https://boltverse-odysseyyy.grok.me
