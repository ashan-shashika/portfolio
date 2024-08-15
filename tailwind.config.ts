import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-radial": `
              radial-gradient(121.65% 100% at 32.68% 0, #3c4155 0%, rgba(60, 65, 85, 0.18) 32.49%, rgba(60, 65, 85, 0) 51.34%), 
              radial-gradient(91.41% 43.04% at 50% 0, #1a1c24 20.67%, rgba(26, 28, 36, 0) 100%),
              radial-gradient(69.96% 25.89% at 50% 100%, #15171e 22.77%, rgba(19, 21, 27, 0) 100%)
            `,
      },
    },
  },
  plugins: [],
};
export default config;
