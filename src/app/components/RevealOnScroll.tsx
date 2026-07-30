import { ReactNode } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

export function RevealOnScroll({ 
  children, 
  delay = 0, 
  duration = 1, 
  y = 60,
  className = '' 
}: RevealOnScrollProps) {
  const ref = useScrollReveal<HTMLDivElement>({ delay, duration, y });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
