import { useCallback, useLayoutEffect, useState } from 'react';

const homeSections = new Set(['top', 'about', 'projects', 'strengths', 'contact', 'main']);

function readLocation() {
  return { hash: window.location.hash || '#top', revision: 0 };
}

export function parsePortfolioRoute(hash, validIds) {
  const value = hash.replace(/^#/, '');
  const [branch, id, extra] = value.split('/');
  const types = { work: 'project', skills: 'skill', experience: 'career' };
  const type = types[branch];
  if (type && id && !extra && validIds[type]?.includes(id)) {
    return { type, id, key: `${type}/${id}` };
  }
  if (homeSections.has(value)) return { type: 'home', section: value === 'main' ? 'top' : value, key: `home/${value}` };
  return { type: 'home', section: 'top', key: 'home/top', invalid: Boolean(value) };
}

function isPlainClick(event) {
  return !event || (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.altKey && !event.shiftKey);
}

function rememberPosition(focusHref) {
  window.history.replaceState({
    ...window.history.state,
    portfolioScroll: window.scrollY,
    portfolioFocus: focusHref,
  }, '', window.location.href);
}

export default function usePortfolioNavigation(validIds) {
  const [location, setLocation] = useState(readLocation);
  const route = parsePortfolioRoute(location.hash, validIds);

  useLayoutEffect(() => {
    const sync = () => setLocation(current => ({ hash: window.location.hash || '#top', revision: current.revision + 1 }));
    window.addEventListener('popstate', sync);
    window.addEventListener('hashchange', sync);
    return () => {
      window.removeEventListener('popstate', sync);
      window.removeEventListener('hashchange', sync);
    };
  }, []);

  useLayoutEffect(() => {
    const state = window.history.state;
    const restore = () => {
      if (Number.isFinite(state?.portfolioScroll)) {
        window.scrollTo({ top: state.portfolioScroll, behavior: 'instant' });
        const link = Array.from(document.querySelectorAll('a[href]')).find(item => item.getAttribute('href') === state.portfolioFocus);
        link?.focus({ preventScroll: true });
        return;
      }
      if (route.type === 'home') {
        const section = document.getElementById(route.section);
        section?.querySelector('h1, h2')?.focus({ preventScroll: true });
        if (route.section === 'top') window.scrollTo({ top: 0, behavior: 'instant' });
        else section?.scrollIntoView({ behavior: 'instant', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
        document.querySelector('main h1')?.focus({ preventScroll: true });
      }
    };
    const frame = requestAnimationFrame(restore);
    return () => cancelAnimationFrame(frame);
  }, [location.hash, location.revision]);

  const navigate = useCallback((href, event) => {
    if (!isPlainClick(event)) return;
    event?.preventDefault();
    if (window.location.hash === href) {
      const { portfolioScroll, portfolioFocus, ...rest } = window.history.state || {};
      window.history.replaceState(rest, '', window.location.href);
      setLocation(current => ({ hash: href, revision: current.revision + 1 }));
      return;
    }
    rememberPosition(href);
    window.history.pushState({ portfolioEntry: true }, '', href);
    setLocation(current => ({ hash: href, revision: current.revision + 1 }));
  }, []);

  const goBack = useCallback((fallback, event) => {
    if (!isPlainClick(event)) return;
    event?.preventDefault();
    if (window.history.state?.portfolioEntry && window.history.length > 1) {
      window.history.back();
      return;
    }
    window.history.replaceState({ portfolioEntry: true }, '', fallback);
    setLocation(current => ({ hash: fallback, revision: current.revision + 1 }));
  }, []);

  return { route, navigate, goBack };
}
