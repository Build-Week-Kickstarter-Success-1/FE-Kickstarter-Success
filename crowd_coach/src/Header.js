import React, { useState, useEffect } from 'react'



export default function Header(){


    return(
        <header>
            <nav>
                <div>
                    <h2 className="logo">Crowd Coach</h2>
                </div>
                <div>
                    <span className="navBtn">Home</span>
                    <span className="navBtn">About</span>
                    <span className="navBtn">Login</span>
                </div>
            </nav>
            <div>
                <h1>Crowd Coach</h1>
                <h3>Subtitle</h3>
            </div>
        </header>


    )
    }
