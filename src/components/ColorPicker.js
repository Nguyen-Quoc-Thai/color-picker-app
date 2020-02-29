import React, { Component } from 'react';

export default class ColorPicker extends Component {

	constructor(props){
		super(props);
		this.state = {
			colors:['red', 'green', 'blue', 'black']
		};
	}

	showColor(color){
		return {
			color: color
		};
	}


	onHandleClick(color){
		this.props.onRecieveColor(color);
	}

	render() {

		var elementColor = this.state.colors.map((color, index) => {
			return 	<button 
					key={index} 
					type="button" 
					className="btn btn-default" 
					style={ this.showColor(color) }
					onClick={()=>{this.onHandleClick(color)}}
			>
			Click me</button>
		});

		return (
			<div>
				<div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Color picker</h3>
                    </div>
                    <div className="panel-body he-80">
                        { elementColor }
                    </div>
                </div>
				
			</div>
		);
	}
}
