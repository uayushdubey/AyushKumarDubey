/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './main.jsx', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Geist', 'Satoshi', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
      colors: {
        ink: '#050505',
        panel: '#0c0d0d',
        line: '#222527',
        steel: '#8f9aa3',
        bone: '#f4f0e8',
        signal: '#a7f3d0',
        copper: '#d8a657',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(0, 0, 0, 0.32)',
      },
    },
  },
  plugins: [],
};
