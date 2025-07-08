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
      colors: {
        pinkBg : '#f84d78',
        pinkTxt: '#f66186',
        purpleBg : '#a492fd',
        purpleLn : '#5E50D2', 
        whiteNav : '#f7f7f9',
      }
    },
  },
  plugins: [],
}
