import React from "react";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/Card';
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import Button from 'react-bootstrap/Button';
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "../style/style.promotions.css"

export default class Promotions extends React.Component {
    render() {
        return (
            <div className="col-sm-12 col-md-9">
                <h1>Promotions</h1>
                <div className="myspacing">
                    &nbsp;&nbsp;&nbsp;
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle id="dropdown-custom-1">Neighborhood</Dropdown.Toggle>
                        <Dropdown.Menu className="super-colors">
                            <Dropdown.Item eventKey="1">Allston</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Back Bay</Dropdown.Item>
                            <Dropdown.Item eventKey="3" active>
                                Jamaica Plain
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>&nbsp;&nbsp;&nbsp;
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle id="dropdown-custom-1">Location</Dropdown.Toggle>
                        <Dropdown.Menu className="super-colors">
                            <Dropdown.Item eventKey="1">1 mile</Dropdown.Item>
                            <Dropdown.Item eventKey="2">5 miles</Dropdown.Item>
                            <Dropdown.Item eventKey="3">
                                10 miles
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>&nbsp;&nbsp;&nbsp;
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle id="dropdown-custom-1">Sort</Dropdown.Toggle>
                        <Dropdown.Menu className="super-colors">
                            <Dropdown.Item eventKey="1">Alphabetical</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Expiration</Dropdown.Item>
                            <Dropdown.Item eventKey="3">
                                Unsaved First
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>&nbsp;&nbsp;&nbsp;
                </div>

                <div className="container">
                    <div className="card-deck">
                        <div className="card mb-4">
                            <div className="card-block">
                                <img class="card-img-top img-fluid"
                                     src="https://api.curaytor.io/sites/20/media/419380/CanaryExt.jpg?w=851"
                                />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Canary Square</h4>
                                <p className="card-text">This is an example of a cool promotion.</p>
                                <Popup trigger={<button type="button"
                                                        className="btn btn-primary btn-sm btn-block">Save to profile</button>}
                                       position="left">
                                    <div> This button will remove the specified promotion so that it
                                        does
                                        not reappear for the user if they are uninterested.
                                    </div>
                                </Popup>
                                <p className="card-text"><small className="text-muted">Expires: April 6th,
                                    2021</small></p>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <div className="card-block">
                                <img class="card-img-top img-responsive"
                                     src="https://www.jamaicaplainnews.com/wp-content/uploads/2015/08/Tres-Gatos1.jpg"
                                 alt={"peepeepoopoo"}/>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Tres Gatos</h4>
                                <p className="card-text">This is an example of a cool promotion. Very good indeed.</p>
                                <Popup trigger={<button type="button"
                                                        className="btn btn-primary btn-sm btn-block">Save
                                    to profile</button>}
                                       position="left">
                                    <div> This button will remove the specified promotion so that it
                                        does
                                        not reappear for the user if they are uninterested.
                                    </div>
                                </Popup>
                                <p className="card-text"><small className="text-muted">Expires:
                                    April 6th,
                                    2021</small></p>
                            </div>
                        </div>
                        <div
                            className="w-100 d-none d-sm-block d-md-none"></div>
                        <div className="card mb-4">
                            <div className="card-block">
                                <img className="card-img-top img-responsive"
                                     src="https://i1.ypcdn.com/blob/127d71a9db0a06311aa67618e69f6375a2ba5a1b_400x280_crop.jpg"
                                     alt={"Zesto's Pizza"}/>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Zesto's Pizza</h4>
                                <p className="card-text">This is an example of a cool promotion.
                                    Very good indeed.</p>
                                <Popup trigger={<button type="button"
                                                        className="btn btn-primary btn-sm btn-block">Save
                                    to profile</button>}
                                       position="left">
                                    <div> This button will remove the specified promotion so that it
                                        does
                                        not reappear for the user if they are uninterested.
                                    </div>
                                </Popup>
                                <p className="card-text"><small className="text-muted">Expires:
                                    April 6th,
                                    2021</small></p>
                            </div>
                        </div>
                        <div
                            className="w-100 d-none d-md-block d-lg-none"></div>
                        <div className="card mb-4">
                            <div className="card-body">
                                <h4 className="card-title">4 Card title</h4>
                                <p className="card-text">This is a longer card with supporting
                                    text below as a natural lead-in to additional content. This
                                    content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last
                                    updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div
                            className="w-100 d-none d-sm-block d-md-none"></div>
                        <div
                            className="w-100 d-none d-lg-block d-xl-none"></div>
                        <div className="card mb-4">

                            <div className="card-body">
                                <h4 className="card-title">5 Card title</h4>
                                <p className="card-text">This is a longer card with supporting
                                    text below as a natural lead-in to additional content. This
                                    content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last
                                    updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="w-100 d-none d-xl-block"></div>
                        <div className="card mb-4">
                            <div className="card-body">
                                <h4 className="card-title">6 Card title</h4>
                                <p className="card-text">This card has supporting text below as
                                    a natural lead-in to additional content.</p>
                                <p className="card-text"><small className="text-muted">Last
                                    updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div
                            className="w-100 d-none d-sm-block d-md-none"></div>
                        <div
                            className="w-100 d-none d-md-block d-lg-none"></div>
                        <div className="card mb-4">

                            <div className="card-body">
                                <h4 className="card-title">7 Card title</h4>
                                <p className="card-text">This is a wider card with supporting
                                    text below as a natural lead-in to additional content. This
                                    card has even longer content than the first to show that
                                    equal height action.</p>
                                <p class="card-text"><small className="text-muted">Last
                                    updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card mb-4">

                            <div className="card-body">
                                <h4 className="card-title">8 Card title</h4>
                                <p className="card-text">This card has supporting text below as
                                    a natural lead-in to additional content.</p>
                                <p className="card-text"><small className="text-muted">Last
                                    updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div
                            className="w-100 d-none d-sm-block d-md-none"></div>
                        <div
                            className="w-100 d-none d-lg-block d-xl-none"></div>
                        <div className="card mb-4">

                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">This is a wider card with supporting
                                    text below as a natural lead-in to additional content. This
                                    card has even longer content than the first to show that
                                    equal height action.</p>
                                <p className="card-text"><small className="text-muted">Last
                                    updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div
                            className="w-100 d-none d-md-block d-lg-none"></div>
                        <div className="card mb-4">

                            <div className="card-body">
                                <h4 className="card-title">10 Card title</h4>
                                <p className="card-text">This is a wider card with supporting
                                    text below as a natural lead-in to additional content. This
                                    card has even longer content than the first to show that
                                    equal height action.</p>
                                <p className="card-text"><small className="text-muted">Last
                                    updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<div class="row">*/}
                {/*    <Card style={{width: '20rem'}}>*/}
                {/*        <Card.Img variant="top"*/}
                {/*                  src="https://www.jamaicaplainnews.com/wp-content/uploads/2015/08/Tres-Gatos1.jpg"*/}
                {/*        />*/}
                {/*        <Card.Body>*/}
                {/*            <Card.Title>Tres Gatos</Card.Title>*/}
                {/*            <Card.Text>*/}
                {/*                $5 Margaritas all day! - March 30th to April 5th. Come on down!*/}
                {/*            </Card.Text>*/}
                {/*            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
                {/*            <Popup trigger={<Button variant="primary"> Add </Button>}*/}
                {/*                   position="left center">*/}
                {/*                <div> In future implementations, this will allow the user to save*/}
                {/*                    the*/}
                {/*                    specified promotion to their profile providing easy access in*/}
                {/*                    the future.*/}
                {/*                </div>*/}
                {/*            </Popup>*/}
                {/*            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
                {/*            <Popup trigger={<Button variant="secondary"> Remove </Button>}*/}
                {/*                   position="right center">*/}
                {/*                <div> This button will remove the specified promotion so that it*/}
                {/*                    does*/}
                {/*                    not reappear for the user if they are uninterested.*/}
                {/*                </div>*/}
                {/*            </Popup>*/}
                {/*        </Card.Body>*/}
                {/*    </Card>*/}
                {/*    <Card style={{width: '20rem'}}>*/}
                {/*        <Card.Img variant="top"*/}
                {/*                  src="https://i1.ypcdn.com/blob/127d71a9db0a06311aa67618e69f6375a2ba5a1b_400x280_crop.jpg"*/}
                {/*                  className="promoCard"*/}
                {/*        />*/}
                {/*        <Card.Body>*/}
                {/*            <Card.Title>Zesto's Pizza</Card.Title>*/}
                {/*            <Card.Text>*/}
                {/*                Buy one large pizza, get one half off! Offer good until*/}
                {/*                4/1/21.*/}
                {/*            </Card.Text>*/}
                {/*            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
                {/*            <Popup trigger={<Button variant="primary"> Add </Button>}*/}
                {/*                   position="left center">*/}
                {/*                <div> In future implementations, this will allow the user to save*/}
                {/*                    the*/}
                {/*                    specified promotion to their profile providing easy access in*/}
                {/*                    the future.*/}
                {/*                </div>*/}
                {/*            </Popup>*/}
                {/*            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
                {/*            <Popup trigger={<Button variant="secondary"> Remove </Button>}*/}
                {/*                   position="right center">*/}
                {/*                <div> This button will remove the specified promotion so that it*/}
                {/*                    does*/}
                {/*                    not reappear for the user if they are uninterested.*/}
                {/*                </div>*/}
                {/*            </Popup>*/}
                {/*        </Card.Body>*/}
                {/*    </Card>*/}
                {/*    <Card style={{width: '20rem'}}>*/}
                {/*        <Card.Img variant="top"*/}
                {/*                  src="https://api.curaytor.io/sites/20/media/419380/CanaryExt.jpg?w=851"*/}
                {/*                  className="promoCard"*/}
                {/*        />*/}
                {/*        <Card.Body>*/}
                {/*            <Card.Title>Canary Square</Card.Title>*/}
                {/*            <Card.Text>*/}
                {/*                A really great promotion! It will be great once I figure out*/}
                {/*                what it is.*/}
                {/*            </Card.Text>*/}
                {/*            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
                {/*            <Popup trigger={<Button variant="primary"> Add </Button>}*/}
                {/*                   position="left center">*/}
                {/*                <div> In future implementations, this will allow the user to save*/}
                {/*                    the*/}
                {/*                    specified promotion to their profile providing easy access in*/}
                {/*                    the future.*/}
                {/*                </div>*/}
                {/*            </Popup>*/}
                {/*            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
                {/*            <Popup trigger={<Button variant="secondary"> Remove </Button>}*/}
                {/*                   position="right center">*/}
                {/*                <div> This button will remove the specified promotion so that it*/}
                {/*                    does*/}
                {/*                    not reappear for the user if they are uninterested.*/}
                {/*                </div>*/}
                {/*            </Popup>*/}
                {/*        </Card.Body>*/}
                {/*    </Card>*/}
                {/*    <Card style={{width: '20rem'}}>*/}
                {/*        <Card.Img variant="top"*/}
                {/*                  src="https://elorientaldecuba.net/100_0455.JPG"*/}
                {/*                  className="promoCard"*/}
                {/*        />*/}

                {/*        <Card.Body>*/}
                {/*            <Card.Title>El Oriental De Cuba</Card.Title>*/}
                {/*            <Card.Text>*/}
                {/*                There will be another great promotion put here I promise!!*/}
                {/*            </Card.Text>*/}
                {/*            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
                {/*            <Popup trigger={<Button variant="primary"> Add </Button>}*/}
                {/*                   position="left center">*/}
                {/*                <div> In future implementations, this will allow the user to save*/}
                {/*                    the*/}
                {/*                    specified promotion to their profile providing easy access in*/}
                {/*                    the future.*/}
                {/*                </div>*/}
                {/*            </Popup>*/}
                {/*            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
                {/*            <Popup trigger={<Button variant="secondary"> Remove </Button>}*/}
                {/*                   position="right center">*/}
                {/*                <div> This button will remove the specified promotion so that it*/}
                {/*                    does*/}
                {/*                    not reappear for the user if they are uninterested.*/}
                {/*                </div>*/}
                {/*            </Popup>*/}
                {/*        </Card.Body>*/}
                {/*    </Card>*/}
                {/*</div>*/}
            </div>
        )
    }
}
