import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product);
    const { img, name, price, ratings, seller } = props.product;
    return (
        <div className='product'>
            <div className='img'>
                <img src={img} alt="Product Image" className='product-img' />
            </div>
            <div className='details'>
                <h6 className='pro-name'>{name}</h6>
                <p className='price'>Price: ${price}</p>
                <p className='manufacture'>Manufacture: {seller}</p>
                <p className='rat'>Rating: {ratings} star</p>
            </div>
            <div>
                <button className='foot-btn'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;