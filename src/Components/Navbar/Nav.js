import React from 'react'
import logo from './logo.png'

import './nav-style.css';

const Nav = () => {
    return (
        <div className='Nav'>
            <ul>
                <li><img src={logo} height="60px" style={{ paddingTop: "20px", marginRight: "40px" }} /></li>
                <li >Home</li>
                <li >Product</li>
                <li >About</li>
                <li >Contact</li>
                <li><button>LogIn</button></li>
            </ul>
        </div>
    )
}

export default Nav
