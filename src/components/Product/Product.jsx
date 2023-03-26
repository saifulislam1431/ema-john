import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product);
    const{img, name, price, ratings, seller} = props.product;
    return (
        <div className='product'>
            <div className='img'>
            <img src={img} alt="Product Image" className='product-img'/>
            </div>
            <div className='details'>
            <h6 className='pro-name'>{name}</h6>
            <p className='price'>Price: ${price}</p>
            <p className='manufacture'>Manufacture: {seller}</p>
            <p className='rat'>Rating: {ratings} star</p>
            </div>
            <div className='cart-foot'>
                <div>
                <p className='foot-text'>Add to Cart</p>
                </div>

            </div>
        </div>
    );
};

export default Product;