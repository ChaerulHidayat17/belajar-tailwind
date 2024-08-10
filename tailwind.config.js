/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        1: "8px",
        2: "12px",
        3: "16px",
        4: "24px",
        5: "32px",
        6: "48px",
        xl: "100px",
      },
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        chaerul: "#09a2a5",
      },
    },
  },
  plugins: [],
}

