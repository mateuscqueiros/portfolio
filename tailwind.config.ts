import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        "48": "12rem",
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "contrast-color": "var(--contrast-color)",
        "button-bg-color": "var(--button-bg-color)",
        "butoon-bg-hover-color": "var(--butoon-bg-hover-color)",
        "text-color": "var(--text-color)",
        "badge-color": "var(--badge-color)",
      },
    },
  },
  plugins: [],
};
export default config;
