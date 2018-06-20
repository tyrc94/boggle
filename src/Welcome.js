import React, { Component } from 'react';

export default class Welcome extends Component{
    render(){
        return(
            <div> Welcome to Boggle!
                <button onClick={this.props.setInGame}>Let's Play!</button>
            </div>
        )
    }
}