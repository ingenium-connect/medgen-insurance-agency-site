import nextPlugin from "@next/eslint-plugin-next";
import ts from "@typescript-eslint/parser";

export default [
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: ts,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: true,
      },
    },
    plugins: {
      "@next/next": nextPlugin,
      "@typescript-eslint": {
        rules: {},
      },
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      // Disable rules that conflict with TypeScript
      "@next/next/no-html-link-for-pages": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "no-var": "error",
      "prefer-const": "error",
    },
  },
];
