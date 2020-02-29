import React, { Component } from 'react';

export default class SizeSetting extends Component {

    onChangeSize = (value) => {
        this.props.onChangeSize(value);
    }

	render() {
		return (
			<div>
				<div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">Size: {this.props.fontSize}px</h3>
                    </div>
                    <div className="panel-body">
                        <button type="button" className="btn btn-success mr-10" onClick={() => {this.onChangeSize(2)}}>Up</button>
                        <button type="button" className="btn btn-success" onClick={() => {this.onChangeSize(-2)}}>Down</button>
                    </div>
                </div>
			</div>
		);
	}
}
