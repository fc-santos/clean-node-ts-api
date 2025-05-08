// eslint.config.js (ESM Flat Config)
import eslintLove from "eslint-config-love";
import eslintParser from "@typescript-eslint/parser";

export default [
  {
    ...eslintLove,
    ignores: ["node_modules", "dist", "coverage"],
    files: ["**/*.ts"],
    languageOptions: {
      parser: eslintParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    rules: {
      "space-before-function-paren": ["error", "always"],
      "@typescript-eslint/explicit-function-return-type": ["error"],
      semi: ["error", "never"],
      "no-trailing-spaces": ["error"],
    },
  },
];
