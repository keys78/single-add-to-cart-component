import React from 'react'
import { products } from '../data'
import { useDispatch, useSelector } from 'react-redux'
import { removeItemFromCart, getTotalPrice } from '../../Redux/cartSlice'
import styled from 'styled-components'


const CartItem = ({ cartItem, i }) => {
    const cartProduct = products.find(p => p.id === cartItem.productId)
    const dispatch = useDispatch();
    const totalPrice = useSelector(getTotalPrice)

    return (
        <CartItemInfo>
            <div className="flex justify-between items-center" key={i}>
                <CartThumbNail src={cartItem.cartImage} alt="cartImage" />
                <div>
                    <h1 className="text-sm text-gray-500">{cartProduct.name}</h1>
                    <span className="text-sm pr-1 text-gray-500">{'$'}{cartProduct.price}{'.00'}</span>
                    <span className="text-sm pr-3 text-gray-500">x {cartItem.quantity}</span>
                    <span className="font-bold text-sm">{'$'}{totalPrice}{'.00'}</span>
                </div>
                <div className="cursor-pointer" onClick={() => dispatch(removeItemFromCart({ cartItemId: cartItem.id }))}>
                    <img src='images/icon-delete.svg' />
                </div>
            </div>
            <CheckoutBtn>CHECKOUT</CheckoutBtn>

        </CartItemInfo>
    )
}

const CartItemInfo = styled.div`
    padding:0 13px;
   
`

const CartThumbNail = styled.img`
    width: 50px;
    border-radius:7px;
`
const CheckoutBtn = styled.div`
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

export default CartItem
