# ESLint config

A collection of ESLint configs for various frameworks and environments.

## Available Configs

- **ts-base**: base configurations for TypeScript.
- **React**: rules for React (extends react-app).
- **Jest**: rules for Jest.

## Installation

```bash
$ npm install --save-dev eslint @map-colonies/eslint-config
```

or

```bash
$ yarn add --dev eslint @map-colonies/eslint-config
```

## Usage

Add the configs you want to the extend section of your `eslintConfig` of your `package.json`, or to your `.eslintrc` configuration file.
<br/>
**Note:** make sure to add `ts-base` last.

```json
 "eslintConfig": {
    "extends": [
        "@map-colonies/eslint-config/react",
        "@map-colonies/eslint-config/ts-base"
      ]
  }
```

Then add the path to your TypeScript configuration file to the `parserOptions`

```json
"eslintConfig": {
    "parserOptions": {
      "project": "./path/to/your/tsconfig.json"
    }
  }
```

## Adding new Configs

Add a new file and name it as you would like. Inside export the ESLint configuration.

```js
module.exports = {
  extends: ['plugin:jest/recommended', 'plugin:jest/style'],
  plugins: ['jest'],
  env: {
    'jest/globals': true,
  },
};
```

after you finished developing the config, make sure it works by using the `--print-config` flag of ESLint, in the project you use for testing.

```bash
$ npx eslint --print-config index.ts
```

Don't forget adding the config to this readme :blush:

## Issues
If any linting error is appearing twice, or you have any other problem, please open an issue with all the details you have.
