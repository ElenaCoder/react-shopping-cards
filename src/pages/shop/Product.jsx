/* eslint-disable react/prop-types */
import React from 'react';
import './Product.css'

const Product = (props) => {
    const { productName, price, productImage } = props.data;

    return (
        <div className='product'>
            <img src={productImage} />
            <div className='description'>
                <b>
                    <p>{productName}</p>
                </b>
                <p>{price}</p>
            </div>
            <button className='addToCartBtn'>Add to Cart</button>
        </div>
    );
};

export default Product;
