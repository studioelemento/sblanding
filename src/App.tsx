import React from 'react';
import { Header } from './components/Header';
import { BlurredBackground } from './components/BlurredBackground';
import { KineticHeadline } from './components/KineticHeadline';
import { FooterThreeCol } from './components/FooterThreeCol';

export const App: React.FC = () => {
  return (
    <div className="fixed inset-0 h-full h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-[#08090C] text-white select-none">
      {/* 
        1. Full-Screen Blurred Grayscale Background (60% Blur)
        Uses the official image from Google Drive: /assets/06-11-2026_01.png
      */}
      <BlurredBackground />

      {/* 
        2. Top Header with Official Silverback Brand Logo
      */}
      <Header />

      {/* 
        3. Kinetic Tagline Hero (Centered Vertically and Horizontally)
        - "Redefining" stays still (anchored)
        - The trailing word changes every 2 seconds with vertical swipe-up & fade
        - Typeface: Gemunu Libre Regular
      */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center my-auto px-4 py-2 sm:py-6 overflow-hidden">
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
