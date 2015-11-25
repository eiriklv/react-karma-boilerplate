const React = require('react');

// Make console.warn throw
let warn = console.warn;
console.warn = function (warning) {
  throw new Error(warning);
  warn.apply(console, arguments);
};

// Make console.error throw
let err = console.error;
console.error = function (warning) {
  throw new Error(warning);
  err.apply(console, arguments);
};

// react component stub (global for easy access)
global.reactStub = React.createClass({
  displayName: 'StubClass',
  render() {
    return null;
  }
});

/**
 * Automatically include
 * all test files '.test.js(x)'
 */
const context = require.context('.', true, /.+\.test\.jsx?$/);
context.keys().forEach(context);
module.exports = context;
