import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        maxXsm: { max: "380px" },
        maxSsm: { max: "430px" },
        maxXs: { max: "480px" },
        maxSm: { max: "639px" },
        maxMd: { max: "767px" },
        maxLg: { max: "1023px" },
        minMax: { min: "768px", max: "960px" },
        minMaxMd: { min: "1025px", max: "1089px" },
      },
      colors: {
        // background: "rgb(var(--background) / <alpha-value>)",
        // foreground: "rgb(var(--foreground) / <alpha-value>)",
        // primary: {
        //   DEFAULT: "rgb(var(--primary) / <alpha-value>)",
        //   foreground: "rgb(var(--foreground) / <alpha-value>)",
        //   lightGray: "rgb(var(--lightGray) / <alpha-value>)",
        // },
        // secondary: {
        //   DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
        // },
        // destructive: {
        //   DEFAULT: "rgb(var(--destructive) / <alpha-value>)",
        // },
        // muted: {
        //   DEFAULT: "rgb(var(--muted) / <alpha-value>)",
        //   foreground: "rgb(var(--foreground) / <alpha-value>)",
        //   background: "rgb(var(--background) / <alpha-value>)",
        // },
        // accent: {
        //   DEFAULT: "rgb(var(--accent) / <alpha-value>)",
        //   foreground: "rgb(var(--foreground) / <alpha-value>)",
        //   background: "rgb(var(--background) / <alpha-value>)",
        // },
        // success: {
        //   DEFAULT: "rgb(var(--success) / <alpha-value>)",
        // },
        // danger: {
        //   DEFAULT: "rgb(var(--danger) / <alpha-value>)",
        // },

        gunmetal: "#1E293B",
        mediumTurquoise: "#14B8A6",
        cultured: "#fafafa",
        slateGray: "#64748B",
        honeydew: "#F0FDFA",
        gainsboro: "#E2E8F0",
        aliceBlue: "#F8FAFC",
        ashGray: "#BEBCBD",
        cadetGray: "#94A3B8",
        crimson: "#EF4444",

      },


    },
    fontFamily: {
      Inter: "Inter",

    },
  },

};
export default config;
