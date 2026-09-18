# COLD_START — Pack Welcome (read this first)

This is the **#1** doc for chat Grok on **start / play / lance boltverse odyssey**.

**HARD flow change (SmiR):** replace Beat 3 auto-attach. Boot is **two phases**. Phase 1 never opens Build / never attaches Live. Phase 2 runs **only** after the player says **yes** (or close alias `go` / `sprint` / `open sprint`).

Why: auto-Build on start is too long / painful. Grok rebuilds from GitHub or spins a new Built-with-Grok project instead of using SmiR’s existing Live.

`boltverse-odyssey` `START.md` / `GROK.md` / `AGENTS.md` / README cold-start blocks should **mirror** this file (two-phase boot + English Welcome + `{playerCount}` + `Open Sprint — Pack save, zero login.` + `Ready to sprint?` + `Say yes to open Sprint.` + kitchen split + **name resolve** + **Phase 1 teaser-only** + **Phase 2 yes-gated odysseyyyy Live** + **no-recreate / no-intro-splash** + **player-reply allowlist** + **zero spoken improvisation** + **plate silence**). Registry is source of truth for the Welcome lock; Odyssey must carry the same two-phase + exact Welcome/Return + yes-gate locks.

## Cold-start tools (hard)

**Phase 1:** prefer **GitHub** — fetch + attach the one citadel `preview-loop.mp4`; **read** this repo’s `registry.json` (or `profiles/*.json`) for the live Pack count. Read-only. Chat start does **not** write profiles. **Do not** open Build. **Do not** attach Live.

**Phase 2 (after yes only):** **Build** attach / open **only** the existing Live `https://boltverse-odysseyyyy.grok.me`. Never rebuild from GitHub. Never scaffold a new Built-with-Grok project.

Grok may use **Grok Bot** tools if useful (normal Grok feature — Grok↔Bot handoff is allowed). Still: players must not depend on SmiR’s private bots for the boot to work — public GitHub COLD_START remains enough.

## Player reply — two phases (ONLY this)

**ZERO improvisation. ZERO extra paragraphs.** Spoken / chat text MUST be **EXACTLY** the locked Welcome or Return English block below. Copy it. Do **not** paraphrase. Do **not** invent a cinematic opener. Do **not** lecture controls. Do **not** essay the engine.

### Phase 1 — on **start / play / lance boltverse odyssey** (any close alias)

Player sees **exactly two beats**. Then **stop**. Wait for yes.

1. **Speak** the locked Welcome or Return English block below. **EXACTLY** those lines. Verbatim. Must include `Hey Packmate {name}`, `Open Sprint — Pack save, zero login.`, `Ready to sprint?`, and `Say yes to open Sprint.` No extra sentences. No extra paragraphs. No French. No Citadel / Biome choice. No Play URL. Locked `{playerCount}` — no GitHub / registry lecture.
2. **Attach** exactly **1** stock `preview-loop.mp4` as chat media — the Odyssey epic citadel teaser (`StarBoltSprint/boltverse-odyssey` `stock/citadel/preview-loop.mp4`, poster `preview-first.jpg`). **Must attach** — a real video file in the chat. Play/pause video in chat. Do **not** attach a second teaser. Do **not** paste raw GitHub URLs, blob links, `raw.githubusercontent.com` links, or path lectures. Do **not** speak a substitute.

**HARD BAN at Phase 1 (spoken / chat / tools):**

- Opening Build / switching to the Build tab
- Attaching / opening any Live / playable Sprint / Build game console / in-chat Live preview
- Scaffolding / remixing / **recreating the game** / rebuilding from GitHub / a new Built-with-Grok project
- Controls lecture / improvised prose / plate lists (full ban list below)
- Pasting any `*.grok.me` / Play URL

Phase 1 **ends** on the locked invite. A Chat `preview-loop.mp4` file chip **alone** is the correct Phase 1 end. Do **not** auto-attach playable. Wait.

### Phase 2 — only after the player says **yes** / **go** / **sprint** / **open sprint** (close alias)

THEN attach / open playable from the **EXISTING** Live ONLY: `https://boltverse-odysseyyyy.grok.me`.

