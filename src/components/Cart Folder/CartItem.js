import React from 'react'
import { products } from '../data'
import { useDispatch } from 'react-redux'
import { removeItemFromCart } from '../../Redux/cartSlice'

const CartItem = ({ cartItem, i }) => {
    const cartProduct = products.find(p => p.id === cartItem.productId)
    const dispatch = useDispatch();

    return (
        <div>
            <div key={i} className="cartItemDesc">
                <p>{cartItem.id}</p>
                <p>{cartProduct.name}</p>
                <p>{cartItem.quantity}</p>
                <p>$ {cartProduct.price * cartItem.quantity}</p>
            </div>
            <div onClick={() => dispatch(removeItemFromCart({ cartItemId: cartItem.id })) }
                 className="border border-3 btn">
                <span>
                    DELETE
                </span>
            </div>

        </div>
    )
}

export default CartItem
