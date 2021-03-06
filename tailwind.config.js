module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "40-r": "40rem",
        "35-r": "30rem",
      },
      height: {
        "40-r": "40rem",
        "35-r": "30rem",
      },
      boxShadow: {
        "5xl": "20px 20px 50px rgba(0,0,0,0.5)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
