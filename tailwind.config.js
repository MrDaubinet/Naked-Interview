const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      maxWidth: {
        '2xs': '10rem',
        '3xs': '8rem',
        '4xs': '6rem',
        '5xs': '5rem',
        '2xl': '1500',
      }, 
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
        '10xl': '8rem',
      },
      screens: {
        '2xl': '1400px',
        '3xl': '1600px'
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem'
      }
    },
  },
  purge: {
    content: ["./src/**/*.svelte", "./src/template.html"],
  },
  plugins: [require("@tailwindcss/ui")],
};
