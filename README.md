#ReadMe

Firstly, be sure to checkout the offical ReactJS incubating [create-react-app](https://github.com/facebookincubator/create-react-app) for a starter as that is a prescribed setup - however it is non-configurable and has limited features.

##Basic starterify project for ReactJS with extras for testing and instant reloading 

Tested on Node 4.4.x, Npm 3.8.x

browserify, babelify, es2015, react 15.x.x, [aphrodite](https://github.com/Khan/aphrodite/), [enzyme](http://airbnb.io/enzyme/), livereactload, react-proxy and [budo](https://www.npmjs.com/package/budo)

.babelrc with "presets": ["react"]

http://babeljs.io/docs/plugins/preset-react/

Do it!
~~~
npm install
npm run serve
~~~

---

**Notes:**

Use ```--ignore-scripts=false``` if you have blocked npm scripting commands.

Creates react-bundle.js using npm 'pre' script to speedup builds and rebuilds.

Only the application code is contained in bundle.js.

Allows live updates to code changes via livereactload plugin for browserify.

###Increment a button click counter component

counter.jsx
test.jsx [ tape, React.addons.TestUtils ]

Browserify, Testling

~~~
[sudo] npm install -g browserify testling budo
~~~

### Tests
Args for [linux | osx]

Linux may require xorg-server-xvfb (virtual frame buffer) dependency

~~~
testling
~~~

~~~
testling -x [chromium | firefox | xdg-open | open]
~~~

### Commands

You must add the ```--ignore-scripts=false``` parameter if your .npmrc **doesn't allow** npm scripts

~~~
npm install
npm test
npm run bundle
npm run serve
testling -x open
~~~

counter.jsx

~~~javascript
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

export default class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {count: props.initialCounter};
		this.clickHandler = this.clickHandler.bind(this);
}

	clickHandler() {
		this.setState({count: this.state.count + 1});
    }

	render() {
		return <button className={css(styles.action, styles.larger)} onClick={this.clickHandler}>{this.state.count}</button>;
	}
};

Counter.propTypes = {initialCounter: React.PropTypes.number};
Counter.defaultProps = {initialCounter: 0};

const styles = StyleSheet.create({

	action: {
		color: 'white',
		borderRadius: '4px',
		textShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
		background: 'rgb(28, 184, 65)'
	},					 

	larger: {
		fontSize: '120%'
	}

});
~~~

index.jsx

~~~javascript
import React from "react";
import ReactDOM from "react-dom";
import Counter from "./counter.jsx";
const Heading = (props) => <h1>Counter</h1>;

ReactDOM.render(<Heading />, document.getElementById("heading"));
ReactDOM.render(<Counter initialCounter={42} />, document.getElementById("content"));
~~~

test.jsx

~~~javascript

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

~~~
