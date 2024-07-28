/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors:{
      "primary-yellow":"#FFD369",
      "primary-dark":"#222831",
      "dark-grey":"#393E46",
      "light-grey":"#EEEEEE"
     }
    },
  },
  plugins: [],
};
