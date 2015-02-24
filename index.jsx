var React = require("react");
var Counter = require("./counter.jsx");
var counter = {count: 42};
React.render(<Counter initialCounter={counter} />, document.body);