import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {template} from './style_template'


const StyledHeader = styled.header`
    nav{
        display:flex;
        justify-content:space-between;
        background-color:${template.primary};
        color:white;
    }

    .navlinks{
        width:50%;
        display:flex;
        flex-direction:row;
        justify-content:flex-end;


    }
    .navBtn{
        color:white;
        padding:${template.medSpace};
    }

    .logo{
        padding:${template.smallSpace};
        font-family: 'Lexend Zetta', sans-serif;
        color:black;
        text-transform:uppercase;
    }

    #logo{
        width:45%;
    }

`;




export default function Header(){


    return(
        <StyledHeader>
            <nav>
                <div id='logo'>
                    <h2 className="logo">Kickstarter Coach</h2>
                </div>
                <div className='navlinks'>
                    <Link className="navBtn" to='/Dashboard'>Home</Link>
                    <Link className="navBtn" to='/Register'>Sign Up</Link>
                    <Link className="navBtn" to='/Login'>Login</Link>
                </div>
            </nav>
            {/* <div>
                <h1>Crowd Coach</h1>
                <h3>Subtitle</h3>
            </div> */}
        </StyledHeader>


    )
    }
