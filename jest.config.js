module.exports = {
  verbose: true,
  snapshotSerializers: [
    "enzyme-to-json/serializer"
  ],
  collectCoverageFrom: [
    "**/src/**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/config/**",
    "!**/tests/**",
    "!**/public/**",
    "!**/coverage/**",
    "!*.js"
  ],
  setupFilesAfterEnv: [
      "<rootDir>config/jest/enzyme.setup.js"
    ],
};
