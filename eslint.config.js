import { defineConfig } from "eslint/config";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";

export default defineConfig([
    {
        files: ["**/*.{ts,tsx}"], // Применяется только к TS/TSX файлам
        plugins: {
            "@typescript-eslint": tseslint, // Регистрируем плагин
        },
        languageOptions: {
            parser: tsparser, // Используем TS парсер
            parserOptions: {
                project: "./tsconfig.json", // Укажите путь к вашему tsconfig
                ecmaVersion: "latest",
                sourceType: "module"
            }
        },
        rules: {
            // TypeScript-специфичные правила
            "@typescript-eslint/no-unused-vars": "error",
            "@typescript-eslint/no-explicit-any": "warn",

            // Ваши кастомные правила
            // "max-len": ["warn", 100],
            "max-params": ["error", 3]
        }
    },
]);
