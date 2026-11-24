import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowRight, ArrowLeft, List, X, Scan, Stack, Intersect, GitBranch } from '@phosphor-icons/react';
import { portfolio } from './portfolio.js';
import { cases as zhCases, stages as zhStages } from './content.zh.js';
import { cases as enCases, stages as enStages } from './content.js';
import { projectProducts } from './project-reading.js';
import { useLanguage } from './i18n.js';
import usePortfolioNavigation from './hooks/usePortfolioNavigation.js';
import useReadingState from './hooks/useReadingState.js';
import { getReadingHref, readProjectFilter, setProjectFilter } from './reading-state.js';
import { routeHref } from './routes.js';
import { asset } from './assets.js';
import { ProjectDetail, SkillDetail, CareerDetail } from './DetailPages.jsx';
import IndexPage from './IndexPage.jsx';
import { GlowCard, SectionHeading as SystemHeading, ContactSection, Keywords } from './components/PortfolioSystem.jsx';

const EMAIL = 'Zysq09@gmail.com';
const PRODUCT_PATH = '/products/droiclaw/';
const productIds = projectProducts[0].projects;
const iconProps = { size: 20, weight: 'regular', 'aria-hidden': true };
const skillKeywords = {
  research: { zh: ['行为与场景', '定量与定性', '人因评估'], en: ['Behavior & context', 'Mixed methods', 'Human factors'] },
  planning: { zh: ['需求定义', '业务规则', '原型与验收'], en: ['Requirements', 'Business rules', 'Prototyping & acceptance'] },
  ai: { zh: ['任务交互', '用户控制', '技能治理'], en: ['Task interaction', 'User control', 'Skill governance'] },
  'project-management': { zh: ['阶段衔接', '跨团队协作', '版本交付'], en: ['Phased delivery', 'Team coordination', 'Release management'] },
};
const skillIcons = { research: Scan, planning: Stack, ai: Intersect, 'project-management': GitBranch };
const projectAppearance = {
  droiclaw: { image: 'project-ai-tasks-v3.webp', tone: 'sage', word: 'DroiClaw', code: 'DROI / AI ASSISTANT' },
  'energy-product-planning': { image: 'project-charging-solar-v3.webp', tone: 'sand', word: 'Energy', code: 'HW / DIGITAL ENERGY' },
  'hardware-human-factors': { image: 'project-printer-human-factors-v3.webp', tone: 'stone', word: 'Human factors', code: 'NINESTAR / HARDWARE' },
};

function Keyline({ children }) { return <span className="keyline">{children}</span>; }
function SectionHeading({ number, english, title, link, linkLabel }) {
  return <header className="section-heading"><div className="section-name"><span className="section-index">{number}</span><span className="section-english" lang="en">{english}</span></div><div className="section-heading-main"><h2>{title}</h2>{link && <a className="plain-link" href={link}>{linkLabel}<ArrowUpRight {...iconProps} /></a>}</div></header>;
}

