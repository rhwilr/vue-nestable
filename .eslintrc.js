module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    'parser': 'babel-eslint',
    'ecmaVersion': 2017
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  // add your custom rules here
  rules: {},
  globals: {}
}