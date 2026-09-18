#!/usr/bin/env node
/**
 * Local checks for scripts/pack-welcome.mjs.
 * Run: node scripts/pack-welcome.selftest.mjs
 */

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const script = path.join(here, 'pack-welcome.mjs');
const CANONICAL = 'https://boltverse-odysseyyyy.grok.me';

let failed = 0;

function assert(cond, message) {
  if (!cond) {
    failed += 1;
    console.error(`FAIL  ${message}`);
  } else {
    console.log(`ok    ${message}`);
  }
}

function run(env, root) {
  return spawnSync(process.execPath, [script], {
    env: { ...process.env, ...env, PACK_ROOT: root },
    encoding: 'utf8',
  });
}

function read(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

const root = fs.mkdtempSync(path.join(os.tmpdir(), 'pack-welcome-'));
fs.mkdirSync(path.join(root, 'profiles'));

const seed = {
  userId: 'seed-player',
  gateSub: 'seed-player',
  handle: '@seed',
  displayName: 'Seed',
  playUrl: 'https://old-live.example',
  remixEnabled: false,
  citadel: { defaultRoom: 'frost' },
  hangs: ['frost'],
  resonance: { peak: 9, lastRunAt: '2026-09-01T00:00:00.000Z' },
  starCore: { charge: 4, stage: 'lit' },
  cosmetics: {
    packTitle: 'Keeper',
    inventory: [{ kind: 'badge', id: 'keep-me', title: 'Keep' }],
    badges: [{ id: 'keep-me' }],
  },
  sessionStartedAt: '2026-09-01T00:00:00.000Z',
  lastSeenAt: '2026-09-01T00:00:00.000Z',
  playTimeSec: 42,
  pendingChests: [{ id: 'chest_run_seed', tier: 'run', status: 'pending' }],
  updatedAt: '2026-09-01T00:00:00.000Z',
  notes: 'do not wipe',
};
fs.writeFileSync(path.join(root, 'profiles', 'seed-player.json'), `${JSON.stringify(seed, null, 2)}\n`);
fs.writeFileSync(
  path.join(root, 'registry.json'),
  `${JSON.stringify(
    {
      version: 1,
      players: [
        {
          userId: 'pack-wire-probe',
          handle: null,
          displayName: 'pack-wire-probe',
          playUrl: CANONICAL,
          lastSeenAt: '2026-09-17T06:12:46.181Z',
          playTimeSec: 0,
          updatedAt: '2026-09-17T06:12:46.181Z',
        },
        {
          userId: 'seed-player',
          handle: '@seed',
          displayName: 'Seed',
          playUrl: 'https://old-live.example',
          lastSeenAt: '2026-09-01T00:00:00.000Z',
          playTimeSec: 42,
          updatedAt: '2026-09-01T00:00:00.000Z',
        },
      ],
    },
    null,
    2,
  )}\n`,
);

const missing = run({}, root);
assert(missing.status !== 0, 'missing PACK_SUB exits non-zero');
assert(JSON.parse(missing.stdout).error === 'missing-sub', 'missing PACK_SUB prints missing-sub');

for (const bad of ['', 'undefined', 'null', '  undefined  ', 'NULL']) {
  const result = run({ PACK_SUB: bad }, root);
  assert(result.status !== 0, `PACK_SUB=${JSON.stringify(bad)} exits non-zero`);
}

const pathEscape = run({ PACK_SUB: '../etc' }, root);
assert(pathEscape.status !== 0, 'path-escape sub rejected');

const createdRun = run(
  {
    PACK_SUB: 'user_ab12cd34',
    PACK_DISPLAY_NAME: 'Ada Pack',
    PACK_HANDLE: '@ada',
  },
  root,
);
assert(createdRun.status === 0, 'create exits 0');
const createdSummary = JSON.parse(createdRun.stdout);
assert(createdSummary.ok === true, 'create ok');
assert(createdSummary.userId === 'user_ab12cd34', 'create userId');
assert(createdSummary.created === true, 'create created=true');
assert(typeof createdSummary.lastSeenAt === 'string', 'create lastSeenAt');

const created = read(path.join(root, 'profiles', 'user_ab12cd34.json'));
assert(created.userId === 'user_ab12cd34' && created.gateSub === 'user_ab12cd34', 'create userId=gateSub=sub');
assert(created.displayName === 'Ada Pack' && created.handle === '@ada', 'create names');
assert(created.playUrl === CANONICAL, 'create canonical playUrl');
assert(created.starCore.stage === 'kindled' && created.starCore.charge === 0, 'create starCore kindled 0');
assert(Array.isArray(created.cosmetics.inventory) && created.cosmetics.inventory.length === 0, 'create empty inventory');
assert(Array.isArray(created.hangs) && created.hangs.length === 0, 'create empty hangs');
assert(Array.isArray(created.pendingChests) && created.pendingChests.length === 0, 'create empty pendingChests');
assert(created.playTimeSec === 0, 'create playTimeSec=0');
assert(created.sessionStartedAt === null, 'create sessionStartedAt null (not a Play session)');

const mergeRun = run({ PACK_SUB: 'seed-player' }, root);
assert(mergeRun.status === 0, 'merge exits 0');
const mergeSummary = JSON.parse(mergeRun.stdout);
assert(mergeSummary.created === false, 'merge created=false');

const merged = read(path.join(root, 'profiles', 'seed-player.json'));
assert(merged.resonance.peak === 9, 'merge keeps resonance');
assert(merged.starCore.stage === 'lit' && merged.starCore.charge === 4, 'merge keeps starCore');
assert(merged.cosmetics.inventory[0].id === 'keep-me', 'merge keeps cosmetics.inventory');
assert(merged.cosmetics.badges[0].id === 'keep-me', 'merge keeps cosmetics.badges');
assert(merged.pendingChests[0].id === 'chest_run_seed', 'merge keeps pendingChests');
assert(merged.playTimeSec === 42, 'merge does not increment playTimeSec');
assert(merged.hangs[0] === 'frost', 'merge keeps hangs');
assert(merged.notes === 'do not wipe', 'merge keeps extra fields');
assert(merged.displayName === 'Seed' && merged.handle === '@seed', 'empty name inputs do not wipe');
assert(merged.playUrl === CANONICAL, 'merge sets canonical playUrl');
assert(merged.lastSeenAt !== seed.lastSeenAt, 'merge bumps lastSeenAt');
assert(merged.userId === 'seed-player' && merged.gateSub === 'seed-player', 'merge userId=gateSub');

const named = run(
  {
    PACK_SUB: 'seed-player',
    PACK_DISPLAY_NAME: 'Seed Two',
    PACK_HANDLE: '@seed2',
    PACK_PLAY_URL: 'https://other-live.example',
  },
  root,
);
assert(named.status === 0, 'name/playUrl override exits 0');
const renamed = read(path.join(root, 'profiles', 'seed-player.json'));
assert(renamed.displayName === 'Seed Two' && renamed.handle === '@seed2', 'provided names update');
assert(renamed.playUrl === 'https://other-live.example', 'playUrl override');
assert(renamed.playTimeSec === 42, 'override path still leaves playTimeSec');
assert(renamed.cosmetics.inventory[0].id === 'keep-me', 'override path keeps cosmetics');

const registry = read(path.join(root, 'registry.json'));
const probe = registry.players.find((row) => row.userId === 'pack-wire-probe');
const seedRow = registry.players.find((row) => row.userId === 'seed-player');
const newRow = registry.players.find((row) => row.userId === 'user_ab12cd34');
assert(!!probe && probe.displayName === 'pack-wire-probe', 'registry probes stay');
assert(seedRow.playTimeSec === 42, 'registry playTimeSec unchanged');
assert(seedRow.displayName === 'Seed Two', 'registry displayName merged');
assert(newRow.playUrl === CANONICAL && newRow.playTimeSec === 0, 'registry new row');
assert(registry.players.length === 3, 'registry did not invent extra probe rows');
assert(!fs.existsSync(path.join(root, 'profiles', 'pack-wire-new.json')), 'script did not invent probe ids');

fs.rmSync(root, { recursive: true, force: true });

if (failed) {
  console.error(`\n${failed} check(s) failed`);
  process.exit(1);
}
console.log('\npack-welcome.selftest ok');
