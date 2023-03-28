import React, { useEffect, useState } from 'react';
import OrderReview from '../OrderReview/OrderReview';
import Product from '../Product/Product';
import './Order.css'

const Order = () => {
    const[products,setProducts] = useState([]);
    const[cart,setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const handleShopCart = (product) =>{
       const newCart = [...cart, product]
       setCart(newCart)
        
    }
    return (
        <div className='order-container'>

            <div className='all-products'>
                {
                    products.map((product)=><Product
                     key={products.id}
                     product={product}
                     handleShopCart={handleShopCart}
                    ></Product>)
                }
            </div>
            <div className='order-summary'>
                <OrderReview cart={cart}>

                </OrderReview>

            </div>
            
        </div>
    );
};

export default Order;