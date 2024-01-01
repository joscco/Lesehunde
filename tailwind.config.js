/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/app/**/*.{html,ts}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'hundwhite': '#fcf5ed',
      'hundred': '#cf5a67',
      'hundblack': '#000000',
      'hundorange': '#f5c096',
    },
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
