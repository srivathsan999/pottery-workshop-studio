/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['"Cormorant Garamond"', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      colors: {
        'terracotta': '#B56A4A',
        'sage': '#7A8F7A',
      },
    },
  },
  plugins: [],
}

