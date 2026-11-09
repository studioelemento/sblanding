import React from 'react';

interface LinkedInQRProps {
  size?: number;
}

export const LinkedInQR: React.FC<LinkedInQRProps> = ({ size = 52 }) => {
  return (
    <svg 
      viewBox="0 0 200 200" 
      width={size} 
      height={size} 
      xmlns="http://www.w3.org/2000/svg"
      className="rounded-[2px] block"
      aria-label="LinkedIn QR Code"
    >
      {/* High-contrast solid white matrix base */}
      <rect width="200" height="200" fill="#FFFFFF" rx="4" />
      
      {/* Top-Left Finder Pattern */}
      <rect x="15" y="15" width="46" height="46" fill="#0A0B0E" rx="3" />
      <rect x="23" y="23" width="30" height="30" fill="#FFFFFF" rx="2" />
      <rect x="30" y="30" width="16" height="16" fill="#0A0B0E" rx="1" />

      {/* Top-Right Finder Pattern */}
      <rect x="139" y="15" width="46" height="46" fill="#0A0B0E" rx="3" />
      <rect x="147" y="23" width="30" height="30" fill="#FFFFFF" rx="2" />
      <rect x="154" y="30" width="16" height="16" fill="#0A0B0E" rx="1" />

      {/* Bottom-Left Finder Pattern */}
      <rect x="15" y="139" width="46" height="46" fill="#0A0B0E" rx="3" />
      <rect x="23" y="147" width="30" height="30" fill="#FFFFFF" rx="2" />
      <rect x="30" y="154" width="16" height="16" fill="#0A0B0E" rx="1" />

      {/* Timing Patterns */}
      <g fill="#0A0B0E">
        <rect x="68" y="30" width="8" height="8" />
        <rect x="84" y="30" width="8" height="8" />
        <rect x="100" y="30" width="8" height="8" />
        <rect x="116" y="30" width="8" height="8" />

        <rect x="30" y="68" width="8" height="8" />
        <rect x="30" y="84" width="8" height="8" />
        <rect x="30" y="100" width="8" height="8" />
        <rect x="30" y="116" width="8" height="8" />

        {/* Matrix Data Modules */}
        <rect x="68" y="46" width="8" height="8" />
        <rect x="76" y="54" width="8" height="8" />
        <rect x="92" y="46" width="8" height="8" />
        <rect x="108" y="54" width="8" height="8" />
        <rect x="124" y="46" width="8" height="8" />

        <rect x="46" y="68" width="8" height="8" />
        <rect x="54" y="76" width="8" height="8" />
        <rect x="46" y="92" width="8" height="8" />
        <rect x="54" y="108" width="8" height="8" />
        <rect x="46" y="124" width="8" height="8" />

        <rect x="68" y="139" width="8" height="8" />
        <rect x="76" y="147" width="8" height="8" />
        <rect x="68" y="163" width="8" height="8" />
        <rect x="84" y="171" width="8" height="8" />
        <rect x="100" y="155" width="8" height="8" />
        <rect x="116" y="147" width="8" height="8" />

        <rect x="139" y="68" width="8" height="8" />
        <rect x="147" y="76" width="8" height="8" />
        <rect x="163" y="68" width="8" height="8" />
        <rect x="171" y="84" width="8" height="8" />
        <rect x="155" y="100" width="8" height="8" />
        <rect x="147" y="116" width="8" height="8" />
        <rect x="163" y="124" width="8" height="8" />
        <rect x="171" y="132" width="8" height="8" />

        <rect x="139" y="147" width="8" height="8" />
        <rect x="155" y="155" width="8" height="8" />
        <rect x="171" y="163" width="8" height="8" />
        <rect x="147" y="171" width="8" height="8" />
        <rect x="163" y="179" width="8" height="8" />
      </g>

      {/* Center LinkedIn Official Emblem */}
      <rect x="76" y="76" width="48" height="48" rx="6" fill="#0A66C2" />
      <g fill="#FFFFFF" transform="translate(86, 86) scale(0.68)">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </g>
    </svg>
  );
};

