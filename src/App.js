import React, { Component } from 'react';
import WordCard from './WordCard';
import styles from './App.css';
const word = ['hello','whale','queen','dodge','snipe','prank']
var randomedWord = word[Math.floor(Math.random()*word.length)]
class App extends Component {
    render() {
        return ( < div >
            <WordCard value = { randomedWord.toUpperCase() } />
            <h2 id="gameEnded"></h2>
            <h2 id="answer"></h2>
            </div>
        );
    }
}
export default App;