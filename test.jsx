var Tape = require('tape');
var React = require('react/addons');
var ReactTestUtils = React.addons.TestUtils;
var Counter = require('./counter.jsx');

var result = {count: 42};

Tape('Counter', function (t) {

    t.plan(2);

    var counter = ReactTestUtils.renderIntoDocument(<Counter initialCounter={result} />);

    t.equal(counter.state.count, result.count, 'initialCounter using init value');

    ReactTestUtils.Simulate.click(counter.getDOMNode());

    t.equal(counter.state.count, result.count +1, 'increment counter once');

});