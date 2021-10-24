import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseItemQuantity  } from '../Redux/productSlice';

const ImageLightBox = () => {
    const storeProducts = useSelector((state) => state.products);

    const dispatch = useDispatch();

    // const handleQuantityIncrease = () => {

    // }

    const renderProducts = storeProducts.map((product, i) => (
        <div className="flex gap-28 items-center" key={i}>
            <div>
                <img src={product.images.imgProduct_1} alt={product.images.alt} />
            </div>
            <div>
                <p>{product.tag}</p>
                <h1>{product.name}</h1>
                <h2>{product.description}</h2>
                <div className="border ">
                    <button >-</button>
                    <h2>{product.quantity}</h2>
                    <button onClick={() => dispatch(increaseItemQuantity())} >+</button>
                </div>
                <button>ADD TO CART</button>
                <h2>${product.price}</h2>
                <h2>{product.discountPrice}</h2>
                <h2>{product.discountPercentage}</h2>

            </div>

        </div>
    ))

    return (
        <div>
            {renderProducts}
        </div>
    )
}



export default ImageLightBox
