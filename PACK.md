# Pack wire — any Live URL auto-joins the registry

Kitchen + implementer contract. Silent of player chat. No secrets in this repo.

> ### HARD LOCK — Pack wire is automatic (never a player ask)
>
> Players must **NEVER** have to tell Grok « install Pack wire / plate views / playTime ».
>
> 1. **Central Pack API host** = `https://boltverse-odysseyyyy.grok.me` (once restored). Other Lives **call it**. Do not invent a second central host.
> 2. **Recipe HARD:** every new biome / citadel / Sprint Live Grok **creates or publishes** MUST auto-include the Pack client (`client/pack.js` or `BOLTVERSE_PACK_ORIGIN` → central) **and** plate dealer reporting `assetId` stats (`views` / `playTimeSec` / `players`). No optional step. No waiting for the player to ask.
> 3. When Grok creates plates / biome / citadel: mint `assetId`s + wire the stats path **automatically** from [ASSETS.md](ASSETS.md) / Odyssey `biome/docs/07-pack-live.md` / [CHESTS.md](CHESTS.md) if relevant.
> 4. **Ban** treating Pack wire as a manual Build chore the player briefs.
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
- **Welcome register** (chat start) = existence + `lastSeenAt`. Canonical `playUrl=https://boltverse-odysseyyyy.grok.me`. Does **not** increment `playTimeSec`.
- **Live open** (`/v1/pack/boot` + heartbeat) = `playTimeSec` / plate views. `playUrl` = whatever origin they opened (`location.origin`)
- Same `sub` on a second Live → **same** `profiles/<sub>.json`, `playUrl` updated
- Same `sub` / `userId` lists **own** plates in **Grok chat** when the player asks (`show my plates` / close alias) — `creatorSub` === that sub. **List** = Pack voice + `assetId` chips only (never N media). **Focus** one plate = one media attach. Law: [ASSETS.md](ASSETS.md). Chat only — not Sprint HUD.
- **Pack Play / central Pack API host (kitchen):** `https://boltverse-odysseyyyy.grok.me` (four y’s). Old `https://boltverse-odysseyyy.grok.me` (three y’s) is superseded — not Pack Play, not the central host.

## Hard bans

- No Connect Wallet
- No player API keys
- No xAI keys in the client
- No “only one Live has `/api/pack`” — the recipe must ship the client; writes go to the **central Pack API**
- Unsigned / no JWT → `{ "ok": false, "github": "skip", "reason": "no-sub" }` — **never invent a sub**
- Do not treat `https://boltverse-odysseyyy.grok.me` (three y’s) as Pack Play or the central Pack API host — superseded Beat 3 target
- **Never** wait for the player to say « install Pack wire / plate views / playTime ». Pack client + plate dealer stats are recipe floor — not a briefing, not a Build chore
- **Never** publish a new biome / citadel / Sprint Live without `client/pack.js` or `BOLTVERSE_PACK_ORIGIN` → `https://boltverse-odysseyyyy.grok.me`
- **Never** invent Discord / Telegram / Slack / another X group as Pack player chat. Official chat = **Pack Den** only — exact join URL above
- **Never** claim Pack Den is inside Grok Chat 1:1 or the Live iframe. **Never** embed / iframe X Chat. v1 = open X (native)

## Architecture

```
Welcome / chat start (start / play / lance + locked Welcome)
  resolve gate sub / Grok identity JWT sub / stable Grok account id
    → GitHub merge-patch StarBoltSprint/boltverse-registry
       upsert profiles/<sub>.json + registry.json players[]
       lastSeenAt=now  playUrl=canonical odysseyyyy  (NOT playTimeSec)

Any Live (*.grok.me)
  boot → client Pack snippet
    playUrl = location.origin
    forward gate JWT / ticket
       → CENTRAL Pack API  (one host: https://boltverse-odysseyyyy.grok.me)
            verify x-grok-identity (decode sub; trust x-forwarded-host *.grok.me; JWKS optional)
            GitHub App → StarBoltSprint/boltverse-registry
            upsert profiles/<sub>.json + registry.json row
            heartbeat → playTimeSec
```

Optional thin `/api/pack` on each Live may **proxy** to the central API (same contract) so same-origin cookies/headers work — but registry writes must not depend on a single Live’s secrets.

## Welcome register (chat start)

**SUPERSEDES** « chat start does not upsert » / « Welcome reads only ». Law: [COLD_START.md](COLD_START.md).

When Grok sends the locked Welcome/Return on **start / play / lance boltverse odyssey** (any close alias):

1. Resolve identity: prefer gate `sub` / Grok identity JWT `sub` if available in session; else the stable Grok account id used for profiles. `displayName` from the Grok profile.
2. If a real `sub` / `userId` is known: **upsert now** `profiles/<sub>.json` + `registry.json` `players[]` (merge-patch). Set `gateSub`, `displayName` / `handle` if known, `lastSeenAt=now`, `updatedAt=now`, `playUrl=https://boltverse-odysseyyyy.grok.me` (canonical).
3. Do **NOT** invent a `sub`. If no `sub` → soft skip write, still show Welcome (may use `displayName` only).
4. Never wipe `resonance` / `starCore` / `cosmetics`. Do **not** increment `playTimeSec` — Welcome register does not fake playTime.
5. Return (profile exists before this write) → Welcome **Return** block. First visit → Welcome **New** block.
6. `{playerCount}` includes this player after upsert when the write succeeded.

