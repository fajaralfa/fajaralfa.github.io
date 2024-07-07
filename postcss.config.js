const typography = require('@tailwindcss/typography')

module.exports = {
  plugins: {
    tailwindcss: {
      content: ['./themes/*/layout/**/*.ejs'],
      darkMode: 'selector',
      theme: {
        extend: {},
      },
      plugins: [typography()],
    },
    autoprefixer: {},
  },
}
