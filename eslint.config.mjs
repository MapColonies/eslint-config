import baseConfig from './dist/configs/ts-base.mjs';
import jestConfig from './dist/configs/jest.mjs';
import { config } from './dist/helpers.mjs';

export default config(jestConfig, baseConfig);
