import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xs: "481px",
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
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
        "primary-foreground": "rgb(var(--primary-foreground) / <alpha-value>)",
        "primary-lightGray": "rgb(var(--primary-lightGray) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        "secondary-foreground":
          "rgb(var(--secondary-foreground) / <alpha-value>)",
        destructive: "rgb(var(--destructive) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        "muted-foreground": "rgb(var(--muted-foreground) / <alpha-value>)",
        "muted-background": "rgb(var(--muted-background) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-foreground": "rgb(var(--accent-foreground) / <alpha-value>)",
        "accent-background": "rgb(var(--accent-background) / <alpha-value>)",
        success: "rgb(var(--success) / <alpha-value>)",
        danger: "rgb(var(--danger) / <alpha-value>)",
        "frost-grey": "rgb(var(--frost-grey) / <alpha-value>)",
        rainmaker: "rgb(var(--rainmaker) / <alpha-value>)",
      },
      boxShadow: {
        lg: "0px 1px 2px 0px #0000000D",
        md: "0px 4px 4px 0px #00000040",
      },
      lineHeight: {
        "1.5": "1.21rem",
        "2.5": "1.0588rem",
        "2.6": "1.1344rem",
        "2.7": "1.5125rem",
        "3.5": "1.3613rem",
        "4.5": "1.6644rem",
      },
      letterSpacing: {
        tighter: "0.5%",
        sm: "2%",
        md: "3%",
      },
      fontSize: {
        maxXl: "1.375rem",
        maxSm: "0.9375rem",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
    fontFamily: {
      Inter: "Inter",
    },
  },
};
export default config;
