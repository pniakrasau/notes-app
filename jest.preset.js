const nxPreset = require('@nx/jest/preset').default;

module.exports = { ...nxPreset,
    coverageThreshold: {
        global: {
            branches: 75,
            functions: 75,
            lines: 75,
            statements: 75,
        },
    },
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    // temporary added only 1 file
    collectCoverageFrom: ['<rootDir>/src/**/App.spec.tsx'],
    // collectCoverageFrom: ['<rootDir>/src/**/*.(t|j)s?(x)'],
    reporters: ['default'],
    coverageReporters: ['clover', 'json', 'lcov', 'text'],
    setupFilesAfterEnv: ['./setupTests.ts'],
};
