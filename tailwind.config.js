/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#252F3D",
        secondary: "#59AE43",
        red: "#F82C2C",
        lightGray: "#4D5254",
        midGray: "#969696",
        darkGray: "#37465A",
        bgColor: "#FAFAFA",
        blue: "#2C7EF8",
        lightBlue: "#EDF3FD",
      },
      width: {
      },
      height: {
        "calc-height": "calc(100svh - 35svh)",
        "calc-height-two": "calc(100svh - 16svh)",
        "calc-chat":"calc(100vh - 52vh)"
      },
      border: {
      },
      boxShadow: {
      },
      boxShadow: {
      },
      screens: {
        xs: [{ min: "0px", max: "767px" }], // Custom media query for max-width 639px
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        scrollmedia: [{ min: "768px", max: "1440px" }],
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
