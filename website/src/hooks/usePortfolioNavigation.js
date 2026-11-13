import { useLayoutEffect } from 'react';
import { legacyHashPath, parsePortfolioPath, routeHref } from '../routes.js';

export default function usePortfolioNavigation() {
  const route = parsePortfolioPath(window.location.pathname);

  useLayoutEffect(() => {
    if (route.type !== 'home') return;
    const migrate = () => {
      const path = legacyHashPath(window.location.hash);
      if (path === null) return;
      // New navigation uses document URLs; only old home hashes are migrated.
      window.location.replace(`${routeHref(path)}${window.location.search}`);
    };
    migrate();
    window.addEventListener('hashchange', migrate);
    return () => window.removeEventListener('hashchange', migrate);
  }, [route.key]);

  return { route };
}
