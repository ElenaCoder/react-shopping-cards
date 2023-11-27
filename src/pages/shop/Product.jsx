/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import './Product.css';
import { ShopContext } from '../../context/ShopContext';

const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart } = useContext(ShopContext);

    const cartItemAmount = cartItems[id];

    return (
        <div className='product'>
            <img src={productImage} />
            <div className='description'>
                <b>
                    <p>{productName}</p>
                </b>
                <p>{price}</p>
            </div>
            <button className='addToCartBtn' onClick={() => addToCart(id)}>
                Add to Cart {cartItemAmount > 0 && <> ({ cartItemAmount })</>}
            </button>
        </div>
    );
};

export default Product;
