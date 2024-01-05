/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        cs_gray: "#717171",
        cs_light_gray: "#1F1E22",
      },
    },
    fontSize: {
      xs: "12px", // Extra Small
      sm: "14px", // Small
      md: "16px", // Medium
      lg: "18px", // Large
      xl: "20px", // Extra Large
      xxl: "24px", // 2 Extra Large
      "3xl": "30px", // 3 Extra Large
      "4xl": "36px", // 4 Extra Large
      "5xl": "48px", // 5 Extra Large
      "6xl": "64px", // 6 Extra Large
      "7xl": "72px", // 7 Extra Large
      "8xl": "88px", // 8 Extra Large
      "9xl": "96px", // 9 Extra Large
    },
   
  },
  plugins: [],
};
