import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { LinkedInQR } from './LinkedInQR';

interface LinkedInQRModalProps {
  open: boolean;
  onClose: () => void;
  linkedInUrl: string;
}

export const LinkedInQRModal: React.FC<LinkedInQRModalProps> = ({
  open,
  onClose,
  linkedInUrl,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, handleKeyDown]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10"
      role="dialog"
      aria-modal="true"
      aria-labelledby="linkedin-qr-dialog-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/85 backdrop-blur-md qr-modal-backdrop"
        aria-label="Close QR preview"
        onClick={onClose}
      />

      <div
        className="relative w-full max-w-[min(100%,22rem)] md:max-w-2xl rounded-2xl border border-white/15 bg-[#0E1015]/98 p-6 sm:p-8 md:p-10 shadow-[0_0_60px_var(--brand-accent-glow)] qr-modal-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 md:right-4 md:top-4 rounded-full p-1.5 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Close"
        >
          <X className="h-5 w-5 md:h-6 md:w-6" />
        </button>

        <div className="flex flex-col md:flex-row md:items-center md:gap-10 pt-2">
          <div className="mx-auto flex shrink-0 justify-center rounded-xl bg-white p-4 md:p-5 shadow-inner">
            <LinkedInQR className="h-52 w-52 sm:h-60 sm:w-60 md:h-64 md:w-64 lg:h-72 lg:w-72 rounded-md object-contain" />
          </div>

          <div className="mt-5 md:mt-0 flex flex-1 flex-col text-center md:text-left md:pr-6">
            <h2
              id="linkedin-qr-dialog-title"
              className="font-logo text-xs sm:text-sm md:text-base uppercase tracking-wider text-brand-accent mb-2 md:mb-3"
            >
              Scan LinkedIn
            </h2>

            <p className="font-body text-[11px] sm:text-xs md:text-sm text-gray-400 md:text-gray-300">
              Point your phone camera at the code to open our official LinkedIn page.
            </p>

            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body mt-4 md:mt-6 inline-block text-xs md:text-sm text-white underline-offset-4 hover:text-brand-accent hover:underline"
            >
              Or open LinkedIn in browser
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};