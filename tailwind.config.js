/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dentalGreen: '#0A353C',      // Your exact primary dark green code
        dentalLightGreen: '#13646C', // Your exact accent light green code
        dentalCream: '#F2F2EF',      // Your exact background cream surface code
        dentalSage: '#A3B86C',       // Your typographic green accent link hue
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}