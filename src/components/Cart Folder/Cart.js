import React from 'react'
import CartItem from './CartItem'

const Cart = () => {
    const cartItems = [
        {
            id: 1,
            name: 'Shoe',
            quantity: 10,
            price: '$40'
        }
    ]


    return (
        <div className="border border-2 p-10 w-3/12">
            Cart
            Your Cart Is Empty
            {cartItems.map(cartItem =>
                <CartItem cartItem={cartItem} />
            )}
        </div>
    )
}

export default Cart
