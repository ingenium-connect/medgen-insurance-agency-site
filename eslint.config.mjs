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
      globals: {
        process: "readonly",
        window: "readonly",
        React: "readonly",
        Metadata: "readonly",
      },
    },
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      // Disable rules that conflict with TypeScript or are too strict
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-img-element": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];
