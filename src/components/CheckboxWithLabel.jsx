var React = require('react/addons');
var BigComplicatedComponent = require('./BigComplicatedComponent.jsx');

var CheckboxWithLabel = React.createClass({
  getInitialState() {
    return {
      isChecked: false
    };
  },

  onChange() {
    this.setState({
      isChecked: !this.state.isChecked
    });
  },

  render() {
    return (
      <label className="CheckboxWithLabel">
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.onChange}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
        <BigComplicatedComponent />
      </label>
    );
  }
});

module.exports = CheckboxWithLabel;
