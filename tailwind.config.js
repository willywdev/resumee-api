import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      prime: "#06d6a0",
      primedark: "#1f6377",
      primedarkhover: "#2f4858",
      ...colors,
    },
    fontFamily: {
      mono: "RobotoMono",
    },
  },
  plugins: [],
};
