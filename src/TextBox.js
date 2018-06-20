import React, { Component } from 'react';

export default class TextBox extends Component{
    render(){
        return(
            <div><input type="text" onChange={this.props.changeName} value={this.props.name}/>
            </div>
        )
    }
}