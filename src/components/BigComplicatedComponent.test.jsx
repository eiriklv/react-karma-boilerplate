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

describe('BigComplicatedComponent', () => {
  it('outputs what it should (using DOM rendering)', () => {
    const BigComplicatedComponent = require('./BigComplicatedComponent.jsx');

    /**
     * Render a checkbox with label in the document
     */
    const component = renderIntoDocument(
      <BigComplicatedComponent />
    );

    /**
     * Do assertions on the document / output
     */
    expect(findDOMNode(component).textContent).toEqual('42')
  });

  it('outputs what it should (using shallow rendering)', () => {
    const BigComplicatedComponent = require('./BigComplicatedComponent.jsx');

    /**
     * Create a shallow renderer
     */
    let renderer = createRenderer();

    /**
     * Render a checkbox with label in the shallow renderer
     */
    renderer.render(
      <BigComplicatedComponent />
    );

    /**
     * Get the rendered output
     */
    let actualElement = renderer.getRenderOutput();

    /**
     * Do assertions on the output
     */
    expect(actualElement).toEqualJSX(
      <div className="BigComplicatedComponent">42</div>
    );
  });
});
