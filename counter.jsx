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
