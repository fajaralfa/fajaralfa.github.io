module.exports = {
  plugins: {
    tailwindcss: {
      content: ['./themes/*/layout/**/*.ejs'],
      darkMode: 'selector',
      theme: {
        extend: {},
      },
      plugins: [],
    },
    autoprefixer: {},
  },
}
