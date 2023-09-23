/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },

      colors: {
        "vp-c-white": "#ffffff",
        "vp-c-black": "#000000",
        "vp-c-gray": "#8e8e93",
        "vp-c-text-light-1": "60 60 67",
        "vp-c-text-light-2": "60, 60, 67/ .75",
        "vp-c-text-light-3": "60, 60, 67/ .33",
        "vp-c-text-dark-1": "255, 255, 245/ .86",
        "vp-c-text-dark-2": "235, 235, 245/.6",
        "vp-c-text-dark-3": "235, 235, 245/.38",
        "vp-c-green": "#10b981",
        "vp-c-green-light": "#34d399",
        "vp-c-green-lighter": "#6ee7b7",
        "vp-c-green-dark": "#059669",
        "vp-c-green-darker": "#047857",
        "vp-c-green-dimm-1": "16, 185, 129/.05",
        "vp-c-green-dimm-2": "16, 185, 129/ .2",
        "vp-c-green-dimm-3": "16, 185, 129/ .5",
        "vp-c-yellow": "#d97706",
        "vp-c-yellow-light": "#f59e0b",
        "vp-c-yellow-lighter": "#fbbf24",
        "vp-c-yellow-dark": "#b45309",
        "vp-c-yellow-darker": "#92400e",
        "vp-c-yellow-dimm-1": "234, 179, 8/ .05",
        "vp-c-yellow-dimm-2": "234, 179, 8/ .2",
        "vp-c-yellow-dimm-3": "234, 179, 8/ .5",
        "vp-c-red": "#f43f5e",
        "vp-c-red-light": "#fb7185",
        "vp-c-red-lighter": "#fda4af",
        "vp-c-red-dark": "#e11d48",
        "vp-c-red-darker": "#be123c",
        "vp-c-red-dimm-1": "244, 63, 94/.05",
        "vp-c-red-dimm-2": "244, 63, 94/ .2",
        "vp-c-red-dimm-3": "244, 63, 94/ .5",
        "vp-c-sponsor": "#db2777",

        light: {
          branding: {
            "vp-c-black": "#000",
            "vp-c-white": "#fffff",
          },
        },

        branding: {
          light: "FFCD2A",
          DEFAULT: "#F7AB0A",
          dark: "FFCD2A",
        },
      },
    },
  },
  daisyui: {
    themes: ["lofi"],
  },
  plugins: [require("@tailwindcss/line-clamp"), require("daisyui")],
}
