# boltverse-registry

## Grok: read COLD_START.md first

On **start / play / lance boltverse odyssey**: post the locked Pack Welcome + 2 stock teasers, then open Play.

→ **[COLD_START.md](COLD_START.md)**

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

Write profile + update `registry.json` on: Keep / Hang / seal / remix publish / cosmetics change.

## Cold-start

New Grok session: load `profiles/<userId>.json` (or lookup `registry.json`) before console teasers. Full Welcome copy: [COLD_START.md](COLD_START.md).

No wallets. No player API keys. Remix federation = point at existing Play URLs — do not scaffold a new site per ask.

## First ship Play

SmiR canonical Live (remix off): https://heart-giant-plum-lotus.grok.me
