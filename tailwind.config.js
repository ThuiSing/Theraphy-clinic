module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#fffffe",
      secondary: "#f6efef",
      blue: "#399fa9",
      footer: "#181818",
      btn: "#4fc4cf",
    }),
    textColor: {
      primary: "#181818",
      secondary: "#2e2e2e",
      blue: "#4fc4cf",
      white: "#fffffe",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
