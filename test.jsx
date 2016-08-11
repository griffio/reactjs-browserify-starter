import Tape from 'tape';
import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'enzyme';
import ReactTestUtils from 'react-addons-test-utils';
import Counter from './counter.jsx';

const initialCount = 42;
const expectedCount = initialCount + 1;

Tape('<Counter /> React Test Utils', (t) => {

  t.plan(1);

  const counter = ReactTestUtils.renderIntoDocument(<Counter refs="counter" initialCounter={initialCount}/>);

  ReactTestUtils.Simulate.click(ReactDOM.findDOMNode(counter));

  t.equal(counter.state.count, expectedCount, 'increment the counter once');

});

Tape('<Counter /> enzyme mount wrapper simulate state', (t) => {

	t.plan(2);

	const wrapper = mount(<Counter refs="counter" initialCounter={initialCount} />);

	wrapper.simulate('click');

	t.equal(wrapper.state().count, expectedCount, 'increment the counter once');
});
