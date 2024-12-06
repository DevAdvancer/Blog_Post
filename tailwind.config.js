/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            code: {
              color: '#ef4444',
              '&::before': { content: '""' },
              '&::after': { content: '""' },
            },
          },
        },
        dark: {
          css: {
            color: '#9ca3af',
            h1: { color: '#fff' },
            h2: { color: '#fff' },
            h3: { color: '#fff' },
            h4: { color: '#fff' },
            strong: { color: '#fff' },
            code: { color: '#ef4444' },
            blockquote: { color: '#9ca3af' },
            'thead th': { color: '#fff' },
            'tbody td': { color: '#9ca3af' },
          },
        },
      },
    },
  },
  plugins: [
    typography,
  ],
};
