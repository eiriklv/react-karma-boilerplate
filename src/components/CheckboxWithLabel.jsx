/**
 * Dependencies
 */
const React = require('react');

/**
 * Import sub-components
 */
const BigComplicatedComponent = require('./BigComplicatedComponent.jsx');
const OtherBigComplicatedComponent = require('./OtherBigComplicatedComponent.jsx');

/**
 * A component with state/interaction
 */
const CheckboxWithLabel = React.createClass({
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
        <OtherBigComplicatedComponent />
      </label>
    );
  }
});

module.exports = CheckboxWithLabel;
