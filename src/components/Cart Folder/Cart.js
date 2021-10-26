import React from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'
import { getCartItems } from '../../Redux/cartSlice'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


const Cart = ({ modalRef, open }) => {
    const cartItems = useSelector(getCartItems)


    return (
        <CartModal className="animate__animated animate__slideInDown animate__faster"
            ref={modalRef} style={{ display: open ? "block" : "none", }}
        >
            <CartHeader>Cart</CartHeader>
            <DivisorLine />
            <CartItemInfo>
                {cartItems.map((cartItem, i) =>
                    <CartItem cartItem={cartItem} i={i} />
                )}
                {cartItems.length < 1 &&
                    <div>
                        <img src="https://viacapo.com/wp-content/themes/GoDoCommerceTheme/img/emptycart.gif" alt="" class="mx-auto w-28"/>
                        <h1 class ="py-6 font-semibold text-center">YOUR CART IS EMPTY</h1>
                        <NavLink to="/"> <ShopNowBtn>SHOP NOW</ShopNowBtn> </NavLink>
                    </div>
                }
            </CartItemInfo>
        </CartModal>
    )
}

const CartModal = styled.div`
     box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
              0 2px 2px rgba(0,0,0,0.12), 
              0 4px 4px rgba(0,0,0,0.12), 
              0 8px 8px rgba(0,0,0,0.12),
              0 16px 16px rgba(0,0,0,0.12);
    width: 350px;
    padding:10px 0;
    position:absolute;
    top:5rem;
    right:9.6rem;
    background-color: var(--neutral);
    border-radius: 10px;

    @media (max-width: 640px) {
        width:100%;
        margin:auto;
        right:0rem;
  }
`

// border-radius: 10px;
//     float:right;
//     margin-top: 5rem;
//     z-index: 999;
//     background:#fff;
//     padding: 2rem 1.75rem;
//     width: 100%;
//     max-width: 23.5rem;
//     box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
//               0 2px 2px rgba(0,0,0,0.12), 
//               0 4px 4px rgba(0,0,0,0.12), 
//               0 8px 8px rgba(0,0,0,0.12),
//               0 16px 16px rgba(0,0,0,0.12);

//     color: black;

const CartHeader = styled.h1`
    font-weight: 700;
    font-size: 16px;
    padding-left: 23px;
`

const DivisorLine = styled.div`
    border-bottom: 1px solid var(--grayishBlue-2);
    padding:2px 0 9px 0;
`
const CartItemInfo = styled.div`
    padding:15px 13px 7px 13px;
`

const ShopNowBtn = styled.div`
    margin-top: 15px;
    width: 100%;
    text-align: center;
    padding:8px 0;
    border-radius: 5px;
    background-color: var(--orange);
    color: var(--neutral);
    transition: 0.5s;
    
    &:hover{
        cursor: pointer;
        opacity: 0.6;
        transition: 0.5s;
    }
    
`
export default Cart