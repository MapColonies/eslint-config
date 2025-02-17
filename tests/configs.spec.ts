import { Linter } from 'eslint';
import jestConfig from '../dist/configs/jest.mjs';
import reactConfig from '../dist/configs/react.mjs';
import tsBaseConfig from '../dist/configs/ts-base.mjs';

const configs = [
  { name: 'jest', config: jestConfig, filename: 'avi.spec.ts' },
  { name: 'react', config: reactConfig, filename: 'avi.tsx' },
  { name: 'ts-base', config: tsBaseConfig, filename: 'avi.ts' },
];

describe('configs', function () {
  it.each(configs)('$name should be a valid eslint config', function (testObject) {
    const linter = new Linter({ configType: 'flat' });
    const action = () => linter.verify('const a = 1', testObject.config as object, { filename: testObject.filename });

    expect(action).not.toThrow();
  });
});
