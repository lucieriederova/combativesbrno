import { ReactNode } from 'react';
import { useParallaxScroll } from '../hooks/useParallaxScroll';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: 'background' | 'mid' | 'foreground';
  className?: string;
}

export function ParallaxSection({ children, speed = 'mid', className = '' }: ParallaxSectionProps) {
  const ref = useParallaxScroll<HTMLDivElement>(speed);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
