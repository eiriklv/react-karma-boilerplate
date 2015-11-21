// This "complicated" module shouldn't be transitively included in tests --
// it should be replaced with a stub. See tests/CheckboxWithLabel.test.jsx.

const React = require('react');

const BigComplicatedComponent = React.createClass({
  render() {
    return (
      <div className="BigComplicatedComponent">
        42
      </div>
    );
  }
});

module.exports = BigComplicatedComponent;
