import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { portfolio } from './portfolio.js';
import { cases as englishCases, stages as englishStages } from './content.js';
import { cases as chineseCases, stages as chineseStages } from './content.zh.js';
import { useLanguage } from './i18n.js';
import usePortfolioNavigation from './hooks/usePortfolioNavigation.js';
import { routeHref } from './routes.js';

const EMAIL = 'Zysq09@gmail.com';
const asset = name => `${import.meta.env.BASE_URL}assets/${name}`;

function Glyph({ kind, size = 20 }) {
  const paths = {
    arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
    back: <path d="M20 12H5m6-6-6 6 6 6" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
    copy: <><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" /></>,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[kind]}</svg>;
}

function LanguageSwitch({ language, onToggle }) {
  const label = language === 'zh' ? '切换为英文' : 'Switch to Chinese';
  return <button type="button" className="language-switch" aria-label={label} title={label} onClick={onToggle}>
    <span lang={language === 'zh' ? 'en' : 'zh-CN'}>{language === 'zh' ? 'EN' : '中文'}</span>
  </button>;
}

function Education({ items, L }) {
  return <div>
    <h2 className="education-heading">{L('教育背景', 'Education')}</h2>
    <div className="education-grid">
      {items.map(item => <div className="education-item" key={`${item.school}-${item.degree}`}>
        <p className="card-topline">{item.school} <span>{item.date}</span></p>
        <h3>{item.degree} · {item.field}</h3>
      </div>)}
    </div>
  </div>;
}

function ProjectCard({ project, skills, L, compact = false, headingTag = 'h3' }) {
  const Heading = headingTag;
  if (compact) return <a className="related-card" href={routeHref(`/projects/${project.id}/`)}>
    <p className="card-topline">{project.company}</p>
    <h3>{project.title}</h3>
    <p className="card-description">{project.summary}</p>
    <span className="card-footer">{L('了解项目', 'View project')} <Glyph kind="arrow" size={17} /></span>
  </a>;
  return <a className="project-card" href={routeHref(`/projects/${project.id}/`)}>
    <div className="project-cover">
      <img src={asset(project.image)} alt="" width="900" height="600" loading="lazy" />
    </div>
    <div className="project-body">
      <p className="card-topline">{project.company}<span>{project.role}</span></p>
      <Heading className="card-title">{project.title}</Heading>
      <p className="card-description">{project.summary}</p>
      {project.highlight && <p className="project-fact">{project.highlight}</p>}
      <div className="tag-list">{project.skills.map(id => <span key={id}>{skills[id].title}</span>)}</div>
      <span className="card-footer">{L('了解项目', 'View project')} <Glyph kind="arrow" size={18} /></span>
    </div>
  </a>;
}

function SkillCard({ id, skill, index, L, compact = false, headingTag = 'h3' }) {
  const Heading = headingTag;
  return <a className={compact ? 'related-card' : 'skill-card'} href={routeHref(`/capabilities/${id}/`)}>
    {!compact && <span className="card-index">{String(index + 1).padStart(2, '0')}</span>}
    <Heading className="card-title">{skill.title}</Heading>
    <p className="card-description">{skill.summary}</p>
    <span className="card-footer">{L('了解方法', 'Explore approach')} <Glyph kind="arrow" size={18} /></span>
  </a>;
}

function CareerCard({ item, L }) {
  return <a className="career-card" href={routeHref(`/experience/${item.id}/`)}>
    <p className="card-topline">{item.date}</p>
    <h2 className="card-title">{item.company}</h2>
    <p className="card-role">{item.role}</p>
    <p className="card-description">{item.summary}</p>
    <span className="card-footer">{L('了解经历', 'View experience')} <Glyph kind="arrow" size={17} /></span>
  </a>;
}

function HomePage({ data, L }) {
  return <>
    <section id="top" className="hero wrap" aria-labelledby="home-title" data-reading-anchor>
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">{L('77 · 产品经理', '77 · Product Manager')}</p>
          <h1 id="home-title" tabIndex={-1}>{data.profile.title.map(line => <span key={line}>{line}</span>)}</h1>
          {data.profile.intro.split('\n').map(paragraph => <p className="page-intro" key={paragraph}>{paragraph}</p>)}
          <div className="hero-actions">
            <a className="button button-primary" href={routeHref('/projects/')}>{L('浏览项目', 'Explore projects')} <Glyph kind="arrow" size={18} /></a>
            <a className="button button-secondary" href={routeHref('/experience/')}>{L('职业经历', 'Career')}</a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true"><img src={asset('hero-profile-summary-v1.webp')} alt="" width="1200" height="800" fetchPriority="high" /></div>
      </div>
      <div className="overview-grid">
        {data.profile.summaryCards.map((card, index) => <a className="overview-card" href={routeHref(card.href)} key={card.id}>
          <span className="card-index">{String(index + 1).padStart(2, '0')}</span>
          <h2>{card.title}</h2>
          <p>{card.summary}</p>
          <span className="card-link" aria-hidden="true"><Glyph kind="arrow" size={19} /></span>
        </a>)}
      </div>
    </section>
    <section className="home-selected section wrap" aria-labelledby="selected-title" id="selected" data-reading-anchor>
      <header className="section-heading">
        <div><p className="eyebrow">{L('项目', 'Work')}</p><h2 id="selected-title" tabIndex={-1}>{L('项目精选', 'Selected projects')}</h2></div>
        <a className="section-more" href={routeHref('/projects/')}>{L('查看全部项目', 'All projects')} <Glyph kind="arrow" size={17} /></a>
      </header>
      <div className="project-grid">{data.projects.filter(project => project.featured).map(project => <ProjectCard key={project.id} project={project} skills={data.skills} L={L} />)}</div>
    </section>
    <section className="home-contact wrap" aria-label={L('联系', 'Contact')}>
      <p>{data.profile.contactText}</p>
      <a className="back-link" href={routeHref('/contact/')}>{L('联系我', 'Get in touch')} <Glyph kind="arrow" size={17} /></a>
    </section>
  </>;
}

function CategoryPage({ route, data, L, onCopyEmail }) {
  const categories = {
    experience: { path: '/experience/', number: '01', title: L('职业经历', 'Career & background'), intro: L('三段职业经历，两项学科背景。', 'Three roles. A foundation in psychology and business.') },
    projects: { path: '/projects/', number: '02', title: L('项目实践', 'Projects'), intro: L('AI 产品、商业化、海外适配与用户研究。', 'AI products, monetization, localization and user research.') },
    capabilities: { path: '/capabilities/', number: '03', title: L('能力与方法', 'Capabilities'), intro: L('用户研究、产品规划、AI 产品设计与交付协作。', 'User research, product planning, AI product design and delivery.') },
    contact: { path: '/contact/', number: '04', title: L('联系我', 'Get in touch'), intro: data.profile.contactText },
  };
  const category = categories[route.type];
  return <div className="category-page"><div className="wrap">
    <nav className="breadcrumb" aria-label={L('当前位置', 'Breadcrumb')}>
      <a href={routeHref('/')}>{L('首页', 'Home')}</a><span aria-hidden="true">/</span><span aria-current="page">{category.title}</span>
    </nav>
    <header className="category-heading" id="category-heading" data-reading-anchor>
      <p className="eyebrow">{category.number}</p>
      <h1 tabIndex={-1}>{category.title}</h1>
      <p className="page-intro">{category.intro}</p>
    </header>
    <section className="category-content" id="category-content" data-reading-anchor aria-label={category.title}>
      {route.type === 'experience' && <><div className="career-grid">{data.career.map(item => <CareerCard key={item.id} item={item} L={L} />)}</div><Education items={data.profile.education} L={L} /></>}
      {route.type === 'projects' && <div className="project-grid">{data.projects.map(project => <ProjectCard key={project.id} project={project} skills={data.skills} L={L} headingTag="h2" />)}</div>}
      {route.type === 'capabilities' && <div className="skills-grid">{Object.entries(data.skills).map(([id, skill], index) => <SkillCard key={id} id={id} skill={skill} index={index} L={L} headingTag="h2" />)}</div>}
      {route.type === 'contact' && <div className="contact-inner"><div><h2>{L('邮件联系', 'Email')}</h2></div><div className="contact-actions"><a className="contact-email" href={`mailto:${EMAIL}`}>{EMAIL}</a><button type="button" className="copy-button" onClick={onCopyEmail} aria-label={L('复制邮箱地址', 'Copy email address')}><Glyph kind="copy" /></button></div></div>}
    </section>
    <nav className="category-next" aria-label={L('继续了解', 'Explore more')}>
      {Object.entries(categories).filter(([type]) => type !== route.type).map(([type, item]) => <a className="back-link" key={type} href={routeHref(item.path)}>{item.title} <Glyph kind="arrow" size={17} /></a>)}
    </nav>
  </div></div>;
}

function NotFoundPage({ L }) {
  return <div className="category-page"><div className="wrap"><header className="category-heading" id="not-found" data-reading-anchor><p className="eyebrow">404</p><h1 tabIndex={-1}>{L('页面未找到', 'Page not found')}</h1><p className="page-intro">{L('可以从首页、经历或项目继续浏览。', 'Continue from the home page, career or projects.')}</p></header><nav className="category-next" aria-label={L('继续浏览', 'Continue exploring')}><a className="button button-primary" href={routeHref('/')}>{L('回到首页', 'Home')}</a><a className="back-link" href={routeHref('/experience/')}>{L('职业经历', 'Career')}</a><a className="back-link" href={routeHref('/projects/')}>{L('项目实践', 'Projects')}</a></nav></div></div>;
}

function Contents({ items, L }) {
  function readSection(id) {
    const section = document.getElementById(id);
    section?.querySelector('h2')?.focus({ preventScroll: true });
    section?.scrollIntoView({ behavior: 'instant', block: 'start' });
  }
  return <aside className="article-aside">
    <nav className="toc" aria-label={L('本页目录', 'On this page')}>
      <p className="toc-title">{L('本页内容', 'On this page')}</p>
      {items.map(([id, title]) => <button type="button" key={id} onClick={() => readSection(id)}>{title}</button>)}
    </nav>
  </aside>;
}

function ArticleSection({ id, title, children }) {
  return <section id={id} className="article-section" data-reading-anchor>
    <h2 tabIndex={-1}>{title}</h2>
    {children}
  </section>;
}

function ActionList({ actions }) {
  return <div className="action-list">
    {actions.map(action => {
      const plain = action.replace(/<[^>]+>/g, '');
      const match = plain.match(/^([^:：]+)[:：]\s*(.*)$/s);
      return <div className="action-entry" key={action}>
        {match ? <><h3>{match[1]}</h3><p>{match[2]}</p></> : <p>{plain}</p>}
      </div>;
    })}
  </div>;
}

function ProjectArticle({ id, item, data, L }) {
  const project = data.projects.find(entry => entry.id === id);
  const sections = [
    ['project-context', L('工作背景', 'Context')],
    ...(item.decisions?.length ? [['project-decisions', L('关键判断', 'Key decisions')]] : []),
    ['project-contribution', L('关键工作', 'Contribution')],
    ['project-outputs', L('主要交付', 'Deliverables')],
    ...(item.progress?.length ? [['project-progress', L('交付进展', 'Delivery progress')]] : []),
    ['project-reflection', L('实践思考', 'Reflections')],
    ['project-related', L('相关方法与项目', 'Related methods & projects')],
  ];
  const titles = Object.fromEntries(sections);
  const relatedProjects = (project.relatedProjects || []).map(projectId => data.projects.find(entry => entry.id === projectId)).filter(Boolean);
  return <div className="detail-layout">
    <article className="article-body">
      <ArticleSection id="project-context" title={titles['project-context']}>
        <h3>{item.problem}</h3><p>{item.problemText}</p>
      </ArticleSection>
      {item.decisions?.length > 0 && <ArticleSection id="project-decisions" title={titles['project-decisions']}>
        {item.decisions.map(decision => <div className="action-entry" key={decision.title}><h3>{decision.title}</h3><p>{decision.text}</p></div>)}
      </ArticleSection>}
      <ArticleSection id="project-contribution" title={titles['project-contribution']}><ActionList actions={item.actions} /></ArticleSection>
      <ArticleSection id="project-outputs" title={titles['project-outputs']}>
        <div className="outputs-grid">{item.outputs.map(([title, text]) => <div className="output-card" key={title}><h3>{title}</h3><p>{text}</p></div>)}</div>
      </ArticleSection>
      {item.progress?.length > 0 && <ArticleSection id="project-progress" title={titles['project-progress']}>
        {item.progress.map(entry => <div className="action-entry" key={entry.title}><h3>{entry.title}</h3><p>{entry.text}</p></div>)}
      </ArticleSection>}
      <ArticleSection id="project-reflection" title={titles['project-reflection']}>
        <p>{item.lesson}</p>
        <div className="contribution-boundary"><h3>{L('职责与协作', 'Role & collaboration')}</h3><p>{item.boundary}</p></div>
      </ArticleSection>
      <ArticleSection id="project-related" title={titles['project-related']}>
        <h3 className="related-heading">{L('相关方法', 'Related methods')}</h3>
        <div className="related-grid">{project.skills.map((skillId, index) => <SkillCard key={skillId} id={skillId} skill={data.skills[skillId]} index={index} L={L} compact />)}</div>
        <h3 className="related-heading">{L('更多项目', 'More projects')}</h3>
        <div className="related-grid">{relatedProjects.map(entry => <ProjectCard key={entry.id} project={entry} skills={data.skills} L={L} compact />)}</div>
      </ArticleSection>
    </article>
    <Contents items={sections} L={L} />
  </div>;
}

function SkillArticle({ item, data, L }) {
  const sections = [
    ['skill-methods', L('方法实践', 'Approach')],
    ['skill-projects', L('应用项目', 'Project examples')],
    ['skill-scope', L('工作范围', 'Scope')],
  ];
  return <div className="detail-layout">
    <article className="article-body">
      <ArticleSection id="skill-methods" title={sections[0][1]}>
        {item.methods.map(method => <div className="action-entry" key={method.title}><h3>{method.title}</h3><p>{method.text}</p></div>)}
      </ArticleSection>
      <ArticleSection id="skill-projects" title={sections[1][1]}>
        <div className="related-grid">{item.projects.map(id => <ProjectCard key={id} project={data.projects.find(entry => entry.id === id)} skills={data.skills} L={L} compact />)}</div>
      </ArticleSection>
      <ArticleSection id="skill-scope" title={sections[2][1]}><p>{item.boundary}</p></ArticleSection>
    </article>
    <Contents items={sections} L={L} />
  </div>;
}

function CareerArticle({ item, stage, data, L }) {
  const sections = [
    ['career-work', L('职责与实践', 'Responsibilities')],
    ['career-projects', L('相关项目', 'Related projects')],
  ];
  return <div className="detail-layout">
    <article className="article-body">
      <ArticleSection id="career-work" title={sections[0][1]}>
        <ul>{stage.actions.map(action => <li key={action}>{action}</li>)}</ul>
        <div className="tag-list">{stage.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        {stage.metrics && <dl className="detail-meta work-metrics">{stage.metrics.map(metric => <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}</dl>}
      </ArticleSection>
      <ArticleSection id="career-projects" title={sections[1][1]}>
        <div className="related-grid">{item.relatedProjects.map(id => <ProjectCard key={id} project={data.projects.find(entry => entry.id === id)} skills={data.skills} L={L} compact />)}</div>
      </ArticleSection>
    </article>
    <Contents items={sections} L={L} />
  </div>;
}

function DetailPage({ route, data, cases, stages, L, onCopyLink }) {
  const project = route.type === 'project';
  const skill = route.type === 'skill';
  const item = project ? cases[route.id] : skill ? data.skills[route.id] : data.career.find(entry => entry.id === route.id);
  const category = project ? L('项目实践', 'Projects') : skill ? L('能力与方法', 'Capabilities') : L('职业经历', 'Experience');
  const fallback = routeHref(project ? '/projects/' : skill ? '/capabilities/' : '/experience/');
  const title = project || skill ? item.title : item.company;
  const intro = project || skill ? item.intro : item.summary;
  return <div className="detail-page">
    <div className="detail-wrap wrap">
      <nav className="breadcrumb" aria-label={L('当前位置', 'Breadcrumb')}>
        <a href={routeHref('/')}>{L('首页', 'Home')}</a><span aria-hidden="true">/</span>
        <a href={fallback}>{category}</a><span aria-hidden="true">/</span>
        <span aria-current="page">{title}</span>
      </nav>
      <header className="detail-heading" id="detail-heading" data-reading-anchor>
        <p className="eyebrow">{project ? item.label : skill ? category : `${item.company} · ${item.date}`}</p>
        <h1 tabIndex={-1}>{title}</h1>
        {!project && !skill && <p className="card-role">{item.role}</p>}
        <p className="page-intro">{intro}</p>
        {project && <>
          <dl className="detail-meta">{item.overview.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
          <div className="tag-list">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        </>}
        <div className="detail-actions">
          <a href={fallback} className="back-link"><Glyph kind="back" size={17} />{L('返回', 'Back to ')}{category}</a>
          <button type="button" className="copy-button" onClick={onCopyLink}><Glyph kind="copy" size={17} /><span>{L('复制本页链接', 'Copy page link')}</span></button>
        </div>
      </header>
      {project ? <ProjectArticle id={route.id} item={item} data={data} L={L} /> : skill ? <SkillArticle item={item} data={data} L={L} /> : <CareerArticle item={item} stage={stages[route.id]} data={data} L={L} />}
      <div className="detail-nav"><a className="back-link" href={fallback}><Glyph kind="back" size={17} />{L('回到', 'Back to ')}{category}</a><a href={routeHref('/contact/')}>{L('联系我', 'Get in touch')} <Glyph kind="arrow" size={17} /></a></div>
    </div>
  </div>;
}

export default function App() {
  const [language, toggleLanguage] = useLanguage();
  const data = portfolio[language];
  const cases = language === 'zh' ? chineseCases : englishCases;
  const stages = language === 'zh' ? chineseStages : englishStages;
  const L = (zh, en) => language === 'zh' ? zh : en;
  const { route } = usePortfolioNavigation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState('');
  const menuRef = useRef(null);
  const statusTimer = useRef(null);
  const readingPosition = useRef(null);

  function changeLanguage() {
    const anchors = Array.from(document.querySelectorAll('[data-reading-anchor]'));
    const anchor = anchors.filter(item => item.getBoundingClientRect().top <= 180).at(-1) || anchors[0];
    readingPosition.current = anchor ? { id: anchor.id, top: anchor.getBoundingClientRect().top } : null;
    toggleLanguage();
  }

  useLayoutEffect(() => {
    const position = readingPosition.current;
    if (!position) return;
    const anchor = document.getElementById(position.id);
    if (anchor) window.scrollTo({ top: window.scrollY + anchor.getBoundingClientRect().top - position.top, behavior: 'instant' });
    readingPosition.current = null;
  }, [language]);

  useEffect(() => {
    const current = document.querySelector('main h1')?.textContent || L('个人介绍', 'Profile');
    document.title = `${current} · 77`;
  }, [route.key, language]);

  useEffect(() => { setMenuOpen(false); setStatus(''); }, [route.key]);
  useEffect(() => () => clearTimeout(statusTimer.current), []);
  useEffect(() => {
    if (!menuOpen) return;
    const dismiss = event => {
      if (event.key === 'Escape') { setMenuOpen(false); menuRef.current?.focus(); }
    };
    const outside = event => { if (!event.target.closest('.site-header')) setMenuOpen(false); };
    const desktop = window.matchMedia('(min-width: 621px)');
    const resize = event => { if (event.matches) setMenuOpen(false); };
    document.addEventListener('keydown', dismiss);
    document.addEventListener('pointerdown', outside);
    desktop.addEventListener('change', resize);
    return () => {
      document.removeEventListener('keydown', dismiss);
      document.removeEventListener('pointerdown', outside);
      desktop.removeEventListener('change', resize);
    };
  }, [menuOpen]);

  async function copy(value, success, fallback) {
    try { await navigator.clipboard.writeText(value); setStatus(success); }
    catch { setStatus(fallback); }
    clearTimeout(statusTimer.current);
    statusTimer.current = setTimeout(() => setStatus(''), 3000);
  }

  const links = [
    ['experience', '/experience/', L('经历', 'Background')], ['projects', '/projects/', L('项目', 'Work')],
    ['capabilities', '/capabilities/', L('能力', 'Capabilities')], ['contact', '/contact/', L('联系', 'Contact')],
  ];
  const activeCategory = route.type === 'career' ? 'experience' : route.type === 'project' ? 'projects' : route.type === 'skill' ? 'capabilities' : route.type;
  const copyEmail = () => copy(EMAIL, L('邮箱已复制', 'Email copied'), L('请选择邮箱地址后复制', 'Select the email address to copy'));
  return <div className={`portfolio language-${language}`} lang={language === 'zh' ? 'zh-CN' : 'en'}>
    <a className="skip-link" href="#main" onClick={event => { event.preventDefault(); const heading = document.querySelector('main h1'); heading?.focus({ preventScroll: true }); heading?.scrollIntoView({ behavior: 'instant', block: 'start' }); }}>{L('跳到正文', 'Skip to content')}</a>
    <header className="site-header" onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setMenuOpen(false); }}>
      <div className="header-inner wrap">
        <a className="brand" href={routeHref('/')} aria-label={L('77 个人介绍首页', '77 profile home')}><span className="brand-number">77.</span><span className="brand-caption">{L('个人介绍', 'Profile')}</span></a>
        <nav id="main-navigation" className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label={L('主导航', 'Main navigation')}>
          {links.map(([type, path, title]) => <a href={routeHref(path)} key={type} aria-current={activeCategory === type ? route.type === type ? 'page' : 'location' : undefined}>{title}</a>)}
        </nav>
        <div className="header-actions"><LanguageSwitch language={language} onToggle={changeLanguage} /><button type="button" ref={menuRef} className="menu-button" onClick={() => setMenuOpen(open => !open)} aria-label={menuOpen ? L('关闭导航', 'Close navigation') : L('打开导航', 'Open navigation')} aria-expanded={menuOpen} aria-controls="main-navigation"><Glyph kind={menuOpen ? 'close' : 'menu'} /></button></div>
      </div>
    </header>
    <main id="main">
      {route.type === 'home' ? <HomePage data={data} L={L} /> : ['experience', 'projects', 'capabilities', 'contact'].includes(route.type) ? <CategoryPage route={route} data={data} L={L} onCopyEmail={copyEmail} /> : route.type === 'notfound' ? <NotFoundPage L={L} /> : <DetailPage route={route} data={data} cases={cases} stages={stages} L={L} onCopyLink={() => copy(window.location.href, L('页面链接已复制', 'Page link copied'), L('请从地址栏复制链接', 'Copy the link from your address bar'))} />}
    </main>
    <footer className="site-footer wrap"><span>77 · {L('个人介绍', 'Profile')}</span><a href={routeHref('/')}>{L('回到首页', 'Back to home')} <Glyph kind="arrow" size={16} /></a></footer>
    <div className={status ? 'toast visible' : 'toast'} role="status" aria-live="polite">{status}</div>
  </div>;
}
