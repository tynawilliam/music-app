/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#110E20",
        secondary: "#1B1730",
        light: "#282247",
        accent: "#FBE100",
      },
    },
  },
  plugins: [],
};
