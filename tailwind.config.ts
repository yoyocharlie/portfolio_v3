import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        jp: ["Oswald"]
      },
      fontSize: {
        heading: 'clamp(1.25rem, 1.0714rem + 0.8929vi, 2.1875rem)',
        biggerHeading: 'clamp(1.5625rem, 1.4077rem + 0.7738vi, 2.375rem)'
      }
    },
  },
  plugins: [],
} satisfies Config;
