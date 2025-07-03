import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import react from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  {
    ...react.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  react.configs.flat["jsx-runtime"],
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      rules: {
        "react/no-unescaped-entities": "off",
        "react/prop-types": "off",
      },
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  prettier,
];