- Land **IN** Sprint play. No intro / landing / Start splash. No menu to tap first.
- **No rebuild from GitHub.** **No new Built-with-Grok project.** No new `grok.me`. No sandbox. No remix slug.
- If attach works: do **not** paste the URL. Do **not** lecture. Do **not** re-speak Welcome.
- If attach **fails**: one short English line + last-resort **may paste** `https://boltverse-odysseyyyy.grok.me`. Still **no** scaffold / no rebuild / no new Built-with-Grok project.

Kitchen only (never speak unless last-resort paste): Interactive Sprint lives on **Build** (tabs: Chat / Imagine / Build) — native Grok Build game console / in-chat playable Live preview pointing at **only** that existing odysseyyyy Live. Not Chat Imagine. Not the Phase 1 teaser chip as Play.

**Forbidden (Phase 2):** leaving yes unanswered with no playable **and** no last-resort odysseyyyy URL. Still forbidden: inventing a new publish.

## HARD BAN at boot (spoken / chat) — both phases

Observed SmiR FAIL: improvised nonsense instead of locked Welcome.

- « Bolt is already on the road » / « Bolt already on the road » / « the world is rolling » / « the film keeps moving » / « plant a lane » / « no menu to click through »
- Any A/D / W / space / swipe control tutorial (keyboard, “steer with…”, “He stays in place…”)
- Any essay about how the engine works
- Invented plate / cassette lore names (`The First Spark` / `Neon Drift` / `Circuit Breaker` / `Velocity Pulse` or any made-up title)
- Plate deck lists / dealer recitals at boot
- « Tap Open Sprint » / Start as an extra spoken CTA or in-game splash button (the locked lines `Open Sprint — Pack save, zero login.` and `Say yes to open Sprint.` are the only allowed “Open Sprint” text)
- Registry / GitHub / `plates-index` / biome-path lectures
- Any kitchen noise / extra paragraph / how-to / lore dump

Those kitchen facts stay **silent**. Phase 1 attaches the teaser only. Phase 2 attaches the existing Live. Do **not** narrate either attach.

Do **not** ask Citadel or Biome. Citadel only if the player later asks for Citadel.

### Phase 2 Live lock (kitchen)

Open / attach **ONLY** `https://boltverse-odysseyyyy.grok.me` as the in-chat Build playable preview / native Build console pointing at that Live. That four-y URL is the **only** Phase 2 kitchen identity and the Pack Play / central Pack API host. Old `https://boltverse-odysseyyy.grok.me` (three y’s) is superseded — not Pack Play, not Phase 2 Sprint.

1. **ONLY** after yes / go / sprint / open sprint. **ONLY** that canonical Pack Play Live. Dusk Sprint LanePlayer. Kitchen only (never speak): land **IN** Sprint play — not a static image carousel, not a new project, not a menu / landing / Start page.
2. **HARD BAN:** scaffolding / remixing / **recreating the game** / rebuilding from GitHub / a new Built-with-Grok project. No new `grok.me`. No new `grok-sandbox.com`. No remix into a fresh slug. No `*.hades-www.grok-sandbox.com` / random sandbox host. Observed FAIL: `le-wild.hades-www.grok-sandbox.com` titled “Boltverse Odyssey” with a white-dog + brown-cat image carousel — that is **not** Pack Play. Observed FAIL: reinvented Sprint with intro splash « Open Sprint » / Start instead of attaching the existing odysseyyyy Live — that is **not** Pack Play. Observed FAIL: auto-Build on start that rebuilds instead of using SmiR’s Live.
3. **HARD BAN:** inventing an intro / landing / Start page that requires tapping « Open Sprint » / Start / Play before the dusk lane. Kitchen only (never speak): land **IN** Sprint play — not a menu splash. **HARD BAN spoken:** « Bolt is already on the road » / « the world is rolling » / « the film keeps moving » / « plant a lane » / « no menu to click through ».
4. **HARD BAN:** opening `https://boltverse-odysseyyy.grok.me` (three y’s — superseded), `boltverse-odyssey.grok.me` frost-only, heart-giant, houla, olive, or any other slug as Phase 2 Sprint.
5. If Build would create a new project / scaffold / remix / recreate / rebuild from GitHub: **REFUSE** and reopen / attach the existing odysseyyyy Live instead.
6. If attach works: do **not** paste the URL. If attach fails: one short English line + last-resort may paste `https://boltverse-odysseyyyy.grok.me`. Still do **not** invent a new publish / splash / Start page.
7. Keep Phase 1: 1 citadel teaser, English Welcome, real name, `{playerCount}`, `Open Sprint — Pack save, zero login.`, `Ready to sprint?`, `Say yes to open Sprint.`

