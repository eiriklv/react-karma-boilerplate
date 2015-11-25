const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const expectJSX = require('expect-jsx');

expect.extend(expectJSX);

describe('CheckboxWithLabel', () => {
  it('changes the text after click', () => {
    /**
     * Here we're creating an injector that can mock specific parts
     * of the CheckboxWithLabel components
     *
     * check out [inject-loader](https://www.npmjs.com/package/inject-loader) for more info
     */
    const Injector = require(`inject!../src/components/CheckboxWithLabel.jsx`);

    /**
     * Here we're creating the actual mocked component class
     */
    const CheckboxWithLabel = Injector({
      './BigComplicatedComponent.jsx': reactStub,
      './OtherBigComplicatedComponent.jsx': reactStub,
    });

    // Render a checkbox with label in the document
    const checkbox = TestUtils.renderIntoDocument(
      <CheckboxWithLabel
        labelOn="On"
        labelOff="Off"
      />
    );

    // Verify that it's Off by default
    const label = TestUtils.findRenderedDOMComponentWithTag(
      checkbox,
      'label'
    );

    expect(ReactDOM.findDOMNode(label).textContent).toEqual('Off');

    // Simulate a click and verify that it is now On
    const input = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input');
    TestUtils.Simulate.change(input);

    expect(ReactDOM.findDOMNode(label).textContent).toEqual('On')
  });
});
