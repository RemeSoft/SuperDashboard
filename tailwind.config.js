/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        custom: {
          primary: {
            light: "#ffffff",
            dark: "#ffffff",
          },
          secondary: {
            light: "#F7F8FA",
            dark: "#ffffff",
          },
          tertiary: {
            light: "#F4F4F4",
            dark: "#ffffff",
          },
          text: {
            primary: {
              light: "#334155",
              dark: "#ffffff",
            },
            secondary: {
              light: "#808080",
              dark: "#ffffff",
            },
            highlight: {
              light: "#ffffff",
              dark: "#ffffff",
            },
          },
          border: {
            light: "#E1E1E1",
            dark: "#ffffff",
          },
          state: {
            success: {
              background: "#DBF4F1",
              foreground: "#287F71",
            },
          },
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
