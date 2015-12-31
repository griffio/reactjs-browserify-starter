#ReadMe
##Simple starter project for React.js

browserify, babelify, react 0.14.3

.babelrc with "presets": ["react"]

http://babeljs.io/docs/plugins/preset-react/

###Increment a button click counter component

counter.jsx
test.jsx [ tape, React.addons.TestUtils ]

Browserify, Testling

~~~
[sudo] npm install -g browserify testling
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

Counter.jsx

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

Index.jsx

~~~javascript
var React = require("react");
var Counter = require("./counter.jsx");
var counter = {count: 42};
React.render(<Counter initialCounter={counter} />, document.body);
~~~
