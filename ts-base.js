const namingConventions = [
  'error',
  {
    selector: 'default',
    format: ['camelCase'],
  },

  {
    selector: 'variable',
    format: ['camelCase', 'UPPER_CASE'],
  },
  {
    selector: 'variable',
    format: ['PascalCase'],
    filter: {
      regex: '^.*Provider$',
      match: true,
    },
  },
  {
    selector: 'parameter',
    format: ['camelCase'],
    leadingUnderscore: 'allow',
  },
  {
    selector: 'memberLike',
    modifiers: ['private'],
    format: ['camelCase'],
    // leadingUnderscore: 'require',
  },
  {
    selector: 'enumMember',
    format: ['UPPER_CASE'],
  },
  {
    selector: 'typeLike',
    format: ['PascalCase'],
  },
];

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['import', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  // overrides for TSX (mostly for react)
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        '@typescript-eslint/naming-convention': [
          ...namingConventions,
          {
            selector: 'variable',
            types: ['function'],
            format: ['camelCase', 'PascalCase'],
          },
        ],
      },
    },
    // overrides for storybook
    {
      files: ['**/*.stories.ts?(x)'],
      rules: {
        '@typescript-eslint/no-magic-numbers': 'off',
      },
    },
    // overrides for unit tests
    {
      files: ['**/*.spec.ts?(x)', '**/*.test.ts?(x)'],
      rules: {
        '@typescript-eslint/no-magic-numbers': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
  rules: {
    '@typescript-eslint/array-type': ['error', { default: 'array' }],

    '@typescript-eslint/ban-ts-comment': 'warn',

    '@typescript-eslint/ban-tslint-comment': 'error',

    '@typescript-eslint/ban-types': 'error',

    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    '@typescript-eslint/explicit-function-return-type': 'warn',

    '@typescript-eslint/explicit-member-accessibility': 'error',

    '@typescript-eslint/member-ordering': 'warn',

    '@typescript-eslint/method-signature-style': 'error',

    '@typescript-eslint/no-empty-interface': 'off',

    'brace-style': 'off',

    '@typescript-eslint/brace-style': ['error'],

    curly: 'error',

    camelcase: 'off',

    'no-lonely-if': 'error',

    '@typescript-eslint/naming-convention': namingConventions,

    '@typescript-eslint/no-base-to-string': 'warn',

    '@typescript-eslint/no-confusing-non-null-assertion': 'error',

    '@typescript-eslint/no-extraneous-class': 'warn',

    '@typescript-eslint/no-throw-literal': 'error',

    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

    '@typescript-eslint/no-unnecessary-condition': 'error',

    '@typescript-eslint/no-unnecessary-type-arguments': 'warn',

    '@typescript-eslint/prefer-literal-enum-member': 'error',

    '@typescript-eslint/prefer-nullish-coalescing': 'warn',

    '@typescript-eslint/prefer-optional-chain': 'warn',

    '@typescript-eslint/prefer-readonly': 'error',

    '@typescript-eslint/prefer-string-starts-ends-with': 'error',

    '@typescript-eslint/promise-function-async': 'error',

    '@typescript-eslint/require-array-sort-compare': 'warn',

    '@typescript-eslint/strict-boolean-expressions': 'warn',

    '@typescript-eslint/switch-exhaustiveness-check': 'error',

    '@typescript-eslint/no-magic-numbers': [
      'error',
      {
        ignoreArrayIndexes: true,
        ignore: [1, 0],
        ignoreNumericLiteralTypes: true,
      },
    ],

    '@typescript-eslint/default-param-last': 'error',

    '@typescript-eslint/no-dupe-class-members': 'error',

    '@typescript-eslint/no-unused-expressions': 'error',

    '@typescript-eslint/no-unused-vars': [
      'warn',
      { ignoreRestSiblings: true },
    ],

    '@typescript-eslint/return-await': 'error',

    'import/order': 'error',

    'import/first': 'error',

    'import/exports-last': 'error',

    'import/newline-after-import': 'error',
  },
};
