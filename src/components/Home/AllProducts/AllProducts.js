import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AllProducts.css'

const AllProducts = () => {
    return (
        <div>
            <div className="home container-fluid">
                <Row xs={1} md={4} className="g-4 first mt-5">
                    <Col>
                        <Card>
                            <Card.Img className="img-fluid" variant="top card" src="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                            <Card.Body className="card">
                                <Card.Title>Men</Card.Title>
                                <Card.Text>
                                    <Link to="/men"><button className="btn-normal">View More...</button></Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Img className="first_img img-fluid" variant="top" src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGZhc2hpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                            <Card.Body>
                                <Card.Title>Woman</Card.Title>
                                <Card.Text>
                                    <Link to='/women'><button className="btn-normal">View More...</button></Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img className="first_img img-fluid" variant="top" src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGZhc2hpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                            <Card.Body>
                                <Card.Title>Fashion</Card.Title>
                                <Card.Text>
                                    <Link to="/fashion"><button className="btn-normal">View More...</button></Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>

                            <Card.Img className="img-fluid" variant="top" src="https://images.unsplash.com/photo-1597633125184-9fd7e54f0ff7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                            <Card.Body>
                                <Card.Title>Hand Bag</Card.Title>
                                <Card.Text>
                                    <Link to="/bags"><button className="btn-normal">View More...</button></Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row xs={1} md={3} className="g-4 mt-5">
                    <Card>
                        <Card.Img className="main_img  img-fluid" variant="top" src="https://images.unsplash.com/photo-1530735038726-a73fd6e6a349?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAxfHxmYXNoaW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" style={{ height: "850px" }} />

                    </Card>

                    <Card>
                        <div className="img_part">
                            <Card.Img className="img-fluid" variant="top card" src="https://images.unsplash.com/photo-1491897554428-130a60dd4757?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" style={{ height: "420px" }} />

                            <Card.Img className="img-fluid" variant="top card" src="https://images.unsplash.com/photo-1600417118520-b87c3656c0d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" style={{ height: "420px" }} />

                            <Card.Img className="img-fluid" variant="top card" src="https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" style={{ height: "420px" }} />

                            <Card.Img className="img-fluid" variant="top card" src="https://images.unsplash.com/photo-1583784561126-c18e59057f3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fG1ha2V1cHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" style={{ height: "420px" }} />
                        </div>
                    </Card>

                    <Card>
                        <Card.Img className="main_img  img-fluid" variant="top" src="https://images.unsplash.com/photo-1550639525-c97d455acf70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=726&q=80" style={{ height: "850px" }} />

                    </Card>


                </Row>
                <Row xs={1} md={4} className="g-4 first mt-5">
                    <Col>
                        <Card>
                            <Card.Img className="img-fluid" variant="top card" src="https://images.unsplash.com/photo-1569721983011-6c8d6732d384?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" />
                            <Card.Body className="card">
                                <Card.Title>Gaming accessories</Card.Title>
                                <Card.Text>
                                    <Link to="/game"><button className="btn-normal">View More...</button></Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Img className="img-fluid" variant="top" src="https://m.media-amazon.com/images/I/71fXemIvmcL._AC_UL320_.jpg" />
                            <Card.Body>
                                <Card.Title>Home Furniture</Card.Title>
                                <Card.Text>
                                    <Link to="/homeProduct"><button className="btn-normal">View More...</button></Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img className="first_img img-fluid" variant="top" src="https://images.unsplash.com/photo-1594031245755-1ac99bbc7a3c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fG1hY2Jvb2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                            <Card.Body>
                                <Card.Title>Computers & Accessories</Card.Title>
                                <Card.Text>
                                    <Link to="/electric"><button className="btn-normal">View More...</button></Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img className="first_img img-fluid" variant="top" src="https://images.unsplash.com/photo-1554288270-434857b05234?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fG1vdG9yYmlrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                            <Card.Body>
                                <Card.Title>Bike Collection</Card.Title>
                                <Card.Text>
                                    <Link to="/bike"><button className="btn-normal">View More...</button></Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row xs={1} md={2} className="g-4 mt-5">
                    <Card>
                        <div className="img_part2">
                            <Card.Img className="img-fluid" variant="top card" src="https://images.unsplash.com/photo-1541785020492-6f02ecec0687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />

                            <Card.Img className="img-fluid" variant="top card" src="https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" />

                            <Card.Img className="img-fluid" variant="top card" src="https://images.unsplash.com/photo-1617240016072-d92174e44171?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />

                            <Card.Img className="img-fluid" variant="top card" src="https://images.unsplash.com/photo-1603983732011-caaf6ca67a3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdhbWluZyUyMHNldHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                            <Card.Img className="img-fluid" variant="top card" src="https://images.unsplash.com/photo-1544441893-675973e31985?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" />

                            <Card.Img className="img-fluid" variant="top card" src="https://images.unsplash.com/photo-1567967455389-e432b1ca1404?ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                        </div>
                    </Card>
                    <Card>
                        <div className="img_part2">
                            <Card.Img className="img-fluid" variant="top card" src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />

                            <Card.Img className="img-fluid" variant="top card" src="https://images.unsplash.com/photo-1512914890251-2f96a9b0bbe2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" />

                            <Card.Img className="img-fluid" variant="top card" src="https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwcGN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />

                            <Card.Img className="img-fluid" variant="top card" src="https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hhaXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                            <Card.Img className="img-fluid" variant="top card" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />

                            <Card.Img className="img-fluid" variant="top card" src="https://images.unsplash.com/photo-1543322748-33df6d3db806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" />

                        </div>
                    </Card>

                    {/* <Card>
                        <Card.Img className="main_img img-fluid" variant="top" src="https://rubiktheme.com/demo/at_dimita_demo/themes/at_dimita/assets/img/modules/appagebuilder/images/banner2-12.jpg" />
                        <Card.Body>
                            <Card.Title>Computers & Accessories</Card.Title>
                            <Card.Text>
                                <Link to="/electronics"><button className="btn-normal">View More...</button></Link>
                            </Card.Text>
                        </Card.Body>
                    </Card> */}

                    {/* </div> */}
                </Row>


            </div >
        </div>
    );
};

export default AllProducts;