import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import OrderReview from '../OrderReview/OrderReview';
import Product from '../Product/Product';
import './Order.css'

const Order = () => {
    // useState from loaded data
    const[products,setProducts] = useState([]);
    // useState for  passing data to Order review
    const[cart,setCart] = useState([]);

    // Loading data from api
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])


    // Loading data from api by stored local storage id
    useEffect(()=>{
      const storedCart = getShoppingCart()
      const updateCart = [];

    //   Get id from local storage.
      for(const id in storedCart){

        // find Product by id from products.
        const savedProducts = products.find(product=> product.id === id)
        
       if(savedProducts){
         // Get quantity of the product
         const quantity = storedCart[id];

         // Set quantity of the product
         savedProducts.quantity = quantity;

        //  add the save product to the update cart
        updateCart.push(savedProducts);
       }
       
      }
    //  Set the cart
      setCart(updateCart);
      
    },[products])

    // Passing data to review cart
    const handleShopCart = (product) =>{
       const newCart = [...cart, product]
       setCart(newCart)
    //    store data in local storage
       addToDb(product.id)
        
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