/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        aller: ['Aller', 'sans-serif'],
      },
      colors: {
        'navy': {
          900: '#1a365d'
        }
      }
    },
  },
  plugins: [],
};