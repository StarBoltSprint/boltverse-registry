# COLD_START — Pack Welcome (read this first)

> ### PRIORITY 0 — on start / play / lance boltverse odyssey: Grok MUST NOT Build anything.
>
> **Even on the Build tab.** Start = **chat-only**. Same three beats. Then **STOP**.
> 1. Locked Welcome/Return EN only
> 2. Attach citadel teaser video
> 3. Paste written URL `https://boltverse-odysseyyyy.grok.me` (visible tappable link)
>
> Player can tap the URL now. **Do not** require a separate yes-turn. **Do not** keep going after the paste.
>
> **No Build tab work. No scaffold. No remix. No « Built with Grok » card. No compile. No GitHub→new project. No rebuild. No 12-minute rebuild.**
>
> **FAIL verbs (any of these on start = FAIL):** Implementing Sprint · LanePlayer · Copying game assets · Configuring the build · Merging styles · SSR guards · Built with Grok · preview from the recipe · file edits for boot.
>
> **Any Build / tooling after those three beats = FAIL.** Sitting on Build does **not** authorize implementing. Paste then STOP.

> ### HARD LOCK — Welcome = Pack register (chat start upsert)
>
> **SUPERSEDES** « chat start does not upsert » / « Welcome reads only ».
>
> When start / play / lance fires the locked Welcome/Return and a real `sub` is known: **upsert now** `profiles/<sub>.json` + `registry.json` `players[]` on `StarBoltSprint/boltverse-registry` (merge-patch). Existence + `lastSeenAt`. Never invent a `sub`. No `sub` → soft skip write, still show Welcome.
>
> **Welcome register = existence + lastSeen. Live open = playTime / heartbeats.**

This is the **#1** doc for chat Grok on **start / play / lance boltverse odyssey**.

**HARD FINAL flow (SmiR):** one first reply. No second turn. No yes-wait. No Build. No rebuild. **Even if already on the Build tab:** chat-only three beats, then **STOP**.

Why: auto-Build / Build attach / GitHub→new project is too long / painful. Grok scaffolds a « Built with Grok » card instead of pasting SmiR’s existing Live URL. Observed FAIL: fresh Grok already on the Build tab still implements LanePlayer / copies assets **after** pasting odysseyyyy.

`boltverse-odyssey` `START.md` / `GROK.md` / `AGENTS.md` / README cold-start blocks should **mirror** this file (same first reply = locked Welcome + citadel teaser + written odysseyyyy URL + **PRIORITY 0 no Build / no rebuild** + **even on Build tab: chat-only then STOP** + **name resolve** + **zero spoken improvisation** + **plate silence** + **Welcome register = existence + lastSeen when sub known** + **Live open = playTime / heartbeats**). Registry is source of truth.

## Cold-start tools (hard)

Prefer **GitHub** — fetch + attach the one citadel `preview-loop.mp4`; **read** this repo’s `registry.json` (or `profiles/*.json`) for New vs Return + the live Pack count; **upsert now** `profiles/<sub>.json` + `registry.json` `players[]` when a real `sub` is known (Welcome register — merge-patch). Never invent a `sub`. No `sub` → soft skip write, still show Welcome. This GitHub profile write is **not** a Build file-edit. **SUPERSEDED:** « Chat start does not write profiles ».

**In the same first reply:** **PASTE** the written URL `https://boltverse-odysseyyyy.grok.me` as a visible tappable link. Prefer the player taps it and the Live opens **inside the Grok app**. Old ban « never paste grok.me » is **SUPERSEDED for this first-reply odysseyyyy paste only**. Still ban random / new slugs / sandbox / three-y `odysseyyy`.

**PRIORITY 0 — HARD BAN:** Build tab work / scaffold / remix / « Built with Grok » card / compile / GitHub→new project / rebuild / Implementing Sprint / LanePlayer / Copying game assets / Configuring the build / Merging styles / SSR guards / preview from the recipe / file edits for boot. **Even on the Build tab.** Inventing a playable card from the recipe = FAIL. Any Build / tooling after the three beats = FAIL.

Grok may use **Grok Bot** tools if useful (normal Grok feature — Grok↔Bot handoff is allowed). Still: players must not depend on SmiR’s private bots for the boot to work — public GitHub COLD_START remains enough.

## Player reply — SAME first chat reply (ONLY this)

On **start / play / lance boltverse odyssey** (any close alias), the player sees **exactly three beats in one message**. Then **STOP**. No Build. No LanePlayer. No file edits. Even if the thread is already on the Build tab.

