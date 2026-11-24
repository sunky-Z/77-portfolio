import { useEffect, useRef } from 'react';
import {
  consumeReadingResume, parseReadingLocation, readProjectFilter, readReadingLocation,
  readReadingPosition, saveReadingPosition, shouldRestoreReading, READING_BEFORE_CHANGE_EVENT,
  READING_CHANGE_EVENT, READING_HISTORY_KEY,
} from '../reading-state.js';

function sameLink(first, second) {
  try {
    const a = new URL(first, window.location.href);
    const b = new URL(second, window.location.href);
    a.searchParams.delete('resume'); b.searchParams.delete('resume');
    return a.href === b.href;
  } catch { return false; }
}

function localLink(anchor) {
  if (!anchor?.href || anchor.hasAttribute('download')) return false;
  try {
    const target = new URL(anchor.href, window.location.href);
    if (target.origin !== window.location.origin || (target.protocol === 'file:' && target.pathname !== window.location.pathname)) return false;
    return Boolean(parseReadingLocation(target, { base: import.meta.env?.BASE_URL || '/', projectFilter: readProjectFilter() }));
  } catch { return false; }
}

function contentLink(anchor) {
  const main = document.querySelector('main');
  if (!main?.contains(anchor) || !localLink(anchor) || anchor.closest('.article-toc, nav, [role="navigation"]')) return false;
  for (let element = anchor; element; element = element.parentElement) {
    const style = window.getComputedStyle(element);
    if (['fixed', 'sticky', 'absolute'].includes(style.position) || style.visibility === 'hidden') return false;
    if (element === main) break;
  }
  return true;
}

function focusSnapshot(preferred) {
  const main = document.querySelector('main');
  if (!main) return null;
  const visible = element => {
    const rect = element.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0 && rect.bottom > 0 && rect.top < window.innerHeight;
  };
  const active = document.activeElement?.closest?.('a[href]');
  let anchor = [preferred, active].find(element => element && contentLink(element) && visible(element));
  if (!anchor) {
    const header = document.querySelector('.site-header')?.getBoundingClientRect().bottom || 0;
    anchor = [...main.querySelectorAll('a[href]')].filter(element => contentLink(element) && visible(element))
      .sort((a, b) => Math.abs(a.getBoundingClientRect().top - header - 32) - Math.abs(b.getBoundingClientRect().top - header - 32))[0];
  }
  return anchor ? { id: anchor.id, href: anchor.getAttribute('href'), top: anchor.getBoundingClientRect().top } : null;
}

function findFocus(snapshot) {
  if (!snapshot) return null;
  const byId = snapshot.id ? document.getElementById(snapshot.id) : null;
  if (byId?.matches('a[href]') && contentLink(byId)) return byId;
  return [...document.querySelectorAll('main a[href]')].find(anchor => contentLink(anchor) && sameLink(anchor.getAttribute('href'), snapshot.href)) || null;
}

function bounded(promise, milliseconds) {
  return new Promise(resolve => {
    const timer = window.setTimeout(resolve, milliseconds);
    Promise.resolve(promise).catch(() => {}).then(() => { window.clearTimeout(timer); resolve(); });
  });
}

async function settleLayout(cancelled) {
  if (document.fonts?.ready) await bounded(document.fonts.ready, 1000);
  const pendingImages = [...document.images].filter(image => !image.complete && image.loading !== 'lazy');
  await bounded(Promise.all(pendingImages.map(image => image.decode?.().catch(() => {}))), 700);
  let previous = '', stable = 0;
  const start = performance.now();
  while (!cancelled() && stable < 3 && performance.now() - start < 700) {
    await new Promise(resolve => window.requestAnimationFrame(resolve));
    const size = `${document.documentElement.scrollHeight}:${document.documentElement.clientWidth}`;
    stable = size === previous ? stable + 1 : 0;
    previous = size;
  }
}

