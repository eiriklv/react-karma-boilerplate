const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const assert = require('assert');

describe('OtherBigComplicatedComponent', () => {
  it('outputs what it should', () => {
    const OtherBigComplicatedComponent = require('../src/components/OtherBigComplicatedComponent.jsx');

    // Render a checkbox with label in the document
    const component = TestUtils.renderIntoDocument(
      <OtherBigComplicatedComponent />
    );

    assert.equal(
      ReactDOM.findDOMNode(component).textContent,
      '13'
    );
  });
});