**ZERO improvisation. ZERO extra paragraphs.** Spoken text MUST be **EXACTLY** the locked Welcome or Return English block below. Copy it. Do **not** paraphrase. Do **not** invent a cinematic opener. Do **not** lecture controls. Do **not** essay the engine.

1. **Speak** the locked Welcome or Return English block below. **EXACTLY** those lines. Verbatim. Must include `Hey Packmate {name}`, `Open Sprint — Pack save, zero login.`, and `Ready to sprint?` No extra sentences. No extra paragraphs. No French. No Citadel / Biome choice. Locked `{playerCount}` — no GitHub / registry lecture. No yes-wait lecture.
2. **Attach** exactly **1** stock `preview-loop.mp4` as chat media — the Odyssey epic citadel teaser (`StarBoltSprint/boltverse-odyssey` `stock/citadel/preview-loop.mp4`, poster `preview-first.jpg`). **Must attach** — a real video file in the chat. Play/pause video in chat. Do **not** attach a second teaser. Do **not** paste raw GitHub URLs, blob links, `raw.githubusercontent.com` links, or path lectures. Do **not** speak a substitute.
3. **Paste** the written URL as a **visible tappable link** in that same first reply:

`https://boltverse-odysseyyyy.grok.me`

Player can tap it **now**. Do **not** wait for yes. Do **not** require a second turn. Prefer in-Grok-app open of that Live.

That odysseyyyy paste is **ALLOWED** and **required** in the first reply. Preferred over Build attach. Old ban « never paste grok.me » is **SUPERSEDED for this URL only**.

**PRIORITY 0 — HARD BAN in this first reply (spoken / chat / tools):**

- Opening Build / switching to the Build tab / **staying on Build to implement**
- Scaffold / remix / **recreate the game** / **rebuild** from GitHub / compile / GitHub→new project
- **FAIL verbs:** Implementing Sprint / LanePlayer / Copying game assets / Configuring the build / Merging styles / SSR guards / Built with Grok / preview from the recipe / file edits for boot
- A new « Built with Grok » card / inventing a playable card from the recipe
- Attaching a Build game console / in-chat Live preview / playable Sprint card
- Controls lecture / improvised prose / plate lists (full ban list below)
- Any URL other than `https://boltverse-odysseyyyy.grok.me`

**Any Build / tooling after those three beats = FAIL.** Sitting on Build does **not** unlock implement. Paste then STOP.

## HARD BAN at boot (spoken / chat)

Observed SmiR FAIL: improvised nonsense instead of locked Welcome.

- « Bolt is already on the road » / « Bolt already on the road » / « the world is rolling » / « the film keeps moving » / « plant a lane » / « no menu to click through »
- Any A/D / W / space / swipe control tutorial (keyboard, “steer with…”, “He stays in place…”)
- Any essay about how the engine works
- Invented plate / cassette lore names (`The First Spark` / `Neon Drift` / `Circuit Breaker` / `Velocity Pulse` or any made-up title)
- Plate deck lists / dealer recitals at boot
- « Tap Open Sprint » / Start as an extra spoken CTA or in-game splash button (the locked line `Open Sprint — Pack save, zero login.` is the only allowed “Open Sprint” text)
- Requiring a separate yes / go / sprint turn before showing the URL
- Registry / GitHub / `plates-index` / biome-path lectures
- Any kitchen noise / extra paragraph / how-to / lore dump

Those kitchen facts stay **silent**. Speak Welcome. Attach teaser. Paste the odysseyyyy URL. Do **not** narrate the teaser.

Do **not** ask Citadel or Biome. Citadel only if the player later asks for Citadel.

### Live URL lock (kitchen)

**First reply beat 3 = written odysseyyyy URL paste.** Allowed. Required. Preferred over Build attach. No yes-wait.

Paste **ONLY** `https://boltverse-odysseyyyy.grok.me`. That four-y URL is the **only** Play identity and the Pack Play / central Pack API host. Old `https://boltverse-odysseyyy.grok.me` (three y’s) is superseded — not Pack Play. Never paste that three-y URL.

