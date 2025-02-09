import config from './dist/configs/ts-base.js';
import tseslint from 'typescript-eslint';

console.log(config);

export default tseslint.config(config.default, {
  languageOptions: {
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
