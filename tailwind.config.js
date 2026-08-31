/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Canvas — Vercel Geist `background-100` (dark)
        canvas: "#000000",
        // Surfaces — window bodies, title bars, insets
        surface: {
          DEFAULT: "#0a0a0a",
          2: "#111111",
          3: "#161616",
          4: "#1a1a1a",
        },
        // Hairlines — Geist gray-200 / gray-300 (dark)
        line: {
          DEFAULT: "#1f1f1f",
          strong: "#292929",
          bright: "#2e2e2e",
        },
        // Text — Geist gray-1000 / gray-900 / gray-700 / gray-500 (dark)
        ink: {
          DEFAULT: "#ededed",
          dim: "#a0a0a0",
          mute: "#8f8f8f",
          faint: "#454545",
        },
        // macOS window controls — the only chromatic accents in the system
        tl: {
          red: "#ff5f57",
          yellow: "#febc2e",
          green: "#28c840",
        },
        geist: {
          blue: "#006efe",
          sky: "#47a8ff",
          green: "#00ca50",
          amber: "#ffae00",
        },
      },
      fontFamily: {
        sans: [
          "Geist",
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Text",
          "Inter",
          "Segoe UI",
          "sans-serif",
        ],
        mono: [
          "Geist Mono",
          "SF Mono",
          "SFMono-Regular",
          "ui-monospace",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem" }],
      },
      letterSpacing: {
        label: "0.14em",
      },
      borderRadius: {
        win: "12px",
      },
      boxShadow: {
        win: "0 0 0 1px rgba(255,255,255,0.06), 0 24px 60px -24px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.6)",
        dock: "0 8px 40px -8px rgba(0,0,0,0.95), 0 0 0 1px rgba(255,255,255,0.08)",
        glow: "0 0 0 1px rgba(255,255,255,0.14), 0 0 32px -8px rgba(255,255,255,0.12)",
      },
      animation: {
        caret: "caret 1.05s steps(1) infinite",
        "fade-up": "fade-up 0.5s cubic-bezier(0.22,1,0.36,1) both",
        "pulse-dot": "pulse-dot 2.4s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        caret: { "0%,50%": { opacity: 1 }, "50.1%,100%": { opacity: 0 } },
        "fade-up": {
          from: { opacity: 0, transform: "translateY(12px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        "pulse-dot": {
          "0%,100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.45, transform: "scale(0.85)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
