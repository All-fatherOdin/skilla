module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        "browser": true,
        "es2021": true
    },
    ignorePatterns: [".eslintrc.js"],
    extends: [
        "standard-with-typescript",
        "plugin:react/recommended",
        "eslint:recommended"
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: [
        "react",
        "@typescript-eslint",
    ],
    rules: {
        "@typescript-eslint/quotes": ["error", "double"],
        "@typescript-eslint/object-curly-spacing": ["error", "never"],
        "@typescript-eslint/explicit-function-return-type": "off",
        "react/react-in-jsx-scope": "off",
        "operator-linebreak": ["error", "after"],
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "warn",
        "typescript-eslint/block-spacing": "off"
    }
}