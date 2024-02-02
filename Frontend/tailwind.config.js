/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      't1':'#00c8ff',
      'b1': '#3ABFF9',
      'b2': '#00D4F3',
      'b3': '#00E5DA',
      'g1': '#5EF1B4',
      'g2': '#AEF88C',
      'y1': '#F9F871'
    }},
    
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [ "light"],
  },
}

