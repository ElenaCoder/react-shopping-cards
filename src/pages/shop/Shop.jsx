import React from 'react';
import { PRODUCTS } from '../../../data/products';
import Product from './Product';
import './Shop.css'

const Shop = () => {
    return (
        <div className='shop'>
            <div className='shopTitle'>
                <h1>Product Shop</h1>
            </div>
            <div className='products'>{PRODUCTS.map((product) => <Product key={product.id} data={product}/>)}</div>
        </div>
    );
};

export default Shop;
