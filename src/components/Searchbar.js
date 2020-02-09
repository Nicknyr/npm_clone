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
    //justify-content: space-around;
    align-items: center;
    padding-top: .3rem;
    padding-bottom: .3rem;
    margin-left: 1%;
    margin-right: 1%;
    flex-wrap: wrap;

    .logo-container {
        flex-grow: 0;
        margin-left: 2rem;
        margin-right: 2rem;
        flex: auto;
        order: 1;
        flex: 1 1 auto;
    }

    .login-container {
        flex-grow: 0;
        margin-left: 2rem;
        margin-right: 2rem;
        flex: auto;
        order: 2;
        flex: 1 1 auto;
    }

    .search-container {
        //width: 700px;
        width: 50%;
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        //flex: auto;
        order: 3;
        flex-grow: 3;

        .fa-search {
            margin-left: 1rem;
            margin-right: 1rem;
            position: absolute;
            left: 3px;
            top: calc(50% - 0.5em);
        }

        input {
            //width: 700px;
            width: calc(100% - 10px);
            height: 40px;
            background: #f2f2f2;
            border: none;
            padding: 5px;
            padding-left: 50px;
            font-family: 'Fira Mono', monospace;
            font-size: 16px;

            ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                font-size: 16px;
                color: darkgrey;
                font-weight: 100;
            }

            ::-moz-placeholder { /* Firefox 19+ */
                color: darkgrey;
                font-weight: 100;
            }

            :-ms-input-placeholder { /* IE 10+ */
                color: darkgrey;
                font-weight: 100;
            }

            :-moz-placeholder { /* Firefox 18- */
                color: darkgrey;
                font-weight: 100;
            }
        }
    }

    @media(min-width: 768px) {
        .logo-container {
            order: 1;
        }

        .search-container {
            order: 2;
        }

        .login-container {
            order: 3;
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
        color: #171717;
        font-weight: 500;

        &:hover {
            opacity: .5;
        } 
  `}

    ${props => props.signup && css`
            border: 1px solid #ccc;
            background: transparent;
            color: #171717;
            font-weight: 500;

            &:hover {
                opacity: .5;
            } 
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
                    <span>
                        <FontAwesomeIcon icon={faSearch} size="lg"/>
                    </span>
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