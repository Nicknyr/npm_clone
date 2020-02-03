import React from 'react';
import styled, { css } from 'styled-components';

const STYLES = styled.div`
    height: 5em;
    width: 100%;
    display: flex;
`;

const RANDOMCONTAINER = styled.div`
    height: 5em;
    width: 50%;
    background: green;
    display: none;

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
        padding: 0;

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

const Navbar = () => {
    return (
        <STYLES>
            <NAVCONTAINER>
                <RANDOMCONTAINER></RANDOMCONTAINER>
                <div className="border"></div>
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

export default Navbar;