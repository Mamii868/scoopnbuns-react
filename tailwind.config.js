/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {},
    colors: {
      'hotPink': '#ff5781',
      'lightPink': '#ffd6e0',
      'pink': '#fa94ae',
      'white': '#ffebf0',
      'black': '#554e50',
      'green': '#588b56',
      'lightGreen': '#53a96c',
      'blue': '#242547',
    },
    fontFamily: {
      poppins: ['Poppins','Roboto Thin', 'sans-serif'],
    },
    extend: {},
  },
  plugins: ["prettier-plugin-tailwindcss"],
}

