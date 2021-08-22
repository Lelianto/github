const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
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
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1440px',
      '3xl': '1600px'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      backgroundImage: () => ({
        'doodle': "url(/src/assets/images/background.png)"
      })
    },
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