**Welcome register = existence + lastSeen. Live open = playTime / heartbeats.** Live Pack wire is automatic (recipe floor — never a player ask) and still required for `playTimeSec` / plate views stats. Live floor: Odyssey `biome/docs/07-pack-live.md`.

## Routes (central Pack API)

**POST `/v1/pack/boot`** (also acceptable alias **POST `/api/pack`** for back-compat)

When: first document load from the Grok app (Play Live open **inside the Grok app** — gated HTML + `x-grok-identity` / gate JWT). Welcome register already wrote existence + `lastSeenAt` when a real `sub` was known on chat start. This boot is the **Live** merge-patch (`gateSub` from JWT, `playUrl` from `location.origin`). Heartbeat is the only `playTimeSec` increment. An unopened paste still does **not** write playTime. Opening Live **outside** the Grok app → `{ ok: false, reason: "no-sub" }` — never invent a `sub`. Cold-start first reply still **pastes** `https://boltverse-odysseyyyy.grok.me` (same message as Welcome + teaser — no yes-wait). Law: [COLD_START.md](COLD_START.md).

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

Every ~30s while Play is open.

Headers: `Authorization: Bearer <ticket>` (from boot)

Body:

```json
{
  "playUrl": "https://their-live.grok.me",
  "playTimeSec": 120,
  "sessionStartedAt": "ISO-8601"
}
```

Updates `lastSeenAt`, `playTimeSec`, `playUrl`, `updatedAt` on `profiles/<sub>.json` + the registry index.

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

## GitHub write shape

- Path: `profiles/<sub>.json` (`userId` === `gateSub` === filename stem)
- Merge-patch: never wipe `resonance` / `starCore` / `cosmetics` / `pendingChests` on Welcome register, boot, or heartbeat. Player chest open cues (`Open my pending Run chest` / `Open my pending Peak chest`) = [CHESTS.md](CHESTS.md).
- Always set: `gateSub`, `playUrl`, `lastSeenAt=now`, `updatedAt=now`
- Welcome register `playUrl` = canonical `https://boltverse-odysseyyyy.grok.me`
- Boot / heartbeat `playUrl` = client `location.origin` (federation)
- Welcome register does **not** increment `playTimeSec`
- `registry.json` `players[]`: upsert by `userId`; fields `userId`, `displayName`, `playUrl`, `lastSeenAt`, `playTimeSec`, `updatedAt`

Do not put GitHub App private keys, xAI keys, or tickets in this repo. No wallet. No player API keys.

## Client snippet (recipe floor — every Live)

**HARD:** every new biome / citadel / Sprint Live Grok creates or publishes ships this. Not optional. Not a player brief. Implement as `client/pack.js` **or** `BOLTVERSE_PACK_ORIGIN` pointing at central `https://boltverse-odysseyyyy.grok.me` (once restored). Plate dealer reports `assetId` stats (`views` / `playTimeSec` / `players`) on the same wire. Live floor: Odyssey `biome/docs/07-pack-live.md`.

Pseudo:

```
on boot (Grok webview):
  POST central /v1/pack/boot { playUrl: location.origin, displayName? }
  with credentials/headers the gate already injects
  store ticket
  setInterval 30s → POST /v1/pack/heartbeat { playUrl, playTimeSec, sessionStartedAt }
  plate dealer start/focus → upsert assets/<assetId>.json stats (views / playTimeSec / players)
on visibility hidden → one last heartbeat
console: [pack] <sub> github write ok | skip no-sub
```

No wallet UI. Fail soft if central is down (Play still works).

## Ship order

1. Stand up / restore central Pack API + GitHub App on boltverse-registry (`contents:write`) at `https://boltverse-odysseyyyy.grok.me`
2. Recipe already includes Pack client + plate dealer stats (`client/pack.js` or `BOLTVERSE_PACK_ORIGIN` → central). Live floor: Odyssey `biome/docs/07-pack-live.md`
3. Validate on https://boltverse-odysseyyyy.grok.me open-from-Grok → `profiles/<sub>.json` + cassette stats path
4. Any new biome / citadel / Sprint Live Grok creates or publishes **inherits** that client — auto-joined. Player never asks.

## Done criteria

start / Welcome with a known `sub` → `profiles/<sub>.json` exists (or is merge-patched) with `gateSub` + canonical `playUrl=https://boltverse-odysseyyyy.grok.me` + `lastSeenAt=now`. `playTimeSec` unchanged. `{playerCount}` includes this player after a successful write.

Open Live from Grok app ~30s → same file updated: `playUrl` = that origin + `playTimeSec` increased via heartbeat. Plate dealer writes `assetId` stats without a player install ask.

Second Live, different URL, same `sub` → same file, `playUrl` updated.

A newly created / published biome / citadel / Sprint Live already has Pack client + plate dealer stats. Nobody said « install Pack wire ».
