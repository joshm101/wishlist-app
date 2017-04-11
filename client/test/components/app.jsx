var TestUtils = require('react-dom/test-utils'),
    assert = require('assert'),
    React = require('react'),
    ReactDOM = require('react-dom');

import { App } from '../../src/react/components/app';

describe('App-component-test', function() {
  before('render and locate element', function() {
    var renderedComponent = TestUtils.renderIntoDocument(
      <App />
    );

    var h1Component = TestUtils.findRenderedDOMComponentWithTag(
      renderedComponent,
      'h1'
    );
    this.h1Element = ReactDOM.findDOMNode(h1Component);
  });

  it('h1 should contain text', function() {
    assert.ok(this.h1Element.textContent.length > 0);
  });
});