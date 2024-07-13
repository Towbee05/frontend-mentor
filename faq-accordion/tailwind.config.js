/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "custom-light-pink" : "#f9f0ff",
        "custom-grayish-purple": "#8c6991",
        "custom-dark-purple": "#2f1533"
      },
      fontFamily:{
        "custom-family" : '"Work Sans", sans-serif'
      },
      backgroundImage:{
        "custom-image" : "url('/assets/images/background-pattern-mobile.svg')",
        "custom-large" : "url('/assets/images/background-pattern-desktop.svg')"
      },
      fontSize:{
        "custom-size-1": ["32px", "36px"],
      },
      screens:{
        "xs" : {
          "min" : "375px",
        }
      }
    },
  },
  plugins: [],
}

