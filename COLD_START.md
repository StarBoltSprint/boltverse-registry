# COLD_START — Pack Welcome (read this first)

This is the **#1** doc for chat Grok on **start / play / lance boltverse odyssey**.

## Player reply (ONLY this — nothing else)

On trigger, the player sees **exactly three beats**. Then stop.

1. **Speak** the locked Welcome or Return text below (English). Verbatim. No extra sentences. No ask / choice line. No Play URL.
2. **Upload / attach** both `preview-loop.mp4` files as **chat message media** (inline video — Citadel + Sprint). This beat is **mandatory**. The player must see two play/pause videos in the chat message. Do **not** paste raw GitHub URLs, blob links, `raw.githubusercontent.com` links, or path lectures.
   - If you **cannot** attach both files as chat media, say **nothing** about teasers. Still open Sprint (beat 3). Never substitute a sentence that names the teasers.
3. **Silently open Sprint** in the native Grok Build game console UI (in-app Play). This is an **action after the media**, not spoken copy. Do not say you are opening it. Not a pasted URL.

That is the entire player-facing reply. Silent of kitchen. Do **not** ask Citadel or Biome/Sprint. Do **not** dump kitchen explanations. Do **not** paste any `grok.me` / Play URL. Citadel only if the player later asks for Citadel.

Spoken words stop at the locked Welcome/Return. Beats 2 and 3 are media + a silent open — never narrated.

## Hard rules (live fail — do not repeat)

Beat 2 is **upload/attach**, not speech.

- **Mandatory:** attach `preview-loop.mp4` Citadel + Sprint as **chat message media** (inline video).
- If you cannot attach both files: say **nothing** about teasers and still open Sprint. Never substitute a sentence that names teasers.
- Opening Sprint in the Build console is a **silent action after the media** — not spoken.
- Keep Welcome/Return verbatim (incl. `Powered by xAI & YOU.` / `Ready to sprint?`). No Play URL. No choice ask.

Forbidden spoken copy (delete the line):

- “teaser(s) are on”
- “Open Sprint on the native Grok Build…”
- Any narration that replaces the video attachments

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

Spoken text **ends** on those two closing lines. No `Play →` line. No pasted Play URL. No `Say citadel or biome.` / no choice line. Then **upload/attach** both teaser mp4s as chat message media. Then **silently** open Sprint in the native Grok Build game console UI (in-app Play). Do not speak beat 2 or beat 3.

`{stage}` = `starCore.stage` from the profile. `{peak}` = `resonance.peak`, or `—` if null.

## Forbidden in the player reply

Hard ban. Delete the line if you were about to type any of this:

- “teaser(s) are on” / “Citadel teaser and Sprint teaser are on”
- “Open Sprint on the native Grok Build…” (any spoken line about opening Sprint / the Build game console)
- Any narration that replaces the video attachments (naming teasers instead of attaching them)
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

Teasers are **attached videos** (inline chat media), not pasted links, not a lecture, and not a sentence that claims they are “on”.

If both mp4s cannot be attached as chat media: omit every teaser mention. Still open Sprint silently. Never write a substitute line.

Player-facing names: **Sprint** (dusk lane) and **Citadel** (frost). Never say “Biome”, “Biome sprint”, or endless-lane jargon to the player.

## Kitchen (do not say aloud)

Internal only. Use these to **upload/attach** media and to **silently** open **Sprint in the native Grok Build game console UI** after Welcome/Return. Never speak them. Never paste them into the player reply. Never narrate the teasers or the open.

**Live project identity for Build** (do not paste into chat):

- Ship Play (remix off): `https://heart-giant-plum-lotus.grok.me`
- Sprint path = biome/sprint path on that Live
- Open Sprint in-app (Build game console), not by dumping this URL

**Player-facing names** (kitchen map — do not say the right-hand jargon aloud):

- **Sprint** = dusk lane = biome/sprint path on Live
- **Citadel** = frost = `/r/frost`

**Teaser files** (upload/attach as chat message media / inline video — do not paste the URL, do not narrate):

- Citadel (frost): `boltverse-odyssey` `stock/citadel/preview-loop.mp4` (poster `preview-first.jpg`)
- Sprint (dusk lane): `bolt-lane-recipe` `stock/biome/preview-loop.mp4` (poster `preview-first.jpg`)

Chat mp4s are teasers only — preview play/pause, not tappable hitboxes.

**Open Play** (silent action after the media — still no kitchen lecture, no pasted URL, no spoken “opening Sprint”):

| When | Name | Path | Live identity (do not paste) |
|---|---|---|---|
| boot (always) | Sprint | biome/sprint path on Live | `https://heart-giant-plum-lotus.grok.me` |
| later, only if the player asks | Citadel | `/r/frost` | `https://heart-giant-plum-lotus.grok.me/r/frost` |

Sprint path = biome/sprint path on that Live. Do not say that aloud. Do not paste the URL. Citadel stays closed until the player asks.

Remix off. Do not scaffold a new grok.me.

## Do not

- No secrets
- No wallet
- No second login
- No kitchen noise in the player reply
- No pasted Play / `*.grok.me` URL in chat
- No Citadel / Biome / Sprint choice prompt
- No spoken “teaser(s) are on” / no narration instead of attachments
- No spoken “Open Sprint on the native Grok Build…”
- Chat mp4s are teasers only — not tappable hitboxes
