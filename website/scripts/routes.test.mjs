import assert from 'node:assert/strict';
import test from 'node:test';
import { access } from 'node:fs/promises';
import { portfolio } from '../src/portfolio.js';
import { projectGroups, projectBriefs } from '../src/project-reading.js';
import { cases as zhCases } from '../src/content.zh.js';
import { cases as enCases } from '../src/content.js';
import { legacyHashPath, legacyPageRedirects, parsePortfolioPath, portfolioPages, routeHref } from '../src/routes.js';

test('all independent pages resolve under both local and GitHub Pages prefixes', () => {
  assert.equal(portfolioPages.length, 21);
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

test('merged delivery addresses resolve to planning without creating a fifth capability branch', () => {
  const skills = portfolioPages.filter(page => page.type === 'skill');
  assert.deepEqual(skills.map(page => page.id).sort(), ['ai', 'planning', 'project-management', 'research']);
  assert.equal(skills.find(page => page.id === 'planning').title, '产品规划与交付');
  for (const base of ['/', '/77-portfolio/']) {
    for (const redirect of legacyPageRedirects) {
      assert.ok(!portfolioPages.some(page => page.path === redirect.path));
      const target = portfolioPages.find(page => page.path === redirect.to);
      assert.ok(target);
      for (const suffix of ['', 'index.html']) {
        const route = parsePortfolioPath(`${routeHref(redirect.path, base)}${suffix}`, base);
        assert.equal(route.key, target.key);
        assert.equal(route.redirectTo, redirect.to);
      }
      assert.equal(parsePortfolioPath(routeHref(redirect.path, base).replace(/\/$/, ''), base).redirectTo, redirect.to);
    }
  }
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
  assert.equal(legacyHashPath('#skills/delivery'), '/capabilities/planning/');
  assert.equal(legacyHashPath('#skills/project-management'), '/capabilities/project-management/');
  assert.equal(legacyHashPath('#experience/huawei'), '/experience/huawei/');
  assert.equal(legacyHashPath('#work/unknown'), null);
  assert.equal(legacyHashPath('#project-context'), null);
});

test('project routes, translations, category cards and related links stay in sync', async () => {
  const projectRoutes = portfolioPages.filter(page => page.type === 'project');
  assert.equal(projectRoutes.length, 9);
  for (const [language, cases] of [['zh', zhCases], ['en', enCases]]) {
    const data = portfolio[language];
    assert.deepEqual(Object.keys(data.skills).sort(), portfolioPages.filter(page => page.type === 'skill').map(page => page.id).sort());
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
    for (const skill of Object.values(data.skills)) {
      for (const id of skill.projects) assert.ok(cases[id], id);
      for (const method of skill.methods) {
        if (method.projectId) {
          assert.ok(cases[method.projectId], method.projectId);
          assert.ok(method.evidence, `${method.title} project evidence`);
        }
      }
    }
    for (const id of ['ai-ecosystem', 'skill-ecosystem', 'ai-commercialization', 'international-product']) {
      assert.ok(cases[id].decisions.length >= 2, `${language}/${id} decisions`);
      assert.ok(cases[id].progress.length >= 2, `${language}/${id} progress`);
      assert.equal(cases[id].actions.length, (language === 'zh' ? enCases : zhCases)[id].actions.length);
    }
  }
});

test('research cases are reachable from their employers and research methods in both languages', () => {
  for (const data of Object.values(portfolio)) {
    for (const [company, ids] of [['HW', ['station-control-research']], ['NINESTAR', ['hardware-research', 'hardware-human-factors']]]) {
      const career = data.career.find(entry => entry.company === company);
      for (const id of ids) {
        assert.ok(career.relatedProjects.includes(id));
        assert.ok(data.skills.research.projects.includes(id));
        assert.equal(data.projects.find(entry => entry.id === id).company, company);
      }
    }
  }
});

test('project areas and supplementary overview cover every project once with bilingual briefs', () => {
  const grouped = projectGroups.flatMap(group => group.projects);
  const allIds = Object.keys(zhCases).sort();
  assert.equal(new Set(grouped).size, grouped.length, 'a case belongs to one primary area');
  assert.deepEqual([...grouped, 'energy-research'].sort(), allIds);
  assert.deepEqual(Object.keys(projectBriefs).sort(), allIds);
  for (const group of projectGroups) {
    assert.ok(group.projects.length > 0);
    for (const language of ['zh', 'en']) assert.ok(group.title[language] && group.description[language]);
  }
  for (const brief of Object.values(projectBriefs)) {
    for (const language of ['zh', 'en']) assert.ok(brief.context[language] && brief.status[language]);
  }
});
