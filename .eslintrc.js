const ERR = 2;
const WARN = 1;
const OFF = 0;

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  extends: ["eslint:recommended", "prettier"],
  rules: {
    "no-console": WARN,
    complexity: WARN,
    "no-empty-function": WARN,
    "no-floating-decimal": WARN,
    "no-return-assign": ERR,
    "no-shadow": WARN,
    "no-throw-literal": WARN,
    "no-var": ERR,
    "prefer-spread": WARN
  }
};
