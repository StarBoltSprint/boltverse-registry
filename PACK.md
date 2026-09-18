# Pack wire — any Live URL auto-joins the registry

Kitchen + implementer contract. Silent of player chat. No secrets in this repo.

> ### HARD LOCK — Pack wire is automatic (never a player ask)
>
> Players must **NEVER** have to tell Grok « install Pack wire / plate views / playTime ».
>
> **HARD SPLIT — two hosts, never mix:**
>
> 1. **Welcome existence + `lastSeenAt`** = GitHub Action `pack-welcome` on this registry (`StarBoltSprint/boltverse-registry`) — **NOT** any `*.grok.me`.
> 2. **`playTimeSec` / Live heartbeats** = durable host `StarBoltSprint/boltverse-pack` deployed on Vercel (or similar) — **NOT** any `*.grok.me`. Placeholder origin until the deploy URL is known: `https://YOUR-PACK.vercel.app`.
>
> **HARD BAN:** `https://boltverse-odysseyyyy.grok.me` / any Live as the central Pack API / playTime host. Those Lives **freeze**. Four-y currently **404s Pack routes**. Do not restore Pack API onto a grok.me Live.
>
> **Recipe HARD:** every new biome / citadel / Sprint Live Grok **creates or publishes** MUST set `window.BOLTVERSE_PACK_ORIGIN` to the boltverse-pack Vercel origin **and** load its `/client/pack.js`, **and** plate dealer reporting `assetId` stats (`views` / `playTimeSec` / `players`). No optional step. No waiting for the player to ask.
>
> When Grok creates plates / biome / citadel: mint `assetId`s + wire the stats path **automatically** from [ASSETS.md](ASSETS.md) / Odyssey `biome/docs/07-pack-live.md` / [CHESTS.md](CHESTS.md) if relevant.
>
> Live may keep a thin same-origin `/api/pack` **proxy** later, but registry writes must **not** depend on Live secrets or Live uptime for the API itself.
>
> **Phase 2 is the playTime path** (no longer HOLD). Do not build `boltverse-pack` in this registry repo.
>
> **Ban** treating Pack wire as a manual Build chore the player briefs.
>
> Live floor (Odyssey): `boltverse-odyssey` `biome/docs/07-pack-live.md`.
>
> This is **not** a start / play / lance Build. PRIORITY 0 still holds on Welcome — paste the existing odysseyyyy Live, then STOP. The wire ships **inside the recipe** so a new Live is already joined.

> ### HARD LOCK — official player chat = Pack Den (X group join)
>
> Official **player-to-player** chat is **Pack Den** — this exact X Chat group join URL. **Never invent another.**
>
> `https://x.com/i/chat/group_join/g2028659912277180482/M364z39064`
>
> Product name in Pack voice: **Pack Den**. Also accept player phrases: den · Pack chat · player chat · X chat · where players talk / exchange.
>
> **On ask (required):** when a player asks for the den / Pack chat / player chat / X chat / where players can talk to each other → reply in **English Pack voice** and **paste that exact URL**. One short EN line + the link. No kitchen noise (no GitHub paths, no API jargon).
>
> Example shape (English only — short line may vary, URL must not):
>
> ```
> Pack Den is on X — tap in and talk.
> https://x.com/i/chat/group_join/g2028659912277180482/M364z39064
> ```
>
> **Welcome / cold-start:** do **not** spam the long join URL on every Welcome unless the player asks. Locked Welcome/Return stays the spoken block. **Optional** (not required): one short EN mention `Pack Den is on X.` — never the long URL on boot. Join URL is **required on ask**.
>
> **v1 = open X (native).** Player taps the join URL → X opens. An in-game button / tap that opens **this same URL** is allowed later. **HARD BAN:** embed / iframe of X Chat. Do **not** claim Pack Den lives inside Grok Chat 1:1 or inside the Live iframe.
>
> **HARD BAN:** invent Discord / Telegram / Slack / other chat links. Invent a second X group. Claim chat is embedded in Grok 1:1 or the Live iframe. Kitchen noise in the player reply.
>
> Player-facing Pack lines are **English only**.

