/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        Montserratbold : ["Montserrat", "sans-serif"],
        OpenSansRegular:['Open Sans', "sans-serif"],
        OpenSansSemibold:['Open Sans', "sans-serif"],
      }
    },
  },
  plugins: [],
  important: true,
}

