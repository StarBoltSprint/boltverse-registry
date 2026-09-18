#!/usr/bin/env node
/**
 * Pack Welcome register — existence + lastSeen only.
 *
 * HARD: this script (and `.github/workflows/pack-welcome.yml`) is the Welcome
 * write path. NOT `*.grok.me`. NOT Live `/v1/pack/boot`.
 *
 * Merge-patch `profiles/<sub>.json` + `registry.json` `players[]`.
 * Never invent a `sub`. Never increment `playTimeSec`.
 * Never wipe `resonance` / `starCore` / `cosmetics` / `pendingChests`.
 *
 * Env:
 *   PACK_SUB           required Grok gate sub (never invent)
 *   PACK_DISPLAY_NAME  optional
 *   PACK_HANDLE        optional
 *   PACK_PLAY_URL      optional override (default canonical odysseyyyy)
 *   PACK_ROOT          optional repo root (selftest)
 *
 * Prints `{ ok, userId, created, lastSeenAt }` and exits 0 on success.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const CANONICAL_PLAY_URL = 'https://boltverse-odysseyyyy.grok.me';

const MISSING_SUB = new Set(['', 'undefined', 'null']);

function fail(error, extra = {}) {
  console.log(JSON.stringify({ ok: false, error, ...extra }));
  process.exit(1);
}

function isBlankToken(value) {
  if (value == null) return true;
  const trimmed = String(value).trim();
  return MISSING_SUB.has(trimmed.toLowerCase());
}

function optionalString(value) {
  if (isBlankToken(value)) return undefined;
  return String(value).trim();
}

function isSafeGrokSub(sub) {
  // Accept real Grok-looking ids (handle-ish, UUID, JWT-sub charset).
  // Reject path escape. Do not invent pack-wire-* / pack-doc-* probes here.
  if (sub.includes('..') || sub.includes('/') || sub.includes('\\') || sub.includes('\0')) {
    return false;
  }
  return /^[A-Za-z0-9_.:@-]{1,256}$/.test(sub);
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJson(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function newProfile(sub, { displayName, handle, playUrl, now }) {
  return {
    userId: sub,
    gateSub: sub,
    handle: handle ?? null,
    displayName: displayName ?? null,
    playUrl,
    remixEnabled: false,
    citadel: { defaultRoom: 'frost' },
    hangs: [],
    resonance: { peak: null, lastRunAt: null },
    starCore: { charge: 0, stage: 'kindled' },
    cosmetics: { packTitle: null, inventory: [], badges: [] },
    sessionStartedAt: null,
    lastSeenAt: now,
    playTimeSec: 0,
    pendingChests: [],
    updatedAt: now,
  };
}

function mergeProfile(existing, sub, { displayName, handle, playUrl, now }) {
  // Spread keeps resonance / starCore / cosmetics / pendingChests / playTimeSec.
  const next = { ...existing };
  next.userId = sub;
  next.gateSub = sub;
  next.playUrl = playUrl;
  next.lastSeenAt = now;
  next.updatedAt = now;
  if (displayName !== undefined) next.displayName = displayName;
  if (handle !== undefined) next.handle = handle;
  return next;
}

function mergeRegistryRow(existing, sub, { displayName, handle, playUrl, now }) {
  const row = existing
    ? { ...existing }
    : {
        userId: sub,
        handle: null,
        displayName: null,
        playUrl,
        lastSeenAt: now,
        playTimeSec: 0,
        updatedAt: now,
      };
  row.userId = sub;
  row.playUrl = playUrl;
  row.lastSeenAt = now;
  row.updatedAt = now;
  if (displayName !== undefined) row.displayName = displayName;
  if (handle !== undefined) row.handle = handle;
  if (!existing) row.playTimeSec = 0;
  else if ('playTimeSec' in existing) row.playTimeSec = existing.playTimeSec;
  return row;
}

function upsertRegistry(registry, sub, patch) {
  const next = {
    version: registry.version ?? 1,
    ...registry,
    players: Array.isArray(registry.players) ? [...registry.players] : [],
  };
  const index = next.players.findIndex((row) => row && row.userId === sub);
  const merged = mergeRegistryRow(index >= 0 ? next.players[index] : null, sub, patch);
  if (index >= 0) next.players[index] = merged;
  else next.players.push(merged);
  return next;
}

function main() {
  if (isBlankToken(process.env.PACK_SUB)) {
    fail('missing-sub');
  }

  const sub = String(process.env.PACK_SUB).trim();
  if (!isSafeGrokSub(sub)) {
    fail('invalid-sub', { userId: sub });
  }

  const displayName = optionalString(process.env.PACK_DISPLAY_NAME);
  const handle = optionalString(process.env.PACK_HANDLE);
  const playUrl = optionalString(process.env.PACK_PLAY_URL) ?? CANONICAL_PLAY_URL;
  const now = new Date().toISOString();
  const patch = { displayName, handle, playUrl, now };

  const repoRoot = process.env.PACK_ROOT
    ? path.resolve(process.env.PACK_ROOT)
    : path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

  const profilePath = path.join(repoRoot, 'profiles', `${sub}.json`);
  const registryPath = path.join(repoRoot, 'registry.json');

  let created = false;
  let profile;
  if (fs.existsSync(profilePath)) {
    let existing;
    try {
      existing = readJson(profilePath);
    } catch {
      fail('invalid-json', { userId: sub, path: 'profile' });
    }
    if (existing == null || typeof existing !== 'object' || Array.isArray(existing)) {
      fail('invalid-json', { userId: sub, path: 'profile' });
    }
    profile = mergeProfile(existing, sub, patch);
  } else {
    created = true;
    profile = newProfile(sub, patch);
  }

  let registry = { version: 1, players: [] };
  if (fs.existsSync(registryPath)) {
    try {
      registry = readJson(registryPath);
    } catch {
      fail('invalid-json', { userId: sub, path: 'registry' });
    }
    if (registry == null || typeof registry !== 'object' || Array.isArray(registry)) {
      fail('invalid-json', { userId: sub, path: 'registry' });
    }
  }

  writeJson(profilePath, profile);
  writeJson(registryPath, upsertRegistry(registry, sub, patch));

  console.log(
    JSON.stringify({
      ok: true,
      userId: sub,
      created,
      lastSeenAt: now,
    }),
  );
}

main();
