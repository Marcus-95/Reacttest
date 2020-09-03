import React from 'react'

export default function About() {
    return (
        <div style={aboutStyle}>
        <React.Fragment>
            <h1>About</h1>
            <p>This is a simple test page from the React Project
            </p>
        </React.Fragment>
        </div>
    )
}

const aboutStyle = {
    background: '#E83A0C',
    color: '#000000',
    textAlign: 'center',
    padding: '10px'
}


