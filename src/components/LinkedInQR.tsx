import React from 'react';

interface LinkedInQRProps {
  /** Display width & height in CSS pixels (scales the QR) */
  size?: number;
  className?: string;
}

const QR_SRC = '/qrForLinkedIn.png';

export const LinkedInQR: React.FC<LinkedInQRProps> = ({
  size = 52,
  className,
}) => {
  return (
    <img
      src={QR_SRC}
      alt="LinkedIn QR code — scan to open Silverback Mobility on LinkedIn"
      width={size}
      height={size}
      decoding="async"
      className={
        className ??
        'rounded-[2px] block object-contain max-w-none'
      }
      style={
        className ? undefined : { width: size, height: size }
      }
    />
  );
};