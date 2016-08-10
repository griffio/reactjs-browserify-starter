import Tape from 'tape';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import Counter from './counter.jsx';

const initialCount = 42;
const expectedCount = initialCount + 1;

Tape('Counter', function (t) {

  t.plan(1);

  var counter = ReactTestUtils.renderIntoDocument(<Counter refs="counter" initialCounter={initialCount}/>);

  ReactTestUtils.Simulate.click(ReactDOM.findDOMNode(counter));

  t.equal(counter.state.count, expectedCount, 'increment the counter once');

});