function Header({ home, L, language, onLanguage, route }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => window.scrollY > 24);
  const [, refreshTargets] = useState(0);
  const menu = useRef(null);
  const navigation = useRef(null);
  const currentArea = ['project', 'product', 'projects'].includes(route.type) ? 'projects' :
    ['skill', 'capabilities'].includes(route.type) ? 'capabilities' : ['career', 'experience'].includes(route.type) ? 'experience' : route.type === 'contact' ? 'contact' : null;
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  useEffect(() => {
    const update = () => refreshTargets(value => value + 1);
    const desktop = window.matchMedia('(min-width: 761px)');
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    window.addEventListener('portfolio:reading-change', update);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      window.removeEventListener('portfolio:reading-change', update);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, []);
  useEffect(() => {
    if (!open) return;
    const focusFrame = requestAnimationFrame(() => navigation.current?.querySelector('a')?.focus());
    const close = event => { if (event.key === 'Escape') { setOpen(false); menu.current?.focus(); } };
    const outside = event => { if (!event.target.closest('.site-header')) setOpen(false); };
    document.addEventListener('keydown', close);
    document.addEventListener('pointerdown', outside);
    return () => { cancelAnimationFrame(focusFrame); document.removeEventListener('keydown', close); document.removeEventListener('pointerdown', outside); };
  }, [open]);
  return <header className={`site-header${home ? ' on-hero' : ''}${scrolled ? ' is-scrolled' : ''}${open ? ' menu-is-open' : ''}`} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
    <div className="header-inner wrap">
      <a className="brand" href={routeHref('/')} aria-label={L('77 首页', '77 home')}><span>77.</span><span className="brand-role">{L('产品经理', 'Product Manager')}</span></a>
      <nav id="main-navigation" ref={navigation} className={`main-nav${open ? ' is-open' : ''}`} aria-label={L('主导航', 'Main navigation')} onClick={() => setOpen(false)}>
        <a href={getReadingHref('/experience/')} aria-current={currentArea === 'experience' ? 'page' : undefined}>{L('个人经历', 'Background')}</a><a href={getReadingHref('/projects/')} aria-current={currentArea === 'projects' ? 'page' : undefined}>{L('项目实践', 'Projects')}</a><a href={getReadingHref('/capabilities/')} aria-current={currentArea === 'capabilities' ? 'page' : undefined}>{L('能力与方法', 'Expertise')}</a><a className="mobile-contact" href={routeHref('/contact/')} aria-current={currentArea === 'contact' ? 'page' : undefined}>{L('联系我', 'Contact')}</a>
      </nav>
      <div className="header-actions"><button className="language-switch" onClick={onLanguage} aria-label={language === 'zh' ? '切换为英文' : 'Switch to Chinese'}>{language === 'zh' ? 'EN' : '中文'}</button><a className="header-contact" href={routeHref('/contact/')} aria-current={currentArea === 'contact' ? 'page' : undefined}>{L('联系我', 'Contact')}<ArrowUpRight {...iconProps} /></a><button className="menu-button" ref={menu} onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-navigation" aria-label={open ? L('关闭导航', 'Close navigation') : L('打开导航', 'Open navigation')}>{open ? <X {...iconProps} /> : <List {...iconProps} />}</button></div>
    </div>
  </header>;
}

function Artwork({ id, image, L, compact = false }) {
  const art = projectAppearance[id] || { image, tone: id.includes('energy') || id.includes('station') ? 'sand' : 'stone', word: '', code: 'SELECTED WORK' };
  return <div className={`project-art${compact ? ' compact-art' : ''}`} data-art={art.tone}><div className="art-topline"><span>{art.code}</span><span>77 / PORTFOLIO</span></div>{art.word && <span className="art-word" aria-hidden="true">{art.word}</span>}<img src={asset(art.image || image)} alt="" width="900" height="600" loading="lazy" /><span className="art-caption">{L('项目示意', 'Project illustration')}</span>{id === 'droiclaw' && <div className="art-annotation"><strong>29 <i>/</i> 38</strong><span>{L('卡片模板 / 视觉变体', 'Card templates / visual variants')}</span></div>}</div>;
}

function ProjectTile({ id, data, cases, L, featured = false }) {
  const product = id === 'droiclaw';
  const item = product ? null : data.projects.find(p => p.id === id);
  const title = product ? L('DroiClaw AI 助手', 'DroiClaw AI assistant') : item.title;
  const keywords = product ? L(['任务体验', '技能生态', '订阅权益'], ['Task experience', 'Skill ecosystem', 'Subscription']) : cases[id].tags.slice(0, 3);
  return <GlowCard className="system-card project-tile-glow"><a className={`project-tile${featured ? ' project-tile-featured' : ''}`} href={routeHref(product ? PRODUCT_PATH : `/projects/${id}/`)}>
    <Artwork id={id} image={item?.image} L={L} compact={!featured} />
    <div className="project-tile-caption"><div><p className="project-company">{product ? 'DROI' : item.company}<span>{product ? L('产品', 'Product') : L('项目', 'Project')}</span></p><h3>{title}</h3><div className="keywords">{keywords.map(word => <Keyline key={word}>{word}</Keyline>)}</div></div><span className="project-open" aria-hidden="true"><ArrowUpRight size={27} /></span></div>
  </a></GlowCard>;
}

