import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type ParallaxSpeed = 'background' | 'mid' | 'foreground';

const speedMultipliers: Record<ParallaxSpeed, number> = {
  background: 0.2,   // 20% rychlosti scrollu
  mid: 0.6,          // 60% rychlosti scrollu
  foreground: 1,     // 100% rychlosti scrollu
};

export function useParallaxScroll<T extends HTMLElement>(
  speed: ParallaxSpeed = 'mid'
) {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const multiplier = speedMultipliers[speed];
    
    // Parallax efekt při scrollování
    const animation = gsap.to(element, {
      y: (i, target) => {
        // Vypočítej offset na základě rychlosti
        const height = target.offsetHeight;
        return -(height * (1 - multiplier));
      },
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true, // Smooth scroll-linked animation
        invalidateOnRefresh: true,
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [speed]);

  return elementRef;
}
