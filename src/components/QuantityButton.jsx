import React from 'react'
import styled from 'styled-components';

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
        <QuantityControlPanel>
            <DecreaseBtn onClick={removeQuantity}>-</DecreaseBtn>
            <QuantityCount>{ quantity }</QuantityCount>
            <IncreaseBtn onClick={addQuantity}>+</IncreaseBtn>
        </QuantityControlPanel>
    )
}


const QuantityControlPanel = styled.div`
    width: 40%;
    padding:8px 0;
    border-radius: 5px;
    background-color: var(--grayishBlue-3);
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const QuantityCount = styled.span`
     font-weight: 700;
`

const DecreaseBtn = styled.button`
    color: var(--orange);
    padding:0 10px;
    font-weight: 900;
    
    
`

const IncreaseBtn = styled.button`
    color: var(--orange);
    padding:0 10px;
    font-weight: 900;
`

export default QuantityButton