function CapabilityCard({ id, skill, index, language }) {
  const Icon = skillIcons[id];
  return <GlowCard className="system-card capability-glow"><a className="capability-card" href={routeHref(`/capabilities/${id}/`)}><div className="capability-top"><span>0{index + 1}</span><Icon size={35} strokeWidth={1} aria-hidden="true" /></div><h3>{skill.title}</h3><div className="capability-keywords">{skillKeywords[id][language].map(word => <span key={word}>{word}</span>)}</div><span className="capability-bottom">{language === 'zh' ? '方法与实践' : 'Approach & practice'}<ArrowUpRight {...iconProps} /></span></a></GlowCard>;
}

function Expertise({ data, L, language, standalone = false }) {
  return <section id="expertise" className={`${standalone ? '' : 'section '}expertise-section wrap`}>{!standalone && <SectionHeading number="03" english="Expertise" title={L('个人优势', 'Expertise')} link={routeHref('/capabilities/')} linkLabel={L('能力与方法', 'Explore expertise')} />}<div className="capability-grid">{Object.entries(data.skills).map(([id, skill], index) => <CapabilityCard key={id} id={id} skill={skill} index={index} language={language} />)}</div></section>;
}

function Contact({ L, copyEmail, status }) {
  return <div className="contact-standalone"><ContactSection L={L} copyEmail={copyEmail} status={status} headingAs="h1" standalone /></div>;
}

function PageHeading({ eyebrow, title, keywords, back, backLabel }) {
  return <header className="directory-heading wrap"><a className="plain-link breadcrumb-back" href={back || routeHref('/')}><ArrowLeft {...iconProps} />{backLabel || '77'}</a><p className="eyebrow">{eyebrow}</p><h1 tabIndex={-1}>{title}</h1>{keywords && <Keywords items={keywords} />}</header>;
}

function ProjectsDirectory({ data, cases, L }) {
  const [filter, setFilter] = useState(readProjectFilter);
  const selectFilter = value => { setFilter(value); setProjectFilter(value); };
  useEffect(() => {
    const syncFilter = () => setFilter(readProjectFilter());
    window.addEventListener('popstate', syncFilter);
    return () => window.removeEventListener('popstate', syncFilter);
  }, []);
  const rows = data.projects.filter(item => !productIds.includes(item.id) && item.id !== 'energy-research');
  const filters = [['all', L('全部', 'All')], ['ai', L('AI 产品与商业化', 'AI products & monetization')], ['research', L('用户研究与产品设计', 'Research & product design')]];
  return <div className="directory-page"><PageHeading eyebrow="WORK INDEX" title={L('项目实践', 'Projects')} keywords={L(['AI 助手', '消费端产品', '能源', '智能硬件'], ['AI assistant', 'Consumer products', 'Energy', 'Hardware'])} /><div className="wrap"><div className="directory-filters" aria-label={L('筛选项目方向', 'Filter project area')}>{filters.map(([id, label]) => <button key={id} onClick={() => selectFilter(id)} aria-pressed={filter === id}>{label}</button>)}</div>{(filter === 'all' || filter === 'ai') && <section className="directory-group" id="droiclaw"><SystemHeading className="directory-group-title" english="01 / AI" title={L('AI 产品与商业化', 'AI products & monetization')} /><div className="directory-grid"><ProjectTile id="droiclaw" data={data} cases={cases} L={L} />{rows.filter(item => item.id === 'product-business').map(item => <ProjectTile key={item.id} id={item.id} data={data} cases={cases} L={L} />)}</div></section>}{(filter === 'all' || filter === 'research') && <section className="directory-group" id="research"><SystemHeading className="directory-group-title" english="02 / RESEARCH" title={L('用户研究与产品设计', 'Research & product design')} /><div className="directory-grid">{rows.filter(item => item.id !== 'product-business').map(item => <ProjectTile key={item.id} id={item.id} data={data} cases={cases} L={L} />)}</div><a className="plain-link supplement-link" href={routeHref('/projects/energy-research/')}>{L('补充阅读 / 能源产品研究概览', 'Further reading / Energy research overview')}<ArrowUpRight {...iconProps} /></a></section>}</div></div>;
}

