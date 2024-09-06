import type { Config } from "tailwindcss"
import { Rowdies } from "next/font/google"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        main_plain: "url('/Axie_Main_Plain_BG.webp')",
        main: "url('/Axie_Main_BG.webp')",
        mobile: "url('/Axie_Mobile_BG.webp')",
        mobile_plain: "url('/Axie_Mobile_Plain_BG.webp')",
        bottom_bar: "url('/Axie_Bottom_BG.webp')",
      },
      fontFamily: {
        uniform_rounded: "UniformRnd",
        rowdies: "Rowdies",
        gilroy: "Gilroy",
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
}
export default config
