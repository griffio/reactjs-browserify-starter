var Tape = require('tape');
var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestUtils = require('react-addons-test-utils');
var Counter = require('./counter.jsx');

var result = {count: 42};

Tape('Counter', function (t) {

  t.plan(1);

  var counter = ReactTestUtils.renderIntoDocument(<Counter refs="counter" initialCounter={result}/>);

  ReactTestUtils.Simulate.click(ReactDOM.findDOMNode(counter));

  t.equal(counter.state.count, result.count + 1, 'increment counter once');

});