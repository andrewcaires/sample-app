/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting",
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
  },
  "rules": {
    "semi": [
      "error",
      "always"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "indent": [
      "error",
      2
    ],
    "no-multi-spaces": [
      "error",
    ],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-namespace": "off",
    "vue/no-multiple-template-root": "off",
    "vue/no-ref-as-operand": "off",
  },
};
