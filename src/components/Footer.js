import React from 'react';
import styled, { css } from 'styled-components';
import Blob2 from '../assets/blob2.png';

const STYLES = styled.div`
    height: auto;
    //width: 100%;
    padding: 2rem 2.5rem;
    display: flex;
    flex-direction: column;
    border-top: 1px solid lightgrey;
    border-bottom-style: solid;
    border-bottom-width: 10px;
    border-image: linear-gradient(90deg, rgba(250,135,20,1) 0%, rgba(227,57,21,1) 50%, rgba(217,41,214,1) 100%) 3;
    color: grey;
    //background: pink;

    @media(min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        padding: 2rem 3rem;
    }
`;

const COLUMN= styled.div`
    height: auto;
    //background: green;
    flex: auto;
    margin-top: 1rem;
    //margin: 1rem 4rem;

    ul {
        padding: 0;

        li {
            text-align: left;
            font-size: 1.1rem;
            margin-top: 1rem;
            list-style-type: none;

            a {
                text-decoration: none;
                color: grey;
            }
        }
    }
    
    h4 {
        color: black;
    }

    @media(min-width: 768px) {
        width: 50%;

        ul {
            margin-top: 3rem;
            margin-bottom: 3rem;

            li {
                margin-top: 1.3rem;
            }
        }
    }

    @media(min-width: 992px) {
        flex: 3;
        margin-top: 0;

        ul {
            margin-top: 0;
        }
    }
`;

const LOGOCONTAINER = styled.div`
    //background: pink;
    flex-basis: 100%;
    display: flex;

    @media(min-width: 992px) {
        flex-direction: row;
        flex: 1;
        justify-content: center;
    }
`;

const Footer = () => {
    return(
        <STYLES>
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
        </STYLES>
    );
}

export default Footer;