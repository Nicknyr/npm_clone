import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import {phrases} from '../assets/randomwords';

const STYLES = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    border-bottom: 1px solid #ccc;
`;

const RANDOMCONTAINER = styled.div`
    height: auto;
    width: 50%;
    margin-left: 3%;
    //background: green;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
        margin-left: 1rem;
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

    ul {
        display: flex;
        justify-content: flex-end;
        margin-right: 3%;
        padding: 0;
        width: 50%;

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
`;

class Navbar extends Component {
    constructor(props){
        super(props);
    }

    generateRandomPhrase = () => {
        let randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

        return (
            <span>{randomPhrase}</span>
        );
    }

    render() {
        return (
            <STYLES>
                <NAVCONTAINER>
                    <div className="border"></div>
                    <RANDOMCONTAINER>
                        &#10084;
                        <span>{this.generateRandomPhrase()}</span>
                    </RANDOMCONTAINER>
                    <ul>
                        <li>
                            <a href="#">Products</a>
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