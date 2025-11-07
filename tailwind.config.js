/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#e6f0ff",
          100: "#b3d1ff",
          200: "#80b3ff",
          300: "#4d94ff",
          400: "#1a75ff",
          500: "#0056e6",
          600: "#0044b3",
          700: "#003380",
          800: "#00224d",
          900: "#0a0e27",
          950: "#050712",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": {
            boxShadow:
              "0 0 5px rgba(96, 165, 250, 0.5), 0 0 10px rgba(96, 165, 250, 0.3)",
          },
          "100%": {
            boxShadow:
              "0 0 20px rgba(139, 92, 246, 0.8), 0 0 30px rgba(139, 92, 246, 0.5)",
          },
        },
      },
    },
  },
  plugins: [],
};
