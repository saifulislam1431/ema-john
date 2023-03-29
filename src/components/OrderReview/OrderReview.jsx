import React from 'react';
import './OrderReview.css'

const OrderReview = (props) => {
    const {cart} = props;

    let total = 0;
    let ShippingCharge = 0;
    let quantity = 0;
    for(const product of cart){
        if(product.quantity === 0){
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        ShippingCharge = ShippingCharge + product.shipping;
        quantity = quantity + product.quantity;
    }

    let tax = 0
    tax = (total*3 /100);


    let grandTotal = 0
    grandTotal = grandTotal + total + ShippingCharge + tax;

    return (
        <div className='cart'>
                <div>
                <p className='title'>Order Summary</p>
                </div>
                <p className='cart-detail'>Selected Item: {quantity}</p>
                <p className='cart-detail'>Total Price: ${total}</p>
                <p className='cart-detail'>Total Shipping Charge:  ${ShippingCharge}</p>
                <p className='cart-detail'>Tax: ${tax.toFixed(2)}</p>
                <h6 className='g-total'>Grand Total: {grandTotal.toFixed(2)}</h6>

        </div>
    );
};

export default OrderReview;