import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../Redux/cartSlice';
import QuantityButton from './QuantityButton';
import LightBoxImages from './LightBoxImages';
import styled from 'styled-components';


const ImageLightBox = () => {
    const [quantity, setQuantity] = useState(1)
    const storeProducts = useSelector((state) => state.products);
    const dispatch = useDispatch()

    const renderProducts = storeProducts.map((product, i) => (
        <ItemDisplayContainer key={i}>
            <div>
                <LightBoxImages product={product} i={i} />
            </div>
            <DetailsArea>
                <ProductTag>{product.tag}</ProductTag>
                <ProductName>{product.name}</ProductName>
                <ProductDesc >{product.description}</ProductDesc>

                <div>
                    <div className="flex gap-5 items-center">
                        <ProductPrice>{'$'}{product.price.toLocaleString(undefined, {minimumFractionDigits: 2})}</ProductPrice>
                        <DiscountPercentage>{product.discountPercentage}</DiscountPercentage>
                    </div>
                    <OriginalPrice>{'$'}{product.discountPrice.toLocaleString(undefined, {minimumFractionDigits: 2})}</OriginalPrice>
                </div>




                <PanelContainer>
                    <QuantityButton quantity={quantity} setQuantity={setQuantity} />
                    <AddToCartBtn onClick={() => { dispatch(addItemToCart({ product, quantity })) }} >
                        <span><img src='images/icon-cart-white.svg' /></span>
                        <span>{product.cartStatus}</span>
                    </AddToCartBtn>
                </PanelContainer>
            </DetailsArea>

        </ItemDisplayContainer>
    ))

    return (
        <div>
            {renderProducts}
        </div>
    )
}

const ItemDisplayContainer = styled.section`
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top:70px;
`

const DetailsArea = styled.div`
    margin-left: 10rem;
    margin-top: -2rem;
    
`

const ProductTag = styled.h2`
    color: var(--orange);
    font-weight:700;
    font-size: 12px;
    padding-bottom: 12px;
`
const ProductName = styled.h1`
    color: var(--blacko);
    font-weight:900;
    font-size: 2.5rem;
    line-height: 3rem;
`
const ProductDesc = styled.p`
    color: var(--grayishBlue-1);
    font-weight: 500;
    font-size: 14px;
    padding:25px 0;
`
const ProductPrice = styled.span`
    color: var(--blacko);
    font-weight: 700;
    font-size: 1.5rem;
    /* margin-right: 1rem; */
`
const DiscountPercentage = styled.span`
    color: var(--orange);
    background-color: var(--paleOrange);
    border-radius: 5px;
    font-weight: 700;
    padding:2px 4px;
    font-size: 0.8rem;
`
const OriginalPrice = styled.h1`
    text-decoration: line-through;
    color: var(--grayishBlue-2);
    font-weight: 700;
    font-size: 1rem;
`


const AddToCartBtn = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    gap:0.7rem;
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
const PanelContainer = styled.div`
    display: flex;
    align-items: center;
    gap:9rem;
    margin-top:2rem;
`

export default ImageLightBox
