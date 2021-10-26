import React, { useRef, useState } from 'react'
import NavLinks from './NavLinks'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { getCartItems } from '../../Redux/cartSlice'
import Cart from '../Cart Folder/Cart'
import useClickOutside from '../../CustomHooks/useClickOutside'


const NavBar = () => {
    const [open, setOpen] = useState(false)

    const modalRef = useRef()

    useClickOutside(modalRef, () => {
        if (open) setOpen(false)
    })



    const cartItems = useSelector(getCartItems)
    return (
        <div>
            <NavBarContainer >
                <div>
                    <NavLinks />
                </div>

                <div className='flex -mt-10 gap-20 items-center'>
                    <div className="relative" onClick={() => setOpen(true)}>
                        <ImgCart src='images/icon-cart.svg' />
                        <Counter>{cartItems.length}</Counter>
                    </div>


                    <Avatar src='images/AvatarMaker.png' />
                </div>

            </NavBarContainer>
            <Cart modalRef={modalRef} open={open} />
        </div>
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

`
  


export default NavBar
