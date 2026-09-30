import { useEffect, useRef, useState } from 'react';
import { cases, stages } from './content.js';
import DarkVeil from './components/DarkVeil.jsx';
import Magnetic from './components/Magnetic.jsx';
import usePortfolioMotion from './hooks/usePortfolioMotion.js';

const EMAIL = 'Zysq09@gmail.com';
const asset = filename => `${import.meta.env.BASE_URL}assets/${filename}`;
const projectList = [
  { id: 'ai-ecosystem', title: 'Everyday AI', category: 'DROI / AI ASSISTANT & ECOSYSTEM', image: asset('project-ai-flow-v2.webp'), imageAlt: 'Interwoven silver and cobalt glass ribbons, an original AI ecosystem concept', description: 'Agent experiences, skills and everyday workflows.', tags: ['AI Agents', 'Skill Ecosystem', 'Product Design'] },
  { id: 'energy-research', title: 'From insight to opportunity', category: 'RESEARCH / STRATEGY', image: asset('project-research-optics-v2.webp'), imageAlt: 'Layered optical glass arcs with a cobalt light beam, an original research concept', description: 'Research for product decisions.', tags: ['Strategy', 'Research', 'Requirements'] },
  { id: 'hardware-research', title: 'Inside real workflows', category: 'INDUSTRY / HARDWARE', image: asset('project-hardware-exploded-v2.webp'), imageAlt: 'Exploded silver hardware module with a cobalt core, an original hardware concept', description: 'People, roles and real workflows.', tags: ['Industry', 'Hardware', 'Validation'] },
  { id: 'product-business', title: 'From usage to value', category: 'DROI / PRODUCT GROWTH', image: asset('project-growth-platform-v2.webp'), imageAlt: 'Ascending silver and glass platforms with a blue path, an original product growth concept', description: 'Insights, monetization and delivery.', tags: ['Analytics', 'Monetization', 'Delivery'] },
];
const career = [
  { key: 'huawei', date: '2021.06 — 2024.04', company: 'HUAWEI', role: 'UX / Research / Strategy' },
  { key: 'hardware', date: '2024.06 — 2025.04', company: 'NINESTAR', role: 'Industry / Smart Hardware' },
  { key: 'current', date: '2025.11 — PRESENT', company: 'DROI', role: 'Product Manager / AI & Growth' },
];
const strengths = [
  { number: '01', title: 'Understand people', en: 'HUMAN INSIGHT', items: ['Interviews & observation', 'Mixed methods', 'Personas & journeys'] },
  { number: '02', title: 'Spot opportunities', en: 'STRATEGIC THINKING', items: ['Markets & competitors', 'Prioritization', 'Positioning & business'] },
  { number: '03', title: 'Ship the product', en: 'PRODUCT EXECUTION', items: ['Flows & requirements', 'Delivery coordination', 'Validation & feedback'] },
  { number: '04', title: 'Build with AI', en: 'AI CONSTRUCTION', items: ['Skills & agents', 'Model access', 'Failures & limits'] },
];
const aboutFocus = [
  { label: '01 / HUMAN', title: 'Research', context: 'Psychology' },
  { label: '02 / PRODUCT', title: 'Strategy', context: 'Business' },
  { label: '03 / AI', title: 'Build', context: 'Product & AI' },
];

function Glyph({ kind, size = 22, ...props }) {
  const paths = {
    plus: <><path d="M12 4v16M4 12h16" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
    copy: <><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" /></>,
    pause: <><path d="M9 5v14M15 5v14" /></>,
    play: <><path d="m8 4 12 8-12 8Z" /></>,
    close: <><path d="m6 6 12 12M6 18 18 6" /></>,
    menu: <><path d="M4 8h16M4 16h16" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[kind]}</svg>;
}

function RevealTitle({ lines, id, className = '' }) {
  return <h2 id={id} className={`display-title ${className}`}>{lines.map(line => <span className="title-mask" key={line}><span className="title-word">{line}</span></span>)}</h2>;
}

function SectionHeading({ number, label, title, lines, id, children }) {
  return <div className="section-heading"><div><p className="eyebrow">{number} / {label}</p><RevealTitle lines={lines} id={id} />{title && <p className="section-subtitle">{title}</p>}</div>{children && <p className="section-description">{children}</p>}</div>;
}

function HeroLine({ text, accent = false }) {
  return <span className={`hero-title-line${accent ? ' accent-line' : ''}`} aria-hidden="true">{[...text].map((char, index) => <span className="hero-char" key={index}>{char === ' ' ? '\u00a0' : char}</span>)}</span>;
}

function Contribution({ html }) {
  const text = html.replace(/<[^>]+>/g, '');
  const match = text.match(/^([^:：]+)[:：]\s*(.*)$/);
  return match ? <><strong>{match[1]}: </strong>{match[2]}</> : text;
}

