import React from 'react';
import styled, { css } from 'styled-components';
import Brands from '../assets/brands.png';

const STYLES = styled.div`
    height: auto;
    //width: 100%;
    text-align: center;
    //padding: 1rem;
    padding-top: 2rem;
    padding-bottom: 5rem;
    padding-right: 1rem;
    padding-left: 1rem;
    margin: 0 auto;

    h3 {
        @import url('https://fonts.googleapis.com/css?family=Arimo|Poppins&display=swap');
        font-family: 'Poppins', sans-serif;
        font-size: 1.5rem;
        line-height: 1.25;
        font-weight: 600;
        max-width: 32em;
    }
`;

const CONTAINER = styled.div`
    height: auto;
    width: auto;
    //background: salmon;

    img {
        height: auto;
        width: 100%;
    }

    @media(min-width: 768px) {
        width: 70%;
        margin: 0 auto;
    }

    @media(min-width: 992px) {
        width: 40%;

        h3 {
            font-size: 2.5rem;
        }
    }
`

const Companies = () => {
    return (
        <STYLES>
            <CONTAINER>
                <h3>Gratefully serving everyone from solo devs to the Fortune 500</h3>
                <img src={Brands}  />
            </CONTAINER>
        </STYLES>
    );
}

export default Companies;