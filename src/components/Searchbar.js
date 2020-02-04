import React from 'react';
import styled, { css } from 'styled-components';
import Blob from '../assets/blob.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const STYLES = styled.div`
    height: auto;
    width: 100%;
`;

const CONTAINER = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: .5rem;
    padding-bottom: .5rem;

    .search-container {
        width: auto;
        //background: salmon;

        input {
            width: 750px;
            height: 3rem;
            background: #f2f2f2;
            border: none;
        }
    }
`;

const BUTTON = styled.button`
    height: 3rem;
    width: 8rem;
    background: black;
    border: none;
    color: snow;
    font-size: 16px;
    font-weight: bold;

    ${props => props.signin && css`
        border: none;
        background: transparent;
        color: black;
        font-weight: 500;
  `}

    ${props => props.signup && css`
            border: 1px solid #ccc;
            background: transparent;
            color: black;
            font-weight: 500;
    `}
`;

const SearchBar = () => {
    return (
        <STYLES>
            <CONTAINER>
                <div className="logo-container">
                    <img src={Blob} height="50"/>
                </div>
                <div className="search-container">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" placeholder="Search packages"></input>
                    <BUTTON>Search</BUTTON>
                </div>
                <div className="login-container">
                    <BUTTON signup>Sign Up</BUTTON>
                    <BUTTON signin>Sign In</BUTTON>
                </div>
            </CONTAINER>
        </STYLES>
    );
}

export default SearchBar;