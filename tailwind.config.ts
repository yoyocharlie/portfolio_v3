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
        category: "clamp(55px, 39.3478px + 4.8913vi, 100px)",
      },
      keyframes: {
        pulse: {
          "20%, 50%, 60%": {
            opacity: "0",
          },
        },
      },
    },
  },
  daisyui: {
    themes: [false],
  },
  plugins: [require("tailwindcss-animated"), require("daisyui")],
} as Config;
