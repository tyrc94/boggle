import React, { Component } from 'react';
import Board from './Board';
import Timer from './Timer';
import moment from 'moment';
import diceDef from './diceDef';

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function generateBoard(){
    let chars = diceDef.map((dice) => {
        const j = Math.floor(Math.random() * (dice.length));
        return dice[j];
    })
    return shuffle(chars);
}

export default class Game extends Component{
    state = {
        board: generateBoard(),
        endTime: moment().add(.1,'minute')
    }
    componentDidMount(){
        this.intervalId = window.setInterval(() => {
            this.forceUpdate();
            if(moment().isAfter(this.state.endTime)){
                this.props.setGameOver();
            }
        },1000)
    }
    componentWillUnmount(){
        window.clearInterval(this.intervalId)
    }
    render(){
        console.log(this.state.board)
        return(
            <div>
                <h1> In-game </h1>
                <Board board={this.state.board}/>
                <Timer endTime={this.state.endTime}/>
            </div>
        )
    }
}