1. **In the same first reply.** **ONLY** that canonical Pack Play Live, written in chat as a tappable link. Prefer in-Grok-app open when the player taps it.
2. **HARD BAN:** Grok Build scaffold / « Built with Grok » new project / rebuild from GitHub / compile / invent a playable card from the recipe / Implementing Sprint / LanePlayer / Copying game assets / Configuring the build / Merging styles / SSR guards / preview from the recipe / file edits for boot. No new `grok.me`. No new `grok-sandbox.com`. No remix into a fresh slug. No `*.hades-www.grok-sandbox.com` / random sandbox host. Observed FAIL: `le-wild.hades-www.grok-sandbox.com` titled “Boltverse Odyssey” — that is **not** Pack Play. Observed FAIL: auto-Build / 12-minute rebuild on start. Observed FAIL: fresh Grok on Build tab implements LanePlayer / copies assets after pasting odysseyyyy.
3. **HARD BAN spoken:** « Bolt is already on the road » / « the world is rolling » / « the film keeps moving » / « plant a lane » / « no menu to click through ».
4. **HARD BAN:** pasting `https://boltverse-odysseyyy.grok.me` (three y’s — superseded), `boltverse-odyssey.grok.me` frost-only, heart-giant, houla, olive, sandbox, or any other slug.
5. If you were about to open Build / scaffold / remix / recreate / **rebuild** / implement LanePlayer / copy assets / configure the build / merge styles / add SSR guards / edit files for boot: **REFUSE**. Paste `https://boltverse-odysseyyyy.grok.me` in the first reply instead. Then **STOP**.
6. Keep in that first reply: English Welcome, real name, `{playerCount}`, `Open Sprint — Pack save, zero login.`, `Ready to sprint?`, 1 citadel teaser, written odysseyyyy URL.

## Trigger

**First-reply trigger:** player says **start / play / lance boltverse odyssey** (any close alias).

Same first reply = Welcome + teaser + odysseyyyy URL. Then **STOP**. Welcome **is** Pack register (existence + lastSeen when `sub` known). **Not** a `playTimeSec` write. **Not** a Build. **Not** a yes-wait. **Not** Implementing Sprint / LanePlayer / Copying game assets — even if already on the Build tab.

**Not this trigger:** **List** (`show my plates` / `mes plaques` / `list my assets` / `what did I cook` / close alias) = Pack voice + `assetId` chips only in **Grok chat** (optional at most ONE header still — never N media). **Focus** one plate (name / role / `assetId`) = that one media attach. Law: [ASSETS.md](ASSETS.md). Do **not** fire Welcome / teaser / URL paste. Do **not** paint List or Focus on Sprint HUD.

## Profile (zero login / wallet)

Spoken opener is **`Hey Packmate {name}`**. Capital **P**ackmate. That exact shape. Packmate stays (immersive).

`{name}` resolve order (do **not** skip ahead to `runner`):

1. Grok profile `displayName` / account name / handle **visible in the session UI**
2. registry `displayName`
3. gate/app name
4. **only then** `runner`

**Hard ban — `runner` is last-resort only.** If **ANY** Grok profile `displayName` / account name / handle is visible in the session UI, **NEVER** say `runner`. Prefer that visible name. `runner` is ONLY last-resort when literally no name can be resolved.

Example for SmiR (displayName `SmiR 9` is on screen / in profile): **`Hey Packmate SmiR 9`**. Observed FAIL: « Hey Packmate runner » despite logged-in `displayName` — that is a **name FAIL**.

**Forbidden opener variants (hard):**

- `Hey Packmate runner` / `Hey packmate runner` when any name / handle / profile label is visible
- `Welcome, packmate runner` / `welcome, packmate runner` / `Welcome, Packmate runner`
- lowercase `packmate` without `Hey Packmate {name}` (no `hey packmate …`, no `welcome, packmate …`)
- `Hey Packmate` alone with no `{name}` when a display name exists
- Dropping Packmate. Do not swap `{name}` for “player”, “friend”, `runner`, or any generic stand-in when a real name is available.

Load profile from `profiles/<userId>.json` or `registry.json` (**read first** — decide New vs Return from the file that already exists). Then if a real `sub` / `userId` is known: **upsert now** (Welcome register). Never invent a `sub`. No `sub` → soft skip write, still show Welcome (may use `displayName` only).

Zero second login / wallet. No player API keys.

- **New** = no profile / `lastSeenAt` null **before** this write
- **Return** = has profile **before** this write

New vs Return is whoever already has a file. Welcome register creates the file on first start when `sub` is known.

## Pack profile + playTime (kitchen — do not lecture aloud)

**SUPERSEDED:** « chat start does not upsert » / « Welcome reads only » / « Chat-only still does not upsert ».

**HARD LOCK — Welcome = Pack register.** Welcome register = existence + lastSeen. Live open = playTime / heartbeats.

When the player says **start / play / lance boltverse odyssey** (any close alias) and Grok sends the locked Welcome/Return:

