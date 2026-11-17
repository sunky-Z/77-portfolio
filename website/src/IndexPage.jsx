import { useEffect, useRef } from 'react';
import { ArrowUpRight, ArrowRight, Envelope, Copy, Check, Scan, Stack, GitBranch, CheckSquare, User } from '@phosphor-icons/react';
import { routeHref } from './routes.js';
import { asset } from './assets.js';
import heroVideo from '../assets/hero-motion.mp4';
import heroPoster from '../assets/hero-motion-poster.webp';
import heroPortrait from '../assets/portrait-yushunqi-v3-low-key.webp';
import { GlowCard, SectionHeading as PosterHeading, ContactSection as PosterContact } from './components/PortfolioSystem.jsx';

const EMAIL = 'Zysq09@gmail.com';
const Arrow = () => <ArrowUpRight size={18} aria-hidden="true" />;

function PosterHero({ L }) {
  const video = useRef(null);
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => {
      if (motion.matches || navigator.connection?.saveData) video.current?.pause();
      else video.current?.play().catch(() => {});
    };
    sync(); motion.addEventListener('change', sync);
    return () => motion.removeEventListener('change', sync);
  }, []);
  return <section className="poster-hero wrap" aria-labelledby="hero-title">
    <p className="poster-backdrop" aria-hidden="true" lang="en"><span>AI NATIVE</span></p>
    <div className="poster-motion" aria-hidden="true"><video ref={video} src={heroVideo} poster={heroPoster} muted loop playsInline preload="metadata" /></div>
    <div className="poster-intro"><p className="poster-hello" lang="en">Research to product.</p><h1 className="poster-identity" id="hero-title" tabIndex={-1} lang="en"><span>YUSHUNQI</span><span>SUNKY-Z</span></h1><p className="poster-role">{L('用户研究 / 产品规划 / 商业化', 'RESEARCH / PRODUCT STRATEGY / MONETIZATION')}</p><p className="poster-bio">{L('心理学本科，工商管理硕士', 'Bachelor’s in psychology · MBA')}<br />{L('职业经历涵盖能源、智能硬件与 AI 产品', 'Experience across energy, hardware and AI products')}</p><a className="poster-primary" href="#selected-work">{L('浏览项目', 'EXPLORE WORK')}<Arrow /></a></div>
    <figure className="poster-portrait"><img src={heroPortrait} alt={L('YUSHUNQI / SUNKY-Z 人像', 'Portrait of YUSHUNQI / SUNKY-Z')} width="1122" height="1402" fetchPriority="high" /></figure>
    <dl className="poster-stats"><div><dt>29<span>{L('套', '')}</span></dt><dd>{L(<>主动服务<br />卡片模板</>, <>CARD<br />TEMPLATES</>)}</dd></div><div><dt>38<span>{L('个', '')}</span></dt><dd>{L(<>卡片<br />视觉变体</>, <>VISUAL<br />VARIANTS</>)}</dd></div><div><dt>6<span>{L('条', '')}</span></dt><dd>{L(<>消费端<br />产品线覆盖</>, <>PRODUCT LINES<br />COVERED</>)}</dd></div></dl>
    <div className="poster-hero-foot"><a href="#identity"><span className="poster-cross" aria-hidden="true">+</span>{L('心理学 × 工商管理', 'PSYCHOLOGY × BUSINESS')}</a><span>AI / ENERGY / HARDWARE</span></div>
  </section>;
}

function PosterProjects({ data, language, L }) {
  const entries = [
    { id: 'droiclaw', company: 'DROI', title: L('DroiClaw AI 助手', 'DroiClaw AI assistant'), cover: 'cover-ai-proactive-v3.webp', path: '/products/droiclaw/', keywords: L(['任务体验', '技能生态', '订阅权益'], ['Task experience', 'Skill ecosystem', 'Subscription']) },
    { id: 'energy', ...data.projects.find(p => p.id === 'energy-product-planning'), cover: 'cover-energy-vector-v4.webp', path: '/projects/energy-product-planning/', keywords: L(['人群分层', 'Kano 排序', '智能功能规划'], ['Segmentation', 'Kano prioritization', 'Feature planning']) },
    { id: 'hardware', ...data.projects.find(p => p.id === 'hardware-human-factors'), cover: 'cover-human-factors-detail-v4.webp', path: '/projects/hardware-human-factors/', keywords: L(['A/B 试验', '3D 人因', '形态设计'], ['A/B testing', '3D human factors', 'Product form']) },
  ];
  return <section id="selected-work" className="poster-projects wrap">
    <PosterHeading title={L('精选项目', 'SELECTED PROJECTS')} english={language === 'zh' ? 'SELECTED PROJECTS' : ''} link={routeHref('/projects/')} linkText={L('全部项目', 'VIEW ALL PROJECTS')} />
    <div className="poster-project-grid">{entries.map((entry, index) => <GlowCard key={entry.id} className="poster-project-glow">
      <a className="poster-project" href={routeHref(entry.path)}>
        <div className="poster-project-media" data-project={index}>
          <span>{entry.company} / {String(index + 1).padStart(2, '0')}</span>
          <img src={asset(entry.cover)} alt="" width="1586" height="992" loading="lazy" />
          <small>{L('概念示意', 'CONCEPT VISUAL')}</small>
        </div>
        <div className="poster-project-info"><span className="poster-project-number">0{index + 1}</span><div><h3>{entry.title}</h3><p>{entry.keywords.join(' / ')}</p></div><Arrow /></div>
      </a>
    </GlowCard>)}</div>
  </section>;
}

