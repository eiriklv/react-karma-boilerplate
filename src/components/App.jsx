require('../styles/app.css');

var React = require('react');
var CheckboxWithLabel = require('./CheckboxWithLabel.jsx');

var App = React.createClass({
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
