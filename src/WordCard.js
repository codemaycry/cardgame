import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: [],
        completed: false
       }
}
export default class WordCard extends Component {
    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }
    activationHandler = (c) => {
        console.log(`${c} has been activated.`)
        let guess = [...this.state.guess, c.toUpperCase()]
        this.setState({guess})
        if(guess.length == this.state.chars.length){
            if(guess.join('').toString() == this.state.chars.join('').toString()){
                document.getElementById('gameEnded').innerHTML = `YOU WIN!!`
                document.getElementById('answer').innerHTML = `Answer is ${guess.join('').toString()}`
                this.setState({guess: [], completed: true})
            }
            else{
                this.setState({guess: [], attempt: this.state.attempt + 1})
                document.getElementById('gameEnded').innerHTML = `You missed try again!`
                document.getElementById('answer').innerHTML = `Your answer is : ${guess.join('').toString()}`
                if(this.state.attempt == 3 ){
                    document.getElementById('gameEnded').innerHTML = `Game Over`
                    document.getElementById('answer').innerHTML = `Answer is ${this.state.chars.join('').toString()}`
                    setTimeout(() => window.location.reload(false),3500) 
                }
                console.log("Choosed :" + guess.join('').toString())
                console.log("Answer :" + this.state.chars.join('').toString())   
            }
        }
    }
    render() {
            if( this.props.isSurrender ){
                console.log("Surrendered")
                this.props.getAnswer(this.state.chars.join(''))
                document.getElementById('gameEnded').innerHTML = `SURRENDED`
            }
            if( this.props.needHint ){
                console.log("I need hint!")
                this.props.getHint(this.state.chars.join('')[0].toString())
            }
            return ( <div> 
                {   Array.from(this.props.value).map((c, i) => < CharacterCard value = { c }
                        key = { i }
                        activationHandler = { this.activationHandler }
                        {...this.state} />) } 
                    </div>
                    );
                }
            }