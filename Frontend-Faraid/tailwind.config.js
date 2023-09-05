/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        berkshire: ["Berkshire Swash", "cursive"],
        airbnv: ["Airbnb Cereal"],
      },
      colors: {
        primary: "#0C9788",
      },
    },
  },
  plugins: [require("daisyui")],
};
