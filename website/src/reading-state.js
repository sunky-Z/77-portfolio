import { parsePortfolioPath, routeHref } from './routes.js';

export const READING_CHANGE_EVENT = 'portfolio:reading-change';
export const READING_BEFORE_CHANGE_EVENT = 'portfolio:reading-before-change';
export const READING_HISTORY_KEY = '__portfolioReading';
const STORAGE_PREFIX = '77-portfolio:reading:1:';
const MAX_ENTRIES = 20;
const MAX_BYTES = 24000;
const TRACKING_QUERY = /^(?:utm_.+|source|from|ref|referrer|gclid|fbclid|msclkid)$/i;

// Browser objects are resolved when a helper is called, never during module import.
function context(options = {}) {
  const browser = typeof window === 'undefined' ? null : window;
  const base = options.base ?? import.meta.env?.BASE_URL ?? '/';
  let url;
  try { url = new URL(options.url ?? browser?.location.href ?? 'https://reading.invalid/'); }
  catch { url = new URL('https://reading.invalid/'); }
  let storage = null;
  try { storage = Object.hasOwn(options, 'storage') ? options.storage : browser?.sessionStorage; }
  catch { /* Reading links still work when browser storage is blocked. */ }
  return {
    browser, base, url, storage,
    history: Object.hasOwn(options, 'history') ? options.history : browser?.history,
    portable: options.portable ?? (import.meta.env?.VITE_PORTABLE_PREVIEW === 'true' || url.protocol === 'file:' || url.searchParams.has('page')),
    storageKey: `${STORAGE_PREFIX}${base.replace(/^\/+|\/+$/g, '') || '/'}`,
  };
}

export const normalizeProjectFilter = filter => ['ai', 'research'].includes(filter) ? filter : 'all';

function canonicalPath(value) {
  if (typeof value !== 'string' || !value.startsWith('/') || value.startsWith('//') || value.length > 200) return null;
  const route = parsePortfolioPath(value, '/');
  return route.invalid ? null : route.path;
}

export function normalizeReadingQuery(query, path, filter = 'all') {
  const source = new URLSearchParams(query);
  const clean = new URLSearchParams();
  let length = 0;
  for (const [key, value] of source) {
    if (['page', 'resume', 'area'].includes(key) || TRACKING_QUERY.test(key)) continue;
    if (length >= 12 || key.length > 64 || value.length > 256) continue;
    const trial = new URLSearchParams(clean);
    trial.append(key, value);
    if (trial.toString().length > 950) continue;
    clean.append(key, value);
    length += 1;
  }
  if (path === '/projects/' && normalizeProjectFilter(filter) !== 'all') clean.set('area', normalizeProjectFilter(filter));
  clean.sort();
  return clean.toString();
}

export function readingStateKey(path, query = '') {
  return `${path}${query ? `?${query}` : ''}`;
}

export function shouldRestoreReading({ hash, resume, navigationType, hasPosition }) {
  return !hash && Boolean(hasPosition) && (resume || ['reload', 'back_forward'].includes(navigationType));
}

export function parseReadingLocation(value, { base = '/', projectFilter = 'all' } = {}) {
  let url;
  try { url = new URL(value); } catch { return null; }
  const page = url.searchParams.get('page');
  const route = page !== null ? parsePortfolioPath(page, '/') :
    url.protocol === 'file:' ? parsePortfolioPath('/', '/') : parsePortfolioPath(url.pathname, base);
  if (route.invalid || route.redirectTo || !canonicalPath(route.path)) return null;
  const filter = url.searchParams.has('area') ? normalizeProjectFilter(url.searchParams.get('area')) : normalizeProjectFilter(projectFilter);
  const query = normalizeReadingQuery(url.searchParams, route.path, filter);
  return { path: route.path, query, key: readingStateKey(route.path, query), hash: url.hash, filter, resume: url.searchParams.get('resume') === '1' };
}

function emptyState() { return { version: 1, projectFilter: 'all', entries: [] }; }

function sanitizePosition(position) {
  const path = canonicalPath(position?.path);
  if (!path || typeof position.query !== 'string' || position.query.length > 1024 || !Number.isFinite(position.scrollY)) return null;
  const params = new URLSearchParams(position.query);
  const query = normalizeReadingQuery(params, path, params.get('area'));
  const focus = position.focus && typeof position.focus === 'object' ? {
    id: typeof position.focus.id === 'string' ? position.focus.id.slice(0, 128) : '',
    href: typeof position.focus.href === 'string' ? position.focus.href.slice(0, 1024) : '',
    top: Number.isFinite(position.focus.top) ? Math.max(-10000, Math.min(10000, position.focus.top)) : 0,
  } : null;
  return {
    path, query, key: readingStateKey(path, query),
    scrollY: Math.max(0, Math.min(10000000, position.scrollY)),
    focus: focus?.id || focus?.href ? focus : null,
    language: position.language === 'en' ? 'en' : 'zh',
    updatedAt: Number.isFinite(position.updatedAt) ? position.updatedAt : 0,
  };
}

