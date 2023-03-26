import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Order.css'

const Order = () => {
    const[products,setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='order-container'>

            <div className='all-products'>
                {
                    products.map((product)=><Product
                     key={products.id}
                     product={product}
                    ></Product>)
                }
            </div>
            <div className='order-summary'>
                <h2>Order summary</h2>
            </div>
            
        </div>
    );
};

export default Order;