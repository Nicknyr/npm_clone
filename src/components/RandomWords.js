import React, { Component } from 'react';
import {phrases} from '../assets/randomwords';

class RandomWords extends Component {
    constructor(props) {
        super(props);

        this.state = {
            phrase: ''
        };
    }   

    generateRandomPhrase = () => {

        // myArray[Math.floor(Math.random() * myArray.length)];
        let randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

        console.log(randomPhrase);
    }

    render() {
    

        return (
            <div>
                {this.generateRandomPhrase()}
            </div>
        );
    }
}

export default RandomWords;