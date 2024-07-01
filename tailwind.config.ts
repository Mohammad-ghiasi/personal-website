import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'myYellow': '#ffb400'  // Defines a custom color 'myYellow' with the hex color code #ffb400
      }
    },
  },
  plugins: [],
};

export default config;
