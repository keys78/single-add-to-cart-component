import React from 'react'

const QuantityButton = ({ quantity,setQuantity }) => {
  

    const removeQuantity = () => {
        if (quantity <= 1) return

        const newQuantity = quantity - 1;
        setQuantity(newQuantity)
    }

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)
    }

    return (
        <div>
            <button onClick={removeQuantity}>&#8722;</button>
            <span>{ quantity }</span>
            <button onClick={addQuantity}>&#43;</button>
        </div>
    )
}

export default QuantityButton
