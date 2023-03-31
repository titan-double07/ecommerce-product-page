
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        orange: {
          100: '#fff1e6',
          200:'#ff7d1a'}
      }
    },
  },
  plugins: [],
}