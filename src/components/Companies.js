import React from 'react';
import styled, { css } from 'styled-components';
import Brands from '../assets/brands.png';

const STYLES = styled.div`
    height: auto;
    //width: 100%;
    text-align: center;
    padding: 1rem;

    h3 {
        font-size: 1.7rem;
    }
`;

const CONTAINER = styled.div`
    height: auto;
    width: auto;
    padding-top: 4rem;
    padding-bottom: 4rem;
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