/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      "2.5xl": ["1.5rem", "2.344rem"],
      "3.5xl": ["2rem", "3.125rem"],
      "1.5xl": ["1.25rem", "1.953rem"],
    },
    extend: {
      colors: {
        display: "#F7F8F8",
        bookDisplay: "#FCFCFC",
        borderColor: "#E4E4E4",
      },
      fontFamily: {
        vazir: ["Vazirmatn", "sans-serif"],
      },
      width: {
        117.5: "29.375rem",
        "460px": "28.75rem",
        "400px": "25rem",
      },
      height: {
        130.75: "32.688rem",
        "596px": "37.25rem",
        "53px": "3.313rem",
      },
      borderRadius: {
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
