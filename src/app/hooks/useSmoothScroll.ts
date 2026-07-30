import { useEffect } from 'react';
import Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

export function getLenis() {
  return lenisInstance;
}

export function useSmoothScroll() {
  useEffect(() => {
    // Inicializace Lenis smooth scrollu
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });
    lenisInstance = lenis;

    // RequestAnimationFrame loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Lenis caches the scrollable height on init. Dynamic content (FAQ accordions,
    // images finishing loading) can change document height afterwards without Lenis
    // knowing, which is what causes scrolling to get stuck short of the real bottom.
    const resizeObserver = new ResizeObserver(() => lenis.resize());
    resizeObserver.observe(document.body);

    // Cleanup
    return () => {
      resizeObserver.disconnect();
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
}
