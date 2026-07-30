import { useEffect, useRef } from 'react';

interface CursorParallaxOptions {
  strength?: number; // Max offset v pixelech (default: 20)
  smoothness?: number; // Rychlost interpolace (default: 0.1)
}

export function useCursorParallax<T extends HTMLElement>(
  options: CursorParallaxOptions = {}
) {
  const elementRef = useRef<T>(null);
  const { strength = 20, smoothness = 0.1 } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Vypočítej offset relativně k centru prvku
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      // Normalizuj na -1 až 1 a vynásob strength
      targetX = (deltaX / (rect.width / 2)) * strength;
      targetY = (deltaY / (rect.height / 2)) * strength;
    };

    const animate = () => {
      // Smooth interpolace (lerp)
      currentX += (targetX - currentX) * smoothness;
      currentY += (targetY - currentY) * smoothness;

      element.style.transform = `translate(${currentX}px, ${currentY}px)`;
      
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [strength, smoothness]);

  return elementRef;
}
