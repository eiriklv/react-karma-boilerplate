var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var assert = require('assert');

describe('CheckboxWithLabel', function() {
  it('changes the text after click', function() {
    /**
     * Here we're creating an injector that can mock specific parts
     * of the CheckboxWithLabel components
     *
     * check out [inject-loader](https://www.npmjs.com/package/inject-loader) for more info
     */
    var Injector = require('inject?./BigComplicatedComponent.jsx!../src/components/CheckboxWithLabel.jsx');

    /**
     * Here we're creating the actual mocked component class
     */
    var CheckboxWithLabel = Injector({
      './BigComplicatedComponent.jsx': reactStub,
    });

    // Render a checkbox with label in the document
    var checkbox = TestUtils.renderIntoDocument(
      <CheckboxWithLabel
        labelOn="On"
        labelOff="Off"
      />
    );

    // Verify that it's Off by default
    var label = TestUtils.findRenderedDOMComponentWithTag(
      checkbox,
      'label'
    );

    assert.equal(React.findDOMNode(label).textContent, 'Off');

    // Simulate a click and verify that it is now On
    var input = TestUtils.findRenderedDOMComponentWithTag(
      checkbox,
      'input'
    );

    TestUtils.Simulate.change(input);
    assert.equal(React.findDOMNode(label).textContent, 'On');
  });
});
