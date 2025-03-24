import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import globals from "globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    plugins: {
      react,
      prettier,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "prettier/prettier": "error",
      "no-unused-vars": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    ignores: ["**/temp.js", "node_modules/", ".next/"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        myCustomGlobal: "readonly",
      },
    },
  },
  {
    /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
    files: ["src/**/*", "test/**/*"],
    rules: {
      semi: ["warn", "always"],
      "no-console": ["error", { allow: ["warn", "error", "info"] }],
    },
  },
];
