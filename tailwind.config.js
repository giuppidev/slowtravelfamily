module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Libre Baskerville"],
      serif: ["Libre Baskerville", "serif"],
    },
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', "sans-serif"],
        lora: ['"Lora"', "serif"],
        libre: ["Libre Baskerville", "serif"],
      },
      colors: {
        primaryGreen: "#03989E",
        primaryYellow: "#FFBD59",
        primaryBlue: "#344f5d",
      },
      backgroundImage: {
        hero: "url('https://res.cloudinary.com/de30mupo1/image/upload/w_1000,h_1000,c_limit/slowtravel/slow3_zzlgth.png')",
        parents:
          "url('https://res.cloudinary.com/de30mupo1/image/upload/w_1000,h_1000,c_limit/slowtravel/slowtravelfamily_toqhtk.png')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
