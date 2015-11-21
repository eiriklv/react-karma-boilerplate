const React = require('react');

// Make console.warn throw
let warn = console.warn;
console.warn = function (warning) {
  throw new Error(warning);
  warn.apply(console, arguments);
};

// react component stub (global for easy access)
global.reactStub = React.createClass({
  displayName: 'StubClass',
  render() {
    return null;
  }
});

// Run tests
require('./CheckboxWithLabel.test.jsx');
require('./BigComplicatedComponent.test.jsx');
