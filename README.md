# boltverse-registry

## Grok: read COLD_START.md first

On **start / play / lance boltverse odyssey**: post the locked Pack Welcome (no Play URL) + **attach** the 2 stock `preview-loop.mp4` teasers as chat media, then **attach / open** the tappable Sprint as an in-chat Build game preview (playable card / Live preview). If that attach is unavailable, silently open the native Build game console. Prefer GitHub + Build for boot media/Sprint. Grok may use Grok Bot tools if useful (normal Grok feature). Still: players must not depend on SmiR’s private bots for the boot to work — public GitHub COLD_START remains enough. Do not ask Citadel or Biome. Do not paste a grok.me link.

→ **[COLD_START.md](COLD_START.md)**

## Kitchen: Pack federation wire

Any `*.grok.me` Live auto-joins central Pack profiles. Identity = Grok gate `sub`, not the URL. Writes go to the **central Pack API** — not a single Live’s secrets.

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

New Grok session: load `profiles/<userId>.json` (or lookup `registry.json`) before console teasers. Full Welcome copy: [COLD_START.md](COLD_START.md).

No wallets. No player API keys. Remix federation = point at existing Play URLs — do not scaffold a new site per ask.

## First ship Play

SmiR canonical Live (remix off): https://boltverse-odysseyyy.grok.me
