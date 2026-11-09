/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Aldrich', 'sans-serif'],
        tagline: ['Gemunu Libre', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        brand: {
          accent: 'var(--brand-accent, #FF5A00)',
          glow: 'var(--brand-accent-glow, rgba(255, 90, 0, 0.35))',
          subtle: 'var(--brand-accent-subtle, rgba(255, 90, 0, 0.12))',
          deep: '#08090C',
          surface: '#0E1015',
          elevated: '#161922',
        }
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.85)' },
        }
      },
      animation: {
        'pulse-dot': 'pulseDot 2s infinite ease-in-out',
      }
    },
  },
  plugins: [],
}

