import React from "react";
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../style/style.promotions.css"

export default class Promotions extends React.Component {
    render() {
        return (
                <div className="col-sm-12 col-md-9">
                    <h1>Promotions</h1>
                    <div class="card-columns">
                        <Card style={{width: '20rem'}}>
                            <Card.Img variant="top"
                                      src="https://www.jamaicaplainnews.com/wp-content/uploads/2015/08/Tres-Gatos1.jpg"
                                      className="promoCard"
                            />
                            <Card.Body>
                                <Card.Title>Tres Gatos</Card.Title>
                                <Card.Text>
                                    $5 Margaritas all day! - March 30th to April 5th. Come on down!
                                </Card.Text>
                                <Button variant="primary">Add</Button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Button variant="secondary">Remove</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{width: '20rem'}}>
                            <Card.Img variant="top"
                                      src="https://i1.ypcdn.com/blob/127d71a9db0a06311aa67618e69f6375a2ba5a1b_400x280_crop.jpg"
                                      className="promoCard"
                            />
                            <Card.Body>
                                <Card.Title>Zesto's Pizza</Card.Title>
                                <Card.Text>
                                    Buy one large pizza, get one half off! Offer good until
                                    4/1/21.
                                </Card.Text>
                                <Button variant="primary">Add</Button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Button variant="secondary">Remove</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{width: '20rem'}}>
                            <Card.Img variant="top"
                                      src="https://api.curaytor.io/sites/20/media/419380/CanaryExt.jpg?w=851"
                                      className="promoCard"
                            />
                            <Card.Body>
                                <Card.Title>Canary Square</Card.Title>
                                <Card.Text>
                                    A really great promotion! It will be great once I figure out
                                    what it is.
                                </Card.Text>
                                <Button variant="primary">Add</Button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Button variant="secondary">Remove</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{width: '20rem'}}>
                            <Card.Img variant="top"
                                      src="https://elorientaldecuba.net/100_0455.JPG"
                                      className="promoCard"
                            />

                            <Card.Body>
                                <Card.Title>El Oriental De Cuba</Card.Title>
                                <Card.Text>
                                    There will be another great promotion put here I promise!!
                                </Card.Text>
                                <Button variant="primary">Add</Button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Button variant="secondary">Remove</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
        )
    }
}