## Goal

Every player-created `*.grok.me` Live (from the Odyssey recipe) connects **automatically and instantly** to central Pack profiles. Chat **start / play / lance** is also a Pack register when a real `sub` is known.

- **Identity** = Grok gate `sub` / Grok identity JWT `sub` / stable Grok account id used for profiles — never invent
- **Welcome register** (chat start) = existence + `lastSeenAt` via **GitHub Action** `pack-welcome` / `scripts/pack-welcome.mjs`. Canonical `playUrl=https://boltverse-odysseyyyy.grok.me`. Does **not** increment `playTimeSec`. **NOT** any `*.grok.me` Pack API.
- **Live open** (`/v1/pack/boot` + heartbeat on **boltverse-pack**) = **Phase 2 playTime path** — `playTimeSec` / plate views. `playUrl` = whatever origin they opened (`location.origin`). Client calls `window.BOLTVERSE_PACK_ORIGIN` (placeholder `https://YOUR-PACK.vercel.app` until the Vercel URL is known). Welcome must succeed even if Live **404** / **frozen**.
- Same `sub` on a second Live → **same** `profiles/<sub>.json`, `playUrl` updated
- Same `sub` / `userId` lists **own** plates in **Grok chat** when the player asks (`show my plates` / close alias) — `creatorSub` === that sub. **List** = Pack voice + `assetId` chips only (never N media). **Focus** one plate = one media attach. Law: [ASSETS.md](ASSETS.md). Chat only — not Sprint HUD.
- **Pack Play Live paste (kitchen):** `https://boltverse-odysseyyyy.grok.me` (four y’s). Old `https://boltverse-odysseyyy.grok.me` (three y’s) is superseded — not Pack Play. **HARD BAN:** treat any `*.grok.me` (including four-y) as the Welcome register host **or** the central Pack API / playTime host.
- **Phase 2 playTime host (kitchen):** `StarBoltSprint/boltverse-pack` on Vercel (or similar). Placeholder `https://YOUR-PACK.vercel.app`. Do not invent a deploy URL. Do not build it in this repo.

## Hard bans

- No Connect Wallet
- No player API keys
- No xAI keys in the client
- No “only one Live has `/api/pack`” — the recipe must ship the client pointing at boltverse-pack; **Welcome writes go to GitHub Action `pack-welcome`**. playTime writes go to **boltverse-pack**. Neither depends on a single Live’s secrets or uptime
- Unsigned / no JWT → `{ "ok": false, "github": "skip", "reason": "no-sub" }` — **never invent a sub**
- Do not treat `https://boltverse-odysseyyy.grok.me` (three y’s) as Pack Play — superseded Beat 3 target
- **HARD BAN:** `https://boltverse-odysseyyyy.grok.me` / any Live as the central Pack API / playTime host. Lives freeze. Four-y currently 404s Pack routes
- **Never** wait for the player to say « install Pack wire / plate views / playTime ». Pack client + plate dealer stats are recipe floor — not a briefing, not a Build chore
- **Never** publish a new biome / citadel / Sprint Live without `window.BOLTVERSE_PACK_ORIGIN` → boltverse-pack Vercel origin + load `/client/pack.js` from that origin
- **Never** invent Discord / Telegram / Slack / another X group as Pack player chat. Official chat = **Pack Den** only — exact join URL above
- **Never** claim Pack Den is inside Grok Chat 1:1 or the Live iframe. **Never** embed / iframe X Chat. v1 = open X (native)
- **Never** treat any `*.grok.me` (including `https://boltverse-odysseyyyy.grok.me`) as the Welcome register host. Welcome existence write = GitHub Action `pack-welcome` only
- **Never** `POST` a Live `/v1/pack/boot` (or any `*.grok.me` Pack API) as the Welcome existence write **or** as the playTime host. Welcome must succeed even if Live 404 / frozen

