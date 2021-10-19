module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#fffffe",
      secondary: "#f6efef",
      blueOpacityhalf: " #678d9169",
      blue: "#399fa9",
      footer: "#181818",
      btn: "#4fc4cf",
    }),
    textColor: {
      primary: "#181818",
      secondary: "#2e2e2e",
      red: "#cf0101",
      blue: "#4fc4cf",
      white: "#fffffe",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
