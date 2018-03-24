#ReactJS Starterify Project

Firstly, be sure to checkout the offical ReactJS incubating [create-react-app](https://github.com/facebookincubator/create-react-app) as a starter with prescribed settings - however it is non-configurable and has limited features for now.

##Basic starterify project for ReactJS with extras for instant reloading, tests, CSS 

Tested on Node 8.10.x, Npm 5.6.x

browserify, babelify, es2015, react 15.x.x, [aphrodite](https://github.com/Khan/aphrodite/), [enzyme](http://airbnb.io/enzyme/), livereactload, react-proxy,  tape, watchify, faucet, and [budo](https://www.npmjs.com/package/budo)

.babelrc with "presets": ["react"]

http://babeljs.io/docs/plugins/preset-react/

git clone repo and Do it!

~~~
[sudo] npm install -g browserify testling faucet budo watchify
npm install
npm test
npm run serve
~~~

---

**Using it!**

Use ```--ignore-scripts=false``` if you have blocked npm scripting commands.

Creates **react-bundle.js** using npm 'pre' script to speedup builds and rebuilds. This means the vendor modules are not built each time "watch" fires. Only the application code is contained in **bundle.js**.

Allows live updates to code changes via livereactload plugin for browserify.

Tests are bundled under [watchify](https://github.com/substack/watchify), for automatic reloading, then piped to testling and faucet. “outfile” is mandatory but can be a command that receives the bundled javascript via pipe :-

``` watchify --outfile 'testling -x open | faucet' ```

The above command following -x is OS specific and is used to launch a local browser for the html file parameter.

Using [testling](https://github.com/substack/watchify) and [faucet](https://github.com/substack/faucet) provides tap formatted tests in the browser and console.

### Tests

Args for [linux | osx]

Linux may require xorg-server-xvfb (virtual frame buffer) dependency

OSX may report from npm test as "no headless browser". You can try ``` rm -rf ~/.config/browser-launcher ``` and ```npm install phantomjs -g```. Running ```npm test``` should create a new configuration section for phantomjs under ~/.config/browser-launcher.

~~~
testling
~~~

OS specific commands

~~~
testling -x [chromium | firefox | xdg-open | open]
~~~

### Commands

You must add the ```--ignore-scripts=false``` parameter if your .npmrc **doesn't allow** npm scripts

~~~
[sudo] npm install -g browserify testling faucet budo watchify
npm install
npm test
npm run bundle
npm run serve
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

~~~