## Architecture

```
Welcome / chat start (start / play / lance + locked Welcome)
  resolve gate sub / Grok identity JWT sub / stable Grok account id
    → GitHub Action pack-welcome  (workflow_dispatch / repository_dispatch)
       scripts/pack-welcome.mjs on StarBoltSprint/boltverse-registry
       upsert profiles/<sub>.json + registry.json players[]
       lastSeenAt=now  playUrl=canonical odysseyyyy  (NOT playTimeSec)
       HARD: NOT *.grok.me   NOT Live /v1/pack/boot   NOT boltverse-pack

Any Live (*.grok.me)  — Play surface (may freeze / 404 Pack routes)
  set window.BOLTVERSE_PACK_ORIGIN = https://YOUR-PACK.vercel.app
       (replace with real boltverse-pack Vercel origin when known)
  load BOLTVERSE_PACK_ORIGIN + /client/pack.js
    playUrl = location.origin
    forward gate JWT / ticket
       → Phase 2 playTime host  StarBoltSprint/boltverse-pack  (Vercel / similar)
            HARD BAN: odysseyyyy / any Live as this API
            verify x-grok-identity
            GitHub App → StarBoltSprint/boltverse-registry
            upsert profiles/<sub>.json + registry.json row
            heartbeat → playTimeSec
            never wipe cosmetics / starCore / resonance / pendingChests
            never invent a sub
```

Optional thin `/api/pack` on each Live may **proxy** playTime later (same contract) so same-origin cookies/headers work — but **registry writes must not depend on Live secrets or Live uptime** for the API itself. Welcome writes go through this repo’s Action only. playTime writes go through boltverse-pack.

## Welcome register (chat start)

> ### HARD LOCK — Welcome write host = GitHub Action (never `*.grok.me`)
>
> Existence + `lastSeenAt` write path = **this repo** `.github/workflows/pack-welcome.yml` + `scripts/pack-welcome.mjs`.
> **NOT** `https://boltverse-odysseyyyy.grok.me` Pack API. **NOT** any other `*.grok.me` Live. **NOT** boltverse-pack (that host is playTime only).
> Ban treating a grok.me host as the Welcome register. Live `/v1/pack/boot` is **not** Welcome.
> Welcome **must succeed even if Live 404 / frozen**.
> **Phase 2 playTime path** = `StarBoltSprint/boltverse-pack` on Vercel (placeholder `https://YOUR-PACK.vercel.app`) — not HOLD.

**SUPERSEDES** « chat start does not upsert » / « Welcome reads only » / « Welcome writes through the odysseyyyy Pack API » / « Phase 2 playTime Worker HOLD » / « Live is the central Pack API ». Law: [COLD_START.md](COLD_START.md).

When Grok sends the locked Welcome/Return on **start / play / lance boltverse odyssey** (any close alias):

1. Resolve identity: prefer gate `sub` / Grok identity JWT `sub` if available in session; else the stable Grok account id used for profiles. `displayName` from the Grok profile.
2. If a real `sub` / `userId` is known: **fire Welcome register now** — GitHub Action `pack-welcome` (merge-patch). Set `userId`=`gateSub`=`sub`, `displayName` / `handle` if known, `lastSeenAt=now`, `updatedAt=now`, `playUrl=https://boltverse-odysseyyyy.grok.me` (canonical; Action input may override).
3. Do **NOT** invent a `sub`. If no `sub` → soft skip write, still show Welcome (may use `displayName` only). Action is **not** required when `sub` is unknown.
4. Never wipe `resonance` / `starCore` / `cosmetics` (incl. inventory / badges) / `pendingChests`. Do **not** increment `playTimeSec` — Welcome register does not fake playTime.
5. Return (profile exists before this write) → Welcome **Return** block. First visit → Welcome **New** block.
6. `{playerCount}` includes this player after upsert when the write / dispatch succeeded.

