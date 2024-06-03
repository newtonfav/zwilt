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
      greydarkest: "#D6D6D6",
      greylight: "#959595",
      darkwhite: "#F6F6F6",
      tertiary: "#202229",
      box1: "#EDEFFF",
      box2: "#FFF7E1",
      box3: "#F3F3F3",
      fillPurple: "#50589F",
      fillYellow: "#FFBE2E",
      fillGreen: "#C7F4C2",
      buttonColor: "#292B34",
    },
    extend: {
      height: {
        screen: "95dvh",
      },
      gridTemplateRows: {
        8: "repeat(8, 100px)",
      },
      gridTemplateColumns: {
        3: "repeat(2, 300px) 1fr",
      },

      keyframes: {
        slideLeft: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-10%)" },
        },
        slideRight: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(20%)" },
        },
      },
      animation: {
        slideLeft: "slideLeft 2s infinite",
        slideRight: "slideRight 2s infinite",
      },
    },
  },
  plugins: [],
};
