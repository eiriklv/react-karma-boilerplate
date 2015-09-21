var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var assert = require('assert');

describe('BigComplicatedComponent', function() {
  it('outputs what it should', function() {
    var BigComplicatedComponent = require('../src/components/BigComplicatedComponent.jsx');

    // Render a checkbox with label in the document
    var component = TestUtils.renderIntoDocument(
      <BigComplicatedComponent />
    );

    assert.equal(React.findDOMNode(component).textContent, '42');
  });
});
