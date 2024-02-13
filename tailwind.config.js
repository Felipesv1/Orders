/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: "Inter_600SemiBold",
        subtitile: "Inter_500Medium",
        body: "Inter_400Regular",
        bold: "Inter_700Bold",
      },
    },
  },
  plugins: [],
};
