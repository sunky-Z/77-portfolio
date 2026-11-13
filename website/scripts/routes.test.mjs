import assert from 'node:assert/strict';
import test from 'node:test';
import { access } from 'node:fs/promises';
import { portfolio } from '../src/portfolio.js';
import { cases as zhCases } from '../src/content.zh.js';
import { cases as enCases } from '../src/content.js';
import { legacyHashPath, parsePortfolioPath, portfolioPages, routeHref } from '../src/routes.js';

test('all independent pages resolve under both local and GitHub Pages prefixes', () => {
  assert.equal(portfolioPages.length, 19);
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

test('project routes, translations, category cards and related links stay in sync', async () => {
  const projectRoutes = portfolioPages.filter(page => page.type === 'project');
  assert.equal(projectRoutes.length, 7);
  for (const [language, cases] of [['zh', zhCases], ['en', enCases]]) {
    const data = portfolio[language];
    assert.deepEqual(Object.keys(cases).sort(), projectRoutes.map(page => page.id).sort());
    assert.deepEqual(data.projects.map(project => project.id).sort(), projectRoutes.map(page => page.id).sort());
    assert.equal(data.projects.filter(project => project.featured).length, 3);
    for (const project of data.projects) {
      assert.equal(parsePortfolioPath(`/projects/${project.id}/`).type, 'project');
      assert.ok(project.summary && project.role);
      await access(new URL(`../public/assets/${project.image}`, import.meta.url));
      for (const skillId of project.skills) assert.ok(data.skills[skillId], skillId);
      for (const relatedId of project.relatedProjects) assert.ok(cases[relatedId], relatedId);
    }
    for (const career of data.career) for (const id of career.relatedProjects) assert.ok(cases[id], id);
    for (const skill of Object.values(data.skills)) for (const id of skill.projects) assert.ok(cases[id], id);
    for (const id of ['ai-ecosystem', 'skill-ecosystem', 'ai-commercialization', 'international-product']) {
      assert.ok(cases[id].decisions.length >= 2, `${language}/${id} decisions`);
      assert.ok(cases[id].progress.length >= 2, `${language}/${id} progress`);
      assert.equal(cases[id].actions.length, (language === 'zh' ? enCases : zhCases)[id].actions.length);
    }
  }
});