**How Grok / Bot fires it (kitchen — never speak this):**

```
gh workflow run pack-welcome.yml -f sub=USER_SUB -f displayName='Ada Pack' -f handle='@ada'
```

or `repository_dispatch` type `pack-welcome` with `client_payload` `{ sub, displayName, handle, playUrl }`.

```
gh api repos/StarBoltSprint/boltverse-registry/dispatches \
  -f event_type=pack-welcome \
  -f 'client_payload[sub]=USER_SUB' \
  -f 'client_payload[displayName]=Ada Pack'
```

**Welcome register = existence + lastSeen (GitHub Action). Live heartbeats = playTime on boltverse-pack (Phase 2).** Live Pack wire is automatic (recipe floor — never a player ask): set `window.BOLTVERSE_PACK_ORIGIN` + load `/client/pack.js` from that origin. Welcome does **not** wait on Live or boltverse-pack. Live floor: Odyssey `biome/docs/07-pack-live.md`.

## Routes (Phase 2 playTime host — boltverse-pack)

These routes live on **`StarBoltSprint/boltverse-pack`** (Vercel / similar). Placeholder origin: `https://YOUR-PACK.vercel.app` until the deploy URL is known. **HARD BAN:** serving them from `https://boltverse-odysseyyyy.grok.me` or any other Live. Four-y currently 404s these routes. Lives freeze — do not put the API back on grok.me.

**POST `/v1/pack/boot`** (also acceptable alias **POST `/api/pack`** for back-compat)

When: first document load from the Grok app (Play Live open **inside the Grok app** — gated HTML + `x-grok-identity` / gate JWT). Client POSTs to `BOLTVERSE_PACK_ORIGIN`, **not** `location.origin` (unless a thin same-origin proxy forwards to boltverse-pack). **Not the Welcome register.** Welcome already wrote existence + `lastSeenAt` via GitHub Action `pack-welcome` when a real `sub` was known on chat start. This boot is the **playTime** merge-patch (`gateSub` from JWT, `playUrl` from the Live `location.origin`). Heartbeat is the only `playTimeSec` increment. An unopened paste still does **not** write playTime. Live **404** / frozen → Welcome still succeeded; playTime waits on boltverse-pack, not the Live API. Opening Live **outside** the Grok app → `{ ok: false, reason: "no-sub" }` — never invent a `sub`. Cold-start first reply still **pastes** `https://boltverse-odysseyyyy.grok.me` (same message as Welcome + teaser — no yes-wait). Law: [COLD_START.md](COLD_START.md).

Headers: `x-grok-identity` (JWT) and/or `Authorization: Bearer <ticket>`

Body JSON:

```json
{
  "playUrl": "https://their-live.grok.me",
  "displayName": "optional string from client",
  "client": "odyssey-pack-1"
}
```

Success 200:

```json
{
  "ok": true,
  "sub": "<gate sub>",
  "github": "ok",
  "profile": { "userId": "<sub>", "playUrl": "...", "starCore": {}, "resonance": {} },
  "ticket": "<signed short-lived heartbeat ticket>",
  "source": "x-grok-identity"
}
```

No identity 200/401 policy: prefer **200** with `{ "ok": false, "github": "skip", "reason": "no-sub", "source": "none" }` so clients don’t thrash.

**POST `/v1/pack/heartbeat`**

Every ~30s while Play is open. Same host: boltverse-pack Vercel origin — **not** the Live.

Headers: `Authorization: Bearer <ticket>` (from boot)

Body:

```json
{
  "playUrl": "https://their-live.grok.me",
  "playTimeSec": 120,
  "sessionStartedAt": "ISO-8601"
}
```

