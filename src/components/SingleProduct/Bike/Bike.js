import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
// import './Electronics.css'

import { addDb, storeDb } from '../../../FakeDb/FakeDb';

import Products from '../../Products/Products';

const Bike = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data.slice(72, 84)))
    }, [])

    useEffect(() => {
        if (products.length) {
            const storeCart = storeDb()
            const storeArray = []
            for (const key in storeCart) {
                const addProduct = products.find(product => product.key === key)
                if (addProduct) {
                    const quantity = storeCart[key]
                    addProduct.quantity = quantity
                    storeArray.push(addProduct)
                }
            }
            setCart(storeArray)
        }
    }, [products])
    const handlePurchase = product => {
        const exists = cart.find(pd => pd.key === product.key)
        let newCart = []
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key)
            exists.quantity = exists.quantity + 1
            newCart = [...rest, exists]
        }
        else {
            product.quantity = 1
            newCart = [...cart, product]
        }
        setCart(newCart)
        addDb(product.key)

    }
    return (
        <div>
            <div>
                <div className="">
                    <div>
                        <Row xs={1} md={4} className="g-4">
                            {
                                products.map(product => <Products
                                    key={product.key}
                                    handlePurchase={handlePurchase}
                                    product={product}
                                ></Products>)
                            }
                        </Row>
                    </div>
                    <div className="Electronics-cart mx-auto">
                        <div className="part">
                            {/* <Cart cart={cart}>
                                <Link to="/review">
                                    <button className="btn-normal">Review Your Order</button>
                                </Link>
                            </Cart> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bike;