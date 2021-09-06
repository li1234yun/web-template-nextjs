module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  important: true,
  theme: {
    extend: {},
    // Keep breakpoints same with Material-UI
    // https://next.material-ui.com/customization/default-theme/
    screens: {
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
