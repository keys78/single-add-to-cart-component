import React from 'react'
import styled from 'styled-components'


const AboutMe = ({ openAbout }) => {

    return (
        openAbout && <div style={{ display: openAbout ? "block" : "none", }}
            className="w-full h-screen fixed top-0 left-0 bg-gray-100 py-32 animate__animated animate__zoomIn animate__faster">
            <div className="w-6/12 mx-auto">
                <Avatar src="images/AvatarMaker.png" />
                <p>Connect With Me</p>
                <h1><a className="text-3xl text-yellow-600 text-center" href="https://github.com/Em-codes/single-add-to-cart-component">Github {' '}&#8594;</a></h1>
                <h1><a className="text-3xl text-yellow-600 text-center" href="https://www.linkedin.com/in/tochi-emma-904b71220/">LinkedIn {' '}&#8594;</a></h1>
            </div>
        </div>
    
    )
}

const Avatar = styled.img`
    border-radius: 999px;
    margin:auto;
    width: 25rem;
    border: 2px solid var(--orange);
    

`

export default AboutMe
