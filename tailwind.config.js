/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ff5c35",
          hover: "#e04f2c",
        },
        secondary: {
          DEFAULT: "#003a66",
          hover: "#002a4d",
          dark: "#001e38",
        },
        accent: {
          DEFAULT: "#e02454",
        },
        neutral: {
          light: "#f0f5fb",
          border: "#ced7e4",
          textMuted: "#7a8a9e",
          textDark: "#222222",
        }
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "pulse-subtle": "pulseSubtle 2s infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        }
      }
    },
  },
  plugins: [],
}
