import Tape from 'tape';
import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';
import Counter from './counter.jsx';

Tape('<Counter /> React Test Utils', (t) => {

  t.plan(1);

  const counter = ReactTestUtils.renderIntoDocument(<Counter refs="counter" initialCounter={42}/>);

  const expected = counter.state.count + 1

  ReactTestUtils.Simulate.click(ReactDOM.findDOMNode(counter));

  t.equal(counter.state.count, expected, 'incremented the counter once');

  t.end()
});

Tape('<Counter /> enzyme mount wrapper simulate state', (t) => {

  t.plan(1);

  const wrapper = mount(<Counter refs="counter" />);

  const expected = wrapper.state().count + 1

  wrapper.simulate('click');

  t.equal(wrapper.state().count, expected, 'incremented the counter once');

  t.end()
});
