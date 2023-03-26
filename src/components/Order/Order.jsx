import React, { useEffect, useState } from 'react';
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
                <h2>All Products: {products.length}</h2>
            </div>
            <div className='order-summary'>
                <h2>Order summary</h2>
            </div>
            
        </div>
    );
};

export default Order;