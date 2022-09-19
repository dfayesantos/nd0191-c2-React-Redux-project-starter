module.exports = {
    preset: 'react-native', '../../jest.preset.js',
    collectCoverage: true,
    moduleDirectories: ['node_modules', 'src'],
    transform: {
      '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js', '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
      '^.+\\.[tj]sx?$': 'ts-jest',
    },
    setupFiles: ['<rootDir>setup-tests.js'],
    transformIgnorePatterns: ['node_modules/(?!(jest-)?react-native)', '/node_modules/(?!rx-basic-store)', `/node_modules/(?!${esModules})`,
    '/node_modules/@stencil/core/internal/app-data'], 
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    allowJs: true,
    coveragePathIgnorePatterns: ['/node_modules/', '/jest'],
    testEnvironment: 'jsdom',
  };