module.exports = {
    automock: false,
    bail: false,
    testRegex: "/*.test.js$",
    // collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{js,jsx}',
        '!**/node_modules/**',
        '!**/vendor/**'
    ],
    coverageReporters: [
        "html",
        "text"
    ],
    coverageDirectory: 'coverage',
    moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
    transform: {
        '^.+\\.js?$': 'babel-jest'
    },
    verbose: true,
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