function loadState(env) {
  try {
    const raw = env.storage?.getItem(env.storageKey);
    if (!raw || raw.length > MAX_BYTES) return emptyState();
    const parsed = JSON.parse(raw);
    if (parsed.version !== 1 || !Array.isArray(parsed.entries)) return emptyState();
    const unique = new Map();
    for (const item of parsed.entries.slice(-MAX_ENTRIES)) {
      const entry = sanitizePosition(item);
      if (entry && (!unique.has(entry.key) || unique.get(entry.key).updatedAt <= entry.updatedAt)) unique.set(entry.key, entry);
    }
    return { version: 1, projectFilter: normalizeProjectFilter(parsed.projectFilter), entries: [...unique.values()].sort((a, b) => a.updatedAt - b.updatedAt) };
  } catch { return emptyState(); }
}

function writeState(env, state) {
  state.entries = state.entries.slice(-MAX_ENTRIES);
  let payload = JSON.stringify(state);
  while (payload.length > MAX_BYTES && state.entries.length) {
    state.entries.shift();
    payload = JSON.stringify(state);
  }
  try { env.storage?.setItem(env.storageKey, payload); return Boolean(env.storage); }
  catch { return false; }
}

export function readProjectFilter(options = {}) {
  const env = context(options);
  if (env.url.searchParams.has('area')) return normalizeProjectFilter(env.url.searchParams.get('area'));
  return loadState(env).projectFilter;
}

export function readReadingLocation(options = {}) {
  const env = context(options);
  return parseReadingLocation(env.url, { base: env.base, projectFilter: readProjectFilter(options) });
}

export function readReadingPosition(location, options = {}) {
  if (!location) return null;
  return loadState(context(options)).entries.find(entry => entry.key === location.key) || null;
}

export function saveReadingPosition(position, options = {}) {
  const entry = sanitizePosition({ ...position, updatedAt: Date.now() });
  if (!entry) return false;
  const env = context(options);
  const state = loadState(env);
  state.entries = state.entries.filter(item => item.key !== entry.key);
  state.entries.push(entry);
  if (entry.path === '/projects/') state.projectFilter = normalizeProjectFilter(new URLSearchParams(entry.query).get('area'));
  return writeState(env, state);
}

export function setProjectFilter(filter, options = {}) {
  const env = context(options);
  const next = normalizeProjectFilter(filter);
  env.browser?.dispatchEvent(new Event(READING_BEFORE_CHANGE_EVENT));
  const state = loadState(env);
  state.projectFilter = next;
  writeState(env, state);
  if (next === 'all') env.url.searchParams.delete('area');
  else env.url.searchParams.set('area', next);
  // Replace only this filter choice; document navigation remains native.
  try { env.history?.replaceState(env.history.state, '', `${env.url.pathname}${env.url.search}${env.url.hash}`); }
  catch { /* The visible filter and native links remain usable. */ }
  env.browser?.dispatchEvent(new Event(READING_CHANGE_EVENT));
  return next;
}

export function getReadingHref(value, options = {}) {
  const env = context(options);
  let requested;
  try { requested = new URL(value, 'https://reading.invalid'); } catch { return routeHref('/', env.base); }
  const path = requested.origin === 'https://reading.invalid' ? canonicalPath(requested.pathname) : null;
  if (!path) return routeHref('/', env.base);
  const state = loadState(env);
  const filter = requested.searchParams.has('area') ? normalizeProjectFilter(requested.searchParams.get('area')) : state.projectFilter;
  const saved = [...state.entries].reverse().find(entry => entry.path === path &&
    (path !== '/projects/' || normalizeProjectFilter(new URLSearchParams(entry.query).get('area')) === filter));
  const params = new URLSearchParams(saved?.query || '');
  for (const [key, val] of requested.searchParams) if (key !== 'page' && key !== 'resume') params.set(key, val);
  const clean = new URLSearchParams(normalizeReadingQuery(params, path, filter));
  // Explicit all makes a shared return link immune to another session's filter.
  if (path === '/projects/') clean.set('area', filter);
  clean.set('resume', '1');
  const target = env.portable ? `?page=${encodeURIComponent(path)}` : routeHref(path, env.base);
  const targetURL = new URL(target, env.url);
  for (const [key, val] of clean) targetURL.searchParams.set(key, val);
  targetURL.hash = requested.hash;
  return env.portable ? `${targetURL.search}${targetURL.hash}` : `${targetURL.pathname}${targetURL.search}${targetURL.hash}`;
}

export function consumeReadingResume(options = {}) {
  const env = context(options);
  if (!env.url.searchParams.has('resume')) return;
  env.url.searchParams.delete('resume');
  try { env.history?.replaceState(env.history.state, '', `${env.url.pathname}${env.url.search}${env.url.hash}`); }
  catch { /* Storage and history are optional enhancements. */ }
}