1. **Resolve identity.** Prefer gate `sub` / Grok identity JWT `sub` if available in the session; else the stable Grok account id used for profiles. `displayName` from the Grok profile (same name resolve as spoken `{name}`).
2. **If a real `sub` / `userId` is known:** upsert **now** `profiles/<sub>.json` + `registry.json` `players[]` on `StarBoltSprint/boltverse-registry` (merge-patch). Set `gateSub`, `displayName` / `handle` if known, `lastSeenAt=now`, `updatedAt=now`, `playUrl=https://boltverse-odysseyyyy.grok.me` (canonical). Do **NOT** invent a `sub`. If no `sub` → **soft skip write**, still show Welcome (may use `displayName` only).
3. **Never wipe** `resonance` / `starCore` / `cosmetics`. `playTimeSec` only increases via Live heartbeat later — Welcome register does **not** fake playTime.
4. **Return** (profile already exists before this write): speak Welcome **Return** block (welcome back, Core `{stage}`, last peak).
5. **New** (no profile / `lastSeenAt` null before this write): speak Welcome **New** block.
6. `{playerCount}` includes this player after upsert when the write succeeded.

**Live Pack wire still required** for `playTimeSec` / plate views stats. When the player taps `https://boltverse-odysseyyyy.grok.me` and the Live loads **inside the Grok app**:

1. Gated HTML document load
2. Gate injects `x-grok-identity` (JWT)
3. Client `POST /v1/pack/boot` → merge-patch `profiles/<sub>.json` + `registry.json` row (`gateSub`, `playUrl` from `location.origin`, `lastSeenAt`)
4. Client `POST /v1/pack/heartbeat` ~every 30s → updates `playTimeSec`, `lastSeenAt`, `playUrl`

Full wire: [PACK.md](PACK.md).

**Still does not write `playTimeSec`:**

- Welcome register itself (existence + lastSeen only — no fake playTime)
- Pasting the URL if the player never opens the Live
- Opening the Live **outside** the Grok app (no gated HTML / no `x-grok-identity` → `{ ok: false, reason: "no-sub" }`)

Spoken `Open Sprint — Pack save, zero login.` = Grok identity is enough (zero wallet). Welcome already registered existence when `sub` was known; opening that Live inside the Grok app continues Pack save (`playTimeSec`). Do not say stay 30 seconds. Do not invent a `sub`.

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
4. After a successful Welcome register write, **include this player**.
5. `{playerCount}` = that filtered length, spoken as the table above.

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

Spoken text **ends** on `Ready to sprint?` **That block is the entire spoken reply.** Zero extra paragraphs. Zero improvisation. No `Play →` line. No `Say citadel or biome.` Then **attach** the citadel teaser **and paste** `https://boltverse-odysseyyyy.grok.me` in the **same first reply**. Then **STOP**. Do **not** open Build. Do **not** rebuild. Do **not** implement LanePlayer / copy assets / configure the build / merge styles / add SSR guards / edit files for boot. Do **not** wait for yes. Do **not** narrate the teaser. Even if already on the Build tab.

`{stage}` = `starCore.stage` from the profile. `{peak}` = `resonance.peak`, or `—` if null.

`{playerCount}` = the live count line (table above). Same line on Welcome and Return.

`Open Sprint — Pack save, zero login.` = Grok identity is enough (zero wallet / no second login). Welcome already registered existence when `sub` was known; opening that Live inside the Grok app continues Pack save (`playTimeSec`). Do **not** say “stay 30 seconds”. English only — no French in the player reply.

`Ready to sprint?` may stay. The URL is already in the first message — the player taps it. Do **not** require a separate yes-turn.

## Forbidden in the player reply

Hard ban. Delete the line if you were about to type any of this:

