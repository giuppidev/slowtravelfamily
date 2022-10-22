module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Libre Baskerville", "sans-serif"],
      serif: ["Libre Baskerville"],
    },
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', "sans-serif"],
        lora: ['"Lora"', "serif"],
        libre: ["Libre Baskerville", "sans-serif"],
      },
      colors: {
        primaryGreen: "#03989E",
        primaryYellow: "#FFBD59",
        primaryBlue: "#344f5d",
      },
      backgroundImage: {
        hero: "url('/home/hero2.jpg')",
        parents: "url('/home/slowtravelfamily.png')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
