import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const ReviewItem = (props) => {
    const { name, img, starCount, quantity, star, price, shipping, key } = props.product
    const { handleRemoveCart } = props
    return (
        <div>
            {/* <h1>Review</h1> */}
            <Col>
                <Card className="card mt-5">
                    <Card.Img className="card-img img-fluid mx-auto" variant="top" src={img} style=
                        {{
                            width: "300px",
                            borderRadius: "50%",
                            height: "300px"

                        }} />
                    <Card.Body className="text-start mx-auto">
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <p>Quantity: {quantity}</p>
                            <p>Price: ${price}</p>
                            <p>Only {starCount} left in stock - order soon</p>
                            <p>Shipping: {shipping}</p>
                            <Rating className="rating"
                                initialRating={star}
                                emptySymbol="far fa-star fa-2x"
                                fullSymbol="fas fa-star fa-2x"
                                readonly
                            />
                        </Card.Text>
                        <button onClick={() => handleRemoveCart(key)} className="btn-normal">Remove</button>
                    </Card.Body>
                </Card>
            </Col>
        </div >
    );
};

export default ReviewItem;