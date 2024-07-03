import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`${__dirname}/layout/**/*.ejs`],
  theme: {
    extend: {},
  },
  plugins: [typography()],
}

