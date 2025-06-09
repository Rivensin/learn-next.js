module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        '4xl': '1920px'
      },
      fontFamily : {
        roboto : 'var(--font-roboto)',
        poppins : 'var(--font-poppins)',
      },
    },
  },
  plugins: [],
}
