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
		return <button onClick={this.clickHandler}>{this.state.count}</button>;
	}
};

Counter.propTypes = {initialCounter: React.PropTypes.number};
Counter.defaultProps = {initialCounter: 0};
