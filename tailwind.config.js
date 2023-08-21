/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
            'twitter-white': '#E6E9EA',
            'bleu': '#242D35',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
}

