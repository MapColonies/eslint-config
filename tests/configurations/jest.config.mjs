/** @type {import('jest').Config} */
export default {
  transform: {
    '^.+\\.m?ts$': '@swc/jest',
  },
  coverageReporters: ['text'],
  rootDir: '../../.',
  testMatch: ['<rootDir>/tests/**/*.spec.ts'],
  collectCoverage: false,
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts', '.tsx', '.mts'],
};
