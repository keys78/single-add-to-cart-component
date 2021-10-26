import React, { useRef, useState } from 'react'
import NavLinks from './NavLinks'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { getCartItems } from '../../Redux/cartSlice'
import Cart from '../Cart Folder/Cart'
import useClickOutside from '../../CustomHooks/useClickOutside'
import AboutMe from '../AboutMe'
import SideBar from './SideBar'


const NavBar = () => {
    const [open, setOpen] = useState(false)
    const [openAbout, setOpenAbout] = useState(false)
    const [openSideBar, setOpenSideBar] = useState(false)

    const modalRef = useRef()
    const modalAboutMeRef = useRef()

    useClickOutside(modalRef, () => {
        if (open) setOpen(false)
    })

    useClickOutside(modalRef, () => {
        if (openAbout) setOpenAbout(!openAbout)
    })



    const cartItems = useSelector(getCartItems)
    return (
        <div>
            <NavBarContainer >
                <div className="flex gap-4 items-center">
                    <Hamburger onClick={() => setOpenSideBar(!openSideBar)} src='images/icon-menu.svg' />
                    <NavLinks />
                </div>

                <div className='flex lg:-mt-10 -mt-0 sm:gap-20 gap-0 items-center'>
                    <div className="relative" onClick={() => setOpen(true)}>
                        <ImgCart src='images/icon-cart.svg' />
                        <Counter>{cartItems.length}</Counter>
                    </div>

                    <Avatar onClick={() => setOpenAbout(!open)} src='images/AvatarMaker.png' />
                </div>

            </NavBarContainer>


            <Cart modalRef={modalRef} open={open} />
            <AboutMe modalAboutMeRef={modalAboutMeRef} openAbout={openAbout} />
            {openSideBar && <SideBar setOpenSideBar={setOpenSideBar} openSideBar={openSideBar}/>}
        </div>
    )
}

const NavBarContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--grayishBlue-2);
    padding-top:30px;

    @media (max-width: 640px) {
        padding:30px 20px;
  }

`

const Avatar = styled.img`
    border-radius: 999px;
    width: 50px;
    border: 2px solid var(--orange);
    cursor: pointer;
    z-index: 1;
    
    @media (max-width: 640px) {
        width: 30px;
  }

`
const ImgCart = styled.img`
    max-width: 50px;
    cursor: pointer;

    @media (max-width: 640px) {
        margin-left:-50px;
    }
`
const Counter = styled.span`
    text-align: center;
    width: 1.5rem;
    line-height: 1.2rem;
    position: absolute;
    top: -0.5rem;
    left: 1rem;
    background-color: var(--orange);
    color:var(--grayishBlue-3);
    border-radius: 20px;
    font-size: 0.75rem;

    @media (max-width: 640px) {
        width: 1rem;
        margin-left:-50px;
  }


`
const Hamburger = styled.img`
     cursor: pointer;
    @media (min-width: 1024px) {
       display: none;
       cursor: pointer;
  }
`


export default NavBar
