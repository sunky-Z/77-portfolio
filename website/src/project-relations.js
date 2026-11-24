import { projectProducts } from './project-reading.js';

// Cross-links follow the recorded project membership, not company-name matching.
export function getCareerCapabilities(careerId, data) {
  const career = data.career.find(entry => entry.id === careerId);
  if (!career) return [];
  const projectIds = new Set(career.relatedProjects);
  const skillIds = new Set(data.projects
    .filter(project => projectIds.has(project.id))
    .flatMap(project => project.skills));
  return [...skillIds]
    .filter(id => data.skills[id])
    .map(id => ({ id, ...data.skills[id] }));
}

export function getProjectRelations(projectId, data, products = projectProducts) {
  const project = data.projects.find(entry => entry.id === projectId);
  if (!project) return { career: undefined, capabilities: [], next: undefined };

  const career = data.career.find(entry => entry.relatedProjects.includes(projectId));
  const capabilities = project.skills
    .filter(id => data.skills[id])
    .map(id => ({ id, ...data.skills[id] }));
  const product = products.find(entry => entry.projects.includes(projectId));
  const projectById = new Map(data.projects.map(entry => [entry.id, entry]));
  const related = (project.relatedProjects || [])
    .filter(id => id !== projectId && projectById.has(id));

  // Continue within one product before following the case's existing relations.
  // At the last topic, the first other topic keeps the product context intact.
  const productIndex = product?.projects.indexOf(projectId) ?? -1;
  const productOrder = product ? [
    ...product.projects.slice(productIndex + 1),
    ...product.projects.slice(0, productIndex),
  ].filter(id => id !== projectId && projectById.has(id)) : [];
  const sameCareer = related.filter(id => career?.relatedProjects.includes(id));
  const nextId = productOrder[0] || sameCareer[0] || related[0];
  const next = nextId ? {
    project: projectById.get(nextId),
    kind: productOrder.includes(nextId) ? 'product' : 'related',
    product: productOrder.includes(nextId) ? product : undefined,
  } : undefined;

  return { career, capabilities, next };
}
