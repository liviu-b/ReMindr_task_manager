/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionProperty: {
        'colors': 'color, background-color, border-color',
        'transform': 'transform',
        'opacity': 'opacity',
        'all': 'all',
      },
      transitionDuration: {
        '150': '150ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      animation: {
        'scale': 'scale 150ms cubic-bezier(0.4, 0, 0.2, 1)',
        'fade': 'fade 150ms cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        scale: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};