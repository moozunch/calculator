/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        'custom-1.5rem': '1.5rem',
      },
      colors: {
        'black': '#313131',
      },
      cursor: {
        'custom-pointer': 'pointer',
      },
      fontFamily: {
        'arial': ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

