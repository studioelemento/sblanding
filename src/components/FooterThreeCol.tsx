import React from 'react';
import { LinkedInQR } from './LinkedInQR';
import { ArrowUpRight } from 'lucide-react';

interface FooterThreeColProps {
  linkedInUrl?: string;
}

export const FooterThreeCol: React.FC<FooterThreeColProps> = ({
  linkedInUrl = 'https://www.linkedin.com/company/silverback-ev'
}) => {
  return (
    <footer className="w-full relative z-20 border-t border-white/5 md:border-white/10 bg-gradient-to-t from-black/90 via-black/60 to-transparent md:bg-black/40 md:backdrop-blur-xl pt-3 pb-3 sm:py-4 md:py-5 px-4 sm:px-8 md:px-12 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-3 gap-2.5 sm:gap-3.5 md:gap-4 items-center">
        
        {/* ===================================================================
            COLUMN 1: Official Silverback Brand Logo (Pure White, Cropped ViewBox)
            - Desktop: Left aligned
            - Mobile: Centered, prominent & legible (h-7 sm:h-8 md:h-9)
            =================================================================== */}
        <div className="flex items-center justify-center md:justify-start order-1 md:order-1 w-full md:w-auto">
          <a 
            href="#" 
            className="inline-flex items-center group transition-transform duration-200 hover:-translate-y-0.5"
            aria-label="Silverback Home"
          >
            <img 
              src="/assets/branding/logo-white-cropped.svg" 
              alt="SILVERBACK" 
              className="h-7 sm:h-8 md:h-8 lg:h-9 w-auto max-w-[190px] sm:max-w-[220px] md:max-w-[260px] filter drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] object-contain"
            />
          </a>
        </div>

        {/* ===================================================================
            COLUMN 2: Centered Copyright
            - Desktop: Center column
            - Mobile: Bottom order for clean mobile visual balance
            =================================================================== */}
        <div className="flex flex-col items-center justify-center text-center order-3 md:order-2 w-full mt-0.5 md:mt-0">
          <p className="font-body font-normal text-[11px] sm:text-xs md:text-sm text-gray-400 tracking-wide">
            © 2026 Silverback Mobility. All rights reserved.
          </p>
        </div>

        {/* ===================================================================
            COLUMN 3: LinkedIn QR Code Button (Hyperlinked + Scannable)
            - Desktop: Right aligned
            - Mobile: Centered, touch-friendly tap target (min 44px)
            =================================================================== */}
        <div className="flex items-center justify-center md:justify-end order-2 md:order-3 w-full md:w-auto">
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Scan with phone or click to open LinkedIn profile"
            className="group inline-flex items-center gap-2.5 sm:gap-3 px-3 py-1.5 sm:px-3 sm:py-2 md:px-3.5 md:py-2 rounded-lg border border-white/15 bg-[#0E1015]/85 hover:bg-[#161922] hover:border-brand-accent backdrop-blur-lg transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_var(--brand-accent-glow)] hover:-translate-y-0.5 active:scale-95"
          >
            {/* Scannable SVG QR Frame */}
            <div className="p-1 bg-white rounded flex-shrink-0 shadow-sm transition-transform duration-200 group-hover:scale-105">
              <LinkedInQR size={32} />
            </div>

            {/* Clickable / Tappable Button Text */}
            <div className="flex flex-col text-left pr-1 sm:pr-2">
              <span className="font-logo text-[10px] sm:text-xs text-white uppercase tracking-wider flex items-center gap-1 group-hover:text-brand-accent transition-colors">
                <span>SCAN TO KNOW MORE</span>
                <ArrowUpRight className="w-3 h-3 text-brand-accent transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <span className="font-body font-light text-[9px] sm:text-[10px] text-gray-400">
                Official LinkedIn Network
              </span>
            </div>
          </a>
        </div>

      </div>
    </footer>
  );
};
