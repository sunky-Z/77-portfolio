import { taskEvidence } from '../project-evidence.js';

export default function TaskEvidence({ L }) {
  const evidence = L(taskEvidence.zh, taskEvidence.en);
  return <section className="rule-exhibit" id="ai-task-rules" data-reading-anchor tabIndex={-1} aria-labelledby="task-rules-title">
    <h3 id="task-rules-title">{evidence.title}</h3>
    <p className="rule-note">{evidence.intro}</p>
    <table className="rule-table" role="table">
      <thead role="rowgroup"><tr role="row">{evidence.columns.map(title => <th scope="col" role="columnheader" key={title}>{title}</th>)}</tr></thead>
      <tbody role="rowgroup">{evidence.rows.map(([scene, rule, check]) => <tr role="row" key={scene}>
        <th scope="row" role="rowheader">{scene}</th>
        <td role="cell" data-label={evidence.columns[1]}>{rule}</td>
        <td role="cell" data-label={evidence.columns[2]}>{check}</td>
      </tr>)}</tbody>
    </table>
    <p className="rule-status">{evidence.status}</p>
  </section>;
}
