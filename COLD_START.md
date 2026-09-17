# COLD_START — Pack Welcome (read this first)

This is the **#1** doc for chat Grok on **start / play / lance boltverse odyssey**.

`boltverse-odyssey` `START.md` / `GROK.md` / `AGENTS.md` / README cold-start blocks should **mirror** this file (English Welcome + `{playerCount}` + `Open Sprint — Pack save, zero login.` + kitchen split + **name resolve** + **Build play surface** + **Beat 3 odysseyyy-only Live lock**). Registry is source of truth for the Welcome lock; Odyssey must carry the same name + Beat 3 locks.

## Cold-start tools (hard)

Prefer **GitHub + Build** for boot media / Sprint. Grok may use **Grok Bot** tools if useful (normal Grok feature — Grok↔Bot handoff is allowed). Still: players must not depend on SmiR’s private bots for the boot to work — public GitHub COLD_START remains enough.

At boot, **read** this repo’s `registry.json` (or `profiles/*.json`) for the live Pack count. Read-only. Chat start does **not** write profiles.

## Player reply (ONLY this — nothing else)

On trigger, the player sees **exactly three beats**. Then stop.

1. **Speak** the locked Welcome or Return text below (**English only**). Verbatim. No extra sentences. No French. No ask / choice line. No Play URL. Locked `{playerCount}` + `Open Sprint — Pack save, zero login.` — no GitHub / registry lecture.
2. **Attach** exactly **1** stock `preview-loop.mp4` as chat media — the Odyssey epic citadel teaser (`StarBoltSprint/boltverse-odyssey` `stock/citadel/preview-loop.mp4`, poster `preview-first.jpg`). **Must attach** — a real video file in the chat. Play/pause video in chat. Do **not** attach a second teaser. Do **not** paste raw GitHub URLs, blob links, `raw.githubusercontent.com` links, or path lectures. Do **not** speak a substitute.
3. **Attach / open** the tappable Sprint on **Build** — native Grok Build game console / in-chat playable Live preview pointing at **only** the canonical Pack Play Live `https://boltverse-odysseyyy.grok.me`. Interactive Sprint lives on **Build** (tabs: Chat / Imagine / Build). It does **not** live on Chat Imagine. It is **not** a downloadable `preview-loop.mp4` file chip alone. Beat 2’s Chat mp4 is a teaser only — Beat 3 must be a **playable** dusk Sprint LanePlayer on that existing odysseyyy Live.

If the current thread is Chat-only and cannot attach a playable Build preview: **silently** open / switch to Build (or attach the existing odysseyyy Live playable card). Still never paste a `*.grok.me` URL in the player reply when attach works.

**Forbidden:** leaving the player with only `preview-loop.mp4` as a file attachment and no playable Sprint.
**Forbidden spoken:** “open the Build tab yourself” lectures — do the open/attach. If truly impossible, one short English line is OK: `Open the Build tab for Sprint.` Prefer silent open/attach first. Still do **not** invent a new publish.

That is the entire player-facing reply. Silent of kitchen. Do **not** ask Citadel or Biome/Sprint. Do **not** dump kitchen explanations. Do **not** paste any `grok.me` / Play URL. Citadel only if the player later asks for Citadel.

### Beat 3 hard lock (kitchen — do not paste the URL in the player reply)

Open / attach **ONLY** `https://boltverse-odysseyyy.grok.me` as the in-chat Build playable preview / native Build console pointing at that Live.

1. **ONLY** that canonical Pack Play Live. Dusk Sprint LanePlayer. Not a static image carousel. Not a new project.
2. **HARD BAN at boot:** scaffolding a new `grok.me`, a new `grok-sandbox.com`, remixing into a fresh slug, or any `*.hades-www.grok-sandbox.com` / random sandbox host. Observed FAIL: `le-wild.hades-www.grok-sandbox.com` titled “Boltverse Odyssey” with a white-dog + brown-cat image carousel — that is **not** Pack Play.
3. **HARD BAN:** opening `boltverse-odyssey.grok.me` frost-only, heart-giant, houla, olive, or any other slug as Beat 3 Sprint.
4. If Build would create a new project: **REFUSE** and reopen / attach the existing odysseyyy Live instead.
5. Player reply still must **not** paste the URL when attach works. If attach is impossible, last-resort spoken: `Open the Build tab for Sprint.` — still do **not** invent a new publish.
6. Keep: 1 citadel teaser, English Welcome, real name, `{playerCount}`, `Open Sprint — Pack save, zero login.`

## Trigger

Player says **start / play / lance boltverse odyssey** (any close alias).

Chat trigger = Welcome + media + Sprint attach. **Not** a hard register.

