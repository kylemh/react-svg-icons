const external = require('rollup-plugin-peer-deps-external');
const reactSvg = require('rollup-plugin-react-svg');
const svgoConfig = require('./svgo.config.json');

module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config, options) {
    config.plugins = [
      external(),
      reactSvg({
        svgo: svgoConfig,
      }),
      ...config.plugins,
    ];

    return config;
  },
};
