module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'epilogue': ['Epilogue'],
        'inter': ['Inter'],
      },
      colors: {
        blue: {
          light: '#58c0d0',
          DEFAULT: '#0000ff',
          dark: '#142328'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
