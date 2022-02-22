const baseConfig = require("./jest.config.base");

/**
 * * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
  ...baseConfig,
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
};