function ProductOverview({ data, cases, L }) {
  const topics = productIds.map(id => data.projects.find(item => item.id === id));
  const career = data.career.find(entry => entry.relatedProjects.includes(productIds[0]));
  const skills = [...new Set(topics.flatMap(item => item.skills))];
  return <div className="directory-page product-overview">
    <PageHeading eyebrow="DROI / AI ASSISTANT" title={L('DroiClaw AI 助手', 'DroiClaw AI assistant')} keywords={L(['移动终端', 'AI 任务', '用户控制'], ['Mobile devices', 'AI tasks', 'User control'])} back={getReadingHref('/projects/')} backLabel={L('全部项目', 'All projects')} />
    <div className="wrap">
      <nav className="detail-context" aria-label={L('产品关联', 'Product connections')}>
        {career && <a href={routeHref(`/experience/${career.id}/`)}><span><small>{L('所属任职经历', 'Career background')}</small><strong>{career.company} · {career.role}</strong></span><ArrowUpRight size={17} aria-hidden="true" /></a>}
        {skills.map(id => <a key={id} href={routeHref(`/capabilities/${id}/`)}><span><small>{L('相关能力', 'Related capability')}</small><strong>{data.skills[id].title}</strong></span><ArrowUpRight size={17} aria-hidden="true" /></a>)}
      </nav>
      <Artwork id="droiclaw" L={L} />
      <div className="product-topics-heading"><span className="eyebrow">{L('同一产品 · 四个工作专题', 'One product · Four areas of work')}</span><h2>{L('DroiClaw 的四项工作', 'Four areas of work on DroiClaw')}</h2></div>
      <div className="product-topics">{topics.map((item, index) => <GlowCard className="system-card topic-glow" key={item.id}><a href={routeHref(`/projects/${item.id}/`)}><span className="topic-number">0{index + 1}</span><div><h3>{item.title}</h3><div className="keywords">{cases[item.id].tags.slice(0, 3).map(word => <Keyline key={word}>{word}</Keyline>)}</div></div><ArrowUpRight size={27} aria-hidden="true" /></a></GlowCard>)}</div>
      <nav className="reading-continuation" aria-label={L('继续了解', 'Keep exploring')}><a className="continuation-primary" href={getReadingHref('/projects/')}>{L('返回项目列表', 'Back to projects')}</a>{career && <a className="continuation-secondary" href={routeHref(`/experience/${career.id}/`)}>{L('了解 DROI 任职经历', 'Explore my work at DROI')}</a>}</nav>
    </div>
  </div>;
}

function ExperienceDirectory({ data, L }) {
  return <div className="directory-page"><PageHeading eyebrow="BACKGROUND" title={L('个人经历', 'Background')} keywords={L(['心理学', '工商管理', '产品经理'], ['Psychology', 'Business', 'Product management'])} /><div className="wrap experience-directory">{data.career.map((item, index) => <a className="experience-row" key={item.id} href={routeHref(`/experience/${item.id}/`)}><span className="experience-number">0{index + 1}</span><div><span className="eyebrow">{item.date}</span><h2>{item.company}</h2></div><h3>{item.role}</h3><ArrowUpRight size={26} aria-hidden="true" /></a>)}<div className="education-block"><h2>{L('教育背景', 'Education')}</h2>{data.profile.education.map(item => <div key={item.school}><span>{item.date}</span><h3>{item.degree} / {item.field}</h3><p>{item.school}</p></div>)}</div></div></div>;
}

