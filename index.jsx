var React = require("react");
var Counter = require("./counter.jsx");

(function (document, undefined) {
    var counter = {count: 42};
    return React.render(<Counter initialCounter={counter} />, document.body);
})(window.document, void 0);
