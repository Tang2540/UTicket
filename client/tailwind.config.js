/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors : {
        'pink': '#FB2576',
        'grey-mod': '#999999'
      }
    },
  },
  plugins: [],
}

