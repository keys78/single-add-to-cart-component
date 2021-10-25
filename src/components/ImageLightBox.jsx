import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../Redux/cartSlice';
import QuantityButton from './QuantityButton';
import { products } from './data';

const ImageLightBox = () => {
    const [quantity, setQuantity] = useState(1)
    // const storeProducts = useSelector((state) => state.products);
    const dispatch = useDispatch()


    const renderProducts = products.map((product, i) => (
        <div className="flex gap-28 items-center" key={i}>
            <div>
                <img src={product.images.imgProduct_1} alt={product.images.alt} />
            </div>
            <div>
                <p>{product.id}</p>
                <p>{product.tag}</p>
                <h1>{product.name}</h1>
                <h2>{product.description}</h2>
                <QuantityButton quantity={quantity} setQuantity={setQuantity} />
                
                <button
                    onClick={() => { dispatch(addItemToCart({product, quantity}) )}
                    }
                >
                    ADD TO CART
                </button>
                <h2>$ {product.price}</h2>
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
