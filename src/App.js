import React, { Component } from 'react';
import Welcome from './Welcome';
import Game from './Game';
import GameOver from './GameOver'

class App extends Component {
    state = {
        gameState: "welcome"
    }
    changeGameState = (gameState) => {
        this.setState({
            gameState
        });
    }
    setInGame = () => {
        this.changeGameState("in_game");
    }
    setGameOver = () => {
        this.changeGameState("game_over");
    }
    
    renderComponent = () => {
        switch(this.state.gameState) {
            case "in_game":
                return <Game setGameOver={this.setGameOver}/>

            case "game_over":
                return <GameOver />;

            case "welcome":
            default:
                return <Welcome setInGame={this.setInGame} />
        }
    }
    render() {
        return (
            <div className="App">
                {this.renderComponent()}
            </div>
        );
    }
}

export default App;
