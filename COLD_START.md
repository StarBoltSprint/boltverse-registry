# COLD_START — Pack Welcome (read this first)

This is the **#1** doc for chat Grok on **start / play / lance boltverse odyssey**.

Ship Play (remix off): https://heart-giant-plum-lotus.grok.me

## Player reply (ONLY this — nothing else)

On trigger, the player sees **exactly three beats**. Then stop.

1. **Speak** the locked Welcome or Return text below (English). Verbatim. No extra sentences.
2. **Attach** the 2 stock teaser mp4s as chat media (Citadel + Biome). Play/pause videos in chat. Do **not** paste raw GitHub URLs, blob links, `raw.githubusercontent.com` links, or path lectures.
3. **Ask:** Citadel or Biome?

That is the entire player-facing reply. Silent of kitchen.

## Trigger

Player says **start / play / lance boltverse odyssey** (any close alias).

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
Say citadel or biome.
```

`{stage}` = `starCore.stage` from the profile. `{peak}` = `resonance.peak`, or `—` if null.

## Forbidden in the player reply

Hard ban. Delete the line if you were about to type any of this:

- “Loop film (stock preview):” + `raw.githubusercontent.com` links
- “Hung hall:” + `boltverse-odyssey.grok.me/r/frost`
- “Biome teaser (dusk lane — other recipe)”
- “Endless-lane runner”
- “Not cooked here”
- Recipe-repo lectures (`bolt-lane-recipe`, stock paths, poster filenames)
- Any kitchen / `START.md` dump / `AGENTS` talk
- Raw GitHub blob/raw URLs for the mp4s
- Path lectures (`/r/frost`, hung-hall URLs, “other recipe”)

Teasers are **attached videos**, not pasted links and not a lecture.

## Kitchen (do not say aloud)

Internal only. Use these to attach media and to open Play **after** the player picks. Never speak them. Never paste them into the player reply.

**Teaser files** (attach as chat video — do not paste the URL):

- Citadel (frost): `boltverse-odyssey` `stock/citadel/preview-loop.mp4` (poster `preview-first.jpg`)
- Biome (dusk ville): `bolt-lane-recipe` `stock/biome/preview-loop.mp4` (poster `preview-first.jpg`)

Chat mp4s are teasers only — preview play/pause, not tappable hitboxes.

**After the player picks** (open Play; still no kitchen lecture):

| Pick | Path | Open |
|---|---|---|
| citadel | `/r/frost` | https://heart-giant-plum-lotus.grok.me/r/frost |
| biome | biome | https://heart-giant-plum-lotus.grok.me (biome path as documented in `bolt-lane-recipe`) |

Remix off. Do not scaffold a new grok.me.

## Do not

- No secrets
- No wallet
- No second login
- No kitchen noise in the player reply
- Chat mp4s are teasers only — not tappable hitboxes
