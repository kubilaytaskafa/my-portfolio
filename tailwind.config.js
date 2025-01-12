/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from "tailwind-scrollbar";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.5s ease-out forwards", // Animasyon adı ve özellikleri
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" }, // Başlangıçta opaklık 0 olacak
          "100%": { opacity: "1" }, // Animasyon sonunda opaklık 1 olacak
        },
      },
      colors: {
        scrollbarBg: "#e5e7eb", // Scrollbar track rengi (arka plan)
        scrollbarThumb: "#9ca3af", // Scrollbar thumb rengi
        scrollbarThumbHover: "#6b7280", // Hover durumunda thumb rengi
      },
    },
  },
  plugins: [
    tailwindScrollbar,
    // Scrollbar plugin ekleniyor
  ],
};
