/* eslint-disable */
// Set to only 1 test check temporary
// @TODO(pniakras) cover code with tests
export default {
  displayName: 'notes-app',
  preset: './jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': [
      '@swc/jest',
      { jsc: { parser: { syntax: 'typescript', tsx: true }, transform: { react: { runtime: 'automatic' } } } },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: './coverage',
  setupFilesAfterEnv: ['@testing-library/jest-dom', 'jest-extended', './setupTests.ts'],
  testMatch: [
    './**/*.spec.tsx',
  ],
};
