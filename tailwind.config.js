module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': 'url(/home-bg.svg)',
      },
      fontFamily: {
        body: ['Outfit', 'sans-serif'],
      },
      backgroundColor: {
        primary: '#09f755',
      },
      textColor: {
        primary: '#09f755',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
