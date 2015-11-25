var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    // Run tests in Chrome and Firefox
    browsers: ['Firefox', 'Chrome'],

    // Just run once by default
    singleRun: true,

    // Use the mocha test framework
    frameworks: ['mocha'],

    // Just load this file
    files: [
      'tests/_index.js'
    ],

    // Preprocess with webpack and our sourcemap loader
    preprocessors: {
      'tests/_index.js': ['webpack', 'sourcemap']
    },

    // Report results in this format
    reporters: ['mocha'],

    // Kind of a copy of your webpack config
    webpack: {
      devtool: 'inline-source-map',

      module: {
        loaders: webpackConfig.module.loaders
      }
    },

    // Please don't spam the console when running in karma!
    webpackServer: {
      noInfo: true
    }
  });
};