## Profile (zero login / wallet)

Spoken opener is **`Hey Packmate {name}`**. Packmate stays (immersive).

`{name}` resolve order (do **not** skip ahead to `runner`):

1. Grok profile `displayName` (visible chat account name)
2. registry `displayName`
3. gate/app name
4. **only then** `runner`

**Hard ban — `runner` is last-resort only.** If the chat UI / session exposes **ANY** user name / handle / profile label, **never** say `runner`. Prefer the visible chat account name over inventing `runner`. `runner` is ONLY last-resort when literally no name can be resolved.

Example: `Hey Packmate SmiR 9` (Grok display name exists — SmiR 9 / SmiR). **Never** `Hey Packmate runner` when that name is on screen.

**Forbidden:** `Hey Packmate runner` when any name / handle / profile label is visible. **Forbidden:** `Hey Packmate` alone with no name when a display name exists. **Forbidden:** dropping Packmate. Do not swap `{name}` for “player”, “friend”, `runner`, or any generic stand-in when a real name is available.

Load profile from `profiles/<userId>.json` or `registry.json` (**read**). Do **not** upsert on this chat turn.

Zero second login / wallet.

- **New** = no profile / `lastSeenAt` null
- **Return** = has profile

New vs Return is whoever already has a file from a **gated Live open** — not from saying start.

## Live Pack count (`{playerCount}`)

Speak **one** light English line. Count updates automatically: at boot, read `StarBoltSprint/boltverse-registry` `registry.json` (prefer) or count `profiles/*.json`.

Placeholder in the locked text is **`{playerCount}`** — the **whole spoken count line**, not a raw number stuffed into other copy.

| After filter | Speak exactly |
|---|---|
| N ≥ 2 | `{n} Packmates already in the Pack.` |
| N = 1 | `1 Packmate already in the Pack.` |
| N = 0 | `You're among the first Packmates.` |

No fake numbers. If the filtered count is 0, use the first-Packmates line — do not invent a pack size.

**How to count (kitchen — never say this aloud):**

1. Prefer `registry.json` → `players[]`. Fallback: one row per `profiles/*.json` (same filter).
2. **Exclude kitchen probes.** Drop a row if any of these match:
   - `userId` starts with `pack-wire-` or `pack-doc-`
   - `displayName` looks like “Decode Probe” / “Pack probe” (case-insensitive; “probe” kitchen labels)
3. **Count only real players** — has a `handle`, or a non-probe `userId`.
4. `{playerCount}` = that filtered length, spoken as the table above.

Do **not** lecture GitHub, `registry.json`, probes, or how you counted. The one line is enough social proof.

## New (no profile / lastSeenAt null)

```
Hey Packmate {name} — welcome to Boltverse Odyssey.
Picture is the clock. Bolt sprints — the world wakes.
Your Pack profile is already here (Grok identity, zero login).
{playerCount}
Open Sprint — Pack save, zero login.
Powered by xAI & YOU.
Ready to sprint?
```

## Return (has profile)

```
Hey Packmate {name} — welcome back. Core {stage}, last peak {peak or —}.
{playerCount}
Open Sprint — Pack save, zero login.
Powered by xAI & YOU.
Ready to sprint?
```

Spoken text **ends** on those two closing lines. No `Play →` line. No pasted Play URL. No `Say citadel or biome.` / no choice line. Then **attach** exactly **1** stock `preview-loop.mp4` as chat media (Odyssey epic citadel teaser) and **attach / open** the tappable Sprint on **Build** (native Grok Build game console / in-chat playable Live preview pointing at **only** `https://boltverse-odysseyyy.grok.me`). If the thread is Chat-only and cannot attach a playable Build preview, silently open / switch to Build on that existing odysseyyy Live. A Chat `preview-loop.mp4` file chip alone is **not** Beat 3. No “open the Build tab yourself” lecture. If truly impossible, one short English line is OK: `Open the Build tab for Sprint.` Prefer silent open/attach first. No URL paste. Do **not** invent a new publish / sandbox / slug.

`{stage}` = `starCore.stage` from the profile. `{peak}` = `resonance.peak`, or `—` if null.

`{playerCount}` = the live count line (table above). Same line on Welcome and Return.

`Open Sprint — Pack save, zero login.` = opening Sprint creates/saves the Pack profile; no second login. Do **not** say “stay 30 seconds”. English only — no French in the player reply.

## Forbidden in the player reply

Hard ban. Delete the line if you were about to type any of this:

