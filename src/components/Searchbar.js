import React from 'react';
import styled, { css } from 'styled-components';
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
    padding-top: .3rem;
    padding-bottom: .3rem;
    margin-left: 1%;
    margin-right: 1%;

    .search-container {
        width: auto;
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .fa-search {
            position: absolute;
            margin-left: 1rem;
            margin-right: 1rem;
        }

        input {
            width: 700px;
            height: 3rem;
            background: #f2f2f2;
            border: none;

            ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                color: #ccc;
                font-weight: bold;
                padding-left: 3rem;
            }
            ::-moz-placeholder { /* Firefox 19+ */
                color: #ccc;
                font-weight: bold;
                padding-left: 3rem;
            }
            :-ms-input-placeholder { /* IE 10+ */
                color: #ccc;
                font-weight: bold;
                padding-left: 3rem;
            }
            :-moz-placeholder { /* Firefox 18- */
                color: #ccc;
                font-weight: bold;
                padding-left: 3rem;
            }
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
    cursor: pointer;

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
                    <svg width={70} height={70} viewBox={'0 0 780 250'}>
                        <path fill="#231F20" d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"></path>
                    </svg>
                </div>
                <div className="search-container">
                    <FontAwesomeIcon icon={faSearch} size="lg"/>
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