import type globals from 'globals';
import type reactPluginType from 'eslint-plugin-react';
// // @ts-ignore
// import pluginReactHooks from 'eslint-plugin-react-hooks';
import { config } from '../helpers.mjs';
import { importOrThrow } from '../internal/helpers.js';

const reactPlugin = await importOrThrow<typeof reactPluginType>('eslint-plugin-react');
const pluginReactHooks = await importOrThrow<any>('eslint-plugin-react-hooks');
const importedGlobals = await importOrThrow<typeof globals>('globals');
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

console.log(reactPlugin.configs.flat);

const reactRules = config(reactPlugin.configs.flat.recommended ?? {}, reactPlugin.configs.flat?.['jsx-runtime'] ?? {}, {
  name: 'map-colonies react rules',
  files: ['**/*.tsx'],
  languageOptions: {
    globals: importedGlobals.browser,
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

const reactHooksRules = config({
  name: 'map-colonies react hooks rules',
  files: ['**/*.tsx'],
  plugins: { 'react-hooks': pluginReactHooks },
  rules: pluginReactHooks.configs.recommended.rules,
});

export default config(reactRules, reactHooksRules);
