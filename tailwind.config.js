/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./main.js"],
  theme: {
    extend: {
      backgroundImage: {
        land2: "url('./external/imges/WallpaperDog-20534610 1.png')",
      },
    },
  },
  plugins: [],
};
