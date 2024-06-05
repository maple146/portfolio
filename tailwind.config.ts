import type { Config } from "tailwindcss"
const { fontFamily } = require("tailwindcss/defaultTheme")

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    colors: {
      black: '#191919',
      white: '#F6F6F6',
      main: {
        100: '#47D7AC',
        500: '#2EBB90',
        700: '#0B6D5D',
        900: '#194d3d'
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        md: "860px",
      },
    },
    extend: {
      fontSize: {
        xs: ["16px", "20px"],
        sm: ["18px", "24px"],
        base: ["20px", "28px"],
        lg: ["24px", "32px"],
        xl: ["32px", "44px"],
        "xl-2": ["40px", "54px"],
        "xl-3": ["48px", "64px"],
        "xl-4": ["56px", "76px"],
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans]
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config