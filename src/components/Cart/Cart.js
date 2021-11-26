import React from 'react';
const Cart = (props) => {
    const { cart } = props
    let total = 0
    let totalQuantity = 0
    let shipping = 0
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1
        }
        total = total + product.price * product.quantity
        totalQuantity = totalQuantity + product.quantity
        shipping = shipping + product.shipping * product.quantity
    }
    // const shipping = 25
    const tax = (total + shipping) * .10
    const grandTotal = total + shipping + tax
    return (

        <div className="mt-5">
            <h3>Order Summary</h3>
            <h5>Items Ordered:{totalQuantity}</h5>
            <br />
            <p>Total: {total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>tax: {tax.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
            {props.children}
        </div>
    );
};

export default Cart;