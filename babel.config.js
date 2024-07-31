const { default: plugin } = require("babel-plugin-module-resolve");

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module-resolver", {
        alias: {
          "@src": "./src/*",
        }
      }]
    ]
  };
};
