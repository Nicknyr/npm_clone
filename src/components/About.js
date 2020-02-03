import React from 'react';
import styled, { css } from 'styled-components';
import Blob2 from '../assets/blob2.png';
import Coffee from '../assets/coffee.png';
import Flag from '../assets/flag.png';
import Shield from '../assets/shield.png';
import Bars from '../assets/bars.png';
import Blob from '../assets/blob.png';

const STYLES = styled.div`
    height: auto;
    display: flex;
    flex-wrap: wrap;
    padding-top: 4rem;
    padding-bottom: 4rem;
`;

const INTROCONTAINER = styled.div`
    flex-basis: 100%;
`

const INTRO = styled.div`
    height: auto;
    //width: 100%;
    text-align: center;
    padding: 1.5em;

    p {
        font-weight: 400;
        line-height: 1.6;
    }

    h3 {
        font-size: 1.8rem;
    }

    @media(min-width: 768px) {
        width: 70%;
        margin: 0 auto;
    }

    @media(min-width: 992px) {
        width: 50%;
    }
`;

const FEATURE = styled.div`
    height: auto; 
    width: 100%;
    //flex: 1;
    text-align: center;
    padding-top: 3em;
    padding-bottom: 3em;


    p {
        font-size: .9rem;
        font-weight: 400;
        line-height: 1.6;
        padding: 0em 2em;
        height: 7rem;
    }

    @media(min-width: 768px) {
        width: 50%;
        
        p {
            text-align: left;
        }
    }

    @media(min-width: 992px) {
        flex-wrap: nowrap;
        flex: 1;
    }
`;

const BUTTON = styled.button`
    //width: 12em;
    height: auto;
    border-radius: 25px;
    background: transparent;
    border: 1px solid black;
    font-size: 1.1rem;
    font-weight: bold;
    padding: .6rem 2rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    cursor: pointer;

`;

const About = () => {
    return (
        <STYLES>
            <INTROCONTAINER>
                <INTRO>
                    <img src={Blob} height="90" />
                    <h3>Bring the best of open source to you, your team, and your company</h3>
                    <p>
                        Relied upon by more than 11 million developers worldwide, npm is committed to making JavaScript development elegant, productive, and safe. The free npm Registry has become the center of JavaScript code sharing, and with more than one million packages, the largest software registry in the world. Our other tools and services take the Registry, and the work you do around it, to the next level.
                    </p>
                </INTRO>
            </INTROCONTAINER>
            <FEATURE>
                <img src={Blob2} height="60" />
                <h4>npm Free</h4>
                <p>
                   Become a contributing member of the open source JavaScript community. Create public packages, publish updates, audit your dependencies, and more.
                </p>
                <BUTTON>LEARN MORE</BUTTON>
            </FEATURE>
            <FEATURE>
                <img src={Coffee} height="60" />
                <img src={Flag} height="60" />
                <h4>npm Pro & Teams</h4>
                <p>
                   For next-level JavaScript developers who want more capabilities. Pro and Teams add the ability to build private packages for you, your team, or for customers
                </p>
                <BUTTON>LEARN MORE</BUTTON>
            </FEATURE>
            <FEATURE>
                <img src={Bars} height="60" />
                <h4>npm Enterprise</h4>
                <p>
                   For very large teams and business-critical projects, npm Enterprise delivers features that organizations with hundreds of developers need, like SSO and enhanced security.
                </p>
                <BUTTON>LEARN MORE</BUTTON>
            </FEATURE>
            <FEATURE>
                <img src={Shield} height="60" />
                <h4>npm PkgSafe</h4>
                <p>
                   Our security team's unique insights into JavaScript vulnerabilities and threats are delivered as free and premium features, as well as services for resellers and others.
                </p>
                <BUTTON>LEARN MORE</BUTTON>
            </FEATURE>
        </STYLES>
    );
}

export default About;