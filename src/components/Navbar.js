import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import {phrases} from '../assets/randomwords';

const STYLES = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Arimo|Poppins|Fira+Mono&display=swap');
    font-family: 'Poppins', sans-serif;
    height: auto;
    width: 100%;
    display: flex;
    border-bottom: 1px solid #ccc;
`;

const RANDOMCONTAINER = styled.div`
    height: auto;
    width: 50%;
    margin-left: 3%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    display: none;

    span {
        color: #171717;
        
        &:hover {
            opacity: .7;
        }
    }

    .heart {
        padding-right: 15px;
        font-size: 20px;
    }

    .random-phrase {
        cursor: pointer;
        font-size: .9rem;
    }

    @media(min-width: 768px) {
        display: flex;
    }
`;

const NAVCONTAINER = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-top-style: solid;
    border-width: 10px 0 0;
    border-image: linear-gradient(90deg, rgba(250,135,20,1) 0%, rgba(227,57,21,1) 50%, rgba(217,41,214,1) 100%) 3;
    max-width: 96rem;
    margin-left: auto;
    margin-right: auto;

    ul {
        display: flex;
        justify-content: flex-start;
        width: 90%;
        padding-left: 1rem;
        padding-right: 1rem;
        font-size: .9rem;
        font-weight: bold !important;


        @media(min-width: 768px) {
            width: 50%;
            font-size: 1rem;
            justify-content: flex-end;
        }

        li {
            list-style-type: none;
            margin-left: .8em;
            margin-right: .8em;

            a {
                text-decoration: none;
                color: #171717;
                font-size: .9em;
                font-weight: 500;
            }
        }
    }


        ul {
            li {
                a:hover {
                    opacity: .5;
                }
            }
        }

        .products-li:hover  .products-dropdown {
            display: flex;
        }

        .products-dropdown {
            position: absolute;
            width: 6em;
            height: 6em;
            background: snow;
            display: block;
            z-index: 10;
            border-radius: 5px;
            display: none;
            flex-direction: column;
            justify-content: space-around;
            padding: .5em;
            margin-left: -25px;
            //margin-top: 10px;
            -webkit-box-shadow: 0px 2px 10px 0px rgba(66,66,66,1);
            -moz-box-shadow: 0px 2px 10px 0px rgba(66,66,66,1);
            box-shadow: 0px 2px 10px 0px rgba(66,66,66,1);
        }
    }
`;

class Navbar extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            phrase: 'Narrowly Preventing Mayhem'
        };
    }

    generateRandomPhrase = () => {
        let randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        this.setState({
            phrase: randomPhrase
        })
    }

    render() {
        return (
            <STYLES>
                <NAVCONTAINER>
                    <div className="border"></div>
                    <RANDOMCONTAINER>
                        <span className="heart">&#10084;</span>
                        <span 
                            onClick={this.generateRandomPhrase}
                            className="random-phrase"
                            >
                                {this.state.phrase}
                        </span>
                    </RANDOMCONTAINER>
                    <ul>
                        <li className="products-li">
                            <a href="#">Products</a>
                            <ul className="products-dropdown">
                                <li>
                                    <a href="#">Pro</a>
                                </li>
                                <li>
                                    <a href="#">Teams</a>
                                </li>
                                <li>
                                    <a href="#">Enterprise</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                        <li>
                            <a href="#">Documentation</a>
                        </li>
                        <li>
                            <a href="#">Community</a>
                        </li>
                    </ul>
                </NAVCONTAINER>
            </STYLES>
        );
    }
}

export default Navbar;