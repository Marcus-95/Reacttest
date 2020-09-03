import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1 style= {titlefont}>React TodoList!</h1>
            <Link style={linkStyle} to="/">Homepage</Link> | <Link 
            style={linkStyle}
            to="/about">About</Link>
        </header>
    )
}

const titlefont = {
    color: '#080201'
}

const headerStyle = {
    background: '#ae1b09',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#000000',
    textDecoration: 'none',
    margin: '10px'
}
export default Header;