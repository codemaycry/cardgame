import React, { Component } from 'react';
import WordCard from './WordCard';
import styles from './App.css';
const word = ['hello','whale','queen','dodge','snipe','prank']
var randomedWord = word[Math.floor(Math.random()*word.length)]
class App extends Component {
    constructor(){
      super();
      this.state = {isSurrender : false} 
     }
    restart = () =>
    {
      window.location.reload(false)
    }
    surrender = () =>
    {
        this.setState({isSurrender : true})
    }
    getAnswer = (ans) =>
    {
        document.getElementById('answer').innerHTML = `Answer is ${ans}`
    }
    render() {
        if (this.state.needHint){
    }
    
        return ( < div >
            <WordCard value = { randomedWord.toUpperCase()} 
            getAnswer = { this.getAnswer } 
            isSurrender = { this.state.isSurrender }
            />
            <h2 id="gameEnded"></h2>
            <h2 id="answer"></h2>
            <button class="restartButton" onClick= { this.restart }>New game</button>
            <button class="surrenderButton" onClick= { this.surrender }>Surrender</button>
            </div>
        );
    }
}
export default App;