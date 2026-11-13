import React from 'react';
import { Header } from './components/Header';
import { BlurredBackground } from './components/BlurredBackground';
import { KineticHeadline } from './components/KineticHeadline';
import { FooterThreeCol } from './components/FooterThreeCol';
import { SafeImage } from './components/SafeImage';

export const App: React.FC = () => {
  return (
    <div className="relative w-full min-h-[100dvh] md:fixed md:inset-0 md:h-[100dvh] md:min-h-0 flex flex-col md:justify-between overflow-x-hidden md:overflow-hidden bg-[#08090C] text-white select-none">
      {/* 
        1. Full-Screen Blurred Grayscale Background (60% Blur)
        Uses the official image from Google Drive: /assets/06-11-2026_01.png
      */}
      <BlurredBackground />

      {/* Mobile: hero = top ~75% of viewport; promos peek in bottom ~25%. Desktop: md:contents */}
      <div className="relative z-10 flex h-[100dvh] shrink-0 flex-col md:h-auto md:min-h-0 md:contents">
        <Header />

        <main className="relative flex flex-1 flex-col items-center justify-center px-4 min-h-0 md:flex-1 md:min-h-0 md:py-2 overflow-visible md:overflow-hidden">
          <KineticHeadline
            phrases={[
              'dignity',
              'the ride',
              'the pit stop',
              'the delivery experience'
            ]}
            intervalMs={2000}
          />
        </main>
      </div>

      {/* Promo — mobile: starts at ~75vh (-25dvh pull-up). Desktop: strip above footer */}
      <div className="relative z-20 w-full flex-shrink-0 -mt-[25dvh] pb-1 md:mt-0 md:pb-2 leading-[0]">
        {/* Mobile: forMb1 then forMb2 */}
        <div className="promo-mobile-bleed md:hidden leading-none">
          <SafeImage
            src="/forMb1.png"
            alt="Silverback — battery exchange, electric mobility, and outdoor cooling"
            width={1620}
            height={2880}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            fallbackClassName="block w-full min-h-[120px] bg-[#0E1015]"
          />
          <SafeImage
            src="/forMb2.png"
            alt="Silverback — shared vision and partner ecosystem"
            width={1620}
            height={2880}
            loading="lazy"
            fetchPriority="low"
            decoding="async"
            fallbackClassName="block w-full min-h-[120px] bg-[#0E1015]"
          />
        </div>
        {/* Desktop */}
        <SafeImage
          src="/forPc.jpg"
          alt="Silverback — battery exchange, electric vehicles, and outdoor cooling highlights"
          width={1280}
          height={150}
          className="hidden md:block w-full h-auto max-w-none"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          fallbackClassName="hidden md:block w-full min-h-[80px] bg-[#0E1015]"
        />
      </div>

      {/* 
        4. Three-Column Footer Section (Completes the Page)
        - Left: Official Silverback Logo (White)
        - Center: Centered Copyright in Space Grotesk
        - Right: Clickable & Scannable LinkedIn QR Button
      */}
      <FooterThreeCol linkedInUrl="https://www.linkedin.com/company/silverback-mobility/" />
    </div>
  );
};

export default App;
