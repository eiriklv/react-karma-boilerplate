/**
 * Dependencies
 */
const React = require('react');
const { findDOMNode } = require('react-dom');
const { createRenderer, renderIntoDocument } = require('react-addons-test-utils');
const expect = require('expect');
const expectJSX = require('expect-jsx');

/**
 * Extend expect with React specific functionality
 */
expect.extend(expectJSX);

/**
 * Mocha test suite
 */
describe('BigComplicatedComponent', () => {
  it('outputs what it should (using DOM rendering)', () => {
    const OtherBigComplicatedComponent = require('./OtherBigComplicatedComponent.jsx');

    /**
     * Render a checkbox with label in the document
     */
    const component = renderIntoDocument(
      <OtherBigComplicatedComponent />
    );

    /**
     * Do assertions on the document / output
     */
    expect(findDOMNode(component).textContent).toEqual('13')
  });

  it('outputs what it should (using shallow rendering)', () => {
    const OtherBigComplicatedComponent = require('./OtherBigComplicatedComponent.jsx');

    /**
     * Create a shallow renderer
     */
    let renderer = createRenderer();

    /**
     * Render a checkbox with label in the shallow renderer
     */
    renderer.render(
      <OtherBigComplicatedComponent />
    );

    /**
     * Get the rendered output
     */
    let actualElement = renderer.getRenderOutput();

    /**
     * Do assertions on the output
     */
    expect(actualElement).toEqualJSX(
      <div className="OtherBigComplicatedComponent">13</div>
    );
  });
});
