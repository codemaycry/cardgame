import React, { Component } from 'react';
import WordCard from './WordCard';
import styles from './App.css';
const word = "Hello";
class App extends Component {
    render() {
        return ( < div >
            <WordCard value = "hello"/>
            <h2 id="gameEnded"></h2>
            <h2 id="answer"></h2>
            </div>
        );
    }
}
export default App;