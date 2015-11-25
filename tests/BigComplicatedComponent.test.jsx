const React = require('react');

const {
  findDOMNode
} = require('react-dom');

const {
  createRenderer,
  renderIntoDocument
} = require('react-addons-test-utils');

const expect = require('expect');
const expectJSX = require('expect-jsx');

expect.extend(expectJSX);

describe('BigComplicatedComponent', () => {
  it('outputs what it should (using DOM rendering)', () => {
    const BigComplicatedComponent = require('../src/components/BigComplicatedComponent.jsx');

    // Render a checkbox with label in the document
    const component = renderIntoDocument(
      <BigComplicatedComponent />
    );

    expect(findDOMNode(component).textContent).toEqual('42')
  });

  it('outputs what it should (using shallow rendering)', () => {
    const BigComplicatedComponent = require('../src/components/BigComplicatedComponent.jsx');

    let renderer = createRenderer();

    renderer.render(
      <BigComplicatedComponent />
    );

    let actualElement = renderer.getRenderOutput();

    expect(actualElement).toEqualJSX(
      <div className="BigComplicatedComponent">42</div>
    );
  });
});
