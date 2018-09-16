import test from 'tape';
import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Counter from './counter.jsx';

configure({ adapter: new Adapter() });

test('<Counter /> shallow state simulate click', (t) => {

  t.plan(1);

  const counter = shallow(<Counter initialCounter={42}/>);

  const expected = counter.state().count + 1;

  counter.find('button').simulate('click');

  t.equal(counter.state().count, expected, 'incremented the counter once');

  t.end()
});

test('<Counter /> mount state simulate click ', (t) => {

  t.plan(1);

  const counter = mount(<Counter />);

   const expected = counter.state().count + 1;

  counter.find('button').simulate('click');

  t.equal(counter.state().count, expected, 'incremented the counter once');

  t.end()
});