Updates `lastSeenAt`, `playTimeSec`, `playUrl`, `updatedAt` on `profiles/<sub>.json` + the registry index. Merge-patch only — never wipe `resonance` / `starCore` / `cosmetics` / `pendingChests`. Never invent a `sub`.

**Recipe HARD (every new Live):** plate dealer events upsert cassette stats on `assets/<assetId>.json` (`stats.views` / `stats.playTimeSec` / `stats.players`) — [ASSETS.md](ASSETS.md). Automatic from Odyssey `biome/docs/07-pack-live.md`. Never invent. Never pay-to-win. Never wait for the player to ask.

**GET `/v1/pack/me`** (optional)

Bearer ticket → current profile JSON (for chat Welcome stage/peak).

Chat ask `show my plates` (any close alias) uses the **same** gate `sub` to **List** own `creatorSub` assets in **Grok chat** (Pack voice + `assetId` chips + optional short cassette counts). **Focus** one plate (name / role / `assetId`) = fuller stats + that one media. [ASSETS.md](ASSETS.md). Not a profile write. Not Sprint HUD.

## Server verify rules (copy from working heart-giant fix)

- Read `x-grok-identity` and nearby JWT headers
- Trust `x-forwarded-host: *.grok.me` even when Host is `*.vercel.app`
- Decode claim `sub` even when JWKS is 404
- Upsert on the **gate-signed document/boot** request, not only heartbeat
- Log once per boot: `identity source=… sub=…`
- Host is boltverse-pack (Vercel / similar). **Never** require the Live to be the Host for registry writes

## GitHub write shape

- **Welcome writer:** `.github/workflows/pack-welcome.yml` → `scripts/pack-welcome.mjs` (Action / local). **Not** a grok.me Pack API. **Not** boltverse-pack.
- **playTime writer:** `StarBoltSprint/boltverse-pack` (Vercel / similar) merge-patches the same files on boot / heartbeat. Placeholder origin `https://YOUR-PACK.vercel.app`. **Not** any Live.
- Path: `profiles/<sub>.json` (`userId` === `gateSub` === filename stem)
- Merge-patch: never wipe `resonance` / `starCore` / `cosmetics` / `pendingChests` on Welcome register, boot, or heartbeat. Player chest open cues (`Open my pending Run chest` / `Open my pending Peak chest`) = [CHESTS.md](CHESTS.md).
- Always set: `userId`=`gateSub`=`sub`, `playUrl`, `lastSeenAt=now`, `updatedAt=now`
- Welcome register `playUrl` = canonical `https://boltverse-odysseyyyy.grok.me` (Action `playUrl` input may override)
- Boot / heartbeat `playUrl` = client Live `location.origin` (federation)
- Welcome register does **not** increment `playTimeSec`
- `registry.json` `players[]`: upsert by `userId` (merge; probes stay); fields `userId`, `displayName`, `handle`, `playUrl`, `lastSeenAt`, `playTimeSec`, `updatedAt`
- New profile defaults: `starCore` `{ charge: 0, stage: "kindled" }`, empty `cosmetics.inventory` / `hangs` / `pendingChests` — [SCHEMA.md](SCHEMA.md)
- Do **not** invent probe ids (`pack-wire-*` / `pack-doc-*`). Accept real Grok-looking `sub`s
- Never invent a `sub`

Do not put GitHub App private keys, xAI keys, or tickets in this repo. No wallet. No player API keys. Live secrets must not be required for Welcome or playTime writes.

## Client snippet (recipe floor — every Live)

**HARD:** every new biome / citadel / Sprint Live Grok creates or publishes ships this. Not optional. Not a player brief. Set `window.BOLTVERSE_PACK_ORIGIN` to the **boltverse-pack Vercel origin** and load **that origin’s** `/client/pack.js`. Placeholder until the deploy URL is known: `https://YOUR-PACK.vercel.app`. **HARD BAN:** point `BOLTVERSE_PACK_ORIGIN` at `https://boltverse-odysseyyyy.grok.me` or any other Live. Plate dealer reports `assetId` stats (`views` / `playTimeSec` / `players`) on the same wire. Live floor: Odyssey `biome/docs/07-pack-live.md`.

