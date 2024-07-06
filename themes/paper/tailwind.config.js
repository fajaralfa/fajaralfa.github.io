import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`${__dirname}/layout/**/*.ejs`],
  darkMode: 'selector',
  theme: {
    extend: {},
  },
  plugins: [typography()],
}

