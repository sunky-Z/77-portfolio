import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { portfolio } from './portfolio.js';
import { cases as englishCases, stages as englishStages } from './content.js';
import { cases as chineseCases, stages as chineseStages } from './content.zh.js';
import { useLanguage } from './i18n.js';
import usePortfolioNavigation from './hooks/usePortfolioNavigation.js';

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

function SectionHeading({ id, number, title, children }) {
  return <header className="section-heading">
    <div>
      <p className="eyebrow">{number}</p>
      <h2 id={id} tabIndex={-1}>{title}</h2>
    </div>
    {children && <p className="section-intro">{children}</p>}
  </header>;
}

function Education({ items, L }) {
  return <div>
    <h3 className="education-heading">{L('教育背景', 'Education')}</h3>
    <div className="education-grid">
      {items.map(item => <div className="education-item" key={`${item.school}-${item.degree}`}>
        <p className="card-topline">{item.school} <span>{item.date}</span></p>
        <h4>{item.degree} · {item.field}</h4>
      </div>)}
    </div>
  </div>;
}

function ProjectCard({ project, skills, navigate, L, compact = false }) {
  if (compact) return <a className="related-card" href={`#work/${project.id}`} onClick={event => navigate(`#work/${project.id}`, event)}>
    <p className="card-topline">{project.company}</p>
    <h3>{project.title}</h3>
    <p className="card-description">{project.summary}</p>
    <span className="card-footer">{L('了解项目', 'View project')} <Glyph kind="arrow" size={17} /></span>
  </a>;
  return <a className="project-card" href={`#work/${project.id}`} onClick={event => navigate(`#work/${project.id}`, event)}>
    <div className="project-cover">
      <img src={asset(project.image)} alt="" width="900" height="600" loading="lazy" />
    </div>
    <div className="project-body">
      <p className="card-topline">{project.company}<span>{project.role}</span></p>
      <h3 className="card-title">{project.title}</h3>
      <p className="card-description">{project.summary}</p>
      <div className="tag-list">{project.skills.map(id => <span key={id}>{skills[id].title}</span>)}</div>
      <span className="card-footer">{L('了解项目', 'View project')} <Glyph kind="arrow" size={18} /></span>
    </div>
  </a>;
}

function SkillCard({ id, skill, index, navigate, L, compact = false }) {
  return <a className={compact ? 'related-card' : 'skill-card'} href={`#skills/${id}`} onClick={event => navigate(`#skills/${id}`, event)}>
    {!compact && <span className="card-index">{String(index + 1).padStart(2, '0')}</span>}
    <h3 className="card-title">{skill.title}</h3>
    <p className="card-description">{skill.summary}</p>
    <span className="card-footer">{L('了解方法', 'Explore approach')} <Glyph kind="arrow" size={18} /></span>
  </a>;
}