Pseudo:

```
window.BOLTVERSE_PACK_ORIGIN = 'https://YOUR-PACK.vercel.app'   // replace when Vercel URL known
load BOLTVERSE_PACK_ORIGIN + '/client/pack.js'
on boot (Grok webview):
  POST BOLTVERSE_PACK_ORIGIN /v1/pack/boot { playUrl: location.origin, displayName? }
  with credentials/headers the gate already injects
  store ticket
  setInterval 30s → POST BOLTVERSE_PACK_ORIGIN /v1/pack/heartbeat { playUrl, playTimeSec, sessionStartedAt }
  plate dealer start/focus → upsert assets/<assetId>.json stats (views / playTimeSec / players)
on visibility hidden → one last heartbeat
console: [pack] <sub> github write ok | skip no-sub
```

No wallet UI. Fail soft if boltverse-pack is down (Play still works). Fail soft if Live 404s Pack routes (expected — Lives freeze; API is not on grok.me).

Optional later: Live thin same-origin `/api/pack` **proxy** to `BOLTVERSE_PACK_ORIGIN`. Proxy must not hold the only GitHub write secrets. Registry writes must not depend on that Live staying up.

## Ship order

1. **Welcome register (on main):** GitHub Action `pack-welcome` + `scripts/pack-welcome.mjs` on boltverse-registry (`contents:write`). Grok/Bot fires `gh workflow run` or `repository_dispatch`. Independent of any Live and of boltverse-pack.
2. **Phase 2 playTime path (this unlock):** durable host `StarBoltSprint/boltverse-pack` on Vercel (or similar). Placeholder origin `https://YOUR-PACK.vercel.app` until the deploy URL is known. Do not invent a URL. Do not build it in this repo.
3. Recipe ships Pack client: `window.BOLTVERSE_PACK_ORIGIN` → boltverse-pack + load `/client/pack.js` from that origin + plate dealer stats. Live floor: Odyssey `biome/docs/07-pack-live.md`
4. **HARD BAN** treating odysseyyyy / any Live as the central Pack API. Lives freeze; four-y 404s Pack routes. Welcome must work when the Live is down.
5. Optional later: thin same-origin Live proxy — writes still must not depend on Live secrets or Live uptime.
6. Any new biome / citadel / Sprint Live Grok creates or publishes **inherits** that client — auto-joined for playTime. Player never asks.

## Done criteria

start / Welcome with a known `sub` → Action `pack-welcome` upserts `profiles/<sub>.json` (merge-patch) with `userId`=`gateSub`=`sub` + canonical `playUrl=https://boltverse-odysseyyyy.grok.me` + `lastSeenAt=now`. `playTimeSec` unchanged. `{playerCount}` includes this player after a successful write / dispatch. **No** `*.grok.me` call required. Never invent a `sub`. Never wipe `resonance` / `starCore` / `cosmetics` / `pendingChests`.

Open Live from Grok app ~30s → client talks to **boltverse-pack** (`BOLTVERSE_PACK_ORIGIN`, placeholder `https://YOUR-PACK.vercel.app`) → same file updated: `playUrl` = that Live origin + `playTimeSec` increased via heartbeat. Plate dealer writes `assetId` stats without a player install ask. **Not** via `boltverse-odysseyyyy.grok.me` / any Live Pack API.

Second Live, different URL, same `sub` → same file, `playUrl` updated.

A newly created / published biome / citadel / Sprint Live already has `BOLTVERSE_PACK_ORIGIN` + `/client/pack.js` from boltverse-pack + plate dealer stats. Nobody said « install Pack wire ».
