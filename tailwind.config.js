/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      transitionDuration: {
        '400': '400ms',
      },
      gridTemplateColumns: {
        'split': '1fr 1fr',
      }
    },
  },
  plugins: [],
}