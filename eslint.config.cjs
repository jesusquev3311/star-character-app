// eslint.config.js
const { defineConfig } = require('eslint/config');
const globals = require('globals');
const js = require('@eslint/js');
const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = defineConfig([
  {
    files: ['src/**/*.js', 'test/**/*.js'],
    ignores: ['node_modules', 'dist', 'coverage'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
        mocha: true, // si usas describe/it
      },
    },

    extends: compat.extends(
      'eslint:recommended',
      'plugin:lit/recommended',
      'plugin:prettier/recommended'
    ),

    // 👇 Aún podemos cargar el plugin "html" sin usar extends
    plugins: {
      html: require('eslint-plugin-html'),
    },

    rules: {
      'no-console': 'off',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'lit/no-invalid-html': 'error',
      'lit/no-duplicate-template-bindings': 'error',
      'lit/no-template-arrow': 'warn',
    },
  },
]);
