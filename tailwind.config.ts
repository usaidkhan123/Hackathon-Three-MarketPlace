import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        custom:"rgba(37, 43, 66, 1)",
        custom2:"rgba(250, 250, 250, 1)",
        custom3:"rgba(115, 115, 115, 1)",
        custom4:"rgba(189, 189, 189, 1)",
        custom5:"rgba(35, 133, 109, 1)",
        custom5b: "rgba(35, 166, 240, 1)",
        custom5c: "rgba(250, 250, 250, 1)",
        custom5d:"rgba(35, 133, 109, 1)",
        custom6:"rgba(221, 221, 221, 1)",
        custom6a: "rgba(178, 227, 255, 1)",
        custom6b:"rgba(37, 43, 66, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