function CaseDialog({ selected, onClose, onNext }) {
  const ref = useRef(null);
  const item = selected && cases[selected];
  useEffect(() => {
    const dialog = ref.current;
    if (selected) {
      if (!dialog.open) dialog.showModal();
      dialog.scrollTop = 0;
      document.body.style.overflow = 'hidden';
      dialog.querySelector('button').focus({ preventScroll: true });
    } else {
      dialog.close();
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selected]);
  const handleBackdrop = event => {
    if (event.target !== ref.current) return;
    const r = ref.current.getBoundingClientRect();
    if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) onClose();
  };
  return <dialog ref={ref} className="case-dialog" aria-labelledby="case-title" onCancel={event => { event.preventDefault(); onClose(); }} onClick={handleBackdrop}>
    {item && <><div className="dialog-bar"><span>{item.label}</span><button onClick={onClose} aria-label="Close project"><Glyph kind="close" /></button></div><div className="dialog-body"><div className="detail-title"><p className="eyebrow">PROJECT NOTES</p><h2 id="case-title">{item.title}</h2><p>{item.intro}</p><div className="tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><section className="detail-section"><p className="eyebrow">01 / CONTEXT</p><h3>{item.problem}</h3><p>{item.problemText}</p></section><section className="detail-section"><p className="eyebrow">02 / MY CONTRIBUTION</p><h3>What I worked on</h3><ul>{item.actions.map(action => <li key={action}><Contribution html={action} /></li>)}</ul></section><section className="detail-section"><p className="eyebrow">03 / DELIVERABLES</p><div className="deliverables">{item.outputs.map(([title, text]) => <div key={title}><h3>{title}</h3><p>{text}</p></div>)}</div></section><section className="detail-section"><p className="eyebrow">04 / REFLECTION</p><p className="detail-takeaway">{item.lesson}</p></section><aside className="contribution-boundary"><h3>Contribution & collaboration</h3><p>{item.boundary}</p></aside><div className="dialog-bottom"><span>More work</span><button onClick={onNext}>Next project <Glyph kind="plus" size={18} /></button></div></div></>}
  </dialog>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [stage, setStage] = useState('current');
  const [selectedCase, setSelectedCase] = useState(null);
  const [copyStatus, setCopyStatus] = useState('');
  const [videoPaused, setVideoPaused] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef(null);
  const menuButtonRef = useRef(null);
  const caseTrigger = useRef(null);
  const copyTimer = useRef(null);
  const rootRef = useRef(null);
  usePortfolioMotion(rootRef);
  const activeStageKey = stages[stage] ? stage : 'huawei';
  const activeStage = stages[activeStageKey];
  useEffect(() => {
    const hash = window.location.hash;
    if (!['#about', '#projects', '#strengths', '#contact'].includes(hash)) return;
    const frame = requestAnimationFrame(() => rootRef.current?.querySelector(hash)?.scrollIntoView({ behavior: 'instant', block: 'start' }));
    return () => cancelAnimationFrame(frame);
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const closeMenu = event => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', closeMenu);
    return () => document.removeEventListener('keydown', closeMenu);
  }, [menuOpen]);
  useEffect(() => {
    if (videoPaused) videoRef.current?.pause();
    else videoRef.current?.play().catch(() => setVideoPaused(true));
  }, [videoPaused]);
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = event => { if (event.matches) setVideoPaused(true); };
    reducedMotion.addEventListener('change', update);
    return () => reducedMotion.removeEventListener('change', update);
  }, []);
  useEffect(() => () => clearTimeout(copyTimer.current), []);
  useEffect(() => {
    const video = videoRef.current;
    let inView = true;
    const sync = () => {
      if (!inView || document.hidden || videoPaused) video?.pause();
      else video?.play().catch(() => setVideoPaused(true));
    };
    const observer = new IntersectionObserver(entries => { inView = entries[0].isIntersecting; sync(); }, { threshold: 0 });
    observer.observe(video);
    document.addEventListener('visibilitychange', sync);
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', sync); };
  }, [videoPaused]);
  async function copyEmail() {
    try { await navigator.clipboard.writeText(EMAIL); setCopyStatus('Email copied'); }
    catch { setCopyStatus('Select the address to copy'); }
    clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopyStatus(''), 3000);
  }
  function openCase(id, event) { caseTrigger.current = event.currentTarget; setSelectedCase(id); }
  function closeCase() { setSelectedCase(null); requestAnimationFrame(() => caseTrigger.current?.focus({ preventScroll: true })); }
  const nav = [{ id: 'about', text: 'About' }, { id: 'projects', text: 'Work' }, { id: 'strengths', text: 'Approach' }];
  return <div className="portfolio" ref={rootRef}>
    <div className="opening" aria-hidden="true"><div className="opening-panels"><span className="opening-panel" /><span className="opening-panel" /><span className="opening-panel" /></div><div className="opening-mark-mask"><span className="opening-mark">77<span>.</span></span></div></div>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><div className="wrap header-inner"><a href="#top" className="brand" aria-label="Digital77 home"><span className="brand-number">77<span>.</span></span><span className="brand-caption">DIGITAL SELF<br />WORK & CREATION</span></a><nav id="main-navigation" aria-label="Main navigation" className={menuOpen ? 'main-nav open' : 'main-nav'}>{nav.map(link => <a key={link.id} href={`#${link.id}`} onClick={() => setMenuOpen(false)}>{link.text}</a>)}</nav><Magnetic disabled><a className="header-contact" href="#contact">LET’S TALK <Glyph kind="plus" size={16} /></a></Magnetic><button ref={menuButtonRef} className="menu-button" aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen}><Glyph kind={menuOpen ? 'close' : 'menu'} /></button></div></header>
    <main id="main">
      <section id="top" className="hero" aria-labelledby="hero-title">
        <div className="hero-media" aria-hidden="true"><video ref={videoRef} className={videoReady ? 'ready' : ''} autoPlay={!videoPaused} muted loop playsInline poster={asset('perspective.png')} preload="auto" onLoadedData={() => setVideoReady(true)} onError={() => setVideoPaused(true)}><source src={asset('hero-loop-smooth-v2.mp4')} type="video/mp4" /></video></div><div className="hero-shade" />
        <div className="wrap hero-content"><div className="hero-heading"><p className="eyebrow"><span className="status-dot" />77 / PRODUCT MANAGER · AI BUILDER</p><h1 id="hero-title" aria-label="Product Mind. AI Builder."><HeroLine text="PRODUCT MIND." /><HeroLine text="AI BUILDER." accent /></h1><div className="hero-copy"><span className="copy-rule" /><p>From human insight to product and AI.</p></div><Magnetic disabled><a className="hero-link" href="#projects">Explore the work <span>04 PROJECTS</span></a></Magnetic></div><div className="hero-bottom"><span>HUMAN · PRODUCT · AI</span><span className="hero-scroll">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></span><button className="video-control" onClick={() => setVideoPaused(!videoPaused)} aria-label={videoPaused ? 'Play background video' : 'Pause background video'}><Glyph kind={videoPaused ? 'play' : 'pause'} size={16} /><span>{videoPaused ? 'PLAY' : 'PAUSE'}</span></button></div></div>
      </section>

      <section id="about" className="about section wrap" aria-labelledby="about-title">
        <SectionHeading number="01" label="ABOUT & EXPERIENCE" id="about-title" lines={['ABOUT', 'THE BUILDER.']} />
        <div className="about-layout"><div className="identity-panel"><div className="identity-top"><span>MEET THE BUILDER</span><span>77 / CN</span></div><div className="identity-monogram" role="img" aria-label="77 typographic portrait">77<span>.</span></div><div className="identity-bottom"><p>Product Manager<br />AI Builder</p><span>HUMAN × PRODUCT × AI</span></div></div><div className="about-content"><div className="person-line"><div className="avatar" role="img" aria-label="77 typographic portrait">77</div><div><h3>I’m 77.</h3><p>Product Manager / AI Builder</p></div></div><dl className="about-focus" aria-label="Background and focus">{aboutFocus.map(item => <div className="focus-block" key={item.title}><dt><span className="focus-label">{item.label}</span>{item.title}</dt><dd>{item.context}</dd></div>)}</dl><a className="about-email" href={`mailto:${EMAIL}`}><Glyph kind="mail" size={19} />{EMAIL}</a><div className="profile-data"><div><strong>2021<span>—</span></strong><p>Career start</p></div><div><strong>04</strong><p>Selected projects</p></div><div><strong>02</strong><p>Fields of study</p></div></div></div></div>
        <div className="experience-layout"><div className="experience-list" role="tablist" aria-label="Career stages" aria-orientation="vertical">{career.map((item, index) => <button key={item.key} id={`stage-tab-${item.key}`} role="tab" aria-controls="experience-detail" aria-selected={activeStageKey === item.key} tabIndex={activeStageKey === item.key ? 0 : -1} onClick={() => setStage(item.key)} onKeyDown={event => { const keys = ['ArrowDown', 'ArrowUp', 'Home', 'End']; if (!keys.includes(event.key)) return; event.preventDefault(); const next = event.key === 'Home' ? 0 : event.key === 'End' ? career.length - 1 : (index + (event.key === 'ArrowDown' ? 1 : -1) + career.length) % career.length; setStage(career[next].key); document.getElementById(`stage-tab-${career[next].key}`).focus(); }}><span className="experience-index">0{index + 1}</span><span className="experience-company">{item.company}<small>{item.role}</small></span><span className="experience-date">{item.date}</span><Glyph kind="plus" size={17} /></button>)}</div><div className="experience-detail" id="experience-detail" role="tabpanel" aria-labelledby={`stage-tab-${activeStageKey}`} tabIndex={0}><p className="eyebrow">{activeStage.label}</p><h3>{activeStage.title}</h3><p>{activeStage.description}</p><ul>{activeStage.actions.map(action => <li key={action}>{action}</li>)}</ul><div className="experience-tags" aria-label="Focus">{activeStage.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{activeStage.metrics && <dl className="experience-metrics" aria-label="Work scope">{activeStage.metrics.map(metric => <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}</dl>}</div></div>
      </section>

      <section id="projects" className="projects section wrap" aria-labelledby="projects-title"><SectionHeading number="02" label="SELECTED PROJECTS" id="projects-title" lines={['SELECTED', 'WORK.']} /><div className="project-grid">{projectList.map((project, index) => <article className={`project-card project-card-${index + 1}`} key={project.id}><button className={`project-image${index < 2 ? ' glare-hover' : ''}`} onClick={event => openCase(project.id, event)} aria-label={`View project: ${project.title}`}><span className="project-parallax"><img className="project-photo" src={project.image} alt={project.imageAlt} loading="lazy" width="1672" height="941" /></span><div className="project-image-overlay"><span className="project-image-number">0{index + 1}</span><span className="concept-label">CONCEPT VISUAL</span><span className="project-open"><Glyph kind="plus" size={27} /></span></div></button><div className="project-info"><div><p className="eyebrow">{project.category}</p><h3><button onClick={event => openCase(project.id, event)}>{project.title}</button></h3><p className="project-description">{project.description}</p></div><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div></section>

      <section id="strengths" className="strengths section" aria-labelledby="strengths-title"><div className="wrap"><SectionHeading number="03" label="MY STRENGTHS" id="strengths-title" lines={['HOW I', 'WORK.']} /><div className="strength-grid">{strengths.map(item => <article className="strength-card" key={item.number}><div className="strength-top"><span>{item.number}</span><Glyph kind="plus" size={19} /></div><p className="eyebrow">{item.en}</p><h3>{item.title}</h3><ul>{item.items.map(text => <li key={text}>{text}</li>)}</ul></article>)}</div><div className="education-line"><span>EDUCATION / FOUNDATION</span><p>Bachelor’s · Psychology <small>WNU · 2016—2020</small></p><p>Master’s · Business Administration <small>YBU · 2023—2025</small></p></div></div></section>

      <section id="contact" className="contact-section" aria-labelledby="contact-title"><div className="contact-veil" aria-hidden="true"><DarkVeil speed={.22} resolutionScale={.65} paused={videoPaused} /></div><div className="contact-shade" /><div className="wrap contact-inner"><p className="eyebrow">04 / LET'S MAKE SOMETHING REAL</p><RevealTitle id="contact-title" lines={["LET'S BUILD.", "WHAT'S NEXT?"]} /><p className="contact-description">A product or AI idea? Let’s talk.</p><div className="contact-actions"><a href={`mailto:${EMAIL}`} className="contact-email">{EMAIL}</a><button className="copy-email" onClick={copyEmail} aria-label="Copy email address"><Glyph kind="copy" size={21} /></button></div><Magnetic className="contact-cta"><a className="mail-button" href={`mailto:${EMAIL}?subject=${encodeURIComponent('Hello 77 | Product & AI')}`}><Glyph kind="mail" size={19} />Write to me</a></Magnetic><div className="contact-bottom"><a className="brand-number" href="#top" aria-label="Back to top">77<span>.</span></a><span>PRODUCT MANAGER / AI BUILDER</span><p>Always learning. Always building.</p><button className="video-control" onClick={() => setVideoPaused(!videoPaused)} aria-label={videoPaused ? 'Play motion' : 'Pause motion'}><Glyph kind={videoPaused ? 'play' : 'pause'} size={14} /><span>{videoPaused ? 'PLAY' : 'PAUSE'}</span></button><a href="#top">Back to top</a></div></div></section>
    </main>
    <CaseDialog selected={selectedCase} onClose={closeCase} onNext={() => { const index = projectList.findIndex(project => project.id === selectedCase); setSelectedCase(projectList[(index + 1) % projectList.length].id); }} />
    <div role="status" className={copyStatus ? 'toast visible' : 'toast'} aria-live="polite">{copyStatus}</div>
  </div>;
}
