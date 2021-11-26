import React from 'react';
import { Card, CardImg, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './Products.css'

const Products = (props) => {
    const { name, img, starCount, star, price, details, shipping } = props.product
    const { handlePurchase } = props
    return (
        <div className="mt-5">
            <div className="container-fluid">
                <Col>
                    <Card>
                        <CardImg className="img-fluid" variant="top card" src={img} style={{ height: "600px" }} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <p>${price}</p>
                            <p>only {starCount} left in stock - order soon</p>
                            <Rating className="rating"
                                initialRating={star}
                                emptySymbol="far fa-star fa-2x"
                                fullSymbol="fas fa-star fa-2x"
                                readonly
                            />
                            <p>{shipping}</p>
                            <Card.Text>
                                {details}
                            </Card.Text>
                            <button onClick={() => handlePurchase(props.product)} className="btn-normal">Purchase</button>
                        </Card.Body>
                    </Card>
                </Col>
            </div>

            {/* <Col>
                <Card className="card">
                    <Card.Img className="card-img img-fluid" variant="top" src={img} style={{ width: "200px" }} />
                   
                </Card>
            </Col> */}
        </div>
    );
};

export default Products;