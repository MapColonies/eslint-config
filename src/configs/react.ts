import { browser } from 'globals';
import reactPlugin from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import { config } from '../helpers';
// export default {
//   extends: ['plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended'],
//   env: {
//     browser: true,
//   },
//   rules: {
//     'react/boolean-prop-naming': 'error',
//     'react/hook-use-state': 'error',
//     'react/prop-types': 'off',
//   },
//   settings: {
//     react: {
//       version: 'detect',
//     },
//   },
// };

// https://github.com/facebook/react/pull/28773#issuecomment-2422831582

const reactRules = config({
  name: 'map-colonies react rules',
  files: ['**/*.tsx'],
  extends: [reactPlugin.configs.flat.recommended ?? {}, reactPlugin.configs.flat.jsxRuntime ?? {}],
  languageOptions: {
    globals: browser,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/boolean-prop-naming': 'error',
    'react/hook-use-state': 'error',
    'react/prop-types': 'off',
  },
});

export default config(reactRules);
