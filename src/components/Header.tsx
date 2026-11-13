import React from 'react';
import { SafeImage } from './SafeImage';

interface HeaderProps {
  logoUrl?: string;
}

export const Header: React.FC<HeaderProps> = ({
  logoUrl = '/assets/logoWithHead.png',
}) => {
  return (
    <header className="w-full relative z-20 pt-4 sm:pt-6 md:pt-7 px-6 sm:px-10 md:px-14 pointer-events-auto select-none transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-center sm:justify-start">
        <a
          href="/"
          className="inline-flex items-center group transition-transform duration-200 hover:-translate-y-0.5 active:scale-95 focus:outline-none"
          aria-label="Silverback Home"
        >
          <SafeImage
            src={logoUrl}
            alt="SILVERBACK"
            width={160}
            height={56}
            fetchPriority="high"
            decoding="async"
            className="h-10 sm:h-12 md:h-14 w-auto filter brightness-0 invert drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)] object-contain transition-opacity group-hover:opacity-90"
            fallbackClassName="h-10 sm:h-12 md:h-14 w-[120px] bg-white/10 rounded"
          />
        </a>
      </div>
    </header>
  );
};

