/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#086AD8',
          hover: '#0654b0',
        },
        secondary: {
          DEFAULT: '#032240',
          hover: '#02182b',
        },
        accent: {
          DEFAULT: '#FD4A18',
          hover: '#e03e10',
        },
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'scroll-x': 'scroll-x 25s linear infinite',
      },
      keyframes: {
        'scroll-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
