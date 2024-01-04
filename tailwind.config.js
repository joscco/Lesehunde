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
      'hundwhite': '#f6f1e8',
      'hundorange': '#f3bc48',
      'hundred': '#d54022',
      'hundgrey': '#272727',
      'hundblack': '#131d28',
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
