/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1360px",
      },
    },
    extend: {
      animation: {
        "circle-in": "circle-in 1.5s ease-in-out",
        appear: "appear 1s ease-in-out forwards",
        appear2: "appear 0.6s ease-in-out forwards",
      },
    },
    keyframes: {
      "circle-in": {
        "0%": {
          transform: "scale(0)",
          transformOrigin: "top left",
          clipPath: "circle(0% at 0% 0%)",
        },
        "100%": {
          transform: "scale(1)",
          transformOrigin: "top left",
          clipPath: "circle(150% at 0% 0%)",
        },
      },
      appear: {
        "0%": {
          opacity: 0,
        },
        "100%": {
          opacity: 1,
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss-animation-delay"),
  ],
}
