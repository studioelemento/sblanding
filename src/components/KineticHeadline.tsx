import React, { useState, useEffect } from 'react';

interface KineticHeadlineProps {
  phrases?: string[];
  intervalMs?: number;
}

const DEFAULT_PHRASES = [
  'dignity',
  'the ride',
  'the pit stop',
  'the delivery experience'
];

export const KineticHeadline: React.FC<KineticHeadlineProps> = ({
  phrases = DEFAULT_PHRASES,
  intervalMs = 2000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Respect accessibility reduced-motion preference (per handoff doc guidelines)
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      return;
    }

    const timer = setInterval(() => {
      setPrevIndex(currentIndex);
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % phrases.length);

      const resetTimer = setTimeout(() => {
        setIsAnimating(false);
      }, 650);

      return () => clearTimeout(resetTimer);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [currentIndex, phrases.length, intervalMs]);

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center select-none px-2 sm:px-4">
      {/* 
        Fully Mobile-Responsive Kinetic Headline:
        - Uses fluid clamp typography: scales dynamically from small phone screens (320px) to ultra-wide displays
        - Line 1: Static "REDEFINING"
        - Line 2: Rotating Word Slot (rock-solid, zero vertical or horizontal layout shifts)
      */}
      <h1 className="font-tagline text-white text-[clamp(1.85rem,6.8vw,5.5rem)] leading-[1.06] tracking-tight uppercase flex flex-col items-center justify-center text-center w-full">
        {/* Line 1: "REDEFINING" */}
        <span 
          className="text-white drop-shadow-lg block px-2 text-[clamp(2.4rem,8.5vw,6.9rem)] leading-none mb-1.5"
          style={{ fontWeight: 850 }}
        >
          Redefining
        </span>

        {/* Line 2: Dynamic Rotating Word Slot (All words share the exact same height and scale) */}
        <span className="relative block overflow-hidden h-[1.28em] w-full text-center px-2">
          {phrases.map((phrase, idx) => {
            const isCurrent = idx === currentIndex;
            const isPrev = idx === prevIndex && isAnimating;

            let transitionClass = 'absolute inset-x-0 top-0 text-center whitespace-nowrap text-brand-accent transition-all duration-650 ease-[cubic-bezier(0.16,1,0.3,1)] px-2';
            
            if (isCurrent) {
              transitionClass += ' translate-y-0 opacity-100';
            } else if (isPrev) {
              transitionClass += ' -translate-y-[120%] opacity-0';
            } else {
              transitionClass += ' translate-y-[120%] opacity-0 pointer-events-none';
            }

            return (
              <span 
                key={phrase} 
                className={`${transitionClass} text-[clamp(1.85rem,6.8vw,5.5rem)]`}
                style={{ 
                  textShadow: '0 0 35px var(--brand-accent-glow)',
                  lineHeight: '1.25'
                }}
              >
                {phrase}
              </span>
            );
          })}
        </span>
      </h1>
    </div>
  );
};
