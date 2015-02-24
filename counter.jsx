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