## Trigger

**Phase 1 trigger:** player says **start / play / lance boltverse odyssey** (any close alias).

Chat Phase 1 = Welcome + teaser only. **Not** a hard register. **Not** a Live attach.

**Phase 2 trigger:** player says **yes** / **go** / **sprint** / **open sprint** (close alias) **after** Phase 1. Do **not** fire Phase 2 on the start line. Do **not** fire Phase 2 on List / Focus.

**Not this trigger:** **List** (`show my plates` / `mes plaques` / `list my assets` / `what did I cook` / close alias) = Pack voice + `assetId` chips only in **Grok chat** (optional at most ONE header still — never N media). **Focus** one plate (name / role / `assetId`) = that one media attach. Law: [ASSETS.md](ASSETS.md). Do **not** fire Welcome / Phase 2. Do **not** paint List or Focus on Sprint HUD.

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
Say yes to open Sprint.
```

## Return (has profile)

```
Hey Packmate {name} — welcome back. Core {stage}, last peak {peak or —}.
{playerCount}
Open Sprint — Pack save, zero login.
Powered by xAI & YOU.
Ready to sprint?
Say yes to open Sprint.
```

Spoken Phase 1 text **ends** on `Say yes to open Sprint.` **That block is the entire spoken Phase 1 reply.** Zero extra paragraphs. Zero improvisation. No `Play →` line. No pasted Play URL. No `Say citadel or biome.` Then **attach** exactly **1** stock `preview-loop.mp4` as chat media (Odyssey epic citadel teaser) and **stop**. Do **not** open Build. Do **not** attach Live. Do **not** narrate the teaser.

`{stage}` = `starCore.stage` from the profile. `{peak}` = `resonance.peak`, or `—` if null.

`{playerCount}` = the live count line (table above). Same line on Welcome and Return.

`Open Sprint — Pack save, zero login.` = opening Sprint creates/saves the Pack profile; no second login. Do **not** say “stay 30 seconds”. English only — no French in the player reply.

`Ready to sprint?` + `Say yes to open Sprint.` = the locked invite. Player must say **yes** (close alias: `go` / `sprint` / `open sprint`) before Phase 2 playable. Do **not** attach playable until that yes.

## Forbidden in the player reply

Hard ban. Delete the line if you were about to type any of this:

- Opening Build / attaching Live / pasting a Play URL **during Phase 1**
- Auto-Build / auto-attach on **start / play / lance** (must wait for yes)
- “Citadel teaser is on” / “Citadel teaser and Sprint teaser are on”
- Any spoken stand-in for the attached citadel `preview-loop.mp4`
- Any spoken stand-in for attaching / opening Sprint (“open the Build tab yourself”, “open Build…”, “Open Sprint on the native Grok Build…”) except Phase 2 last-resort (one short line + optional odysseyyyy URL)
- Opening / attaching any Live other than `https://boltverse-odysseyyyy.grok.me` as Phase 2 Sprint (sandbox, new slug, superseded three-y `https://boltverse-odysseyyy.grok.me`, frost-only, heart-giant, houla, olive)
- Scaffolding / remixing / **recreating the game** / rebuilding from GitHub / a new Built-with-Grok project, a new `grok.me` / `grok-sandbox.com` / remix slug, or letting Build create a new project
- Inventing an intro / landing / Start page that requires tapping « Open Sprint » / Start / Play before the dusk lane
- Landing the player on a menu splash instead of **IN** Sprint play (kitchen only — never speak this)
- Improvised cinematic openers — « Bolt is already on the road » / « Bolt already on the road » / « the world is rolling » / « the film keeps moving » / « plant a lane » / « no menu to click through » / “He stays in place…”
- Any A/D / W / space / swipe control tutorial (keyboard, “steer with…”)
- Any essay about how the engine works
- Invented plate / cassette lore names (`The First Spark` / `Neon Drift` / `Circuit Breaker` / `Velocity Pulse` or any made-up title)
- Plate deck lists / dealer recitals at boot
- « Tap Open Sprint » / extra « Open Sprint » / Start CTA beyond the locked Welcome lines
- `Play →` plus any pasted Play / `*.grok.me` / `*.grok-sandbox.com` URL **except** Phase 2 last-resort paste of `https://boltverse-odysseyyyy.grok.me` when attach failed
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

