

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Montserrat Variable','sans-serif'],
        logo: ['Fira Mono','sans-serif'],
      },
      colors: {
        'mypurple': '#6B43B8',
        'mypink':'#FF84E9',
        'mycoral':'#ff7f50',
        'mydarkbg':'#433E79',
        },
    },
  },
  plugins: [],
}