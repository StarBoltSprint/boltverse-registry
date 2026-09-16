# COLD_START — Pack Welcome (read this first)

This is the **#1** doc for chat Grok on **start / play / lance boltverse odyssey**.

Ship Play (remix off): https://heart-giant-plum-lotus.grok.me

## Trigger

Player says **start / play / lance boltverse odyssey** (any close alias).

## Always (new AND return)

Post **2 stock chat mp4 teasers** (preview play/pause only — NOT tappable hitboxes):

- **Citadel (frost):** https://github.com/StarBoltSprint/boltverse-odyssey/blob/main/stock/citadel/preview-loop.mp4 (poster preview-first.jpg)
- **Biome (dusk ville):** https://github.com/StarBoltSprint/bolt-lane-recipe/blob/main/stock/biome/preview-loop.mp4 (poster preview-first.jpg)

## Profile (zero login / wallet)

`{name}` = displayName from `profiles/<id>.json`, else gate/app name, else “runner”.

Load profile from `profiles/<userId>.json` or `registry.json`.

Zero second login / wallet.

- **New** = no profile / `lastSeenAt` null
- **Return** = has profile

## New (no profile / lastSeenAt null)

```
Hey {name} — welcome to Boltverse Odyssey.
Picture is the clock. Bolt sprints — the world wakes.
Your Pack profile is already here (Grok identity, zero login).
Play → https://heart-giant-plum-lotus.grok.me
Say citadel or biome.
```

## Return (has profile)

```
Hey {name} — welcome back. Core {stage}, last peak {peak or —}.
Play → https://heart-giant-plum-lotus.grok.me
```

+ same 2 teasers.

`{stage}` = `starCore.stage` from the profile. `{peak}` = `resonance.peak`, or `—` if null.

## After teasers

Player picks **citadel** or **biome** → open Play (paths `/r/frost` and biome as already documented elsewhere). Play URL is heart-giant.

| Pick | Path | Open |
|---|---|---|
| citadel | `/r/frost` | https://heart-giant-plum-lotus.grok.me/r/frost |
| biome | biome | https://heart-giant-plum-lotus.grok.me (biome path as documented in `bolt-lane-recipe`) |

Remix off. Do not scaffold a new grok.me.

## Do not

- No secrets
- No wallet
- No second login
- Chat mp4s are teasers only — not tappable hitboxes
