# Profile schema (v1)

See `profiles/smir9.json` for a filled example.

| Field | Type | Notes |
|---|---|---|
| userId | string | Opaque Grok session id when known; placeholder ok until then |
| handle | string | `@handle` from X/Grok when available |
| displayName | string | |
| playUrl | string | Canonical `*.grok.me` Play — e.g. `https://boltverse-odysseyyy.grok.me` |
| remixEnabled | boolean | |
| citadel | object | e.g. `{ \"defaultRoom\": \"frost\" }` |
| hangs | array | Short list of hung room ids / urls |
| resonance | object | `{ peak, lastRunAt }` — crystal feel, not XP |
| cosmetics | object | `{ packTitle }` |
| updatedAt | string | ISO-8601 |

Heavy mp4s stay on the Play host — only pointers here.
