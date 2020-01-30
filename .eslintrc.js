module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
    'prettier',
  ],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier": "error",
    "class-methodes-use-this": "off", // regra padrão para que todo metodo use a palavra this
    "no-param-reassign": "off", // permite que receba um parametro e altere o parametro, é preciso devido ao sequelize
    "camelcase": "off", // off para pertmitir que as variaveis não sejam sempre camelcase.. nossaVariavel
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }], // erro caso declare variavel e não utilize, variavel next podera ser declarada sem usar
  },
};
