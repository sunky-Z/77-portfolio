import assert from 'node:assert/strict';
import test from 'node:test';
import {
  consumeReadingResume, getReadingHref, normalizeReadingQuery, parseReadingLocation,
  readProjectFilter, readReadingLocation, readReadingPosition, saveReadingPosition,
  setProjectFilter, shouldRestoreReading,
} from '../src/reading-state.js';

function memoryStorage() {
  const values = new Map();
  return { getItem: key => values.get(key) ?? null, setItem: (key, value) => values.set(key, value), values };
}
function environment(url = 'https://example.test/77-portfolio/projects/', storage = memoryStorage()) {
  const history = { state: { native: 'keep' }, replaceState(state, _, value) { this.state = state; this.url = value; } };
  return { url, storage, history, base: '/77-portfolio/' };
}

test('URL filter wins over session, including explicit all and invalid filters', () => {
  const env = environment();
  setProjectFilter('research', env);
  assert.equal(readProjectFilter(env), 'research');
  assert.equal(readProjectFilter({ ...env, url: `${env.url}?area=all` }), 'all');
  assert.equal(readProjectFilter({ ...env, url: `${env.url}?area=invalid` }), 'all');
});

test('changing a filter preserves page, other query parameters, hash and native history state', () => {
  const env = environment('https://example.test/preview.html?page=%2Fprojects%2F&view=cards#research');
  setProjectFilter('research', env);
  const url = new URL(env.history.url, env.url);
  assert.equal(url.searchParams.get('page'), '/projects/');
  assert.equal(url.searchParams.get('area'), 'research');
  assert.equal(url.searchParams.get('view'), 'cards');
  assert.equal(url.hash, '#research');
  assert.deepEqual(env.history.state, { native: 'keep' });
  setProjectFilter('all', { ...env, url });
  assert.equal(new URL(env.history.url, env.url).searchParams.has('area'), false);
  assert.equal(readProjectFilter(env), 'all');
});

test('research directory return keeps its filter, functional query, scroll and focus separately from other views', () => {
  const env = environment('https://example.test/77-portfolio/projects/?area=research&view=cards&utm_source=mail&resume=1');
  const research = readReadingLocation(env);
  assert.equal(saveReadingPosition({ ...research, scrollY: 1720, focus: { id: 'energy-card', href: '/77-portfolio/projects/energy-product-planning/', top: 140 }, language: 'zh' }, env), true);
  const all = parseReadingLocation('https://example.test/77-portfolio/projects/?area=all', { base: env.base });
  saveReadingPosition({ ...all, scrollY: 320, language: 'zh' }, env);
  setProjectFilter('research', env);
  const detail = { ...env, url: 'https://example.test/77-portfolio/projects/energy-product-planning/#project-context' };
  const back = new URL(getReadingHref('/projects/', detail), detail.url);
  assert.equal(back.pathname, '/77-portfolio/projects/');
  assert.equal(back.searchParams.get('area'), 'research');
  assert.equal(back.searchParams.get('view'), 'cards');
  assert.equal(back.searchParams.get('resume'), '1');
  assert.equal(back.searchParams.has('utm_source'), false);
  assert.equal(back.hash, '');
  assert.equal(readReadingPosition(readReadingLocation({ ...env, url: back }), env).scrollY, 1720);
  assert.equal(readReadingPosition(all, env).scrollY, 320);
});

test('portable returns keep page routing and explicit all without leaking detail hashes', () => {
  const env = environment('file:///C:/preview.html?page=%2Fprojects%2Fenergy-product-planning%2F#project-work');
  setProjectFilter('all', env);
  const href = getReadingHref('/projects/', env);
  const target = new URL(href, env.url);
  assert.ok(href.startsWith('?page='));
  assert.equal(target.searchParams.get('page'), '/projects/');
  assert.equal(target.searchParams.get('area'), 'all');
  assert.equal(target.searchParams.get('resume'), '1');
  assert.equal(target.hash, '');
});

test('explicit hashes always take priority, including a mobile resume link and native reload', () => {
  for (const navigationType of ['navigate', 'reload', 'back_forward']) {
    assert.equal(shouldRestoreReading({ hash: '#project-work', resume: true, navigationType, hasPosition: true }), false);
  }
  assert.equal(shouldRestoreReading({ hash: '', resume: true, navigationType: 'navigate', hasPosition: true }), true);
  assert.equal(shouldRestoreReading({ hash: '', resume: false, navigationType: 'navigate', hasPosition: true }), false);
  const env = environment('https://example.test/77-portfolio/projects/?area=research&resume=1#research');
  consumeReadingResume(env);
  const target = new URL(env.history.url, env.url);
  assert.equal(target.searchParams.has('resume'), false);
  assert.equal(target.searchParams.get('area'), 'research');
  assert.equal(target.hash, '#research');
});

test('snapshot storage is bounded and corruption or denied storage never breaks URLs', () => {
  const env = environment();
  for (let index = 0; index < 35; index += 1) {
    const location = parseReadingLocation(`${env.url}?view=${index}`, { base: env.base });
    saveReadingPosition({ ...location, scrollY: index * 100, language: 'en' }, env);
  }
  const saved = JSON.parse([...env.storage.values.values()][0]);
  assert.equal(saved.entries.length, 20);
  assert.ok([...env.storage.values.values()][0].length <= 24000);
  const denied = { ...env, storage: { getItem() { throw Error('denied'); }, setItem() { throw Error('denied'); } } };
  assert.equal(readProjectFilter(denied), 'all');
  assert.equal(saveReadingPosition({ path: '/projects/', query: '', scrollY: 10 }, denied), false);
  assert.equal(new URL(getReadingHref('/projects/', denied), denied.url).searchParams.get('area'), 'all');
  assert.equal(parseReadingLocation('https://example.test/elsewhere/', { base: env.base }), null);
});

test('stored queries omit resume, routing and campaign parameters without truncating encoded values', () => {
  const query = normalizeReadingQuery('page=%2Fprojects%2F&resume=1&area=research&source=email&from=home&ref=test&view=cards', '/projects/', 'research');
  assert.equal(query, 'area=research&view=cards');
  const long = normalizeReadingQuery(new URLSearchParams({ one: '汉'.repeat(200), two: '字'.repeat(200), view: 'cards' }), '/');
  assert.ok(long.length <= 1024);
  assert.equal(new URLSearchParams(long).get('view'), 'cards');
  assert.equal(long.includes('%EF%BF%BD'), false);
});
