import React from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'
import { getCartItems, getTotalPrice } from '../../Redux/cartSlice'

const Cart = () => {
   const cartItems = useSelector(getCartItems)
   const totalPrice = useSelector(getTotalPrice)


    return (
        <div className="border border-2 p-10 w-3/12">
            Cart
            Your Cart Is Empty
            {cartItems.map((cartItem, i) =>
                <CartItem cartItem={cartItem} i={i} />
            )}
            <div>price:$ { totalPrice }</div>
            
        </div>
    )
}

export default Cart
