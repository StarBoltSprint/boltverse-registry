# COLD_START — Pack Welcome (read this first)

This is the **#1** doc for chat Grok on **start / play / lance boltverse odyssey**.

## Cold-start tools (hard)

**GitHub + native Grok Build console only.**

Never call a **Grok Bot connector**. Do not wake Director. Do not wake any Grok Bot. Players must not depend on SmiR’s bots.

## Player reply (ONLY this — nothing else)

On trigger, the player sees **exactly three beats**. Then stop.

1. **Speak** the locked Welcome or Return text below (English). Verbatim. No extra sentences. No ask / choice line. No Play URL.
2. **Attach** the 2 stock `preview-loop.mp4` files as chat media (Citadel + Sprint). **Must attach** — real video files in the chat. Play/pause videos in chat. Do **not** paste raw GitHub URLs, blob links, `raw.githubusercontent.com` links, or path lectures. Do **not** speak a substitute.
3. **Open Sprint** in the native Grok Build game console UI (in-app Play). **Silent after media.** Not a spoken line. Not a pasted URL.

That is the entire player-facing reply. Silent of kitchen. Do **not** ask Citadel or Biome/Sprint. Do **not** dump kitchen explanations. Do **not** paste any `grok.me` / Play URL. Citadel only if the player later asks for Citadel.

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
Powered by xAI & YOU.
Ready to sprint?
```

## Return (has profile)

```
Hey {name} — welcome back. Core {stage}, last peak {peak or —}.
Powered by xAI & YOU.
Ready to sprint?
```

Spoken text **ends** on those two closing lines. No `Play →` line. No pasted Play URL. No `Say citadel or biome.` / no choice line. Then **attach** the 2 `preview-loop.mp4` files as chat media and **silently** open Sprint in the native Grok Build game console UI (in-app Play). No spoken stand-in for either beat.

`{stage}` = `starCore.stage` from the profile. `{peak}` = `resonance.peak`, or `—` if null.

## Forbidden in the player reply

Hard ban. Delete the line if you were about to type any of this:

- Calling / waking a Grok Bot connector (Director or any Grok Bot). Players must not depend on SmiR’s bots.
- “Citadel teaser and Sprint teaser are on”
- “Open Sprint on the native Grok Build…”
- Any spoken stand-in for the attached `preview-loop.mp4` files
- Any spoken stand-in for opening Sprint in Build
- `Play → https://heart-giant-plum-lotus.grok.me` or any pasted Play / `*.grok.me` URL
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

Teasers are **attached videos**, not spoken status lines, not pasted links, and not a lecture.

Player-facing names: **Sprint** (dusk lane) and **Citadel** (frost). Never say “Biome”, “Biome sprint”, or endless-lane jargon to the player.

## Kitchen (do not say aloud)

Internal only. Tools on cold-start: **GitHub** (fetch + attach the two `preview-loop.mp4` files) and the **native Grok Build console** (open Sprint). Never call a Grok Bot connector. Never wake Director. Never wake any Grok Bot. Players must not depend on SmiR’s bots. Never speak kitchen. Never paste kitchen into the player reply.

**Live project identity for Build** (do not paste into chat):

- Ship Play (remix off): `https://heart-giant-plum-lotus.grok.me`
- Sprint path = biome/sprint path on that Live
- Open Sprint in-app (Build game console), not by dumping this URL

**Player-facing names** (kitchen map — do not say the right-hand jargon aloud):

- **Sprint** = dusk lane = biome/sprint path on Live
- **Citadel** = frost = `/r/frost`

**Teaser files** (MUST attach as chat video — do not paste the URL, do not announce them):

- Citadel (frost): `boltverse-odyssey` `stock/citadel/preview-loop.mp4` (poster `preview-first.jpg`)
- Sprint (dusk lane): `bolt-lane-recipe` `stock/biome/preview-loop.mp4` (poster `preview-first.jpg`)

Chat mp4s are teasers only — preview play/pause, not tappable hitboxes.

**Open Play** (in-app Build console — silent after media, no kitchen lecture, no pasted URL):

| When | Name | Path | Live identity (do not paste) |
|---|---|---|---|
| boot (always) | Sprint | biome/sprint path on Live | `https://heart-giant-plum-lotus.grok.me` |
| later, only if the player asks | Citadel | `/r/frost` | `https://heart-giant-plum-lotus.grok.me/r/frost` |

Sprint path = biome/sprint path on that Live. Do not say that aloud. Do not paste the URL. Opening Sprint in Build is **silent after the media**. Ban spoken “Open Sprint on the native Grok Build…”. Citadel stays closed until the player asks.

Remix off. Do not scaffold a new grok.me.

## Do not

- No secrets
- No wallet
- No second login
- No Grok Bot connector / Director / any Grok Bot on cold-start
- No kitchen noise in the player reply
- No pasted Play / `*.grok.me` URL in chat
- No Citadel / Biome / Sprint choice prompt
- No spoken teaser substitutes (“Citadel teaser and Sprint teaser are on”)
- No spoken “Open Sprint on the native Grok Build…”
- Chat mp4s are teasers only — not tappable hitboxes
