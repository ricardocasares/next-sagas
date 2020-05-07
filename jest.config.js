module.exports = {
  transform: {
    "^.+\\.tsx?$": "babel-jest",
    "^.+\\.css$": "<rootDir>/.config/jest/css.js",
  },
  moduleNameMapper: {
    "^.+\\.module\\.(css)$": "identity-obj-proxy",
  },
};
