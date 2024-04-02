import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        jp: ["Oswald"],
        category: ["Rubik Scribble"],
        category2: ["Bebas Neue"],
      },
      fontSize: {
        heading: "clamp(30px, 26.5217px + 1.087vi, 40px)",
        category: "clamp(55px, 39.3478px + 4.8913vi, 100px);",
      },
      animation: {
        tinyCircle: "tinyCircleAnimation 2s infinite linear",
      },
      keyframes: {
        tinyCircleAnimation: {
          "0%": { transform: "translate(0px, 0px)" },
          "25%": { transform: "translate(1px, -1px)" },
          "50%": { transform: "translate(2px, -2px)" },
          "75%": { transform: "translate(1px, -3px)" },
          "100%": { transform: "translate(0px, 0px)" },
        },
      },
    },
  },
  plugins: [],
} as Config;
