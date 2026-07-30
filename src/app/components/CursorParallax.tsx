import { ReactNode } from 'react';
import { useCursorParallax } from '../hooks/useCursorParallax';

interface CursorParallaxProps {
  children: ReactNode;
  strength?: number;
  smoothness?: number;
  className?: string;
}

export function CursorParallax({ 
  children, 
  strength = 20, 
  smoothness = 0.1,
  className = '' 
}: CursorParallaxProps) {
  const ref = useCursorParallax<HTMLDivElement>({ strength, smoothness });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
