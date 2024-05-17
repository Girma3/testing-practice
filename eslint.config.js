module.exports = {
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:js/recommended", // Add this line
  ],
  rules: {
    indent: "error",
  },
  overrides: [
    {
      files: ["**/*.js"],
      parserOptions: {
        sourceType: "commonjs",
      },
    },
  ],
  globals: {},
};
