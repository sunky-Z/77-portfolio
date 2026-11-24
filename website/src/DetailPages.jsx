import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowUpRight, CaretDown } from '@phosphor-icons/react';
import { routeHref } from './routes.js';
import { getReadingHref } from './reading-state.js';
import { projectBriefs, projectProductFor } from './project-reading.js';
import { getCareerCapabilities, getProjectRelations } from './project-relations.js';
import { projectWorkIds, projectDecisionId } from './project-anchors.js';
import ProjectWork from './components/ProjectWork.jsx';
import { asset } from './assets.js';
import { SectionHeading } from './components/PortfolioSystem.jsx';

function ArticleToc({ sections, L }) {
  const [active, setActive] = useState(sections[0]?.[0]);
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const contents = useRef(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const elements = sections.map(([id]) => document.getElementById(id)).filter(Boolean);
      if (!elements.length) return;
      const header = Number.parseFloat(getComputedStyle(document.documentElement)
        .getPropertyValue('--site-header-height')) || 0;
      const tocHeight = window.matchMedia('(max-width: 900px)').matches
        ? toggle.current?.getBoundingClientRect().height || 0 : 0;
      const offset = header + tocHeight + 24;
      let current = elements[0].id;
      for (const element of elements) {
        if (element.getBoundingClientRect().top > offset) break;
        current = element.id;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 3) {
        current = elements.at(-1).id;
      }
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('hashchange', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('hashchange', schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [sections]);

  useEffect(() => {
    if (!open) return;
    const closeOutside = event => { if (!contents.current?.contains(event.target)) setOpen(false); };
    const closeOnEscape = event => {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      setOpen(false);
      toggle.current?.focus();
    };
    window.addEventListener('keydown', closeOnEscape);
    window.addEventListener('pointerdown', closeOutside);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      window.removeEventListener('pointerdown', closeOutside);
    };
  }, [open]);

  const currentTitle = sections.find(([id]) => id === active)?.[1] || sections[0]?.[1];
  return <aside ref={contents} className={`article-toc${open ? ' is-open' : ''}`} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
    <button className="toc-toggle" type="button" ref={toggle} aria-expanded={open}
      aria-controls="article-section-links" onClick={() => setOpen(value => !value)}>
      <small>{L('本页内容', 'On this page')}</small><strong>{currentTitle}</strong>
      <CaretDown size={18} aria-hidden="true" />
    </button>
    <nav id="article-section-links" aria-label={L('本页目录', 'On this page')}>
      <p className="eyebrow">{L('本页内容', 'On this page')}</p>
      {sections.map(([id, title], index) => <a href={`#${id}`} key={id}
        aria-current={active === id ? 'location' : undefined} onClick={() => {
          setOpen(false);
          requestAnimationFrame(() => {
            const target = document.getElementById(id);
            target?.scrollIntoView({ block: 'start', behavior: 'instant' });
            target?.focus({ preventScroll: true });
          });
        }}>
        <span>{String(index + 1).padStart(2, '0')}</span>{title}
      </a>)}
    </nav>
  </aside>;
}

function ArticleSection({ id, title, index, children }) {
  return <section id={id} className="article-section" data-reading-anchor tabIndex={-1} aria-labelledby={`${id}-title`}>
    <p className="section-kicker" aria-hidden="true">{String(index + 1).padStart(2, '0')}</p>
    <SectionHeading title={title} headingId={`${id}-title`} className="article-section-heading" />
    {children}
  </section>;
}

function DetailFrame({ title, eyebrow, tags = [], category, categoryPath, parent, context, next, L, children }) {
  const parentHref = getReadingHref(parent?.path || categoryPath);
  const parentTitle = parent?.title || category;
  return <div className="detail-page"><div className="wrap">
    <nav className="breadcrumb" aria-label={L('当前位置', 'Breadcrumb')}>
      <a href={routeHref('/')}>{L('首页', 'Home')}</a><span aria-hidden="true">/</span>
      <a href={routeHref(categoryPath)}>{category}</a><span aria-hidden="true">/</span>
      {parent && <><a href={routeHref(parent.path)}>{parent.title}</a><span aria-hidden="true">/</span></>}
      <span aria-current="page">{title}</span>
    </nav>
    <header className="detail-heading" id="detail-heading" data-reading-anchor>
      <p className="eyebrow">{eyebrow}</p>
      <h1 tabIndex={-1}>{title}</h1>
      {context}
      {tags.length > 0 && <ul className="detail-tags" aria-label={L('主题', 'Topics')}>
        {tags.map(tag => <li key={tag}>{tag}</li>)}
      </ul>}
      <a className="plain-link" href={parentHref}><ArrowLeft size={17} aria-hidden="true" />
        {L('返回', 'Back to ')}{parentTitle}
      </a>
    </header>
    {children}
    <nav className="reading-continuation" aria-label={L('继续了解', 'Keep exploring')}>
      <a className="reading-continuation-primary return-to-directory" href={parentHref}>
        <span><small>{L('返回目录', 'Back to directory')}</small><strong>{parentTitle}</strong></span>
        <ArrowLeft size={20} aria-hidden="true" />
      </a>
      <div className="reading-continuation-secondary">
        {next && <a href={routeHref(`/projects/${next.project.id}/`)}>
          <span><small>{next.kind === 'product' ? L('同一产品 · 下一专题', 'Same product · Next topic') : L('下一相关案例', 'Next related case')}</small>
            <strong>{next.project.title}</strong></span><ArrowUpRight size={20} aria-hidden="true" />
        </a>}
        <a href={routeHref('/contact/')}><span><small>{L('交流与合作', 'Conversation & collaboration')}</small>
          <strong>{L('联系我', 'Get in touch')}</strong></span><ArrowUpRight size={20} aria-hidden="true" /></a>
      </div>
    </nav>
  </div></div>;
}

function RelatedProject({ project, L }) {
  if (!project) return null;
  return <a href={routeHref(`/projects/${project.id}/`)}>
    <span><small>{project.company}</small><strong>{project.title}</strong></span>
    <ArrowUpRight size={20} aria-hidden="true" />
  </a>;
}

export function ProjectDetail({ route, data, cases, L }) {
  const id = route.id;
  const item = cases[id];
  const project = data.projects.find(entry => entry.id === id);
  const brief = projectBriefs[id];
  const product = projectProductFor(id);
  const { career, capabilities, next } = getProjectRelations(id, data);
  const parent = product ? {
    title: L(product.title.zh, product.title.en),
    path: `/products/${product.id}/`,
  } : undefined;
  const context = <nav className="detail-context" aria-label={L('项目关联', 'Project context')}>
    {career && <a href={routeHref(`/experience/${career.id}/`)}>
      <span><small>{L('所属任职经历', 'Career context')}</small><strong>{career.company} · {career.role}</strong></span>
      <ArrowUpRight size={17} aria-hidden="true" />
    </a>}
    {capabilities.map(skill => <a key={skill.id} href={routeHref(`/capabilities/${skill.id}/`)}>
      <span><small>{L('相关能力', 'Related capability')}</small><strong>{skill.title}</strong></span>
      <ArrowUpRight size={17} aria-hidden="true" />
    </a>)}
  </nav>;
  const sections = [
    ['project-overview', L('项目概览', 'Overview')],
    ['project-context', L('问题与背景', 'Problem & context')],
    ['project-contribution', L('工作过程', 'Work process')],
    ...(item.decisions?.length ? [['project-decisions', item.decisionLabel || L('关键判断', 'Key decisions')]] : []),
    ['project-outputs', L('交付成果', 'Deliverables')],
    ['project-related', L('关联项目与能力', 'Related projects & capabilities')],
  ];
  const indexOf = sectionId => sections.findIndex(([entry]) => entry === sectionId);
  const titleOf = sectionId => sections.find(([entry]) => entry === sectionId)?.[1];

  return <DetailFrame title={item.title} eyebrow={`${project.company} / ${product ? L('产品专题', 'Product topic') : L('项目案例', 'Project case')}`}
    tags={item.tags} category={L('项目实践', 'Projects')} categoryPath="/projects/" parent={parent} context={context} next={next} L={L}>
    <figure className="detail-cover" data-project={id}>
      <img src={asset(project.image)} alt="" width="900" height="600" />
    </figure>
    <div className="article-layout">
      <ArticleToc sections={sections} L={L} />
      <article className="article-content">
        <ArticleSection id="project-overview" title={titleOf('project-overview')} index={indexOf('project-overview')}>
          <p className="detail-lead">{item.intro}</p>
          <dl className="detail-meta">
            {item.overview.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
            {brief && <div><dt>{L('交付状态', 'Delivery status')}</dt><dd>{L(brief.status.zh, brief.status.en)}</dd></div>}
          </dl>
          <p className="role-note">{item.boundary}</p>
        </ArticleSection>
        <ArticleSection id="project-context" title={titleOf('project-context')} index={indexOf('project-context')}>
          {brief && <p>{L(brief.context.zh, brief.context.en)}</p>}
          <h3>{item.problem}</h3>
          <p>{item.problemText}</p>
        </ArticleSection>
        <ArticleSection id="project-contribution" title={titleOf('project-contribution')} index={indexOf('project-contribution')}>
          <ProjectWork key={id} actions={item.actions} ids={projectWorkIds(id, item)} L={L} />
        </ArticleSection>
        {item.decisions?.length > 0 && <ArticleSection id="project-decisions" title={titleOf('project-decisions')} index={indexOf('project-decisions')}>
          {item.decisions.map((decision, index) => <div className="decision-item" key={decision.title}
            id={projectDecisionId(id, index)} data-reading-anchor tabIndex={-1}>
            <div id={id === 'ai-ecosystem' && index === 0 ? 'ai-task-rules' : undefined}
              data-reading-anchor={id === 'ai-ecosystem' && index === 0 ? true : undefined}
              tabIndex={id === 'ai-ecosystem' && index === 0 ? -1 : undefined}>
              <h3>{decision.title}</h3><p>{decision.text}</p>
            </div>
          </div>)}
        </ArticleSection>}
        <ArticleSection id="project-outputs" title={titleOf('project-outputs')} index={indexOf('project-outputs')}>
          <div className="outputs-grid">{item.outputs.map(([title, text]) => <div className="output-card" key={title}>
            <h3>{title}</h3><p>{text}</p>
          </div>)}</div>
        </ArticleSection>
        <ArticleSection id="project-related" title={titleOf('project-related')} index={indexOf('project-related')}>
          <nav className="detail-related-nav" aria-label={L('继续阅读', 'Continue reading')}>
            {career && <a href={routeHref(`/experience/${career.id}/`)}>
              <span><small>{L('任职背景', 'Career background')}</small><strong>{career.company} · {career.role}</strong>
                <span>{career.date}</span></span><ArrowUpRight size={20} aria-hidden="true" />
            </a>}
            {capabilities.map(skill => <a key={skill.id} href={routeHref(`/capabilities/${skill.id}/`)}>
              <span><small>{L('本项目涉及的能力', 'Capability used in this project')}</small><strong>{skill.title}</strong>
                <span>{L('查看方法与其他应用项目', 'See methods and other project examples')}</span></span>
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>)}
            {next && <a href={routeHref(`/projects/${next.project.id}/`)}>
              <span><small>{next.kind === 'product' ? L('同一产品 · 下一专题', 'Same product · Next topic') : L('下一相关案例', 'Next related case')}</small>
                <strong>{next.project.title}</strong><span>{next.kind === 'product'
                  ? L(next.product.title.zh, next.product.title.en) : next.project.company}</span></span>
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>}
          </nav>
          <h3>{L('其他关联项目', 'Other related projects')}</h3>
          <div className="related-links">{project.relatedProjects?.filter(projectId => projectId !== next?.project.id).map(projectId => <RelatedProject
            key={projectId} project={data.projects.find(entry => entry.id === projectId)} L={L} />)}</div>
        </ArticleSection>
      </article>
    </div>
  </DetailFrame>;
}

export function SkillDetail({ route, data, L }) {
  const item = data.skills[route.id];
  const sections = [
    ['skill-overview', L('能力概述', 'Overview')],
    ['skill-methods', L('方法实践', 'Approach')],
    ['skill-projects', L('应用项目', 'Project examples')],
    ['skill-scope', L('工作范围', 'Scope')],
  ];
  return <DetailFrame title={item.title} eyebrow={L('能力与方法', 'Capabilities')}
    category={L('能力与方法', 'Capabilities')} categoryPath="/capabilities/" L={L}>
    <div className="article-layout">
      <ArticleToc sections={sections} L={L} />
      <article className="article-content">
        <ArticleSection id="skill-overview" title={sections[0][1]} index={0}>
          <p className="detail-lead">{item.intro}</p>
        </ArticleSection>
        <ArticleSection id="skill-methods" title={sections[1][1]} index={1}>
          {item.methods.map(method => <div className="decision-item" key={method.title}>
            <h3>{method.title}</h3><p>{method.text}</p>
            {method.projectId && <a className="evidence-link"
              href={`${routeHref(`/projects/${method.projectId}/`)}${method.projectAnchor ? `#${method.projectAnchor}` : ''}`}>
              <span>{method.evidence}</span><ArrowUpRight size={17} aria-hidden="true" />
            </a>}
          </div>)}
        </ArticleSection>
        <ArticleSection id="skill-projects" title={sections[2][1]} index={2}>
          <div className="related-links">{item.projects.map(id => <RelatedProject key={id}
            project={data.projects.find(entry => entry.id === id)} L={L} />)}</div>
        </ArticleSection>
        <ArticleSection id="skill-scope" title={sections[3][1]} index={3}>
          <p className="role-note">{item.boundary}</p>
        </ArticleSection>
      </article>
    </div>
  </DetailFrame>;
}

export function CareerDetail({ route, data, stages, L }) {
  const item = data.career.find(entry => entry.id === route.id);
  const stage = stages[route.id];
  const capabilities = getCareerCapabilities(route.id, data);
  const sections = [
    ['career-overview', L('任职概述', 'Overview')],
    ['career-work', L('职责与实践', 'Responsibilities')],
    ['career-projects', L('相关项目', 'Related projects')],
    ['career-capabilities', L('涉及的能力与方法', 'Capabilities & methods used')],
  ];
  return <DetailFrame title={item.company} eyebrow={`${item.date} / ${stage.title}`}
    tags={stage.tags} category={L('职业经历', 'Career')} categoryPath="/experience/" L={L}>
    <div className="article-layout">
      <ArticleToc sections={sections} L={L} />
      <article className="article-content">
        <ArticleSection id="career-overview" title={sections[0][1]} index={0}>
          <h3>{stage.title}</h3><p className="detail-lead">{stage.description}</p>
          <dl className="detail-meta">
            <div><dt>{L('任职时间', 'Period')}</dt><dd>{item.date}</dd></div>
            <div><dt>{L('工作方向', 'Focus')}</dt><dd>{item.role}</dd></div>
            {stage.metrics?.map(metric => <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}
          </dl>
        </ArticleSection>
        <ArticleSection id="career-work" title={sections[1][1]} index={1}>
          <ul>{stage.actions.map(action => <li key={action}>{action}</li>)}</ul>
        </ArticleSection>
        <ArticleSection id="career-projects" title={sections[2][1]} index={2}>
          <div className="related-links">{item.relatedProjects.map(id => <RelatedProject key={id}
            project={data.projects.find(entry => entry.id === id)} L={L} />)}</div>
        </ArticleSection>
        <ArticleSection id="career-capabilities" title={sections[3][1]} index={3}>
          <p>{L('以下能力对应上列任职项目。', 'These capabilities are used in the projects listed above.')}</p>
          <div className="career-capabilities related-links">{capabilities.map(skill => <a key={skill.id} href={routeHref(`/capabilities/${skill.id}/`)}>
            <span><small>{L('能力与方法', 'Capabilities')}</small><strong>{skill.title}</strong></span>
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>)}</div>
        </ArticleSection>
      </article>
    </div>
  </DetailFrame>;
}
