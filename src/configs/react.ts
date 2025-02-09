/** @type {import('eslint').ESLint.ConfigData} */
export default {
  extends: ['plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended', 'prettier'],
  env: {
    browser: true,
  },
  rules: {
    'react/boolean-prop-naming': 'error',
    'react/hook-use-state': 'error',
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
