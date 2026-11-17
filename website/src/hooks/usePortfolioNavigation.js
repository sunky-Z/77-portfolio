import { useLayoutEffect } from 'react';
import { legacyHashPath, parsePortfolioPath, routeHref } from '../routes.js';

export default function usePortfolioNavigation() {
  const pageQuery = new URLSearchParams(window.location.search).get('page');
  const route = pageQuery !== null ? parsePortfolioPath(pageQuery, '/') :
    window.location.protocol === 'file:' ? parsePortfolioPath('/', '/') : parsePortfolioPath(window.location.pathname);

  useLayoutEffect(() => {
    if (route.redirectTo) {
      const query = new URLSearchParams(window.location.search);
      query.delete('page');
      const target = routeHref(route.redirectTo);
      window.location.replace(`${target}${query.size ? `${target.includes('?') ? '&' : '?'}${query}` : ''}${window.location.hash}`);
      return;
    }
    if (route.type !== 'home') return;
    const migrate = () => {
      if (document.getElementById(window.location.hash.slice(1))) return;
      const path = legacyHashPath(window.location.hash);
      if (path === null) return;
      // New navigation uses document URLs; only old home hashes are migrated.
      const target = routeHref(path);
      const query = new URLSearchParams(window.location.search);
      query.delete('page');
      window.location.replace(`${target}${query.size ? `${target.includes('?') ? '&' : '?'}${query}` : ''}`);
    };
    migrate();
    window.addEventListener('hashchange', migrate);
    return () => window.removeEventListener('hashchange', migrate);
  }, [route.key, route.redirectTo]);

  return { route };
}
