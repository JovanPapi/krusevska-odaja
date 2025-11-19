import js from "@eslint/js";
import importRules from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

// Exporting the ESLint configuration
// Using defineConfig for better type support and validation (intellisense), to give code suggestions
// We can have multiple config objects inside defineConfig, but each of them has 4 main sections: files, extends, languageOptions, rules
export default defineConfig([
  globalIgnores(["dist", "node_modules", "build"]), // Ignore these folders globally

  // CONFIG OBJECT
  {
    basePath: "src", // Base path for resolving files and ignores
    files: ["**/*.{ts,tsx}"], // Target all TypeScript and TSX files

    // This defines the environment in which the code runs
    languageOptions: {
      ecmaVersion: 2020, // Which ECMAScript version to use
      globals: globals.browser, // Which global variables exist (e.g., browser globals like window, document, etc.)
      sourceType: "module", // Use ES modules
      parser: tseslint.parser, // Use TypeScript parser to parse TS code
    },

    // Immediately apply these configurations and rules
    // Some of them already export plugins, so no need to define them again in the "plugins" section
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      importRules.flatConfigs.recommended,
    ],

    plugins: {
      prettier: prettier, // Prettier plugin to integrate Prettier with ESLint
      "@typescript-eslint": tseslint.plugin, // TypeScript plugin to add TypeScript-specific linting rules
      "@react-hooks": reactHooks, // React Hooks plugin to enforce rules of hooks
    },

    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json", // This loads <rootdir>/tsconfig.json to eslint
        },
        node: {
          extenstion: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },

    rules: {
      // Prettier
      "prettier/prettier": "warn", // Integrate Prettier with ESLint. Warns about code formatting issues according to Prettier rules.

      // TypeScript
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",
      camelcase: "error", // Enable camelcase rule, to enforce camelcase naming convention.

      // JS Core
      eqeqeq: "error", // Enforce the use of === and !== over == and !=
      curly: ["error", "all"], // Enforce the use of curly braces for all control statements (if, else, for, while, etc.).
      "no-console": "warn", // Warn when console statements are used (like console.log inside the code).

      // React hooks rules
      "react-hooks/rules-of-hooks": "error", // This is number 1 rule for React. Enforce the rules of React hooks. without this, i will see chaos with state, re-renders, etc.
      "react-hooks/exhaustive-deps": "error", // Ensures that all dependencies are specified for React hooks like useEffect and useCallback.

      // Import plugin rules
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ], // Enforce a specific order for import statements
    },
  },
]);
