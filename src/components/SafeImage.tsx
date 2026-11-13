import React, { useState, useCallback } from 'react';

export interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackClassName?: string;
}

/**
 * Image with graceful fallback if the asset fails to load (no broken icon in UI).
 */
export const SafeImage: React.FC<SafeImageProps> = ({
  alt = '',
  className,
  fallbackClassName = 'block w-full min-h-[1px] bg-[#0E1015]',
  onError,
  fetchPriority,
  ...props
}) => {
  const [failed, setFailed] = useState(false);

  const handleError = useCallback(
    (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setFailed(true);
      onError?.(event);
    },
    [onError]
  );

  if (failed) {
    return <div className={fallbackClassName} role="img" aria-label={alt} />;
  }

  const fetchpriority =
    props.fetchpriority ?? (fetchPriority as 'high' | 'low' | 'auto' | undefined);

  return (
    <img
      {...props}
      alt={alt}
      className={className}
      onError={handleError}
      decoding={props.decoding ?? 'async'}
      {...(fetchpriority ? { fetchpriority } : {})}
    />
  );
};