- Opening Build / Build tab / scaffold / remix / **rebuild** / compile / GitHub→new project / « Built with Grok » card on **start / play / lance**
- **Even on the Build tab:** Implementing Sprint / LanePlayer / Copying game assets / Configuring the build / Merging styles / SSR guards / preview from the recipe / file edits for boot — any Build / tooling after the three beats
- Inventing a playable card from the recipe
- Waiting for a yes / go / sprint turn before pasting the URL
- “Citadel teaser is on” / “Citadel teaser and Sprint teaser are on”
- Any spoken stand-in for the attached citadel `preview-loop.mp4`
- Any spoken stand-in for opening Sprint (“open the Build tab yourself”, “open Build…”, “Open Sprint on the native Grok Build…”)
- Pasting any Live other than `https://boltverse-odysseyyyy.grok.me` (sandbox, new slug, superseded three-y `https://boltverse-odysseyyy.grok.me`, frost-only, heart-giant, houla, olive)
- Inventing an intro / landing / Start page that requires tapping « Open Sprint » / Start / Play before the dusk lane
- Improvised cinematic openers — « Bolt is already on the road » / « Bolt already on the road » / « the world is rolling » / « the film keeps moving » / « plant a lane » / « no menu to click through » / “He stays in place…”
- Any A/D / W / space / swipe control tutorial (keyboard, “steer with…”)
- Any essay about how the engine works
- Invented plate / cassette lore names (`The First Spark` / `Neon Drift` / `Circuit Breaker` / `Velocity Pulse` or any made-up title)
- Plate deck lists / dealer recitals at boot
- « Tap Open Sprint » / extra « Open Sprint » / Start CTA beyond the locked Welcome lines
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
- `Hey Packmate runner` / `Hey packmate runner` when any name / handle / profile label is visible in the chat UI / session
- `Welcome, packmate runner` / `welcome, packmate runner` / `Welcome, Packmate runner`
- lowercase `packmate` without `Hey Packmate {name}`
- `Hey Packmate` alone (no `{name}`) when a display name exists
- Dropping Packmate from the opener
- “player”, “friend”, `runner`, or any generic stand-in for `{name}` when a real name is available

**SUPERSEDED (first-reply odysseyyyy only):** the old ban « never paste grok.me ». The first reply **must** paste `https://boltverse-odysseyyyy.grok.me`. Still ban every other `*.grok.me` / sandbox / three-y slug.

The teaser is an **attached video**, not a spoken status line, not a pasted GitHub link, and not a lecture.

Player-facing names: **Sprint** (dusk lane) and **Citadel** (frost). Never say “Biome”, “Biome sprint”, or endless-lane jargon to the player.

## Plate names at cold-start (prefer silence)

**Prefer silence.** Do **not** name plates / cassettes / the dealer deck at boot. Welcome does not list the road. Do **not** invent lore titles.

