import React from 'react'
import { Link } from 'react-router-dom'




export default function Header(){


    return(
        <header>
            <nav>
                <div>
                    <h2 className="logo">Crowd Coach</h2>
                </div>
                <div>
                    <Link className="navBtn" to='/Dashboard'>Home</Link>
                    <Link className="navBtn" to='/Register'>Sign Up</Link>
                    <Link className="navBtn" to='/Login'>Login</Link>
                </div>
            </nav>
            {/* <div>
                <h1>Crowd Coach</h1>
                <h3>Subtitle</h3>
            </div> */}
        </header>


    )
    }
