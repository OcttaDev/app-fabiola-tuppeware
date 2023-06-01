/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'DM Sans': 'DM Sans'
      },
      screens:{
        'mobile': '250px',
        'tablet': '750px',
        'desktop': '1000px'
      }
    },
  },
  plugins: [],
}