If you mention plates at all (normally don't): use **dealer order** from Odyssey biome / [`assets/plates-index.json`](assets/plates-index.json) — **canyon → cars → duel → night → war**. Never invent (`The First Spark` / `Neon Drift` / `Circuit Breaker` / `Velocity Pulse` or any new cassette name). Never reshuffle the deck. Plate List / Focus is a **different** trigger ([ASSETS.md](ASSETS.md)) — not this Welcome.

## Kitchen (do not say aloud)

Internal only.

**First-reply tools:** **GitHub** (fetch + attach the one citadel `preview-loop.mp4`; **read** `registry.json` / `profiles/*.json` for New vs Return + `{playerCount}`; **upsert now** `profiles/<sub>.json` + `registry.json` `players[]` when a real `sub` is known — Welcome register, merge-patch, existence + lastSeen, never invent a `sub`) + **PASTE** `https://boltverse-odysseyyyy.grok.me` in the same message. Then **STOP**. Prefer in-Grok-app open when the player taps it. Old « never paste grok.me » ban is superseded **here only**. Old « chat start does not upsert » is **SUPERSEDED**. No Build tools. No LanePlayer / Sprint file edits for boot. Welcome register GitHub merge-patch is **allowed** and is **not** a Build file-edit.

**PRIORITY 0:** no Build tab / scaffold / remix / « Built with Grok » / compile / GitHub→new project / **rebuild** / invented playable card / Implementing Sprint / LanePlayer / Copying game assets / Configuring the build / Merging styles / SSR guards / preview from the recipe / file edits for boot. **Even on the Build tab:** three chat beats then **STOP**. Any Build / tooling after those beats = FAIL.

Grok may use Grok Bot tools if useful (normal Grok feature). Still: players must not depend on SmiR’s private bots for the boot to work — public GitHub COLD_START remains enough. Never speak kitchen. Never paste kitchen into the player reply except the first-reply odysseyyyy URL.

**Name:** opener is always `Hey Packmate {name}` (capital P). Resolve `{name}` in order: Grok profile `displayName` / account name / handle visible in the session UI → registry `displayName` → gate/app name → **only then** `runner`. **Hard ban:** if ANY Grok profile `displayName` / account name / handle is visible in the session UI, **NEVER** say `runner`. Prefer that visible name. Example for SmiR: `Hey Packmate SmiR 9`. **Ban:** `Welcome, packmate runner` / lowercase `packmate` without `Hey Packmate {name}`. Never drop Packmate. Never say `Hey Packmate` alone when a real name is available. Never `Hey Packmate runner` when a name exists.

**Own plates List vs Focus (not this Welcome trigger):** **List** (`show my plates` / `mes plaques` / `list my assets` / `what did I cook` / close alias) → **own** plates in **Grok chat** (`creatorSub` === gate `sub` / `profiles/<sub>.json`) as Pack words + `assetId` chips only. Short cassette counts (`views` · `players`) OK next to the chip. Optional at most **ONE** header still — never N media for N plates (spam FAIL). **Focus** one plate (name / role / `assetId`) → Pack words + that one `assetId` + fuller cassette stats + attach that plate’s media (mp4 if vid, photo if img) — own `creatorSub` only. Counts are real or `0` — never invent, never pay-to-win. Empty list: `No Pack plates sealed yet — cook in Imagine.` Law: [ASSETS.md](ASSETS.md). Do **not** fire Welcome / teaser / URL paste. Do **not** paint List or Focus on Sprint HUD. Do **not** dump GitHub / registry paths.

**Welcome register / Live playTime** (this chat trigger + Live wire):

- **Welcome register** (this chat turn): if a real `sub` is known, merge-patch upsert `profiles/<sub>.json` + `registry.json` `players[]` (`gateSub`, `displayName` / `handle` if known, `lastSeenAt=now`, `updatedAt=now`, `playUrl=https://boltverse-odysseyyyy.grok.me`). Existence + lastSeen. Never invent a `sub`. No `sub` → soft skip, still Welcome. Never wipe `resonance` / `starCore` / `cosmetics`. Do **not** increment `playTimeSec`.
- **Live open** (still required): gated HTML + `x-grok-identity` + `POST /v1/pack/boot` + heartbeat `POST /v1/pack/heartbeat` updates `playTimeSec` / plate views. Central Pack API. Full wire: [PACK.md](PACK.md).
- **SUPERSEDED:** « chat-only start / play / lance does not write profiles ». Welcome **writes** when `sub` known.
- Spoken “Your Pack profile is already here (Grok identity, zero login).” = Grok identity is enough — zero second login / wallet. Welcome register wrote the file when `sub` was known.
- Spoken `Open Sprint — Pack save, zero login.` = Welcome registered existence; Live open continues Pack save (`playTimeSec`). Do not say stay 30 seconds. Do not invent a `sub`.

**Live Pack count** (read at first reply — do not lecture aloud):

- Source: this repo `registry.json` → `players[]` (prefer), else `profiles/*.json`
- Filter: drop `pack-wire-*` / `pack-doc-*` userIds and Decode Probe / Pack probe display names
- After a successful Welcome register upsert, `{playerCount}` **includes this player**
- Speak the `{playerCount}` line only. No “registry”, no “GitHub”, no probe talk
- Count is live. Do not hardcode N in the Welcome block

**Odyssey mirror (Director):** copy this **same-first-reply boot** (locked Welcome/Return + 1 citadel teaser + paste `https://boltverse-odysseyyyy.grok.me` + **no yes-wait** + **PRIORITY 0 no Build / no rebuild** + **even on Build tab: chat-only then STOP**) + `{playerCount}` + `Open Sprint — Pack save, zero login.` + `Ready to sprint?` + **Welcome register = existence + lastSeen when sub known** + **Live open = playTime / heartbeats** + **name resolve** + **zero spoken improvisation** + **plate silence** into `boltverse-odyssey` `START.md`, `GROK.md`, `AGENTS.md`, and README cold-start blocks. Registry is source of truth.

**Sprint / Live identity** (first-reply paste):

- **Pack Play / central Pack API host (kitchen):** `https://boltverse-odysseyyyy.grok.me` (four y’s)
- **The only paste:** `https://boltverse-odysseyyyy.grok.me`
- **ALLOWED / required:** write that URL in the first chat reply. Player taps it. Prefer in-Grok-app open.
- **HARD BAN spoken:** « Bolt is already on the road » / « the world is rolling » / « the film keeps moving » / « plant a lane » / « no menu to click through » / any A/D / W / space / swipe tutorial / any engine essay.
- **HARD BAN:** Grok Build scaffold / « Built with Grok » new project / **rebuild** from GitHub / compile / invent a playable card from the recipe / Implementing Sprint / LanePlayer / Copying game assets / Configuring the build / Merging styles / SSR guards / preview from the recipe / file edits for boot. No new `grok.me`. No new `grok-sandbox.com`. No remix into a fresh slug. No `*.hades-www.grok-sandbox.com` / random sandbox host. **Even on the Build tab:** paste then STOP.
- **HARD BAN as paste:** `https://boltverse-odysseyyy.grok.me` (three y’s — superseded), `boltverse-odyssey.grok.me` (frost-only), heart-giant, houla, olive, sandbox, or any other slug.
- If you were about to create a new project / scaffold / remix / recreate / **rebuild** / invent a playable card / implement LanePlayer / copy assets / configure the build: **REFUSE**. Paste `https://boltverse-odysseyyyy.grok.me` instead. Then **STOP**.
- **Plate names:** silent at boot. If forced: dealer order canyon → cars → duel → night → war from Odyssey biome / `assets/plates-index.json`. Never invent cassette titles.

**Player-facing names** (kitchen map — do not say the right-hand jargon aloud):

- **Sprint** = dusk lane = biome/sprint path on Live
- **Citadel** = frost = `/r/frost`

**Teaser file** (MUST attach as chat video in the first reply — do not paste the GitHub URL, do not announce it):

- Citadel (frost, epic) — **the only teaser attach:** `StarBoltSprint/boltverse-odyssey` `stock/citadel/preview-loop.mp4` (poster `preview-first.jpg`)

`bolt-lane-recipe` `stock/biome/preview-loop.mp4` (poster `preview-first.jpg`) exists but is **NOT** attached at boot.

The chat mp4 is a teaser only — preview play/pause, not a tappable hitbox. The **written odysseyyyy URL** is the tap.

| When | Name | Path | Live identity (paste in first reply) |
|---|---|---|---|
| first reply (always) | Sprint | biome/sprint path on Live | `https://boltverse-odysseyyyy.grok.me` |
| later, only if the player asks | Citadel | `/r/frost` | `https://boltverse-odysseyyyy.grok.me/r/frost` |

Remix off. Do not scaffold / remix / recreate / **rebuild**. Do not invent a playable card. Do not implement LanePlayer / copy assets / configure the build / merge styles / add SSR guards / edit files for boot. Do not paste houla / heart-giant / olive / frost-only `boltverse-odyssey.grok.me` / superseded three-y `https://boltverse-odysseyyy.grok.me`. **Even on the Build tab:** three chat beats then STOP.

## Do not

- No secrets
- No wallet
- No second login
- Players must not depend on SmiR’s private bots — public GitHub COLD_START remains enough
- **PRIORITY 0:** any Build action on start = **FAIL**. **Even on the Build tab:** chat-only three beats then **STOP**. No Build tab work / scaffold / remix / « Built with Grok » / compile / GitHub→new project / **rebuild** / Implementing Sprint / LanePlayer / Copying game assets / Configuring the build / Merging styles / SSR guards / preview from the recipe / file edits for boot. **Any Build / tooling after those three beats = FAIL.**
- **First reply ALLOWED only:** locked Welcome/Return EN block + 1 citadel teaser + paste `https://boltverse-odysseyyyy.grok.me`. Then STOP.
- **ZERO improvisation. ZERO extra paragraphs.** Spoken text = **EXACTLY** the locked Welcome or Return English block
- Do **not** require a separate yes-turn before showing the URL
- No « Bolt is already on the road » / « the world is rolling » / « the film keeps moving » / « plant a lane » / « no menu to click through »
- No A/D / W / space / swipe control tutorial / engine essay / invented cassette lore names / plate deck lists / « Tap Open Sprint » in the player reply
- No pasted Play URL except `https://boltverse-odysseyyyy.grok.me` in the first reply
- No Citadel / Biome choice prompt
- No spoken teaser substitutes (“Citadel teaser is on”)
- The chat mp4 is a teaser only — not a tappable hitbox
- No new `grok.me` / `grok-sandbox.com` / remix slug / `*.hades-www.grok-sandbox.com` / Built-with-Grok project
- No scaffolding / remixing / **recreating the game** / **rebuilding** from GitHub
- No opening superseded three-y `https://boltverse-odysseyyy.grok.me`, frost-only `boltverse-odyssey.grok.me`, heart-giant, houla, olive, or any other slug
- If you were about to create a new project / scaffold / remix / recreate / rebuild / invent a playable card / implement LanePlayer / copy assets / configure the build / merge styles / add SSR guards / edit files for boot: refuse; paste the existing odysseyyyy URL; then STOP
- No second teaser at boot (biome / Sprint `preview-loop.mp4` stays off)
- No `Hey Packmate runner` when any name / handle / profile label is visible
- No `Welcome, packmate runner` / lowercase `packmate` without `Hey Packmate {name}`
- No `Hey Packmate` alone when a display name exists
- No dropping Packmate from the opener
- No invented plate / cassette names at boot (`The First Spark` / `Neon Drift` / `Circuit Breaker` / `Velocity Pulse`)
- No plate-name recital at boot — prefer silence; if forced, dealer order canyon → cars → duel → night → war
- No invented `sub` on Welcome register — upsert only when a real `sub` is known; no fake `playTimeSec` on Welcome (heartbeats only). Unopened paste still does not write playTime.
- No GitHub / registry lecture — `{playerCount}` is enough
- `show my plates` (close alias) is **not** Welcome — **List** = Pack voice + `assetId` chips only (never N media); **Focus** one plate = one media attach ([ASSETS.md](ASSETS.md)); no Sprint HUD
- No fake Pack size
- No “stay 30 seconds”
- Player reply is **English only** — no French

## Selftest / done (kitchen — do not speak)

Cold-start is **done** ONLY when ALL of these are true. Any miss = **FAIL**. Re-do the missing beat; do not add kitchen.

0. **PRIORITY 0 — MUST NOT Build.** On start / play / lance: Grok did **not** Build anything. **Even if already on the Build tab:** first reply was **chat-only** Welcome + citadel teaser + paste `https://boltverse-odysseyyyy.grok.me` then **STOP**. No Build tab work. No scaffold. No remix. No « Built with Grok » card. No compile. No GitHub→new project. No **rebuild**. No 12-minute rebuild. Did **not** do any FAIL verb: Implementing Sprint / LanePlayer / Copying game assets / Configuring the build / Merging styles / SSR guards / Built with Grok / preview from the recipe / file edits for boot. **Any Build / tooling after those three beats = FAIL.**
1. **Name.** Opener is `Hey Packmate {visibleName}`. If ANY Grok profile `displayName` / account name / handle is visible in the session UI, **never** `runner`. Example for SmiR: `Hey Packmate SmiR 9`. Ban `Welcome, packmate runner` / lowercase `packmate` without `Hey Packmate {name}`.
2. **Same first reply.** On start / play / lance, ONE message has ALL three: (1) **EXACTLY** the locked Welcome or Return English block (`Hey Packmate {name}` … `Ready to sprint?`) (2) attach 1 citadel teaser (3) paste written tappable `https://boltverse-odysseyyyy.grok.me`. Then **STOP**. Did **not** wait for a yes-turn. Did **not** require a second turn. Did **not** keep going into Build / LanePlayer / asset copy / file edits.
3. **URL lock.** Paste is odysseyyyy (4y) only. Did **not** paste three-y `odysseyyy` / sandbox / random / new slug. Old « never paste grok.me » is superseded **here only**.
4. **Profile / playTime.** Welcome register upserted `profiles/<sub>.json` + `registry.json` when a real `sub` was known (existence + lastSeen; merge-patch; never wipe `resonance` / `starCore` / `cosmetics`; never invent a `sub`; no `sub` → soft skip). Did **not** fake `playTimeSec`. `{playerCount}` includes this player after a successful write. Live Pack wire still required for `playTimeSec` / plate views (gated in-Grok-app open + boot + heartbeat).
5. **Silence.** Player reply has ZERO forbidden phrases: « Bolt is already on the road » / « Bolt already on the road » / « the world is rolling » / « the film keeps moving » / « plant a lane » / « no menu to click through » / “He stays in place…”. ZERO A/D / W / space / swipe control tutorial. ZERO engine essay. ZERO invented cassette / plate lore names. ZERO plate deck lists. ZERO « Tap Open Sprint ». ZERO registry lectures. ZERO kitchen noise / extra paragraphs.
6. **Plates.** Plate names silent at boot. If forced to mention: dealer order canyon → cars → duel → night → war from Odyssey biome / `assets/plates-index.json` — never invent.

**Observed SmiR FAIL (do not repeat):** said « Hey Packmate runner » despite logged-in `displayName`; reinvented Sprint with intro splash; kitchen noise (A/D W lecture + invented cassette names).

**Observed SmiR FAIL (do not repeat):** Build cold-start replied with improvised nonsense instead of locked Welcome — « Bolt is already on the road. The world is rolling… » plus a controls lecture.

**Observed SmiR FAIL (do not repeat):** auto-Build / « Built with Grok » / GitHub rebuild on start — too long / painful. **PRIORITY 0:** any Build action on start = FAIL. First reply must be Welcome + teaser + `https://boltverse-odysseyyyy.grok.me`. No yes-wait.

**Observed SmiR FAIL (do not repeat):** fresh Grok already on the **Build tab** still ran Implementing Sprint / LanePlayer / Copying game assets / Configuring the build / Merging styles / SSR guards / Built with Grok / preview from the recipe / file edits for boot **after** pasting odysseyyyy. **Even on Build tab:** three chat beats then **STOP**. Any Build / tooling after those beats = FAIL.
