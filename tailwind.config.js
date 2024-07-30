/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "910": '910px', 
      "800": '800px', 
      "740": '740px', 
      "640": '640px', 
      "590": '590px', 
      "400": '400px', 
      "320": '320px', 
    },
    extend: {
      fontFamily: {
        'rocknroll': ['RocknRoll One', 'sans-serif'],
     },
    },
  },
  plugins: [],
}