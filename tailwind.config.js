/** @type {import('tailwindcss').Config} */
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
    },
  },
  plugins: [],
};