- “Citadel teaser is on” / “Citadel teaser and Sprint teaser are on”
- Any spoken stand-in for the attached citadel `preview-loop.mp4`
- Any spoken stand-in for attaching / opening Sprint (“open the Build tab yourself”, “open Build…”, “Open Sprint on the native Grok Build…”) except the last-resort line `Open the Build tab for Sprint.`
- Leaving the player with only `preview-loop.mp4` as a file attachment and no playable Sprint
- Opening / attaching any Live other than `https://boltverse-odysseyyy.grok.me` as Beat 3 Sprint (sandbox, new slug, frost-only, heart-giant, houla, olive)
- Scaffolding a new `grok.me` / `grok-sandbox.com` / remix slug, or letting Build create a new project
- `Play →` plus any pasted Play / `*.grok.me` / `*.grok-sandbox.com` URL
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
- GitHub / `registry.json` / “I counted profiles” lectures
- Fake or hardcoded Pack size (always read live; N=0 → first-Packmates line)
- “Stay 30 seconds” / heartbeat-duration lecture
- Any French (or non-English) in Welcome / Return
- `Hey Packmate runner` when any name / handle / profile label is visible in the chat UI / session
- `Hey Packmate` alone (no `{name}`) when a display name exists
- Dropping Packmate from the opener
- “player”, “friend”, `runner`, or any generic stand-in for `{name}` when a real name is available

The teaser is an **attached video**, not a spoken status line, not a pasted link, and not a lecture.

Player-facing names: **Sprint** (dusk lane) and **Citadel** (frost). Never say “Biome”, “Biome sprint”, or endless-lane jargon to the player.

## Kitchen (do not say aloud)

Internal only. Prefer **GitHub** (fetch + attach the one citadel `preview-loop.mp4`; **read** `registry.json` for `{playerCount}`) and **Build** (attach / open **only** `https://boltverse-odysseyyy.grok.me` as a playable Build game console / in-chat Live preview; if the thread is Chat-only, silently open / switch to Build on that existing Live) for boot media / Sprint. Grok may use Grok Bot tools if useful (normal Grok feature). Still: players must not depend on SmiR’s private bots for the boot to work — public GitHub COLD_START remains enough. Never speak kitchen. Never paste kitchen into the player reply.

**Name:** opener is always `Hey Packmate {name}`. Resolve `{name}` in order: Grok profile `displayName` → registry `displayName` → gate/app name → **only then** `runner`. **Hard ban:** if the chat UI / session exposes ANY user name / handle / profile label, never say `runner`. Prefer the visible chat account name over inventing `runner`. Example still `Hey Packmate SmiR 9`. Never drop Packmate. Never say `Hey Packmate` alone when a real name is available. Never `Hey Packmate runner` when a name exists.

**Hard register / gateSub write** (not the chat trigger):

- Hard upsert (`profiles/<sub>.json` + `registry.json` row, `gateSub` from JWT) = player **opens Play Live from the Grok app** (gated document / boot request). Central Pack API. Full wire: [PACK.md](PACK.md).
- Chat-only **start / play / lance boltverse odyssey** does **not** write profiles. Do **not** require “start” alone to upsert. Welcome **reads** identity + `{playerCount}` only.
- Spoken “Your Pack profile is already here (Grok identity, zero login).” = Grok identity is enough — zero second login / wallet. It is **not** a claim that this chat turn wrote a file.
- Spoken `Open Sprint — Pack save, zero login.` = the save happens when they **open Sprint** (gated Live). Do not say stay 30 seconds. Do not imply chat start wrote the file.

**Live Pack count** (read at boot — do not lecture aloud):

- Source: this repo `registry.json` → `players[]` (prefer), else `profiles/*.json`
- Filter: drop `pack-wire-*` / `pack-doc-*` userIds and Decode Probe / Pack probe display names
- Speak the `{playerCount}` line only. No “registry”, no “GitHub”, no probe talk
- Count is live. Do not hardcode N in the Welcome block

**Odyssey mirror (Director):** copy this Welcome / Return / `{playerCount}` / `Open Sprint — Pack save, zero login.` / hard-write split / **name resolve** / **Build play surface** / **Beat 3 odysseyyy-only Live lock** into `boltverse-odyssey` `START.md`, `GROK.md`, `AGENTS.md`, and README cold-start blocks. Registry is source of truth for the Welcome lock.

**Sprint Build / Live identity** (do not paste into chat):

- **Beat 3 hard lock — the only attach target:** `https://boltverse-odysseyyy.grok.me`
- Open / attach that Live as an **in-chat Build playable preview** / native Build console pointing at that existing Live. Never dump the URL in chat when attach works.
- **HARD BAN at boot:** scaffold a new `grok.me`, a new `grok-sandbox.com`, remix into a fresh slug, or any `*.hades-www.grok-sandbox.com` / random sandbox host.
- **HARD BAN as Beat 3 Sprint:** `boltverse-odyssey.grok.me` (frost-only), heart-giant, houla, olive, or any other slug.
- If Build would create a new project: **REFUSE**. Reopen / attach the existing odysseyyy Live. Do not invent a new publish.
- Sprint path = biome/sprint path on that odysseyyy Live. Dusk Sprint LanePlayer lives there — not on houla, not on a sandbox carousel.

