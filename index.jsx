var React = require("react");
var Counter = require("./counter.jsx");
var counter = {count: 42};
React.render(React.createElement('h1', null, 'Counter'), document.body);
React.render(<Counter initialCounter={counter} />, document.body);

