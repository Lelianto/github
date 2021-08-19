const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: () => ({
      ...defaultTheme.colors,
      'primary': '#24292E',
      'orange-bold': '#F9826C'
    }),
    backgroundColor: () => ({
      ...defaultTheme.colors,
      'primary': '#24292E',
      'orange-bold': '#F9826C'
    }),
    zIndex: {
      '2000': 2000
    },
    screens: {
      'sm': '320px',
      'md': '640px',
      'lg': '1024px',
      'xl': '1280px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
