export const projectWorkIds = (id, item) => item.actions.map((_, index) => item.actionIds?.[index] || `${id}-work-${index + 1}`);
export const projectDecisionId = (id, index) => `${id}-decision-${index + 1}`;

export function projectAnchors(id, item) {
  return [
    'project-overview', 'project-context', 'project-contribution', 'project-outputs', 'project-related',
    ...projectWorkIds(id, item),
    ...(item.decisions?.length ? ['project-decisions', ...item.decisions.map((_, index) => projectDecisionId(id, index))] : []),
    ...(id === 'ai-ecosystem' ? ['ai-task-rules'] : []),
  ];
}
