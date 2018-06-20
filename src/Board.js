import React, { Component } from 'react';

export default class Board extends Component{

    render(){
        const board = this.props.board
        return(
            <div> 
                <div>
                    <span>{board[0]} </span> 
                    <span>{board[1]} </span> 
                    <span>{board[2]} </span> 
                    <span>{board[3]} </span> 
                </div>
                <div>
                    <span>{board[4]} </span> 
                    <span>{board[5]} </span> 
                    <span>{board[6]} </span> 
                    <span>{board[7]} </span> 
                </div>
                <div>
                    <span>{board[8]} </span> 
                    <span>{board[9]} </span> 
                    <span>{board[10]} </span> 
                    <span>{board[11]} </span>   
                </div>
                <div>
                    <span>{board[12]} </span> 
                    <span>{board[13]} </span> 
                    <span>{board[14]} </span> 
                    <span>{board[15]} </span> 
                </div>
            </div>
        )
    }
}