import React from 'react';
import styled, { css } from 'styled-components';
import Background from '../assets/background-big.png';

const STYLES = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Arimo|Poppins&display=swap');
    font-family: 'Poppins', sans-serif;
    //font-family: 'Arimo', sans-serif;
    background: url(${Background});
    background-size: cover;
    background-position: center center;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CONTAINER = styled.div`
    height: auto;
    width: 100%;
    margin-left: 5%;
    margin-right: 5%;
    //background: red;
    padding-top: 4rem;
    padding-bottom: 4rem;
    

    @media(min-width: 768px) {
        width: 70%;
    }
    
    @media(min-width: 992px) {
        width: 50%;
    }
`;

const H1 = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 3em;
    color: white;
    text-align: center;
    font-weight: bolder;

    @media(min-width: 768px) {
        font-size: 4.5rem;
    }
`;

const PCONTAINER = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media(min-width: 992px) {
        flex-direction: row;
        justify-content: center;
    }
`;

const P = styled.p`
    font-family: 'Arimo', sans-serif;
    font-size: 1rem;
    line-height: 1.4;
    color: white;
    text-align: center;
    
    @media(min-width: 992px) {
        width: 80%;
    }
`;

const H2 = styled.h2`
    display: flex;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    font-size: 1.5em;
    color: snow;
    text-align: center;
    margin: 0 auto;

    @media(min-width: 992px) {
        width: 70%;
        font-size: 2.1rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
`;

const BUTTONCONTAINER = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 4rem;

    @media(min-width: 768px) {
        flex-direction: row;
        justify-content: center;
        margin-top: 2rem;
    }
`;

const BUTTON = styled.button`
    background: #c12126;
    border: none;
    border-bottom: 5px solid #fb871a;
    width: 100%;
    margin: .5em auto;
    text-align: center;
    color: snow;
    height: auto;
    padding: 1rem 2.5rem;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    -webkit-box-shadow: 0px 1px 35px -9px rgba(51,50,51,1);
    -moz-box-shadow: 0px 1px 35px -9px rgba(51,50,51,1);
    box-shadow: 0px 1px 35px -9px rgba(51,50,51,1);

    @media(min-width: 768px) {
        margin: 1rem;
    }

    @media(min-width: 992px) {
        width: 15rem;
    }

    ${props => props.pro && css`
    background: #e81aa9;
    border-bottom: 5px solid #b30ad2;
  `}
`;

const Hero = () => {
    return (
        <STYLES>
            <CONTAINER>
                <H1>Build amazing things</H1>
                <PCONTAINER>
                    <P>
                    We're npm, Inc., the company behind Node package manager, the npm Registry, and npm CLI. We offer those to the community for free, but our day job is building and selling useful tools for developers like you.
                    </P>
                </PCONTAINER>
                <H2>Take your JavaScript development up a notch</H2>
                <PCONTAINER>
                    <P>Get started today for free, or step up to npm Pro to enjoy a premium JavaScript development experience, with features like private packages.</P>
                </PCONTAINER>
                <BUTTONCONTAINER>
                    <BUTTON>Sign up for free</BUTTON>
                    <BUTTON pro>Learn about Pro</BUTTON>
                </BUTTONCONTAINER>
            </CONTAINER>
        </STYLES>
    );
}

export default Hero;