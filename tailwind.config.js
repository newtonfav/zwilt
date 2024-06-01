/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      secondary: "#EDEFFF",
      white: "#ffffff",
      purple: "#525AA0",
      yellow: "#FFBE2E",
      green: "#C7F4C2",
      grey: "#F8F8F8",
      black: "#202229",
      bcolor: "#F0F0F0",
      greydarker: "#D2D2D2",
      greylight: "#959595",
      darkwhite: "#F6F6F6",
    },
    extend: {
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