The teaser is an **attached video**, not a spoken status line, not a pasted link, and not a lecture.

Player-facing names: **Sprint** (dusk lane) and **Citadel** (frost). Never say “Biome”, “Biome sprint”, or endless-lane jargon to the player.

## Plate names at cold-start (prefer silence)

**Prefer silence.** Do **not** name plates / cassettes / the dealer deck at boot. Welcome does not list the road. Do **not** invent lore titles.

If you mention plates at all (normally don't): use **dealer order** from Odyssey biome / [`assets/plates-index.json`](assets/plates-index.json) — **canyon → cars → duel → night → war**. Never invent (`The First Spark` / `Neon Drift` / `Circuit Breaker` / `Velocity Pulse` or any new cassette name). Never reshuffle the deck. Plate List / Focus is a **different** trigger ([ASSETS.md](ASSETS.md)) — not this Welcome.

## Kitchen (do not say aloud)

Internal only.

**Phase 1 tools:** **GitHub** (fetch + attach the one citadel `preview-loop.mp4`; **read** `registry.json` for `{playerCount}`). **HARD BAN Phase 1:** Build open, Live attach, scaffold, rebuild from GitHub, new Built-with-Grok project.

**Phase 2 tools (after yes only):** **Build** attach / open **only** `https://boltverse-odysseyyyy.grok.me` as a playable Build game console / in-chat Live preview of that **existing** Live. Never rebuild. If attach fails: one short line + last-resort may paste that URL.

Grok may use Grok Bot tools if useful (normal Grok feature). Still: players must not depend on SmiR’s private bots for the boot to work — public GitHub COLD_START remains enough. Never speak kitchen. Never paste kitchen into the player reply except Phase 2 last-resort odysseyyyy URL.

**Name:** opener is always `Hey Packmate {name}` (capital P). Resolve `{name}` in order: Grok profile `displayName` / account name / handle visible in the session UI → registry `displayName` → gate/app name → **only then** `runner`. **Hard ban:** if ANY Grok profile `displayName` / account name / handle is visible in the session UI, **NEVER** say `runner`. Prefer that visible name. Example for SmiR: `Hey Packmate SmiR 9`. **Ban:** `Welcome, packmate runner` / lowercase `packmate` without `Hey Packmate {name}`. Never drop Packmate. Never say `Hey Packmate` alone when a real name is available. Never `Hey Packmate runner` when a name exists.

**Own plates List vs Focus (not this Welcome trigger):** **List** (`show my plates` / `mes plaques` / `list my assets` / `what did I cook` / close alias) → **own** plates in **Grok chat** (`creatorSub` === gate `sub` / `profiles/<sub>.json`) as Pack words + `assetId` chips only. Short cassette counts (`views` · `players`) OK next to the chip. Optional at most **ONE** header still — never N media for N plates (spam FAIL). **Focus** one plate (name / role / `assetId`) → Pack words + that one `assetId` + fuller cassette stats + attach that plate’s media (mp4 if vid, photo if img) — own `creatorSub` only. Counts are real or `0` — never invent, never pay-to-win. Empty list: `No Pack plates sealed yet — cook in Imagine.` Law: [ASSETS.md](ASSETS.md). Do **not** fire Welcome / Phase 2. Do **not** paint List or Focus on Sprint HUD. Do **not** dump GitHub / registry paths.

**Hard register / gateSub write** (not the chat trigger):

- Hard upsert (`profiles/<sub>.json` + `registry.json` row, `gateSub` from JWT) = player **opens Play Live from the Grok app** (gated document / boot request). Central Pack API. Full wire: [PACK.md](PACK.md).
- Chat-only **start / play / lance boltverse odyssey** does **not** write profiles. Do **not** require “start” alone to upsert. Welcome **reads** identity + `{playerCount}` only.
- Spoken “Your Pack profile is already here (Grok identity, zero login).” = Grok identity is enough — zero second login / wallet. It is **not** a claim that this chat turn wrote a file.
- Spoken `Open Sprint — Pack save, zero login.` = the save happens when they **open Sprint** (gated Live, after yes). Do not say stay 30 seconds. Do not imply chat start wrote the file.

**Live Pack count** (read at Phase 1 — do not lecture aloud):

- Source: this repo `registry.json` → `players[]` (prefer), else `profiles/*.json`
- Filter: drop `pack-wire-*` / `pack-doc-*` userIds and Decode Probe / Pack probe display names
- Speak the `{playerCount}` line only. No “registry”, no “GitHub”, no probe talk
- Count is live. Do not hardcode N in the Welcome block

**Odyssey mirror (Director):** copy this **two-phase boot** (Phase 1 = locked Welcome/Return + 1 citadel teaser + `Say yes to open Sprint.` + **no Build / no Live**; Phase 2 = after yes / go / sprint / open sprint, attach existing `https://boltverse-odysseyyyy.grok.me` only) + `{playerCount}` + `Open Sprint — Pack save, zero login.` + hard-write split + **name resolve** + **no-recreate / no-intro-splash / no GitHub rebuild / no new Built-with-Grok** + **zero spoken improvisation** + **plate silence** into `boltverse-odyssey` `START.md`, `GROK.md`, `AGENTS.md`, and README cold-start blocks. Registry is source of truth. Spoken Phase 1 = **EXACTLY** the locked Welcome/Return English block. Zero extra paragraphs.

**Sprint Build / Live identity** (Phase 2 only — do not paste into chat when attach works):

- **Pack Play / central Pack API host (kitchen):** `https://boltverse-odysseyyyy.grok.me` (four y’s)
- **Phase 2 hard lock — the only attach target:** `https://boltverse-odysseyyyy.grok.me`
- Open / attach that Live as an **in-chat Build playable preview** / native Build console pointing at that existing Live. Never dump the URL in chat when attach works. Last-resort on attach fail: one short line + may paste that URL.
- Kitchen only (never speak): land **IN** Sprint play — not a menu / landing / Start splash that must be tapped first.
- **HARD BAN spoken:** « Bolt is already on the road » / « the world is rolling » / « the film keeps moving » / « plant a lane » / « no menu to click through » / any A/D / W / space / swipe tutorial / any engine essay.
- **HARD BAN:** scaffold / remix / **recreate the game** / rebuild from GitHub / new Built-with-Grok project. No new `grok.me`. No new `grok-sandbox.com`. No remix into a fresh slug. No `*.hades-www.grok-sandbox.com` / random sandbox host. No invented intro / landing / « Open Sprint » / Start page. **HARD BAN Phase 1:** any of the above, plus any Build / Live attach.
- **HARD BAN as Phase 2 Sprint:** `https://boltverse-odysseyyy.grok.me` (three y’s — superseded), `boltverse-odyssey.grok.me` (frost-only), heart-giant, houla, olive, or any other slug.
- If Build would create a new project / scaffold / remix / recreate / rebuild: **REFUSE**. Reopen / attach the existing odysseyyyy Live. Do not invent a new publish / splash.
- Sprint path = biome/sprint path on that odysseyyyy Live. Dusk Sprint LanePlayer lives there — not on houla, not on a sandbox carousel, not on a reinvented Start page.
- **Plate names:** silent at boot. If forced: dealer order canyon → cars → duel → night → war from Odyssey biome / `assets/plates-index.json`. Never invent cassette titles.

**Player-facing names** (kitchen map — do not say the right-hand jargon aloud):

- **Sprint** = dusk lane = biome/sprint path on Live
- **Citadel** = frost = `/r/frost`

**Teaser file** (Phase 1 MUST attach as chat video — do not paste the URL, do not announce it):

- Citadel (frost, epic) — **the only Phase 1 attach:** `StarBoltSprint/boltverse-odyssey` `stock/citadel/preview-loop.mp4` (poster `preview-first.jpg`)

`bolt-lane-recipe` `stock/biome/preview-loop.mp4` (poster `preview-first.jpg`) exists but is **NOT** attached at boot.

The chat mp4 is a teaser only — preview play/pause, not a tappable hitbox, **not** Phase 2 Play.

**Phase 2 Open Sprint** (after yes only — silent after attach, no kitchen lecture):

Interactive Sprint lives on **Build** (native Grok Build game console / in-chat playable Live preview pointing at **only** `https://boltverse-odysseyyyy.grok.me`). **Not** Chat Imagine. **Not** a downloadable `preview-loop.mp4` file chip alone. **Not** a new Build / Built-with-Grok project. **Not** a GitHub rebuild. **Not** a sandbox host. **Not** a recreated game. **Not** an intro / landing / Start splash.

Prefer: attach / open the tappable Sprint as an in-chat Build playable Live preview of the existing odysseyyyy Live (playable card in the thread), or silently open / switch to the Build tab on that Live. Kitchen only (never speak): land **IN** Sprint play — not a menu splash.
If attach fails: one short English line + last-resort may paste `https://boltverse-odysseyyyy.grok.me`. Still no scaffold.
If Build would create a new project / scaffold / remix / recreate / rebuild / invent a Start page: **REFUSE** and reopen / attach `https://boltverse-odysseyyyy.grok.me` instead.

| When | Name | Path | Live identity |
|---|---|---|---|
| Phase 2 (after yes only) | Sprint | biome/sprint path on Live | `https://boltverse-odysseyyyy.grok.me` |
| later, only if the player asks | Citadel | `/r/frost` | `https://boltverse-odysseyyyy.grok.me/r/frost` |

Sprint path = biome/sprint path on that odysseyyyy Live. Do not say that aloud. Phase 2 is **existing odysseyyyy Live only**, not a Chat file chip, not a GitHub rebuild, not a new Built-with-Grok project, not a sandbox, not an intro splash. Citadel stays closed until the player asks.

Remix off. Do not scaffold / remix / recreate / rebuild the game. Do not invent an intro / landing / Start / « Open Sprint » splash. Do not open houla / heart-giant / olive / frost-only `boltverse-odyssey.grok.me` / superseded three-y `https://boltverse-odysseyyy.grok.me` as Phase 2.

## Do not

- No secrets
- No wallet
- No second login
- Players must not depend on SmiR’s private bots — public GitHub COLD_START remains enough
- **Phase 1 ALLOWED only:** locked Welcome/Return EN block + 1 citadel teaser. Then stop. Wait for yes.
- **Phase 2 ALLOWED only:** after yes / go / sprint / open sprint — attach existing odysseyyyy Live
- **ZERO improvisation. ZERO extra paragraphs.** Spoken Phase 1 = **EXACTLY** the locked Welcome or Return English block
- No Phase 1 Build open / Live attach / auto-Build / GitHub rebuild / new Built-with-Grok project
- No « Bolt is already on the road » / « the world is rolling » / « the film keeps moving » / « plant a lane » / « no menu to click through »
- No A/D / W / space / swipe control tutorial / engine essay / invented cassette lore names / plate deck lists / « Tap Open Sprint » in the player reply
- No pasted Play / `*.grok.me` / `*.grok-sandbox.com` URL in Phase 1. Phase 2: no paste when attach works; last-resort may paste odysseyyyy only
- No Citadel / Biome choice prompt
- No spoken teaser substitutes (“Citadel teaser is on”)
- The chat mp4 is a teaser only — not a tappable hitbox and **not** Phase 2
- No Phase 2 attach except `https://boltverse-odysseyyyy.grok.me`
- No new `grok.me` / `grok-sandbox.com` / remix slug / `*.hades-www.grok-sandbox.com` / Built-with-Grok project
- No scaffolding / remixing / **recreating the game** / rebuilding from GitHub
- No invented intro / landing / Start / « Open Sprint » splash — kitchen only: land **IN** Sprint play (never speak that)
- No opening superseded three-y `https://boltverse-odysseyyy.grok.me`, frost-only `boltverse-odyssey.grok.me`, heart-giant, houla, olive, or any other slug as Phase 2 Sprint
- If Build would create a new project / scaffold / remix / recreate / rebuild: refuse; reopen / attach the existing odysseyyyy Live
- No second teaser at boot (biome / Sprint `preview-loop.mp4` stays off)
- No `Hey Packmate runner` when any name / handle / profile label is visible
- No `Welcome, packmate runner` / lowercase `packmate` without `Hey Packmate {name}`
- No `Hey Packmate` alone when a display name exists
- No dropping Packmate from the opener
- No invented plate / cassette names at boot (`The First Spark` / `Neon Drift` / `Circuit Breaker` / `Velocity Pulse`)
- No plate-name recital at boot — prefer silence; if forced, dealer order canyon → cars → duel → night → war
- No profile upsert on chat-only start — hard write stays on gated Live open
- No GitHub / registry lecture — `{playerCount}` is enough
- `show my plates` (close alias) is **not** Welcome — **List** = Pack voice + `assetId` chips only (never N media); **Focus** one plate = one media attach ([ASSETS.md](ASSETS.md)); no Sprint HUD
- No fake Pack size
- No “stay 30 seconds”
- Player reply is **English only** — no French

## Selftest / done (kitchen — do not speak)

Cold-start is **done** ONLY when ALL of these are true. Any miss = **FAIL**. Re-do the missing beat; do not add kitchen.

1. **Name.** Opener is `Hey Packmate {visibleName}`. If ANY Grok profile `displayName` / account name / handle is visible in the session UI, **never** `runner`. Example for SmiR: `Hey Packmate SmiR 9`. Ban `Welcome, packmate runner` / lowercase `packmate` without `Hey Packmate {name}`.
2. **Phase 1 allowlist.** On start / play / lance: spoken text = **EXACTLY** the locked Welcome or Return English block (`Hey Packmate {name}` … `Ready to sprint?` + `Say yes to open Sprint.`). Attach 1 citadel teaser only. **ZERO** Build open. **ZERO** Live attach. **ZERO** playable Sprint. **ZERO** auto-Build. Then stop and wait for yes.
3. **Phase 2 yes-gate.** Playable attach happens **only** after the player said **yes** / **go** / **sprint** / **open sprint**. Target = existing `https://boltverse-odysseyyyy.grok.me` ONLY. Did **not** scaffold / remix / recreate / rebuild from GitHub / invent a new Built-with-Grok project. Did **not** invent a new `grok.me` / hades-www sandbox. Did **not** invent an intro / landing / Start / « Open Sprint » splash. Kitchen only: landed **IN** Sprint play — never narrated that. Attach-fail last-resort: one short line + may paste that odysseyyyy URL — still no scaffold.
4. **Silence.** Player reply has ZERO forbidden phrases: « Bolt is already on the road » / « Bolt already on the road » / « the world is rolling » / « the film keeps moving » / « plant a lane » / « no menu to click through » / “He stays in place…”. ZERO A/D / W / space / swipe control tutorial. ZERO engine essay. ZERO invented cassette / plate lore names (`The First Spark` / `Neon Drift` / `Circuit Breaker` / `Velocity Pulse`). ZERO plate deck lists. ZERO « Tap Open Sprint ». ZERO registry lectures. ZERO kitchen noise / extra paragraphs.
5. **Plates.** Plate names silent at boot. If forced to mention: dealer order canyon → cars → duel → night → war from Odyssey biome / `assets/plates-index.json` — never invent.

**Observed SmiR FAIL (do not repeat):** said « Hey Packmate runner » despite logged-in `displayName`; reinvented Sprint with intro splash « Open Sprint » / Start; kitchen noise (A/D W lecture + invented cassette names); wrong plate order; did **not** open existing Live `https://boltverse-odysseyyyy.grok.me`.

**Observed SmiR FAIL (do not repeat):** Build cold-start replied with improvised nonsense instead of locked Welcome — « Bolt is already on the road. The world is rolling. Swipe/tap A/D W… He stays in place. The film keeps moving… » plus a controls lecture. No `Hey Packmate {name}`. No `Open Sprint — Pack save, zero login.`

**Observed SmiR FAIL (do not repeat):** auto-Build / auto-attach on start — too long / painful; Grok rebuilt from GitHub or a new Built-with-Grok project instead of using SmiR’s existing odysseyyyy Live. Phase 1 must stop at teaser + `Say yes to open Sprint.`
