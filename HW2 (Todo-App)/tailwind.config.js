/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        wallpaper: "url('./public/wallpaper.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
