import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        wbg: "#fafafc",
      },
      fontFamily: {
        quest: ["Questrial-Regular"],
        dis: ["NotoSansDisplay-Light"],
      },
    },
  },
  plugins: [],
} satisfies Config;
