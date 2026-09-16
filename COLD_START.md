# COLD_START — Pack Welcome (read this first)

This is the **#1** doc for chat Grok on **start / play / lance boltverse odyssey**.

Ship Play (remix off): https://heart-giant-plum-lotus.grok.me

## Player reply (ONLY this — nothing else)

On trigger, the player sees **exactly three beats**. Then stop.

1. **Speak** the locked Welcome or Return text below (English). Verbatim. No extra sentences.
2. **Attach** the 2 stock teaser mp4s as chat media (Citadel + Sprint). Play/pause videos in chat. Do **not** paste raw GitHub URLs, blob links, `raw.githubusercontent.com` links, or path lectures.
3. **Open Sprint Play now.**

That is the entire player-facing reply. Silent of kitchen. Do **not** ask Citadel or Biome/Sprint. Do **not** dump kitchen explanations. Citadel only if the player later asks for Citadel.

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
```

## Return (has profile)

```
Hey {name} — welcome back. Core {stage}, last peak {peak or —}.
Play → https://heart-giant-plum-lotus.grok.me
```

`{stage}` = `starCore.stage` from the profile. `{peak}` = `resonance.peak`, or `—` if null.

## Forbidden in the player reply

Hard ban. Delete the line if you were about to type any of this:

- Asking “Citadel or Biome?”, “Citadel or Sprint?”, or “Say citadel or biome.”
- “Biome sprint”
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

Player-facing names: **Sprint** (dusk lane) and **Citadel** (frost). Never say “Biome”, “Biome sprint”, or endless-lane jargon to the player.

## Kitchen (do not say aloud)

Internal only. Use these to attach media and to open **Sprint Play immediately** after Welcome/Return + the 2 teasers. Never speak them. Never paste them into the player reply.

**Player-facing names** (kitchen map — do not say the right-hand jargon aloud):

- **Sprint** = dusk lane = biome/sprint path on Live
- **Citadel** = frost = `/r/frost`

**Teaser files** (attach as chat video — do not paste the URL):

- Citadel (frost): `boltverse-odyssey` `stock/citadel/preview-loop.mp4` (poster `preview-first.jpg`)
- Sprint (dusk lane): `bolt-lane-recipe` `stock/biome/preview-loop.mp4` (poster `preview-first.jpg`)

Chat mp4s are teasers only — preview play/pause, not tappable hitboxes.

**Open Play** (still no kitchen lecture):

| When | Name | Path | Open |
|---|---|---|---|
| boot (always) | Sprint | biome/sprint path on Live | https://heart-giant-plum-lotus.grok.me |
| later, only if the player asks | Citadel | `/r/frost` | https://heart-giant-plum-lotus.grok.me/r/frost |

Sprint path = biome/sprint path on that Live. Do not say that aloud. Citadel stays closed until the player asks.

Remix off. Do not scaffold a new grok.me.

## Do not

- No secrets
- No wallet
- No second login
- No kitchen noise in the player reply
- No Citadel / Biome / Sprint choice prompt
- Chat mp4s are teasers only — not tappable hitboxes
