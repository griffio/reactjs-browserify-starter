#ReadMe
##Simple starter project for React.js

browserify, babelify, react 0.14.5 and budo (see https://www.npmjs.com/package/budo)

.babelrc with "presets": ["react"]

http://babeljs.io/docs/plugins/preset-react/

###Increment a button click counter component

counter.jsx
test.jsx [ tape, React.addons.TestUtils ]

Browserify, Testling

~~~
[sudo] npm install -g browserify testling budo
~~~

### Commands
Args for [linux | osx]

Linux may require xorg-server-xvfb (virtual frame buffer) dependency

~~~
testling
~~~

~~~
testling -x [chromium | firefox | xdg-open | open]
~~~

~~~
npm install
npm test
npm run bundle
npm run serve
testling
~~~

counter.jsx

~~~javascript

var React = require("react");

var Counter = React.createClass({
    getInitialState: function () {
        return this.props.initialCounter ? this.props.initialCounter : {count: 0}
    },
    clickHandler: function (event) {
        this.setState({count: this.state.count + 1});
    },
    render: function () {
        return (
            <button onClick={this.clickHandler}>{this.state.count}</button>
        )
    }
});

module.exports = Counter;

~~~

index.jsx

~~~javascript
var React = require("react");
var ReactDOM = require('react-dom');
var Counter = require("./counter.jsx");
var count = {count: 42};
ReactDOM.render(React.createElement('h1', null, 'Counter'), document.getElementById("heading"));
ReactDOM.render(<Counter initialCounter={count} />, document.getElementById("content"));
~~~
