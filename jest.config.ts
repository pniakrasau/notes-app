const TEST_IGNORE_PATTERNS = [
  // styles
  '\\.(style)\\.ts',
  '<rootDir>/src/app/mock',
  '<rootDir>/src/app/models',
];

/* eslint-disable */
// Set to only 1 test check temporary
// @TODO(pniakras) cover code with tests
export default {
  displayName: 'notes-app',
  preset: './jest.preset.js',
  roots: ['<rootDir>/src/tests'],
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': [
      '@swc/jest',
      { jsc: { parser: { syntax: 'typescript', tsx: true }, transform: { react: { runtime: 'automatic' } } } },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coveragePathIgnorePatterns: TEST_IGNORE_PATTERNS,
  coverageDirectory: './coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.(ts|tsx)'],
  setupFilesAfterEnv: ['@testing-library/jest-dom', 'jest-extended', './setupTests.ts'],
  testMatch: [
    './**/*.spec.ts',
    './**/*.spec.tsx',
  ],
};
