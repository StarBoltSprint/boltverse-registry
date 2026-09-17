# Pack wire — any Live URL auto-joins the registry

Kitchen + implementer contract. Silent of player chat. No secrets in this repo.

## Goal

Every player-created `*.grok.me` Live (from the Odyssey recipe) connects **automatically and instantly** to central Pack profiles.

- **Identity** = Grok gate `sub`, not the URL
- **`playUrl`** = whatever origin they opened (`location.origin`)
- Same `sub` on a second Live → **same** `profiles/<sub>.json`, `playUrl` updated
- **Pack Play / central Pack API host (kitchen):** `https://boltverse-odysseyyyy.grok.me` (four y’s). Old `https://boltverse-odysseyyy.grok.me` (three y’s) is superseded — not Pack Play, not the central host.

## Hard bans

- No Connect Wallet
- No player API keys
- No xAI keys in the client
- No “only one Live has `/api/pack`” — the recipe must ship the client; writes go to the **central Pack API**
- Unsigned / no JWT → `{ "ok": false, "github": "skip", "reason": "no-sub" }` — **never invent a sub**
- Do not treat `https://boltverse-odysseyyy.grok.me` (three y’s) as Pack Play or the central Pack API host — superseded Beat 3 target

## Architecture

```
Any Live (*.grok.me)
  boot → client Pack snippet
    playUrl = location.origin
    forward gate JWT / ticket
       → CENTRAL Pack API  (one host: https://boltverse-odysseyyyy.grok.me)
            verify x-grok-identity (decode sub; trust x-forwarded-host *.grok.me; JWKS optional)
            GitHub App → StarBoltSprint/boltverse-registry
            upsert profiles/<sub>.json + registry.json row
```

Optional thin `/api/pack` on each Live may **proxy** to the central API (same contract) so same-origin cookies/headers work — but registry writes must not depend on a single Live’s secrets.

## Routes (central Pack API)

**POST `/v1/pack/boot`** (also acceptable alias **POST `/api/pack`** for back-compat)

When: first document load from the Grok app (Play Live open — gate JWT). Chat-only **start / play / lance boltverse odyssey** does **not** upsert. Hard `gateSub` write stays on this gated boot, not on Welcome.

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

**GET `/v1/pack/me`** (optional)

Bearer ticket → current profile JSON (for chat Welcome stage/peak).

## Server verify rules (copy from working heart-giant fix)

- Read `x-grok-identity` and nearby JWT headers
- Trust `x-forwarded-host: *.grok.me` even when Host is `*.vercel.app`
- Decode claim `sub` even when JWKS is 404
- Upsert on the **gate-signed document/boot** request, not only heartbeat
- Log once per boot: `identity source=… sub=…`

## GitHub write shape

- Path: `profiles/<sub>.json` (`userId` === `gateSub` === filename stem)
- Merge-patch: never wipe `resonance` / `starCore` / `cosmetics` on heartbeat
- Always set: `gateSub`, `playUrl` (from body), `lastSeenAt=now`, `updatedAt=now`
- `registry.json` `players[]`: upsert by `userId`; fields `userId`, `displayName`, `playUrl`, `lastSeenAt`, `playTimeSec`, `updatedAt`
- `playUrl` on every boot/heartbeat = client `location.origin` (federation)

Do not put GitHub App private keys, xAI keys, or tickets in this repo.

## Client snippet (recipe floor — every Live)

Pseudo:

```
on boot (Grok webview):
  POST central /v1/pack/boot { playUrl: location.origin, displayName? }
  with credentials/headers the gate already injects
  store ticket
  setInterval 30s → POST /v1/pack/heartbeat { playUrl, playTimeSec, sessionStartedAt }
on visibility hidden → one last heartbeat
console: [pack] <sub> github write ok | skip no-sub
```

No wallet UI. Fail soft if central is down (Play still works).

## Ship order

1. Stand up central Pack API + GitHub App on boltverse-registry (`contents:write`)
2. Drop client snippet into Odyssey recipe (post lane merge)
3. Validate on https://boltverse-odysseyyyy.grok.me open-from-Grok → `profiles/<sub>.json`
4. Any remix from recipe inherits client → auto-joined

## Done criteria

Open Live from Grok app ~30s → new or updated `profiles/<sub>.json` with `gateSub` + `playUrl` = that origin + `lastSeenAt`.

Second Live, different URL, same `sub` → same file, `playUrl` updated.
