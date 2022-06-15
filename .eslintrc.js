module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  root: true,
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  extends: ['plugin:@typescript-eslint/recommended', 'kagura'],
}
