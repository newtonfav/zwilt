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
      stripMiddle: "#525AA0",
      stripEnd: "#A285D0",
    },
    extend: {
      height: {
        screen: "95dvh",
      },
      gridTemplateRows: {
        8: "repeat(8, 100px)",
      },
      gridTemplateColumns: {
        3: "repeat(2, 20%) 1fr",
      },
      screens: {
        largeDesktop: { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        desktop: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        tabletLandscape: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        tabletMedium: { max: "900px" },

        tabletPortrait: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        phone: { max: "639px" },
        // => @media (max-width: 639px) { ... }
        // smallScreen: { max: "460px" },

        smallPhone: { max: "380px" },

        horizontal: { raw: "(max-height: 500px)" },
      },
      keyframes: {
        slideLeft: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-15%)" },
        },
        slideRight: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(25%)" },
        },
      },
      animation: {
        slideLeft: "slideLeft 1.7s ease-out infinite",
        slideRight: "slideRight 1.7s ease-out infinite",
      },
      fontFamily: {
        sans: ["Switzer", "sans-serif"],
      },
    },
  },
  plugins: [],
};
