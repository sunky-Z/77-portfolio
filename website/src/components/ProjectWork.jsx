import { useLayoutEffect, useRef, useState } from 'react';
import { ArrowRight } from '@phosphor-icons/react';

function currentWorkIndex(ids) {
  try { return Math.max(0, ids.indexOf(decodeURIComponent(window.location.hash.slice(1)))); }
  catch { return 0; }
}

export default function ProjectWork({ actions, ids = [], L }) {
  const topics = actions.map(action => {
    const plain = action.replace(/<[^>]+>/g, '');
    const match = plain.match(/^([^:：]+)[:：]\s*(.*)$/s);
    return { title: match?.[1], text: match?.[2] || plain };
  });
  const [active, setActive] = useState(() => currentWorkIndex(ids));
  const [showAll, setShowAll] = useState(false);
  const tabs = useRef([]);
  const pendingAnchor = useRef(null);
  const hasTopics = topics.length >= 5;
  const browsingTopics = hasTopics && !showAll;

  // A linked work item must be visible before it is positioned or focused.
  useLayoutEffect(() => {
    const followWork = () => {
      let hash;
      try { hash = decodeURIComponent(window.location.hash.slice(1)); }
      catch { return; }
      const index = ids.indexOf(hash);
      if (index < 0) return;
      const reveal = () => {
        const target = document.getElementById(hash);
        target?.scrollIntoView({ behavior: 'instant', block: 'start' });
        target?.focus({ preventScroll: true });
      };
      if (active === index && !showAll) reveal();
      else {
        pendingAnchor.current = reveal;
        setActive(index);
        setShowAll(false);
      }
    };
    window.addEventListener('hashchange', followWork);
    return () => window.removeEventListener('hashchange', followWork);
  }, [ids, active, showAll]);

  useLayoutEffect(() => {
    pendingAnchor.current?.();
    pendingAnchor.current = null;
    // The page contents also tracks sections after a view changes height.
    window.dispatchEvent(new Event('resize'));
  }, [active, showAll]);

  function selectTopic(index) {
    setActive(index);
    // Keep a shared evidence link aligned with the selected work item, without scrolling.
    if (ids.includes(window.location.hash.slice(1)) && ids[index]) {
      window.history.replaceState(window.history.state, '', `${window.location.pathname}${window.location.search}#${ids[index]}`);
    }
  }

  function changeTopic(event, index) {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % topics.length;
    else if (event.key === 'ArrowLeft') next = (index - 1 + topics.length) % topics.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = topics.length - 1;
    else return;
    event.preventDefault();
    selectTopic(next);
    tabs.current[next]?.focus({ preventScroll: true });
  }

  return <div className={`project-work ${browsingTopics ? 'topic-view' : 'full-view'}`}>
    {hasTopics && <div className="work-view-controls">
      <p>{L(`${topics.length} 项工作`, `${topics.length} areas of work`)}</p>
      <button type="button" aria-controls="project-work-content" onClick={() => setShowAll(value => !value)}>
        {showAll ? L('按主题浏览', 'Browse by topic') : L('查看全部', 'View all')}
        <ArrowRight size={16} aria-hidden="true" />
      </button>
    </div>}
    {browsingTopics && <div className="work-topic-list" role="tablist" aria-label={L('工作主题', 'Work topics')}>
      {topics.map((topic, index) => <button type="button" role="tab" key={index}
        id={`work-tab-${index}`} ref={element => { tabs.current[index] = element; }}
        aria-selected={active === index} aria-controls={ids[index] || `work-panel-${index}`}
        tabIndex={active === index ? 0 : -1} onClick={() => selectTopic(index)} onKeyDown={event => changeTopic(event, index)}>
        <span>{topic.title}</span>
      </button>)}
    </div>}
    <div id="project-work-content" className="work-content" data-count={topics.length}>
      {topics.map((topic, index) => <section key={index} id={ids[index] || `work-panel-${index}`}
        className="work-panel" role={browsingTopics ? 'tabpanel' : undefined}
        data-reading-anchor={ids[index] && !(browsingTopics && index !== active) ? true : undefined}
        aria-labelledby={browsingTopics ? `work-tab-${index}` : `work-heading-${index}`}
        hidden={browsingTopics && index !== active} tabIndex={browsingTopics || ids[index] ? 0 : undefined}>
        <h3 id={`work-heading-${index}`} className={browsingTopics ? 'work-panel-title' : undefined}>{topic.title}</h3><p>{topic.text}</p>
      </section>)}
    </div>
  </div>;
}
