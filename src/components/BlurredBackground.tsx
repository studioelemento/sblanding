import React from 'react';

export const BlurredBackground: React.FC = () => {
  return (
    <div className="fixed -inset-6 z-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      {/* 
        Official Grayscale Background Image from Drive (assets/06-11-2026_01.png)
        Applied with 60% blur (10px) and balanced brightness so motorcycle & station are recognizable
      */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
        style={{
          backgroundImage: "url('/assets/06-11-2026_01.png')",
          filter: "grayscale(100%) blur(4px) brightness(0.65) contrast(1.15)",
          transform: "scale(1.05)" // Prevents border blur clipping
        }}
      />

      {/* Cinematic Dark Vignette & Depth Gradients (Softened for 60% visibility) */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, rgba(8, 9, 12, 0.10) 0%, rgba(8, 9, 12, 0.45) 75%, rgba(8, 9, 12, 0.75) 100%),
            linear-gradient(to bottom, rgba(8, 9, 12, 0.35) 0%, transparent 25%, transparent 75%, rgba(8, 9, 12, 0.80) 100%)
          `
        }}
      />

      {/* Subtle Blueprint Grid Atmosphere */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px'
        }}
      />
    </div>
  );
};