function HomePage({ data, navigate, L, onCopyEmail }) {
  return <>
    <section id="top" className="hero wrap" aria-labelledby="home-title" data-reading-anchor>
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">{L('77 · 产品经理', '77 · Product Manager')}</p>
          <h1 id="home-title" tabIndex={-1}>{data.profile.title.map(line => <span key={line}>{line}</span>)}</h1>
          <p className="page-intro">{data.profile.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects" onClick={event => navigate('#projects', event)}>{L('浏览项目', 'Explore projects')} <Glyph kind="arrow" size={18} /></a>
            <a className="button button-secondary" href="#about" onClick={event => navigate('#about', event)}>{L('职业经历', 'Career')}</a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true"><img src={asset('sketch-research-v2.webp')} alt="" width="900" height="600" fetchPriority="high" /></div>
      </div>
      <div className="overview-grid">
        {data.profile.summaryCards.map((card, index) => <a className="overview-card" href={card.href} key={card.id} onClick={event => navigate(card.href, event)}>
          <span className="card-index">{String(index + 1).padStart(2, '0')}</span>
          <h2>{card.title}</h2>
          <p>{card.summary}</p>
          <span className="card-link" aria-hidden="true"><Glyph kind="arrow" size={19} /></span>
        </a>)}
      </div>
    </section>

    <section id="about" className="section wrap" aria-labelledby="about-title" data-reading-anchor>
      <SectionHeading id="about-title" number="01" title={L('职业经历', 'Career')} />
      <div className="career-grid">
        {data.career.map(item => <a className="career-card" href={`#experience/${item.id}`} key={item.id} onClick={event => navigate(`#experience/${item.id}`, event)}>
          <p className="card-topline">{item.date}</p>
          <h3 className="card-title">{item.company}</h3>
          <p className="card-role">{item.role}</p>
          <p className="card-description">{item.summary}</p>
          <span className="card-footer">{L('了解经历', 'View experience')} <Glyph kind="arrow" size={17} /></span>
        </a>)}
      </div>
      <Education items={data.profile.education} L={L} />
    </section>

    <section id="projects" className="section wrap" aria-labelledby="projects-title" data-reading-anchor>
      <SectionHeading id="projects-title" number="02" title={L('项目实践', 'Selected projects')} />
      <div className="project-grid">
        {data.projects.map(project => <ProjectCard key={project.id} project={project} skills={data.skills} navigate={navigate} L={L} />)}
      </div>
    </section>

    <section id="strengths" className="section wrap" aria-labelledby="skills-title" data-reading-anchor>
      <SectionHeading id="skills-title" number="03" title={L('能力与方法', 'Capabilities')} />
      <div className="skills-grid">
        {Object.entries(data.skills).map(([id, skill], index) => <SkillCard key={id} id={id} skill={skill} index={index} navigate={navigate} L={L} />)}
      </div>
    </section>

    <section id="contact" className="contact section wrap" aria-labelledby="contact-title" data-reading-anchor>
      <div className="contact-inner">
        <div>
          <p className="eyebrow">04</p>
          <h2 id="contact-title" tabIndex={-1}>{L('联系我', 'Get in touch')}</h2>
          <p>{data.profile.contactText}</p>
        </div>
        <div className="contact-actions">
          <a className="contact-email" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <button type="button" className="copy-button" onClick={onCopyEmail} aria-label={L('复制邮箱地址', 'Copy email address')}><Glyph kind="copy" /></button>
        </div>
      </div>
    </section>
  </>;
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

function ProjectArticle({ id, item, data, navigate, L }) {
  const project = data.projects.find(entry => entry.id === id);
  const sections = [
    ['project-context', L('工作背景', 'Context')],
    ['project-contribution', L('关键工作', 'Contribution')],
    ['project-outputs', L('主要交付', 'Deliverables')],
    ['project-reflection', L('实践思考', 'Reflections')],
    ['project-related', L('相关方法与项目', 'Related methods & projects')],
  ];
  return <div className="detail-layout">
    <article className="article-body">
      <ArticleSection id="project-context" title={sections[0][1]}>
        <h3>{item.problem}</h3><p>{item.problemText}</p>
      </ArticleSection>
      <ArticleSection id="project-contribution" title={sections[1][1]}><ActionList actions={item.actions} /></ArticleSection>
      <ArticleSection id="project-outputs" title={sections[2][1]}>
        <div className="outputs-grid">{item.outputs.map(([title, text]) => <div className="output-card" key={title}><h3>{title}</h3><p>{text}</p></div>)}</div>
      </ArticleSection>
      <ArticleSection id="project-reflection" title={sections[3][1]}>
        <p>{item.lesson}</p>
        <div className="contribution-boundary"><h3>{L('职责与协作', 'Role & collaboration')}</h3><p>{item.boundary}</p></div>
      </ArticleSection>
      <ArticleSection id="project-related" title={sections[4][1]}>
        <h3 className="related-heading">{L('相关方法', 'Related methods')}</h3>
        <div className="related-grid">{project.skills.map((skillId, index) => <SkillCard key={skillId} id={skillId} skill={data.skills[skillId]} index={index} navigate={navigate} L={L} compact />)}</div>
        <h3 className="related-heading">{L('更多项目', 'More projects')}</h3>
        <div className="related-grid">{data.projects.filter(entry => entry.id !== id).slice(0, 2).map(entry => <ProjectCard key={entry.id} project={entry} skills={data.skills} navigate={navigate} L={L} compact />)}</div>
      </ArticleSection>
    </article>
    <Contents items={sections} L={L} />
  </div>;
}

function SkillArticle({ item, data, navigate, L }) {
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
        <div className="related-grid">{item.projects.map(id => <ProjectCard key={id} project={data.projects.find(entry => entry.id === id)} skills={data.skills} navigate={navigate} L={L} compact />)}</div>
      </ArticleSection>
      <ArticleSection id="skill-scope" title={sections[2][1]}><p>{item.boundary}</p></ArticleSection>
    </article>
    <Contents items={sections} L={L} />
  </div>;
}

function CareerArticle({ item, stage, data, navigate, L }) {
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
        <div className="related-grid">{item.relatedProjects.map(id => <ProjectCard key={id} project={data.projects.find(entry => entry.id === id)} skills={data.skills} navigate={navigate} L={L} compact />)}</div>
      </ArticleSection>
    </article>
    <Contents items={sections} L={L} />
  </div>;
}

function DetailPage({ route, data, cases, stages, navigate, goBack, L, onCopyLink }) {
  const project = route.type === 'project';
  const skill = route.type === 'skill';
  const item = project ? cases[route.id] : skill ? data.skills[route.id] : data.career.find(entry => entry.id === route.id);
  const category = project ? L('项目经历', 'Projects') : skill ? L('能力与方法', 'Capabilities') : L('职业经历', 'Experience');
  const fallback = project ? '#projects' : skill ? '#strengths' : '#about';
  const title = project || skill ? item.title : item.company;
  const intro = project || skill ? item.intro : item.summary;
  return <div className="detail-page">
    <div className="detail-wrap wrap">
      <nav className="breadcrumb" aria-label={L('当前位置', 'Breadcrumb')}>
        <a href="#top" onClick={event => navigate('#top', event)}>{L('首页', 'Home')}</a><span aria-hidden="true">/</span>
        <a href={fallback} onClick={event => navigate(fallback, event)}>{category}</a><span aria-hidden="true">/</span>
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
          <a href={fallback} className="back-link" onClick={event => goBack(fallback, event)}><Glyph kind="back" size={17} />{L('返回上一页', 'Back')}</a>
          <button type="button" className="copy-button" onClick={onCopyLink}><Glyph kind="copy" size={17} /><span>{L('复制本页链接', 'Copy page link')}</span></button>
        </div>
      </header>
      {project ? <ProjectArticle id={route.id} item={item} data={data} navigate={navigate} L={L} /> : skill ? <SkillArticle item={item} data={data} navigate={navigate} L={L} /> : <CareerArticle item={item} stage={stages[route.id]} data={data} navigate={navigate} L={L} />}
      <div className="detail-nav"><a className="back-link" href={fallback} onClick={event => navigate(fallback, event)}><Glyph kind="back" size={17} />{L('回到', 'Back to ')}{category}</a><a href="#contact" onClick={event => navigate('#contact', event)}>{L('联系我', 'Get in touch')} <Glyph kind="arrow" size={17} /></a></div>
    </div>
  </div>;
}

export default function App() {
  const [language, toggleLanguage] = useLanguage();
  const data = portfolio[language];
  const cases = language === 'zh' ? chineseCases : englishCases;
  const stages = language === 'zh' ? chineseStages : englishStages;
  const L = (zh, en) => language === 'zh' ? zh : en;
  const validIds = { project: data.projects.map(item => item.id), skill: Object.keys(data.skills), career: data.career.map(item => item.id) };
  const { route, navigate, goBack } = usePortfolioNavigation(validIds);
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
    const current = route.type === 'project' ? cases[route.id].title : route.type === 'skill' ? data.skills[route.id].title : route.type === 'career' ? data.career.find(item => item.id === route.id).company : L('个人介绍', 'Profile');
    document.title = `${current} · 77`;
  }, [route.key, language, cases, data]);

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
    ['#about', L('经历', 'Background')], ['#projects', L('项目', 'Work')],
    ['#strengths', L('能力', 'Capabilities')], ['#contact', L('联系', 'Contact')],
  ];
  const headerNavigate = (href, event) => { setMenuOpen(false); navigate(href, event); };
  return <div className={`portfolio language-${language}`} lang={language === 'zh' ? 'zh-CN' : 'en'}>
    <a className="skip-link" href="#main" onClick={event => { event.preventDefault(); const heading = document.querySelector('main h1'); heading?.focus({ preventScroll: true }); heading?.scrollIntoView({ behavior: 'instant', block: 'start' }); }}>{L('跳到正文', 'Skip to content')}</a>
    <header className="site-header" onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setMenuOpen(false); }}>
      <div className="header-inner wrap">
        <a className="brand" href="#top" onClick={event => headerNavigate('#top', event)} aria-label={L('77 个人介绍首页', '77 profile home')}><span className="brand-number">77.</span><span className="brand-caption">{L('个人介绍', 'Profile')}</span></a>
        <nav id="main-navigation" className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label={L('主导航', 'Main navigation')}>
          {links.map(([href, title]) => <a href={href} key={href} onClick={event => headerNavigate(href, event)} aria-current={route.type === 'home' && route.section === href.slice(1) ? 'location' : undefined}>{title}</a>)}
        </nav>
        <div className="header-actions"><LanguageSwitch language={language} onToggle={changeLanguage} /><button type="button" ref={menuRef} className="menu-button" onClick={() => setMenuOpen(open => !open)} aria-label={menuOpen ? L('关闭导航', 'Close navigation') : L('打开导航', 'Open navigation')} aria-expanded={menuOpen} aria-controls="main-navigation"><Glyph kind={menuOpen ? 'close' : 'menu'} /></button></div>
      </div>
    </header>
    <main id="main">
      {route.invalid && <p className="empty-state wrap">{L('页面未找到。请从总览继续浏览。', 'Page not found. Explore the overview below.')}</p>}
      {route.type === 'home' ? <HomePage data={data} navigate={navigate} L={L} onCopyEmail={() => copy(EMAIL, L('邮箱已复制', 'Email copied'), L('请选择邮箱地址后复制', 'Select the email address to copy'))} /> : <DetailPage route={route} data={data} cases={cases} stages={stages} navigate={navigate} goBack={goBack} L={L} onCopyLink={() => copy(window.location.href, L('页面链接已复制', 'Page link copied'), L('请从地址栏复制链接', 'Copy the link from your address bar'))} />}
    </main>
    <footer className="site-footer wrap"><span>77 · {L('个人介绍', 'Profile')}</span><a href="#top" onClick={event => navigate('#top', event)}>{L('回到首页', 'Back to home')} <Glyph kind="arrow" size={16} /></a></footer>
    <div className={status ? 'toast visible' : 'toast'} role="status" aria-live="polite">{status}</div>
  </div>;
}
