/* tailwind.config.js */

module.exports = {
  darkMode: "class", // Use class-based dark mode
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Ensure Tailwind scans all the files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a2540", // Default primary color
        secondary: "#1e3a8a", // Secondary color
        accent: "#ff6363", // Accent color for buttons, etc.
        background: "#f4f4f4", // Light background color
        darkBackground: "#1a202c", // Dark background color for dark mode
        textLight: "#333333", // Light text color
        textDark: "#94a3b8", // Dark text color for dark mode
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Default font for body
        heading: ["Montserrat", "sans-serif"], // Font for headings
      },
      screens: {
        sm: "640px", // Small screen (mobile)
        md: "768px", // Medium screen (tablet)
        lg: "1024px", // Large screen (laptop/desktop)
        xl: "1280px", // Extra large screen
        "2xl": "1536px", // Double extra large screen
      },
    },
  },
  plugins: [],
};
