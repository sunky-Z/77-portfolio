import assert from 'node:assert/strict';
import test from 'node:test';
import { portfolio } from '../src/portfolio.js';
import { projectProducts } from '../src/project-reading.js';
import { getCareerCapabilities, getProjectRelations } from '../src/project-relations.js';

const expectedCareers = {
  'ai-ecosystem': 'current',
  'skill-ecosystem': 'current',
  'ai-commercialization': 'current',
  'international-product': 'current',
  'energy-research': 'huawei',
  'energy-product-planning': 'huawei',
  'station-control-research': 'huawei',
  'hardware-research': 'hardware',
  'hardware-human-factors': 'hardware',
  'product-business': 'current',
};

test('all ten projects link to their recorded career and actual capabilities in both languages', () => {
  for (const [language, data] of Object.entries(portfolio)) {
    assert.equal(data.projects.length, 10);
    for (const project of data.projects) {
      const { career, capabilities, next } = getProjectRelations(project.id, data);
      assert.equal(career.id, expectedCareers[project.id], `${language}/${project.id} career`);
      assert.deepEqual(data.career.filter(entry => entry.relatedProjects.includes(project.id)).map(entry => entry.id), [career.id]);
      assert.deepEqual(capabilities.map(skill => skill.id), project.skills);
      for (const skill of capabilities) assert.equal(skill.title, data.skills[skill.id].title);
      assert.ok(next && next.project.id !== project.id, `${language}/${project.id} has another case`);
      assert.ok(data.projects.includes(next.project), 'next is an existing localized project');
      if (next.kind === 'product') {
        assert.ok(next.product.projects.includes(project.id));
        assert.ok(next.product.projects.includes(next.project.id));
      } else {
        assert.ok(project.relatedProjects.includes(next.project.id), 'cross-product links use recorded relations');
      }
    }
  }
});

test('DroiClaw continues in topic order instead of the global project order', () => {
  for (const data of Object.values(portfolio)) {
    const product = projectProducts.find(entry => entry.id === 'droiclaw');
    for (const [index, id] of product.projects.entries()) {
      const { next } = getProjectRelations(id, data);
      assert.equal(next.kind, 'product');
      assert.equal(next.project.id, product.projects[(index + 1) % product.projects.length]);
    }
    assert.equal(getProjectRelations('skill-ecosystem', data).next.project.id, 'ai-commercialization');
    assert.equal(getProjectRelations('product-business', data).next.kind, 'related');
  }
});

test('career capability lists contain only the union of that career’s recorded project skills', () => {
  const expected = {
    current: ['ai', 'planning', 'project-management'],
    hardware: ['research', 'planning'],
    huawei: ['research', 'planning'],
  };
  for (const data of Object.values(portfolio)) {
    for (const career of data.career) {
      const capabilities = getCareerCapabilities(career.id, data);
      assert.deepEqual(capabilities.map(skill => skill.id).sort(), [...expected[career.id]].sort());
      assert.equal(new Set(capabilities.map(skill => skill.id)).size, capabilities.length);
      for (const skill of capabilities) {
        assert.equal(skill.title, data.skills[skill.id].title);
        assert.ok(data.projects.some(project => career.relatedProjects.includes(project.id) && project.skills.includes(skill.id)));
      }
    }
  }
});

test('relations use career membership, reject self/missing candidates and do not invent a global next', () => {
  const data = {
    projects: [
      { id: 'a', company: 'Same name', skills: ['research'], relatedProjects: ['a', 'missing', 'c', 'b'] },
      { id: 'b', company: 'Different name', skills: ['research'], relatedProjects: [] },
      { id: 'c', company: 'Same name', skills: [], relatedProjects: [] },
    ],
    career: [
      { id: 'owner', company: 'Other name', relatedProjects: ['a', 'b'] },
      { id: 'other', company: 'Same name', relatedProjects: ['c'] },
    ],
    skills: { research: { title: 'Research' } },
  };
  const snapshot = structuredClone(data);
  const relations = getProjectRelations('a', data, []);
  assert.equal(relations.career.id, 'owner');
  assert.equal(relations.next.project.id, 'b', 'a recorded same-career case precedes a cross-career case');
  assert.equal(getProjectRelations('b', data, []).next, undefined, 'the global array is not a recommendation');
  assert.deepEqual(getProjectRelations('missing', data, []), { career: undefined, capabilities: [], next: undefined });
  assert.deepEqual(getCareerCapabilities('missing', data), []);
  assert.deepEqual(data, snapshot, 'reading links does not reorder source content');
});
