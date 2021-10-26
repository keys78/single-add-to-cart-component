import React, { useState } from 'react'
import { SRLWrapper } from "simple-react-lightbox";
import styled from 'styled-components';


const LightBoxImages = ({ product, i }) => {
    const [activeSlide, setActiveSlide] = useState(product.images.imgProduct_1)


    return (
        <div>

            <SRLWrapper>
                <DisplayImage src={activeSlide} alt={product.images.alt} />
                <ThumbNailsHolder>
                    <ThumbNails onClick={() => { setActiveSlide(product.images.imgProduct_1) }} src={product.images.imgProduct_1} alt={product.images.alt} />
                    <ThumbNails onClick={() => { setActiveSlide(product.images.imgProduct_2) }} src={product.images.imgProduct_2} alt={product.images.alt} />
                    <ThumbNails onClick={() => { setActiveSlide(product.images.imgProduct_3) }} src={product.images.imgProduct_3} alt={product.images.alt} />
                    <ThumbNails onClick={() => { setActiveSlide(product.images.imgProduct_4) }} src={product.images.imgProduct_4} alt={product.images.alt} />
                </ThumbNailsHolder>

            </SRLWrapper>
        </div>
    )
}

const ThumbNails = styled.img`
    width: 5rem;
    margin-top: 1rem;
    border-radius: 10px;
    border:3px solid transparent;
    cursor: pointer;
        &:hover{
             border:3px solid var(--orange);
             opacity: 0.4;
        }
`
const ThumbNailsHolder = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const DisplayImage = styled.img`
    width: 60rem;
    cursor: pointer;
    border-radius: 10px;
`

export default LightBoxImages
