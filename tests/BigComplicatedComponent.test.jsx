const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const assert = require('assert');

describe('BigComplicatedComponent', () => {
  it('outputs what it should', () => {
    const BigComplicatedComponent = require('../src/components/BigComplicatedComponent.jsx');

    // Render a checkbox with label in the document
    const component = TestUtils.renderIntoDocument(
      <BigComplicatedComponent />
    );

    assert.equal(ReactDOM.findDOMNode(component).textContent, '42');
  });
});
