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
    const OtherBigComplicatedComponent = require('../src/components/OtherBigComplicatedComponent.jsx');

    // Render a checkbox with label in the document
    const component = renderIntoDocument(
      <OtherBigComplicatedComponent />
    );

    expect(findDOMNode(component).textContent).toEqual('13')
  });

  it('outputs what it should (using shallow rendering)', () => {
    const OtherBigComplicatedComponent = require('../src/components/OtherBigComplicatedComponent.jsx');

    let renderer = createRenderer();

    renderer.render(
      <OtherBigComplicatedComponent />
    );

    let actualElement = renderer.getRenderOutput();

    expect(actualElement).toEqualJSX(
      <div className="OtherBigComplicatedComponent">13</div>
    );
  });
});
