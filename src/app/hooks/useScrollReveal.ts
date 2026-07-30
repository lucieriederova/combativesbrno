import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  delay?: number;
  duration?: number;
  y?: number; // Slide distance (default: 60)
  opacity?: number; // Starting opacity (default: 0)
}

export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {}
) {
  const elementRef = useRef<T>(null);
  const { delay = 0, duration = 1, y = 60, opacity = 0 } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Nastav počáteční stav
    gsap.set(element, { opacity, y });

    // Animace při scrollování
    const animation = gsap.to(element, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: 'cubic-bezier(0.33, 1, 0.68, 1)',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        end: 'top 20%',
        toggleActions: 'play none none none',
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
  }, [delay, duration, y, opacity]);

  return elementRef;
}
