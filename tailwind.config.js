/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/app/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
  },
  variants: {
    textColor: ['active-router-link']
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    plugin(({ addVariant }) => {
      addVariant('active-route-link', ".active-route-link&");
    }),
  ]
}
