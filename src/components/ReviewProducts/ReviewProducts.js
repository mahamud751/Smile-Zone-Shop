import React from 'react';
import { Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { clearDb, removeFromDb } from '../../FakeDb/FakeDb';
import useCart from '../../hooks/useCart'
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';

// import Cart from '../Cart/Cart';

import ReviewItem from '../ReviewItem/ReviewItem';

const ReviewProducts = () => {
    const [products] = useProducts()
    const [cart, setCart] = useCart(products)
    const history = useHistory()

    const handleRemoveCart = key => {
        const newCart = cart.filter(product => product.key !== key)
        setCart(newCart)
        removeFromDb(key)
    }
    const handlePlaceOrder = () => {
        setCart([])
        clearDb()
        history.push('/placeOrder')
    }
    return (
        <div>
            <div className="Electronics-container">
                <div>
                    <Row xs={1} md={1} className="g-4">
                        {
                            cart.map(product => <ReviewItem
                                key={product.key}
                                handleRemoveCart={handleRemoveCart}
                                product={product}
                            ></ReviewItem>)
                        }
                    </Row>
                    {/* {
                        cart.find(pd => <Header
                            pd={pd.length}
                        ></Header>)
                    } */}
                </div>
                <div className="Electronics-cart mx-auto">
                    <div className="part">
                        <Cart cart={cart}>
                            <button onClick={handlePlaceOrder} className="btn-normal">Place Order</button>
                        </Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewProducts;