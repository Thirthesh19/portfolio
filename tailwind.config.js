/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#7dcfff', // Tokyo Cyan
          500: '#7aa2f7', // Tokyo Blue
          600: '#bb9af7', // Tokyo Purple
        },
        accent: {
          pink: '#f7768e',
          yellow: '#e0af68',
          green: '#9ece6a',
        },
        dark: {
          bg: '#1a1b26',
          surface: '#24283b',
          border: '#414868'
        }
      },
      animation: {
        'blob': 'blob 7s infinite',
        'shimmer': 'shimmer 1.5s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
