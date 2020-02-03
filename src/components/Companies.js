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

const Companies = () => {
    return (
        <STYLES>
            <h3>Gratefully serving everyone from solo devs to the Fortune 500</h3>
            <img src={Brands} height="300" />
        </STYLES>
    );
}

export default Companies;