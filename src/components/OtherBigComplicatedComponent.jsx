// This "complicated" module shouldn't be transitively included in tests --
// it should be replaced with a stub. See tests/CheckboxWithLabel.test.jsx.

const React = require('react');

const OtherBigComplicatedComponent = React.createClass({
  render() {
    return (
      <div className="OtherBigComplicatedComponent">
        13
      </div>
    );
  }
});

module.exports = OtherBigComplicatedComponent;
