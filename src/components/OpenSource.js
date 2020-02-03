import React from 'react';
import styled, { css } from 'styled-components';
import Background from '../assets/background-small.png';

const STYLES = styled.div`
    height: 20em;
    width: 100%;
    background: url(${Background});
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CONTAINER = styled.div`
    text-align: center;
    padding: 1rem;

    h3 {
        font-size: 1.5rem;
        color: snow;
    }

    p {
        font-size: 1.1rem;
        line-height: 1.4;
        color: snow;
    }
`;

const OpenSource = () => {
    return (
        <STYLES>
            <CONTAINER>
                <h3>We love open source</h3>
                <p>
                At npm, Inc., we're proud to dedicate teams of full-time employees to operating the npm Registry, enhancing the CLI, improving JavaScript security, and other projects that support and nurture a vibrant open source community.
                </p>
            </CONTAINER>
        </STYLES>
    );
}

export default OpenSource;