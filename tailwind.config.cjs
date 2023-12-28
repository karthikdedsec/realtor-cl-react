/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      realtor: ["Caveat", "cursive"],
      sen: ["Afacad", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
