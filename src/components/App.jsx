require('../styles/app.css');

const React = require('react');
const CheckboxWithLabel = require('./CheckboxWithLabel.jsx');

const App = React.createClass({
  render() {
    return (
      <div>
        <CheckboxWithLabel
          labelOn="On"
          labelOff="Off"
        />
        <CheckboxWithLabel
          labelOn="På"
          labelOff="Av"
        />
      </div>
    );
  }
});

module.exports = App;