export default function useReadingState({ route, language }) {
  const latest = useRef({ route, language });
  latest.current = { route, language };

  useEffect(() => {
    if (route.invalid || route.redirectTo) return;
    let disposed = false, restoring = false, interrupted = false, scrollTimer = 0;
    const initial = readReadingLocation();
    if (!initial || initial.path !== route.path) return;
    const navigationType = performance.getEntriesByType?.('navigation')[0]?.type;
    const historyEntry = window.history.state?.[READING_HISTORY_KEY];
    const saved = initial.resume ? readReadingPosition(initial) :
      ['reload', 'back_forward'].includes(navigationType) ?
        (historyEntry?.key === initial.key && Number.isFinite(historyEntry.scrollY) ? historyEntry : readReadingPosition(initial)) : null;

    const save = preferred => {
      if (restoring || disposed) return;
      const location = readReadingLocation();
      if (!location || location.path !== latest.current.route.path) return;
      const position = { path: location.path, query: location.query, key: location.key, scrollY: window.scrollY, focus: focusSnapshot(preferred), language: latest.current.language, updatedAt: Date.now() };
      saveReadingPosition(position);
      // Each native history entry also keeps its own position for Back/Forward.
      const old = window.history.state;
      if (old === null || typeof old === 'object') {
        try { window.history.replaceState({ ...old, [READING_HISTORY_KEY]: position }, '', window.location.href); }
        catch { /* Native browser restoration remains available. */ }
      }
    };
    const stopRestore = () => { interrupted = true; restoring = false; consumeReadingResume(); };
    const onKey = event => {
      if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ', 'Tab'].includes(event.key)) stopRestore();
    };
    const onClick = event => {
      const anchor = event.target.closest?.('a[href]');
      if (event.defaultPrevented || !localLink(anchor)) return;
      stopRestore(); save(anchor);
    };
    const onScroll = () => {
      if (!scrollTimer) scrollTimer = window.setTimeout(() => { scrollTimer = 0; save(); }, 250);
    };
    const onPageHide = () => { interrupted = true; restoring = false; save(); };
    const onPageShow = event => {
      // The browser already restores a bfcache document, including its live focus.
      if (event.persisted) { stopRestore(); }
    };
    const beforeFilter = () => save();
    const afterFilter = () => {
      // Save the new filtered layout after React has committed it.
      window.requestAnimationFrame(() => window.requestAnimationFrame(() => save()));
    };
    const onVisibility = () => { if (document.visibilityState === 'hidden') save(); };

    document.addEventListener('click', onClick, true);
    document.addEventListener('keydown', onKey, true);
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('wheel', stopRestore, { passive: true });
    window.addEventListener('touchstart', stopRestore, { passive: true });
    window.addEventListener('pointerdown', stopRestore, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('pagehide', onPageHide);
    window.addEventListener('pageshow', onPageShow);
    window.addEventListener(READING_BEFORE_CHANGE_EVENT, beforeFilter);
    window.addEventListener(READING_CHANGE_EVENT, afterFilter);

    if (!shouldRestoreReading({ ...initial, navigationType, hasPosition: Boolean(saved) })) consumeReadingResume();
    else {
      restoring = true;
      settleLayout(() => disposed || interrupted).then(() => {
        if (disposed) return;
        if (interrupted || window.location.hash) { restoring = false; consumeReadingResume(); return; }
        // Leave a successful native Back/Forward restoration alone.
        if (navigationType !== 'back_forward' || initial.resume || window.scrollY < 2) {
          // A repeated href must not move reading to its first occurrence.
          window.scrollTo({ top: Math.max(0, saved.scrollY), behavior: 'instant' });
          const focus = findFocus(saved.focus);
          const bounds = focus?.getBoundingClientRect();
          if (bounds && bounds.bottom > 0 && bounds.top < window.innerHeight) focus.focus({ preventScroll: true });
        }
        restoring = false; consumeReadingResume(); save();
      });
    }

    return () => {
      // Do not capture StrictMode's temporary mount cleanup as a visited position.
      disposed = true; window.clearTimeout(scrollTimer);
      document.removeEventListener('click', onClick, true);
      document.removeEventListener('keydown', onKey, true);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('wheel', stopRestore);
      window.removeEventListener('touchstart', stopRestore);
      window.removeEventListener('pointerdown', stopRestore);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pagehide', onPageHide);
      window.removeEventListener('pageshow', onPageShow);
      window.removeEventListener(READING_BEFORE_CHANGE_EVENT, beforeFilter);
      window.removeEventListener(READING_CHANGE_EVENT, afterFilter);
    };
  }, [route.key, route.path, route.invalid, route.redirectTo]);
}
