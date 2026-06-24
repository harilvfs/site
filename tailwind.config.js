const theme = require("tailwindcss/defaultTheme");

module.exports = {
  important: true,
  content: [
    "content/**/*.md",
    "layouts/**/*.html",
    "./themes/**/layouts/**/*.html",
    "./content/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.html",
  ],
  safelist: ["pagination", "page-item"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        darkest: theme(`colors.neutral.950`),
        darker: theme(`colors.neutral.900`),
        dark: theme(`colors.neutral.800`),
      }),
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "code::before": false,
            "code::after": false,
            a: {
              color: theme(`colors.blue.600`),
              textDecoration: "none",
              "&:hover": {
                color: theme(`colors.blue.700`),
                textDecoration: "underline",
              },
            },
            pre: {
              backgroundColor: theme(`colors.stone.100`),
              color: theme(`colors.stone.700`),
            },
            code: { color: theme(`colors.stone.700`) },
          },
        },
        invert: {
          css: {
            color: theme(`colors.stone.300`),
            a: {
              color: theme(`colors.blue.400`),
              "&:hover": { color: theme(`colors.blue.300`) },
            },
            h1: { color: theme(`colors.stone.100`) },
            h2: { color: theme(`colors.stone.100`) },
            h3: { color: theme(`colors.stone.100`) },
            h4: { color: theme(`colors.stone.100`) },
            h5: { color: theme(`colors.stone.100`) },
            h6: { color: theme(`colors.stone.100`) },
            strong: { color: theme(`colors.stone.100`) },
            td: { color: theme(`colors.stone.300`) },
            blockquote: { color: theme(`colors.stone.400`) },
            pre: {
              backgroundColor: theme(`colors.neutral.900`),
            },
            code: { color: theme(`colors.stone.300`) },
          },
        },
      }),
    },
  },
  variants: { typography: ["invert"], extend: {} },
  plugins: [require("@tailwindcss/typography")],
};
