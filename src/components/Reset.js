import React, { Component } from 'react';

export default class Reset extends Component {

	onResetDefault = () => {
		this.props.onResetDefault();
	}

	render() {
		return (
			<div>
                <button type="button" className="btn btn-primary" onClick={this.onResetDefault}>Reset</button>
			</div>
		);
	}
}
