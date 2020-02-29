import React, { Component } from 'react';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';

import './App.css';

export default class App extends Component {

    constructor(props){
        super(props);
        this.state={
            color: 'none',
            size: 12
        }
        this.getColorPicker=this.getColorPicker.bind(this);
        this.onChangeSize=this.onChangeSize.bind(this);
        this.onResetDefault=this.onResetDefault.bind(this);

    }

    getColorPicker(param){
        this.setState({
            color: param
        })
    }

    onChangeSize(value){
        if(value<0){
            if(this.state.size>13){
                this.setState({
                    size:(this.state.size+value)
                })
            }
        }else{
            if(this.state.size<29){
                this.setState({
                    size:(this.state.size+value)
                })
            }
        }
    }

    onResetDefault(){
        this.setState({
            size: 16
        })
    }

    render() {
        return (
            <div>
                <div className="container mt-30">
                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <ColorPicker onRecieveColor={this.getColorPicker}/>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <SizeSetting fontSize={this.state.size} onChangeSize={this.onChangeSize}/>
                            <Reset onResetDefault={this.onResetDefault}/>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <Result color={this.state.color} fontSize={this.state.size}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
