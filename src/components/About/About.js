import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import './About.css'
import img from '../../2.jpg'
const About = () => {
    return (
        <div>
            <div className="home">
                <div className="w-50 mx-auto mt-5">
                    <h1>A Few Words About Us</h1>
                    <h6 className="mt-5">Take courses from the world's best instructors and universities. Courses include recorded auto-graded and peer-reviewed assignments, video lectures, and community discussion forums. When you complete a course, you’ll be eligible to receive a shareable electronic Course Certificate for a p fee.
                    </h6>
                </div>
                <div>
                    <img className="img-fluid" src={img} alt="" style={{ height: "600px" }} />
                </div>
                <div className="about">
                    <div className="about-details">
                        <div>
                            <h1>The Best Course Design for you</h1>
                            <p>Learn a job-relevant skill that you can use today in under 2 hours through an interactive experience guided by a subject matter expert. Access everything you need right in your browser and complete your project confidently with step-by-step instructions.
                            </p>
                        </div>
                    </div>
                    <div className="about-details">
                        <Card style={{ height: "400px" }}>
                            <Card.Header className="text-center">Support</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item className="p-5">100+ Downloadable Resources</ListGroup.Item>
                                <ListGroup.Item className="p-5">Free Trial 7 Days</ListGroup.Item>
                                <ListGroup.Item className="p-5">24*7 & Full Lifetime Access</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;