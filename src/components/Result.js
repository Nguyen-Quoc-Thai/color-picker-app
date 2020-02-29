import React, { Component } from 'react';

export default class Result extends Component {

	setStyle(){
		return{
			color: this.props.color,
			borderColor: this.props.color,
			fontSize: this.props.fontSize
		};
		
	}

	render() {
		return (
			<div>
				<span className="label label-danger">Color: { this.props.color } - Font size: {this.props.fontSize}px</span>
				<hr/>
                <div className="content-style" style={ this.setStyle() }>
                    <p>Content color</p>
                </div>
			</div>
		);
	}
}
