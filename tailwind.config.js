
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        teal: {
          900: '#0f2f3e',
          800: '#1a3a4a',
          700: '#234b5e',
        },
        amber: {
          500: '#e8850c',
          600: '#d1760a',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
