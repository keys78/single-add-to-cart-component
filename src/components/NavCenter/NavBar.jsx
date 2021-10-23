import React from 'react'
import NavLinks from './NavLinks'
import styled from 'styled-components'

const NavBar = () => {
    return (
        <NavBarContainer >
            <div>
                <NavLinks />
            </div>

            <div className='flex -mt-10 gap-20 items-center'>
                <ImgCart src='images/icon-cart.svg' />
                <Avatar src='images/AvatarMaker.png' />
            </div>
        </NavBarContainer>
    )
}

const NavBarContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--grayishBlue-2);
    padding-top:30px;

`

const Avatar = styled.img`
    border-radius: 999px;
    width: 50px;
    border: 2px solid var(--orange);
    cursor: pointer;
    

`
const ImgCart = styled.img`
    width: 30px;
    cursor: pointer;

`


export default NavBar
