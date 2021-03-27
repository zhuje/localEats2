import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../style/style.promotions.css"

export default class Promotions extends React.Component {
    render() {
        return (
            <div>
                <div className="col-sm-12 col-md-9">
                    <h1>Promotions</h1>
                    <div className={"container"}>
                        <div className={"row"}>
                            <Card style={{width: '18rem'}}>
                                <Card.Img variant="top"
                                          src="https://northeastern.instructure.com/courses/63357/files/7382149/download"/>
                                <Card.Body>
                                    <Card.Title>Tres Gatos</Card.Title>
                                    <Card.Text>
                                        $5 Margaritas - March 30th to April 5th
                                    </Card.Text>
                                    <Button variant="primary">Add</Button>
                                    <Button variant="secondary">Remove</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{width: '18rem'}}>
                                <Card.Img variant="top"
                                          src="https://northeastern.instructure.com/courses/63357/files/7382149/download"/>
                                <Card.Body>
                                    <Card.Title>Zesto's Pizza</Card.Title>
                                    <Card.Text>
                                        Buy one large pizza, get one half off! Offer good until
                                        4/1/21.
                                    </Card.Text>
                                    <Button variant="primary">Add</Button>

                                    <Button variant="secondary">Remove</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
