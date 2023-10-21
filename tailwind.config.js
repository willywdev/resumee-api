import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      prime: "#06d6a0",
      ...colors,
    },
    fontFamily: {
      mono: "RobotoMono",
    },
  },
  plugins: [],
};
