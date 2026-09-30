import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function usePortfolioMotion(rootRef) {
  const hasOpened = useRef(false);
  useLayoutEffect(() => {
    const root = rootRef.current;
    const context = gsap.context(() => {
      const media = gsap.matchMedia();
      media.add({ animate: '(prefers-reduced-motion: no-preference)', desktop: '(min-width: 901px)' }, ({ conditions }) => {
        if (!conditions.animate) {
          gsap.set('.opening', { autoAlpha: 0 });
          hasOpened.current = true;
          return;
        }
        const mobile = !conditions.desktop;
        const titleChars = root.querySelectorAll('.hero-char');
        if (hasOpened.current) {
          gsap.set('.opening', { autoAlpha: 0 });
        } else {
        gsap.set('.opening', { autoAlpha: 1 });
        gsap.set(titleChars, { yPercent: 125, scaleY: 1.45, rotate: 3, transformOrigin: '50% 100%' });
        gsap.set('.hero-heading > .eyebrow, .hero-copy, .hero-link, .hero-bottom, .site-header', { y: 25, autoAlpha: 0 });
        const opening = gsap.timeline({ defaults: { ease: 'power4.inOut' }, onComplete: () => { hasOpened.current = true; } });
        opening.fromTo('.opening-mark', { yPercent: 115, scaleY: 1.4 }, { yPercent: 0, scaleY: 1, duration: .8 })
          .to('.opening-mark', { yPercent: -115, duration: .65 }, .75)
          .to('.opening-panel', { yPercent: -101, duration: 1.35, stagger: .11 }, .92)
          .set('.opening', { autoAlpha: 0 }, 2.48)
          .to(titleChars, { yPercent: 0, scaleY: 1, rotate: 0, duration: 1.45, stagger: .024, ease: 'expo.out' }, 1.42)
          .to('.hero-heading > .eyebrow', { autoAlpha: 1, y: 0, duration: .9 }, 1.85)
          .to('.hero-copy, .hero-link', { autoAlpha: 1, y: 0, duration: 1.1, stagger: .13 }, 2.08)
          .to('.site-header, .hero-bottom', { autoAlpha: 1, y: 0, duration: 1, stagger: .12 }, 2.3);
        }

        root.querySelectorAll('.section').forEach(section => {
          const words = section.querySelectorAll('.title-word');
          const subtitle = section.querySelector('.section-subtitle');
          const description = section.querySelector('.section-description');
          const timeline = gsap.timeline({ scrollTrigger: { trigger: section, start: 'top 78%', once: true } });
          timeline.from(words, { yPercent: mobile ? 110 : 125, x: mobile ? 0 : -35, rotate: mobile ? 0 : 2, scaleY: 1.28, duration: mobile ? .85 : 1.3, stagger: .1, ease: 'power4.out' });
          const supportingCopy = [subtitle, description].filter(Boolean);
          if (supportingCopy.length) timeline.from(supportingCopy, { y: 24, autoAlpha: 0, duration: .85, stagger: .1 }, .45);
          const groups = section.querySelectorAll('.about-layout, .experience-layout, .strength-grid');
          groups.forEach(group => {
            const panels = group.classList.contains('experience-layout') ? [group] : Array.from(group.children);
            gsap.from(panels, { y: mobile ? 35 : 100, rotate: mobile ? 0 : 1.2, autoAlpha: 0, duration: 1.15, stagger: .13, ease: 'power4.out', scrollTrigger: { trigger: group, start: 'top 87%', once: true } });
          });
          const focus = section.querySelector('.about-focus');
          if (focus) gsap.from(focus.children, { clipPath: 'inset(100% 0% 0% 0%)', y: mobile ? 24 : 48, duration: 1.15, stagger: .14, ease: 'power4.inOut', scrollTrigger: { trigger: focus, start: 'top 84%', once: true } });
        });

        root.querySelectorAll('.project-card').forEach((card, index) => {
          const frame = card.querySelector('.project-image');
          const photo = card.querySelector('.project-photo');
          gsap.timeline({ scrollTrigger: { trigger: card, start: 'top 85%', once: true }, delay: mobile ? 0 : (index % 2) * .15 })
            .from(frame, { clipPath: 'inset(100% 0% 0% 0%)', y: mobile ? 30 : 70, duration: 1.35, ease: 'power4.inOut' })
            .from(photo, { scale: 1.18, duration: 1.6, ease: 'power3.out' }, 0)
            .from(card.querySelector('.project-info'), { y: 32, autoAlpha: 0, duration: .95, ease: 'power3.out' }, .65);
          if (!mobile) gsap.fromTo(card.querySelector('.project-parallax'), { yPercent: -4 }, { yPercent: 4, ease: 'none', scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: 1.4 } });
        });

        const contact = root.querySelector('.contact-section');
        gsap.timeline({ scrollTrigger: { trigger: contact, start: 'top 70%', once: true } })
          .from(contact.querySelectorAll('.title-word'), { yPercent: 115, scaleY: 1.3, duration: 1.4, stagger: .13, ease: 'power4.out' })
          .from(contact.querySelectorAll('.contact-description, .contact-actions, .contact-cta'), { y: 45, autoAlpha: 0, duration: 1.1, stagger: .15, ease: 'power3.out' }, .6);
      });
      const refresh = () => ScrollTrigger.refresh();
      const images = Array.from(root.querySelectorAll('img'));
      images.forEach(img => img.addEventListener('load', refresh));
      document.fonts.ready.then(refresh);
      return () => {
        images.forEach(img => img.removeEventListener('load', refresh));
        media.revert();
      };
    }, root);
    return () => context.revert();
  }, [rootRef]);
}