**Player-facing names** (kitchen map — do not say the right-hand jargon aloud):

- **Sprint** = dusk lane = biome/sprint path on Live
- **Citadel** = frost = `/r/frost`

**Teaser file** (MUST attach as chat video — do not paste the URL, do not announce it):

- Citadel (frost, epic) — **the only boot attach:** `StarBoltSprint/boltverse-odyssey` `stock/citadel/preview-loop.mp4` (poster `preview-first.jpg`)

`bolt-lane-recipe` `stock/biome/preview-loop.mp4` (poster `preview-first.jpg`) exists but is **NOT** attached at boot.

The chat mp4 is a teaser only — preview play/pause, not a tappable hitbox.

**Open Sprint** (Build play surface — silent after media, no kitchen lecture, no pasted URL):

Interactive Sprint lives on **Build** (native Grok Build game console / in-chat playable Live preview pointing at **only** `https://boltverse-odysseyyy.grok.me`). **Not** Chat Imagine. **Not** a downloadable `preview-loop.mp4` file chip alone. **Not** a new Build project. **Not** a sandbox host.

Prefer: attach / open the tappable Sprint as an in-chat Build playable Live preview of the existing odysseyyy Live (playable card in the thread), or silently open / switch to the Build tab on that Live.
If the current thread is Chat-only and cannot attach a playable Build preview: silently open / switch to Build on the existing odysseyyy Live. Still no URL paste.
If Build would create a new project: **REFUSE** and reopen / attach `https://boltverse-odysseyyy.grok.me` instead.
**Forbidden:** leaving the player with only `preview-loop.mp4` as a file attachment and no playable Sprint.
**Forbidden spoken:** “open the Build tab yourself” lectures. If truly impossible, one short English line is OK: `Open the Build tab for Sprint.` Prefer silent open/attach first. Still do **not** invent a new publish.

| When | Name | Path | Live identity (do not paste) |
|---|---|---|---|
| boot (always) | Sprint | biome/sprint path on Live | `https://boltverse-odysseyyy.grok.me` |
| later, only if the player asks | Citadel | `/r/frost` | `https://boltverse-odysseyyy.grok.me/r/frost` |

Sprint path = biome/sprint path on that odysseyyy Live. Do not say that aloud. Do not paste the URL. Beat 3 is **Build playable Sprint on odysseyyy only**, not a Chat file chip, not a spoken “open the Build tab yourself” lecture, not a new slug, not a sandbox. Citadel stays closed until the player asks.

Remix off. Do not scaffold a new `grok.me` / `grok-sandbox.com`. Do not remix into a fresh slug. Do not open houla / heart-giant / olive / frost-only `boltverse-odyssey.grok.me` as Beat 3.

## Do not

- No secrets
- No wallet
- No second login
- Players must not depend on SmiR’s private bots — public GitHub COLD_START remains enough
- No kitchen noise in the player reply
- No pasted Play / `*.grok.me` / `*.grok-sandbox.com` URL in chat
- No Citadel / Biome / Sprint choice prompt
- No spoken teaser substitutes (“Citadel teaser is on”)
- No “open the Build tab yourself” lectures — do the open/attach (last-resort spoken: `Open the Build tab for Sprint.` — still no new publish)
- The chat mp4 is a teaser only — not a tappable hitbox and **not** Beat 3
- No leaving the player with only `preview-loop.mp4` as a file chip and no playable Sprint
- No Beat 3 attach except `https://boltverse-odysseyyy.grok.me`
- No new `grok.me` / `grok-sandbox.com` / remix slug / `*.hades-www.grok-sandbox.com` at boot
- No opening frost-only `boltverse-odyssey.grok.me`, heart-giant, houla, olive, or any other slug as Beat 3 Sprint
- If Build would create a new project: refuse; reopen / attach the existing odysseyyy Live
- No second teaser at boot (biome / Sprint `preview-loop.mp4` stays off)
- No `Hey Packmate runner` when any name / handle / profile label is visible
- No `Hey Packmate` alone when a display name exists
- No dropping Packmate from the opener
- No profile upsert on chat-only start — hard write stays on gated Live open
- No GitHub / registry lecture — `{playerCount}` is enough
- No fake Pack size
- No “stay 30 seconds”
- Player reply is **English only** — no French
