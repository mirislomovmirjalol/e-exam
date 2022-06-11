module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
