#ReadMe
##Simple starter project for React.js

Increment a button click counter component

counter.jsx
test.jsx [ tape, React.addons.TestUtils ]

Browserify, Testling

~~~
npm install -g browserify testling
~~~

### Commands

~~~
npm install
npm test
npm run bundle
npm run serve
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

(function (document, undefined) {
    var counter = {count: 42};
    return React.render(<Counter initialCounter={counter} />, document.body);
})(window.document, void 0);
~~~
