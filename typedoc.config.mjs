/** @type {import('typedoc').TypeDocOptions} */
export default {
  entryPoints: ['src/helpers.mts', 'src/configs/jest.mts', 'src/configs/ts-base.mts', 'src/configs/react.mts'],
  out: 'docs',
  includeVersion: true,

  categorizeByGroup: true,

  navigation: {
    includeGroups: true,
  },
};
