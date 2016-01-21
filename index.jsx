var React = require("react");
var ReactDOM = require('react-dom');
var Counter = require("./counter.jsx");
var count = {count: 22};
ReactDOM.render(React.createElement('h1', null, 'Counter'), document.getElementById("heading"));
ReactDOM.render(<Counter initialCounter={count} />, document.getElementById("content"));