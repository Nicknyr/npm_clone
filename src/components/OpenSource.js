import React from 'react';
import styled, { css } from 'styled-components';
import Background from '../assets/background-small.png';

const STYLES = styled.div`
    height: auto;
    width: 100%;
    background: url(${Background});
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    //filter: brightness(90%);
`;

const CONTAINER = styled.div`
    text-align: center;
    padding: 2.5rem 1rem;
    max-width: 32rem;

    h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: snow;
    }

    p {
        font-size: 1.1rem;
        line-height: 1.4;
        color: snow;
    }

    @media(min-width: 768px) {
        width: 70%;
        font-size: 1rem;
        
        h3 {
            font-size: 1.7rem;
        }
    }

    @media(min-width: 992px) {
        width: 45%;

        h3 {
            font-size: 2.8rem;
            margin: 2rem;
        }

        p {
            margin: 1.5rem;
        }
    }
`;

const OpenSource = () => {
    return (
        <STYLES>
            <CONTAINER>
                <h3>We &#10084; open source</h3>
                <p>
                At npm, Inc., we're proud to dedicate teams of full-time employees to operating the npm Registry, enhancing the CLI, improving JavaScript security, and other projects that support and nurture a vibrant open source community.
                </p>
            </CONTAINER>
        </STYLES>
    );
}

export default OpenSource;