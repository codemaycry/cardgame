import React, { Component } from 'react';
import WordCard from './WordCard';
import './App.css';
const word = ['hello','whale','queen','dodge','snipe','prank']
var randomedWord = word[Math.floor(Math.random()*word.length)]
class App extends Component {
    constructor(){
      super();
      this.state = {
          isSurrender : false,
          needHint : false
    } 
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
    hintMe = () =>
    {
        this.setState({needHint : true})
    }
    getHint = (ans2) => 
    {
        document.getElementById('hint').innerHTML = `First character is : ${ans2}`
    }
    
    render() {
        return ( < div >
            <WordCard value = { randomedWord.toUpperCase()} 
            getAnswer = { this.getAnswer } 
            isSurrender = { this.state.isSurrender }
            needHint = { this.state.needHint }
            getHint = { this.getHint }
            />
            <h2 id="gameEnded"></h2>
            <h2 id="try"></h2>
            <h2 id="answer"></h2>
            <h2 id="hint"></h2>
            <button class="restartButton" onClick= { this.restart }>New game</button>
            <button class="hintButton" onClick= { this.hintMe }>Hint</button>
            <button class="surrenderButton" onClick= { this.surrender }>Surrender</button>
            </div>
        );
    }
}
export default App;