import 'react';

declare module 'react' {
  interface ImgHTMLAttributes<T> {
  /** DOM attribute for image fetch priority (lowercase per HTML spec; use on &lt;img&gt;) */
    fetchpriority?: 'high' | 'low' | 'auto';
  }
}
