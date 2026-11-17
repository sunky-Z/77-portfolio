import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowUpRight } from '@phosphor-icons/react';
import { routeHref } from './routes.js';
import { projectBriefs, projectProductFor } from './project-reading.js';
import { projectWorkIds, projectDecisionId } from './project-anchors.js';
import ProjectWork from './components/ProjectWork.jsx';
import { asset } from './assets.js';
import { SectionHeading } from './components/PortfolioSystem.jsx';

function ArticleToc({ sections, L }) {
  const [active, setActive] = useState(sections[0]?.[0]);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const elements = sections.map(([id]) => document.getElementById(id)).filter(Boolean);
      if (!elements.length) return;
      const header = document.querySelector('.site-header')?.getBoundingClientRect().bottom || 0;
      const offset = Math.max(header + 28, 120);
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
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [sections]);

  return <aside className="article-toc">
    <nav aria-label={L('本页目录', 'On this page')}>
      <p className="eyebrow">{L('本页内容', 'On this page')}</p>
      {sections.map(([id, title], index) => <a href={`#${id}`} key={id}
        aria-current={active === id ? 'location' : undefined}>
        <span>{String(index + 1).padStart(2, '0')}</span>{title}
      </a>)}
    </nav>
  </aside>;
}

function ArticleSection({ id, title, index, children }) {
  return <section id={id} className="article-section" data-reading-anchor aria-labelledby={`${id}-title`}>
    <p className="section-kicker" aria-hidden="true">{String(index + 1).padStart(2, '0')}</p>
    <SectionHeading title={title} headingId={`${id}-title`} className="article-section-heading" />
    {children}
  </section>;
}

function DetailFrame({ title, eyebrow, tags = [], category, categoryPath, parent, L, children }) {
  const parentHref = parent?.href || routeHref(categoryPath);
  const parentTitle = parent?.title || category;
  return <div className="detail-page"><div className="wrap">
    <nav className="breadcrumb" aria-label={L('当前位置', 'Breadcrumb')}>
      <a href={routeHref('/')}>{L('首页', 'Home')}</a><span aria-hidden="true">/</span>
      <a href={routeHref(categoryPath)}>{category}</a><span aria-hidden="true">/</span>
      {parent && <><a href={parent.href}>{parent.title}</a><span aria-hidden="true">/</span></>}
      <span aria-current="page">{title}</span>
    </nav>
    <header className="detail-heading" id="detail-heading" data-reading-anchor>
      <p className="eyebrow">{eyebrow}</p>
      <h1 tabIndex={-1}>{title}</h1>
      {tags.length > 0 && <ul className="detail-tags" aria-label={L('主题', 'Topics')}>
        {tags.map(tag => <li key={tag}>{tag}</li>)}
      </ul>}
      <a className="plain-link" href={parentHref}><ArrowLeft size={17} aria-hidden="true" />
        {L('返回', 'Back to ')}{parentTitle}
      </a>
    </header>
    {children}
    <nav className="detail-bottom-nav" aria-label={L('继续了解', 'Keep exploring')}>
      <a className="plain-link" href={parentHref}><ArrowLeft size={17} aria-hidden="true" />{parentTitle}</a>
      <a className="plain-link" href={routeHref('/contact/')}>{L('联系我', 'Get in touch')}<ArrowUpRight size={18} aria-hidden="true" /></a>
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
  const parent = product ? {
    title: L(product.title.zh, product.title.en),
    href: routeHref(`/products/${product.id}/`),
  } : undefined;
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
    tags={item.tags} category={L('项目实践', 'Projects')} categoryPath="/projects/" parent={parent} L={L}>
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
          <h3>{L('相关能力', 'Capabilities')}</h3>
          <div className="related-links">{project.skills.map(skillId => <a href={routeHref(`/capabilities/${skillId}/`)} key={skillId}>
            <span><small>{L('能力与方法', 'Capabilities')}</small><strong>{data.skills[skillId].title}</strong></span>
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>)}</div>
          <h3>{L('继续阅读', 'Continue reading')}</h3>
          <div className="related-links">{project.relatedProjects?.map(projectId => <RelatedProject
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
  const sections = [
    ['career-overview', L('任职概述', 'Overview')],
    ['career-work', L('职责与实践', 'Responsibilities')],
    ['career-projects', L('相关项目', 'Related projects')],
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
      </article>
    </div>
  </DetailFrame>;
}
