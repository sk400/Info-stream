/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        dimgray: "#6d5d6e",
        whitesmoke: "#f6f6f6",
        gray: "#fafafa",
      },
      fontFamily: {
        inter: "Inter",
        poppins: "Poppins",
        "noto-serif": "'Noto Serif'",
      },
      borderRadius: {
        "31xl": "50px",
        xl: "20px",
        "181xl": "200px",
      },
    },
    fontSize: {
      "11xl": "30px",
      "7xl": "26px",
      base: "16px",
      "15xl": "34px",
      "5xl": "24px",
      sm: "14px",
      xl: "20px",
      "13xl": "32px",
      "9xl": "28px",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "900px",
      },
      sm: {
        max: "600px",
      },
      mq320: {
        raw: "screen and (max-width: 320px)",
      },
      mq420: {
        raw: "screen and (max-width: 420px)",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
