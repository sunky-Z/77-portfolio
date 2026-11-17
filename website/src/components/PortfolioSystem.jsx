import { ArrowRight, ArrowUpRight, Check, Copy, Envelope, Scan, Stack, User } from '@phosphor-icons/react';
import BorderGlow from './BorderGlow.jsx';
import { routeHref } from '../routes.js';

export const EMAIL = 'Zysq09@gmail.com';
export const LinkArrow = () => <ArrowUpRight size={18} aria-hidden="true" />;

export function SectionHeading({ title, english = '', link, linkText, headingId, className = '' }) {
  return <header className={`poster-section-heading${className ? ` ${className}` : ''}`}>
    <h2 id={headingId} tabIndex={headingId ? -1 : undefined}>{title}<span lang="en">{english}</span></h2>
    {link && <a href={link}>{linkText}<ArrowRight size={17} aria-hidden="true" /></a>}
  </header>;
}

export function GlowCard({ children, className = '' }) {
  return <BorderGlow className={className} glowColor="355 92 70"
    colors={['#ef3541', '#f78e83', '#f4ddd2']} backgroundColor="#09090a"
    borderRadius={2} glowRadius={24} glowIntensity={0.8} edgeSensitivity={30}
    coneSpread={22} fillOpacity={0.1} animated={false}>{children}</BorderGlow>;
}

export function ContactLinks({ L, copyEmail, status }) {
  return <div className="poster-contact-links">
    <div><Envelope size={19} aria-hidden="true" /><a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      <button onClick={copyEmail} aria-label={L('复制邮箱地址', 'Copy email address')}>
        {status === 'email' ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
      </button>
    </div>
    <a href={routeHref('/experience/')}><User size={19} aria-hidden="true" /><span>{L('职业经历', 'Career & background')}</span><LinkArrow /></a>
    <a href={routeHref('/projects/')}><Stack size={19} aria-hidden="true" /><span>{L('项目与案例', 'Projects & case studies')}</span><LinkArrow /></a>
    <a href={routeHref('/capabilities/')}><Scan size={19} aria-hidden="true" /><span>{L('能力与方法', 'Capabilities & approach')}</span><LinkArrow /></a>
  </div>;
}

export function ContactSection({ L, copyEmail, status, headingAs: Heading = 'h2', standalone = false }) {
  return <section className="poster-contact wrap" id="contact-section">
    <div className="poster-contact-title">
      <Heading lang="en">LET’S TALK<br />PRODUCT<span aria-hidden="true">+</span></Heading>
      <p>{L('产品、研究与合作', 'Product, research and collaboration')}</p>
      <a className="poster-contact-cta" href={`mailto:${EMAIL}`}><span><ArrowRight size={18} aria-hidden="true" /></span>{L('邮件联系', 'GET IN TOUCH')}</a>
    </div>
    <ContactLinks L={L} copyEmail={copyEmail} status={status} />
    <div className="poster-signoff" aria-hidden="true"><span>RESEARCH.</span><span>PRODUCT.</span><span>DELIVERY.</span><strong>77<span>/</span></strong></div>
    <footer><span>© 2026 YUSHUNQI / {L('产品经理', 'PRODUCT MANAGER')}</span><span>AI / ENERGY / HARDWARE</span>
      <a href={standalone ? routeHref('/') : '#top'}>{standalone ? L('回到首页', 'HOME') : L('回到顶部', 'BACK TO TOP')}<LinkArrow /></a>
    </footer>
  </section>;
}

export function Keywords({ items, className = 'keywords' }) {
  return <div className={className}>{items.map(item => <span className="keyline" key={item}>{item}</span>)}</div>;
}
