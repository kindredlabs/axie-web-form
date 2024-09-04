import type { Config } from "tailwindcss";
import { Rowdies } from "next/font/google";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "axie": "url('/Axie_Main_BG3.jpg')"
      },
      fontFamily: {
        uniform_rounded: "UniformRnd",
        rowdies: "Rowdies",
        gilroy: "Gilroy"
        // Add more custom font families as needed
      },
    },

  },
  plugins: [],
};
export default config;
