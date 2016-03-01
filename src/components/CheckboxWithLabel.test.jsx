/**
 * Dependencies
 */
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const expectJSX = require('expect-jsx');

/**
 * Extend expect with React specific functionality
 */
expect.extend(expectJSX);

/**
 * Mocha test suite
 */
describe('CheckboxWithLabel', () => {
  it('changes the text after click', () => {
    /**
     * Here we're creating an injector that can mock specific parts
     * of the CheckboxWithLabel components
     *
     * check out [inject-loader](https://www.npmjs.com/package/inject-loader) for more info
     */
    const Injector = require(`inject!./CheckboxWithLabel.jsx`);

    /**
     * Create a stub React component class
     */
    const componentStub = React.createClass({ render() { return null; } });

    /**
     * Here we're creating the actual mocked component class
     */
    const CheckboxWithLabel = Injector({
      './BigComplicatedComponent.jsx': componentStub,
      './OtherBigComplicatedComponent.jsx': componentStub,
    });

    /**
     * Render a checkbox with label in the document
     */
    const checkbox = TestUtils.renderIntoDocument(
      <CheckboxWithLabel
        labelOn="On"
        labelOff="Off"
      />
    );

    /**
     * Find the DOM component we want to test (in this case the label)
     */
    const label = TestUtils.findRenderedDOMComponentWithTag(
      checkbox,
      'label'
    );

    /**
     * Verify that it's Off by default
     */
    expect(ReactDOM.findDOMNode(label).textContent).toEqual('Off');

    /**
     * Find the DOM component we want to test (in this case the checkbox)
     */
    const input = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input');

    /**
     * Simulate a click and verify that it is now On
     */
    TestUtils.Simulate.change(input);

    /**
     * Verify that it's been switched to 'On'
     */
    expect(ReactDOM.findDOMNode(label).textContent).toEqual('On')
  });
});
