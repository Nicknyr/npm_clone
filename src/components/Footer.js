import React from 'react';
import styled, { css } from 'styled-components';
import Blob2 from '../assets/blob2.png';

const STYLES = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Arimo|Poppins&display=swap');
    font-family: 'Poppins', sans-serif;
    height: auto;
    //width: 100%;
    display: flex;
    flex-direction: column;
    color: grey;
    border-top: 1px solid lightgrey;
    max-width: 96rem;
    margin-left: auto;
    margin-right: auto;

    &::after {
        content: "";
        //height: 10px;
        width: 100%;
        border-bottom-style: solid;
        border-bottom-width: 10px;
        border-image: linear-gradient(90deg, rgba(250,135,20,1) 0%, rgba(227,57,21,1) 50%, rgba(217,41,214,1) 100%) 3;
    }

    @media(min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;

const CONTAINER = styled.div`
    padding: 1em;
    height: auto;
    display: flex;
    flex-direction: column;

    @media(min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
    }
`;

const COLUMN= styled.div`
    height: auto;
    //background: green;
    flex: auto;
    //margin-top: 1rem;
    //margin: 1rem 4rem;
    padding: 1rem;

    ul {
        padding: 0;

        li {
            text-align: left;
            font-size: 1rem;
            padding-top: .25em;
            padding-bottom: .25em;
            list-style-type: none;
            font-weight: 400;
            line-height: 1.3;

            a {
                text-decoration: none;
                color: #333;
                opacity: .85;
                line-height: 2;
            }
        }
    }
    
    h4 {
        color: #333;
        font-weight: 800;
        padding: 0;
        margin: .5rem 0;
        font-size: 1.1rem;
    }

    @media(min-width: 768px) {
        width: 45%;

        ul {
            margin-top: 3rem;
            margin-bottom: 3rem;

            li {
                //margin-top: 1.3rem;
            }
        }
    }

    @media(min-width: 992px) {
        flex: 3;
        margin-top: 0;
        padding-top: 3rem;

        ul {
            margin-top: 0;
        }
    }
`;

const LOGOCONTAINER = styled.div`
    //background: pink;
    flex-basis: 100%;
    display: flex;
    padding: 1rem;
    margin-top: 1.5rem;

    @media(min-width: 992px) {
        flex-direction: row;
        flex: 1;
        justify-content: center;
        //margin-top: 1.5rem;
        padding-top: 2rem;
    }
`;

const Footer = () => {
    return(
        <STYLES>
            <CONTAINER>
                <LOGOCONTAINER>
                    <svg height={50} width={50} viewBox={"0 0 27.23 27.23"}>
                        <rect fill="#333333" width="27.23" height="27.23" rx="2"></rect>
                        <polygon fill="#fff" points="5.8 21.75 13.66 21.75 13.67 9.98 17.59 9.98 17.58 21.76 21.51 21.76 21.52 6.06 5.82 6.04 5.8 21.75"></polygon>
                    </svg>
                </LOGOCONTAINER>
                <COLUMN>
                    <ul>
                        <li>
                            <h4>Help</h4>
                        </li>
                        <li>
                            <a href="#">Documentation</a>
                        </li>
                        <li>
                            <a href="#">Community</a>
                        </li>
                        <li>
                            <a href="#">Resources</a>
                        </li>
                        <li>
                            <a href="#">Advisories</a>
                        </li>
                        <li>
                            <a href="#">Status</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </COLUMN>
                <COLUMN>
                    <ul>
                        <li>
                            <h4>About</h4>
                        </li>
                        <li>
                            <a href="#">Company</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Careers</a>
                        </li>
                        <li>
                            <a href="#">Webinars</a>
                        </li>
                        <li>
                            <a href="#">Press</a>
                        </li>
                        <li>
                            <a href="#">Newsletter</a>
                        </li>
                    </ul>
                </COLUMN>
                <COLUMN>
                    <ul>
                        <li>
                            <h4>Terms & Policies</h4>
                        </li>
                        <li>
                            <a href="#">Policies</a>
                        </li>
                        <li>
                            <a href="#">Terms of Use</a>
                        </li>
                        <li>
                            <a href="#">Code of Conduct</a>
                        </li>
                    </ul>
                </COLUMN>
            </CONTAINER>
        </STYLES>
    );
}

export default Footer;