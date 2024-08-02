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
      gray: '#94A3B8',
      white: '#F6F6F6',
      main: {
        100: '#6bdbba',
        300: '#4ad3aa',
        500: '#2EBB90',
        700: '#28a47f',
        900: '#208366'
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
        xxxs: ["12px", "13px"],
        xxs: ["14px", "15px"],
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