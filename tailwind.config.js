/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Màu nhấn của cả trang. Muốn đổi tông: thay bằng colors.sky, colors.emerald...
        // (và sửa --accent-rgb trong src/app/globals.css cho khớp).
        accent: colors.teal,
        paper: "#f6faf9",
        ink: "#0f2a2e",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-serif)", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
