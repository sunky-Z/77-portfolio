// Inspired by React Bits Magnet. See THIRD_PARTY_NOTICES.md.
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Magnetic({ children, className = '' }) {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
      const outer = outerRef.current;
      const inner = innerRef.current;
      const moveX = gsap.quickTo(inner, 'x', { duration: .45, ease: 'power3.out' });
      const moveY = gsap.quickTo(inner, 'y', { duration: .45, ease: 'power3.out' });
      const move = event => {
        const box = outer.getBoundingClientRect();
        moveX(gsap.utils.clamp(-8, 8, (event.clientX - box.left - box.width / 2) / 14));
        moveY(gsap.utils.clamp(-5, 5, (event.clientY - box.top - box.height / 2) / 14));
      };
      const leave = () => { moveX(0); moveY(0); };
      outer.addEventListener('pointermove', move);
      outer.addEventListener('pointerleave', leave);
      return () => {
        outer.removeEventListener('pointermove', move);
        outer.removeEventListener('pointerleave', leave);
        moveX.tween.kill(); moveY.tween.kill();
        gsap.set(inner, { clearProps: 'transform' });
      };
    });
    return () => media.revert();
  }, []);
  return <span className={`magnetic ${className}`} ref={outerRef}><span className="magnetic-inner" ref={innerRef}>{children}</span></span>;
}