function CompactFooter({ L }) { return <footer className="inner-footer wrap"><a className="footer-brand" href={routeHref('/')}>77.</a><a className="version-link" href={`${import.meta.env.BASE_URL}v1/`}>V1<ArrowUpRight size={16} aria-hidden="true" /></a><a className="plain-link" href={routeHref('/contact/')}>{L('产品、研究与合作', 'Product, research & collaboration')}<ArrowUpRight {...iconProps} /></a></footer>; }

export default function App() {
  const [language, toggleLanguage] = useLanguage();
  const { route } = usePortfolioNavigation();
  useReadingState({ route, language });
  const [status, setStatus] = useState('');
  const [toast, setToast] = useState('');
  const timer = useRef(null);
  const data = portfolio[language];
  const cases = language === 'zh' ? zhCases : enCases;
  const stages = language === 'zh' ? zhStages : enStages;
  const L = (zh, en) => language === 'zh' ? zh : en;
  const home = route.type === 'home';
  useEffect(() => {
    document.title = `${home ? L('产品经理', 'Product Manager') : route.type === 'contact' ? L('联系我', 'Contact') : document.querySelector('main h1')?.textContent || '77'} · 77`;
  }, [route.key, language]);
  useEffect(() => {
    if (route.redirectTo) return;
    const follow = () => {
      let id; try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
      const aliases = { 'project-progress': 'project-contribution', 'project-reflection': 'project-outputs' };
      const target = document.getElementById(aliases[id] || id);
      if (target && !target.hidden) { target.scrollIntoView({ block: 'start', behavior: 'instant' }); target.focus({ preventScroll: true }); }
    };
    follow(); window.addEventListener('hashchange', follow);
    return () => window.removeEventListener('hashchange', follow);
  }, [route.key]);
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copyEmail() {
    try { await navigator.clipboard.writeText(EMAIL); setStatus('email'); setToast(L('邮箱地址已复制', 'Email address copied')); }
    catch { setToast(L('请选择邮箱地址后复制', 'Select and copy the email address')); }
    clearTimeout(timer.current); timer.current = setTimeout(() => { setToast(''); setStatus(''); }, 3000);
  }
  const shared = { route, data, cases, stages, L };
  let page;
  if (home) page = <IndexPage data={data} L={L} language={language} copyEmail={copyEmail} status={status} />;
  else if (route.type === 'projects') page = <ProjectsDirectory {...shared} />;
  else if (route.type === 'product') page = <ProductOverview {...shared} />;
  else if (route.type === 'experience') page = <ExperienceDirectory {...shared} />;
  else if (route.type === 'capabilities') page = <div className="directory-page"><PageHeading eyebrow="EXPERTISE" title={L('能力与方法', 'Expertise')} keywords={L(['研究', '规划', 'AI 应用', '项目管理'], ['Research', 'Planning', 'AI applications', 'Project management'])} /><Expertise data={data} L={L} language={language} standalone /></div>;
  else if (route.type === 'project') page = <ProjectDetail {...shared} />;
  else if (route.type === 'skill') page = <SkillDetail {...shared} />;
  else if (route.type === 'career') page = <CareerDetail {...shared} />;
  else if (route.type === 'contact') page = <Contact L={L} copyEmail={copyEmail} status={status} full />;
  else page = <div className="not-found wrap"><span className="eyebrow">404</span><h1>{L('页面未找到', 'Page not found')}</h1><a className="plain-link" href={routeHref('/')}>{L('回到首页', 'Back home')}<ArrowRight {...iconProps} /></a></div>;
  return <div className={`portfolio language-${language}${home ? ' home-page' : ''}`} id="top"><a className="skip-link" href="#main">{L('跳到正文', 'Skip to content')}</a><Header home={home} route={route} L={L} language={language} onLanguage={toggleLanguage} /><main id="main" tabIndex={-1}>{page}</main>{!home && route.type !== 'contact' && <CompactFooter L={L} />}<div role="status" aria-live="polite" className={`toast${toast ? ' visible' : ''}`}>{toast}</div></div>;
}
