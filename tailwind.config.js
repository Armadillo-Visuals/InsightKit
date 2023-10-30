/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        landing: "url('https://i.imgur.com/uBCt6Wa.jpg')",
        trees: "url('https://i.imgur.com/BMsOvGT.png')",
      },
    },
  },
  plugins: [],
};
