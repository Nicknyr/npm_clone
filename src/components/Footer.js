import React from 'react';
import styled, { css } from 'styled-components';
import Blob2 from '../assets/blob2.png';

const STYLES = styled.div`
    height: auto;
    width: 100%;
    padding-top: 2rem;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    border-top: 1px solid lightgrey;
    border-bottom-style: solid;
    border-bottom-width: 10px;
    border-image: linear-gradient(90deg, rgba(250,135,20,1) 0%, rgba(227,57,21,1) 50%, rgba(217,41,214,1) 100%) 3;

    @media(min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;

const COLUMN= styled.div`
    height: auto;
    background: green;
    //margin: .5em;
    flex: auto;

    ul {
        padding: 0;

        li {
            text-align: left;
            font-size: 1rem;
            margin-top: 1rem;

            a {
                text-decoration: none;
            }
        }
    }

    @media(min-width: 768px) {
        width: 50%;
    }
`;

const Footer = () => {
    return(
        <STYLES>
            <COLUMN>
                <img src={Blob2} height="100" />
            </COLUMN>
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