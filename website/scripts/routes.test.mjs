import assert from 'node:assert/strict';
import test from 'node:test';
import { legacyHashPath, parsePortfolioPath, portfolioPages, routeHref } from '../src/routes.js';

test('all independent pages resolve under both local and GitHub Pages prefixes', () => {
  assert.equal(portfolioPages.length, 16);
  for (const base of ['/', '/77-portfolio/']) {
    for (const page of portfolioPages) {
      const href = routeHref(page.path, base);
      assert.equal(parsePortfolioPath(href, base).key, page.key);
      assert.equal(parsePortfolioPath(`${href}index.html`, base).key, page.key);
    }
  }
});

test('parent category and document-style URLs remain valid', () => {
  const route = parsePortfolioPath('/77-portfolio/projects/ai-ecosystem', '/77-portfolio/');
  assert.equal(route.type, 'project');
  assert.equal(route.id, 'ai-ecosystem');
  assert.equal(route.parent, '/projects/');
  assert.equal(routeHref(route.parent, '/77-portfolio/'), '/77-portfolio/projects/');
  assert.equal(parsePortfolioPath('/77-portfolio', '/77-portfolio/').type, 'home');
});

test('unrecognized, out-of-prefix and over-nested paths produce the missing page', () => {
  for (const path of ['/projects/', '/77-portfolio-old/projects/', '/77-portfolio/projects/unknown/', '/77-portfolio/projects/ai-ecosystem/extra/']) {
    assert.equal(parsePortfolioPath(path, '/77-portfolio/').type, 'notfound');
  }
});

test('former shared hashes map to documents while page-local section hashes do not', () => {
  assert.equal(legacyHashPath('#about'), '/experience/');
  assert.equal(legacyHashPath('#work/ai-ecosystem'), '/projects/ai-ecosystem/');
  assert.equal(legacyHashPath('#skills/research'), '/capabilities/research/');
  assert.equal(legacyHashPath('#experience/huawei'), '/experience/huawei/');
  assert.equal(legacyHashPath('#work/unknown'), null);
  assert.equal(legacyHashPath('#project-context'), null);
});
