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
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
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
        line-height: 1.5;
        color: #333;
        font-size: 1.1rem;
    }

    h3 {
        @import url('https://fonts.googleapis.com/css?family=Arimo|Poppins&display=swap');
        font-family: 'Poppins', sans-serif;
        font-size: 1.5rem;
        line-height: 1.25;
        font-weight: 600;
    }

    @media(min-width: 768px) {
        width: 70%;
        margin: 0 auto;
    }

    @media(min-width: 992px) {
        max-width: 32rem;
        margin-bottom: 0rem;

        h3 {
            font-size: 2.25rem;
            line-height: 1.25;
        }
    }
`;

const FEATURE = styled.div`
    height: auto; 
    width: 100%;
    text-align: center;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    position: relative;
   
    .flag {
        margin-left: 1rem;
    }

    p {
        font-size: .9rem;
        font-weight: 400;
        line-height: 1.6;
        margin-bottom: 2rem;
    }

    @media(min-width: 768px) {
        width: 50%;
        text-align: left;
    
        
        p {
            text-align: left;
            //width: 80%;
           padding: 0;
           padding-right: 1.5rem;
        }
    }

    @media(min-width: 992px) {
        flex-wrap: nowrap;
        flex: 1;
    }
`;

const BUTTON = styled.button`
    height: auto;
    border-radius: 25px;
    background: transparent;
    border: 1px solid black;
    font-size: 1.1rem;
    font-weight: bold;
    padding: .6rem 2rem;
    cursor: pointer;
    position: absolute;
    bottom: 0;
`;

const FEATURECONTAINER = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;

    @media(min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        padding: 2rem;
    }

    @media(min-width: 992px) {
        width: 80%;
        margin: 0 auto;
    }
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
            <FEATURECONTAINER>
                <FEATURE>
                    <img src={Blob2} height="70" />
                    <h4>npm Free</h4>
                    <p>
                    Become a contributing member of the open source JavaScript community. Create public packages, publish updates, audit your dependencies, and more.
                    </p>
                    <BUTTON>LEARN MORE</BUTTON>
                </FEATURE>
                <FEATURE>
                    <img src={Coffee} height="70" />
                    <img src={Flag} height="70"  className="flag"/>
                    <h4>npm Pro & Teams</h4>
                    <p>
                    For next-level JavaScript developers who want more capabilities. Pro and Teams add the ability to build private packages for you, your team, or for customers
                    </p>
                    <BUTTON>LEARN MORE</BUTTON>
                </FEATURE>
                <FEATURE>
                    <img src={Bars} height="70" />
                    <h4>npm Enterprise</h4>
                    <p>
                    For very large teams and business-critical projects, npm Enterprise delivers features that organizations with hundreds of developers need, like SSO and enhanced security.
                    </p>
                    <BUTTON>LEARN MORE</BUTTON>
                </FEATURE>
                <FEATURE>
                    <img src={Shield} height="70" />
                    <h4>npm PkgSafe</h4>
                    <p>
                    Our security team's unique insights into JavaScript vulnerabilities and threats are delivered as free and premium features, as well as services for resellers and others.
                    </p>
                    <BUTTON>LEARN MORE</BUTTON>
                </FEATURE>
            </FEATURECONTAINER>
        </STYLES>
    );
}

export default About;