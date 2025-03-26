const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a2540",
        secondary: "#1e3a8a",
        accent: "#ff6363",
        background: "#f4f4f4",
        darkBackground: "#1a202c",
        textLight: "#777",
        textDark: "#94a3b8",
        textBlackOnLight: "#000",
        textWhiteOnDark: "#fff",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        "h1, h2, h3, h4, h5, h6": {
          color: "#333333", // Light mode only — applies by default
        },
        ".dark h1, .dark h2, .dark h3, .dark h4, .dark h5, .dark h6": {
          // Do nothing — inherit or use your existing dark styling
        },
      });
    }),
  ],
};