function Background({ data, L, language }) {
  const tags = [
    ['research', L('用户研究', 'User research')], ['research', L('场景分析', 'Context analysis')],
    ['planning', L('需求定义', 'Requirements')], ['planning', L('业务规则', 'Business rules')],
    ['ai', L('AI 任务', 'AI tasks')], ['ai', L('交互原型', 'Prototyping')],
    ['ai', L('技能治理', 'Skill governance')], ['planning', L('产品验收', 'Acceptance')],
    ['project-management', L('跨团队协作', 'Team coordination')], ['project-management', L('版本交付', 'Releases')],
  ];
  return <section className="poster-background" id="identity" aria-labelledby="poster-background-title"><h2 id="poster-background-title">{L('背景与能力', 'BACKGROUND & SKILLS')}<span>{language === 'zh' ? 'BACKGROUND & SKILLS' : ''}</span></h2><div className="poster-background-section"><h3>{L('教育背景', 'EDUCATION')}</h3>{data.profile.education.map(item => <div className="poster-education" key={item.school}><div><strong>{item.degree} · {item.field}</strong><small>{item.school}</small></div><span>{item.date}</span></div>)}</div><div className="poster-background-section"><h3>{L('职业经历', 'EXPERIENCE')}</h3><div className="poster-career">{data.career.map(item => <a href={routeHref(`/experience/${item.id}/`)} key={item.id}><strong>{item.company}</strong><span>{item.role}</span><ArrowUpRight size={13} aria-hidden="true" /></a>)}</div></div><div className="poster-background-section"><h3>{L('能力关键词', 'SKILLS')}</h3><div className="poster-skill-tags">{tags.map(([id, label]) => <a href={routeHref(`/capabilities/${id}/`)} key={label}>{label}</a>)}</div></div></section>;
}

function WorkingMethod({ L, language }) {
  const steps = [
    [Scan, L('场景研究', 'RESEARCH'), L('识别人群、任务与使用情境', 'People, tasks and contexts'), 'research'],
    [User, L('需求判断', 'DEFINE'), L('明确需求范围与优先级', 'Scope and priorities'), 'planning'],
    [Stack, L('方案设计', 'DESIGN'), L('定义流程、规则与交互原型', 'Flows, rules and prototypes'), 'ai'],
    [GitBranch, L('协同推进', 'COORDINATE'), L('衔接评审、依赖与版本节点', 'Reviews, dependencies and milestones'), 'project-management'],
    [CheckSquare, L('验收交付', 'DELIVER'), L('核对功能、异常与发布结果', 'Acceptance, exceptions and releases'), 'planning'],
  ];
  return <section className="poster-method" id="expertise" aria-labelledby="poster-method-title"><h2 id="poster-method-title">{L('工作方式', 'WORK PROCESS')}<span>{language === 'zh' ? 'WORK PROCESS' : ''}</span></h2><ol>{steps.map(([Icon, title, text, id], index) => <li key={title}><a href={routeHref(`/capabilities/${id}/`)}><span className="method-number">0{index + 1}</span><span className="method-symbol"><Icon size={22} aria-hidden="true" /></span><span className="method-copy"><strong>{title}</strong><span>{text}</span></span><ArrowUpRight size={14} className="method-arrow" aria-hidden="true" /></a></li>)}</ol></section>;
}

function ProjectPerspective({ L }) {
  return <a className="poster-decision" href={routeHref('/capabilities/')}><span className="poster-quote" aria-hidden="true">“</span><p className="decision-label">{L('贯穿项目的共同视角', 'A SHARED PERSPECTIVE')}</p><h2>{L(<>理解行为，<br />回应需求</>, <>Understand behavior.<br />Respond to needs.</>)}</h2><p>{L('研究行为与动机', 'Study behavior and motivation')}<br />{L('设计符合使用情境的产品体验', 'Shape experiences around real contexts')}</p><span className="decision-link">{L('能力与方法', 'CAPABILITIES & APPROACH')}<Arrow /></span></a>;
}

export default function IndexPage({ data, L, language, copyEmail, status }) {
  return <><PosterHero L={L} /><PosterProjects data={data} L={L} language={language} /><div className="poster-practice wrap"><Background data={data} L={L} language={language} /><WorkingMethod L={L} language={language} /><ProjectPerspective L={L} /></div><PosterContact L={L} copyEmail={copyEmail} status={status} /></>;
}
