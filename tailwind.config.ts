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
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          foreground: "rgb(var(--primary-foreground) / <alpha-value>)",
          lightGray: "rgb(var(--primary-light-gray) / <alpha-value>)",
          superSilver: "rgb(var(--superSilver) / <alpha-value>)",
          lightBlue: "rgb(var(--lightBlue) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
          foreground: "rgb(var(--secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(var(--destructive) / <alpha-value>)",
          foreground: "rgb(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--muted) / <alpha-value>)",
          foreground: "rgb(var(--muted-foreground) / <alpha-value>)",
          secondary: "rgb(var(--muted-secondary) / <alpha-value>)",
          dark: "rgb(var(--muted-dark) / <alpha-value>)",
          kettleMan: "rgb(var(--kettleMan) / <alpha-value>)",
          lynxWhite: "rgb(var(--lynxWhite) / <alpha-value>)",
          coldMorning: "rgb(var(--coldMorning) / <alpha-value>)",
          flyByNight: "rgb(var(--muted-flyByNight) / <alpha-value>)",
          marina: "rgb(var(--muted-marina) / <alpha-value>)",
          goshawkGrey: "rgb(var(--muted-goshawkGrey) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          foreground: "rgb(var(--accent-foreground) / <alpha-value>)",
          secondary: "rgb(var(--accent-secondary) / <alpha-value>)",
          orchid: "rgb(var(--accent-orchid) / <alpha-value>)",
          akebiPurple: "rgb(var(--accent-akebiPurple) / <alpha-value>)",
          sassyPink: "rgb(var(--accent-sassyPink) / <alpha-value>)",
          fragrantJasmine: "rgb(var(--accent-fragrantJasmine) / <alpha-value>)",
          welcomingWasp: "rgb(var(--accent-welcomingWasp) / <alpha-value>)",
          sky: "rgb(var(--accent-sky) / <alpha-value>)",
          yellowWasp: "rgb(var(--accent-wasp) / <alpha-value>)",
          pinkFlamingo: "rgb(var(--accent-pinkFlamingo) / <alpha-value>)",
          flamBoyant: "rgb(var(--accent-flamBoyant) / <alpha-value>)",
          irrigoPurple: "rgb(var(--accent-irrigoPurple) / <alpha-value>)",
        },
        success: {
          DEFAULT: "rgb(var(--success) / <alpha-value>)",
        },
        danger: {
          DEFAULT: "rgb(var(--danger) / <alpha-value>)",
        },
        linoleumBlue: {
          DEFAULT: "rgb(var(--linoleumBlue) / <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        10: "0.625rem",
        20: "1.25rem",
      },
      boxShadow: {
        greenSoft: "4px 8px 24px 0px rgba(56, 142, 60, 0.25)",
        card: "0px 1px 1px 0px rgba(0, 0, 0, 0.08), 0px 0px 1px 0px rgba(0, 0, 0, 0.12), 0px 4px 12px 0px rgba(0, 0, 0, 0.04), 0px 2px 6px 0px rgba(0, 0, 0, 0.04)",
        modal: "0px 4px 8px 0px rgba(0, 0, 0, 0.08), 0px 0px 2px 0px rgba(0, 0, 0, 0.12)",
        dropdown:
          "0px 1px 1px 0px rgba(0, 0, 0, 0.08), 0px 0px 1px 0px rgba(0, 0, 0, 0.08), 0px 4px 12px 0px rgba(0, 0, 0, 0.04), 0px 2px 6px 0px rgba(0, 0, 0, 0.04)",
        cardXl: "0px 1px 4px 0px rgba(0, 0, 0, 0.12), 0px 4px 24px 0px rgba(0, 0, 0, 0.08)",
        imgFile:
          "0px 1px 1px 0px rgba(0, 0, 0, 0.08), 0px 2px 8px 0px rgba(0, 0, 0, 0.04), 0px 0px 1px 0px rgba(0, 0, 0, 0.24)",
      },
      transitionProperty: {
        button:
          "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
      },
      transitionDuration: {
        default: "300ms",
      },
      transitionTimingFunction: {
        default: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      animation: {
        "caret-blink": "caret-blink 1.2s ease-out infinite",
        "fade-in": "fade-in 0.2s ease-out, zoom-in 0.2s ease-out",
        "fade-out": "fade-out 0.2s ease-in, zoom-out 0.2s ease-in",
        "button-loader": "fade-in 450ms ease-in-out infinite alternate-reverse",
        enter: "enter 0.4s ease forwards",
        leave: "leave 0.4s ease forwards",
      },
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        enter: {
          "0%": { transform: "scale(0.9) translateY(50%)", opacity: "0" },
          "100%": { transform: "scale(1) translateY(0)", opacity: "1" },
        },
        leave: {
          "0%": { transform: "scale(1) translateY(0)", opacity: "1" },
          "100%": { transform: "scale(0.9) translateY(50%)", opacity: "0" },
        },
      },
      fontFamily: {
        Inter: "Inter",
      },
      opacity: {
        "8": ".08",
      },
      lineHeight: {
        2.5: "0.625rem", // 10px
        7.5: "1.875rem", // 30px
        5.5: "1.375rem", // 22px
      },
      spacing: {
        0.5: "0.125rem", // 2px
        1.5: "0.375rem", // 6px
        4.5: "1.125rem", // 18px
        5.5: "1.375rem", // 22px
        12.5: "3.125rem",
        13: "3.25rem",
        76: "19rem", // 304px
        90: "22.5rem",
      },
      scale: {
        "250": "2.5",
      },
    },
  },

};
export default config;
