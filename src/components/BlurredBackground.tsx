import React, { useState } from 'react';

const HERO_BG_SRC = '/assets/06-11-2026_01.png';

export const BlurredBackground: React.FC = () => {
  const [bgFailed, setBgFailed] = useState(false);

  return (
    <div
      className="fixed -inset-6 z-0 overflow-hidden pointer-events-none select-none bg-[#08090C] blur-bg-root"
      aria-hidden="true"
    >
      {!bgFailed && (
        <img
          src={HERO_BG_SRC}
          alt=""
          width={1920}
          height={1080}
          decoding="async"
          fetchpriority="low"
          className="absolute inset-0 h-full w-full object-cover object-center blur-bg-img"
          onError={() => setBgFailed(true)}
        />
      )}

      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, rgba(8, 9, 12, 0.10) 0%, rgba(8, 9, 12, 0.45) 75%, rgba(8, 9, 12, 0.75) 100%),
            linear-gradient(to bottom, rgba(8, 9, 12, 0.35) 0%, transparent 25%, transparent 75%, rgba(8, 9, 12, 0.80) 100%)
          `,
        }}
      />

      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />
    </div>
  );
};
