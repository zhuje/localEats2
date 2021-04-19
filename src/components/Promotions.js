import React, {Component, useState} from "react";
import 'reactjs-popup/dist/index.css'
import Button from 'react-bootstrap/Button';
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "../style/style.promotions.css"

import Modal from "react-bootstrap/Modal";

const pp = [];

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Promotion saved!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Click on the "Saved Promotions" tab to view each saved promotion. Click on "Close"
                    in order to close this window.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function MyModalForSaved(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Saved Promotions:
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    {pp.length > 0 && (pp.map((data, i) => (
                        <div key={i}>
                            {data}
                        </div>
                    )))}
                    {pp.length <= 0 && ("No saved promotions! Add some you like by clicking on the blue 'Save to profile' button.")}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function Alot2() {
    const [modalShow, setModalShow] = React.useState(false);

    function helpMe2() {
        setModalShow(true);
    }

    return (
        <>
            <button type="button"
                    className="btn btn-primary" style={{width:'35%', height: '200%'}} onClick={helpMe2}>Saved Promotions</button>

            <MyModalForSaved
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

function Alot(props) {
    const [modalShow, setModalShow] = React.useState(false);

    function helpMe() {
        setModalShow(true);
        if (!pp.includes(props.info)) {
            pp.push(props.info);
        }
    }

    return (
        <>
            <button type="button"
                    className="btn btn-primary btn-sm btn-block" onClick={helpMe}>Save
                to profile</button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default class Promotions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allston: false,
            backBay: false,
            jp: true,
            alph: false,
            expir: true,
            arr: false
        };
    }

    showAllston = () => {
        this.setState({
                          allston: true,
                          backBay: false,
                          jp: false
                      });
    };

    showBackBay = () => {
        this.setState({
                          allston: false,
                          backBay: true,
                          jp: false
                      });
    };

    showJP = () => {
        this.setState({
                          allston: false,
                          backBay: false,
                          jp: true
                      });
    };

    sortAlph = () => {
        this.setState({
                          alph: true,
                          expir: false,
                      });
    };

    sortExpir = () => {
        this.setState({
                          alph: false,
                          expir: true,
                      });
    };

    render() {

        const {allston} = this.state;
        const {backBay} = this.state;
        const {jp} = this.state;
        const {alph} = this.state;
        const {expir} = this.state;

        return (
            <div className="col-sm-12 col-md-9">
                <div className="dev_search_title">

                    <div className="jumbotron-fluid dev_background_allston2">
                        <div className="dev_transbox_searchResults">
                            <div className="container">
                                <h1 className="display-6"> Promotions </h1>
                                <p className="lead"> Search through various deals and promotions throughout Allston,
                                Back Bay, and Jamaica Plain. Save them to your profile to keep track of your favorite
                                deals!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="myspacing">
                    <Dropdown as={ButtonGroup} style={{width: '30%', paddingRight: '12px'}}>
                        <Dropdown.Toggle id="dropdown-custom-1">Neighborhood</Dropdown.Toggle>
                        <Dropdown.Menu className="super-colors">
                            <Dropdown.Item eventKey="allston"
                                           onClick={this.showAllston}>Allston</Dropdown.Item>
                            <Dropdown.Item eventKey="bb" onClick={this.showBackBay}>Back
                                Bay</Dropdown.Item>
                            <Dropdown.Item eventKey="jp" onClick={this.showJP} selected="selected">Jamaica
                                Plain</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown as={ButtonGroup} style={{width: '30%', paddingRight: '12px'}}>
                        <Dropdown.Toggle id="dropdown-custom-1">Sort</Dropdown.Toggle>
                        <Dropdown.Menu className="super-colors">
                            <Dropdown.Item eventKey="alph"
                                           onClick={this.sortAlph}>Alphabetical</Dropdown.Item>
                            <Dropdown.Item eventKey="expir"
                                           onClick={this.sortExpir}>Expiration</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Alot2/>
                </div>

                {/* ALLSTON ALPH*/}
                {allston && alph &&(
                    <div className="container">
                        <div className="card-deck">
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-fluid"
                                         src="https://bostonglobe-prod.cdn.arcpublishing.com/resizer/Cf11fCo5bHMl8UvGOoaztiJK1XQ=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/X35UOLSYYYI6DJ64HNRBUTHPCU.jpg"
                                         alt={"Lone Star Taco Bar"}
                                    />
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Lone Star Taco Bar</h4>
                                    <p className="card-text">Half off all enchiladas until April 30th.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Lone Star Taco Bar - Half off all enchiladas until April 30th. - Expires Apr 30th, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        Apr 30th,
                                        2021</small></p>
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-fluid"
                                         src="https://bostonglobe-prod.cdn.arcpublishing.com/resizer/Cf11fCo5bHMl8UvGOoaztiJK1XQ=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/X35UOLSYYYI6DJ64HNRBUTHPCU.jpg"
                                         alt={"Lone Star Taco Bar"}
                                    />
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Lone Star Taco Bar</h4>
                                    <p className="card-text">10% off all pickup orders over $50. Expires May 2nd. </p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Lone Star Taco Bar - 10% off all pickup orders over $50. - Expires May 2nd, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 2nd,
                                        2021</small></p>
                                </div>
                            </div>
                            <div
                                className="w-100 d-none d-sm-block d-md-none"></div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-fluid"
                                         src="https://www.lulusallston.com/img/9new.jpg"
                                         alt={"Lulu's"}
                                    />
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Lulu's</h4>
                                    <p className="card-text">$4 beers during happy hour! 2 - 6 PM until May 1st.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Lulu's - $4 beers during happy hour! 2 - 6 PM - Expires May 1st, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 1st,
                                        2021</small></p>
                                </div>
                            </div>
                            <div
                                className="w-100 d-none d-md-block d-lg-none"></div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-fluid"
                                         src="https://www.lulusallston.com/img/9new.jpg"
                                         alt={"Lulu's"}
                                    />
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Lulu's</h4>
                                    <p className="card-text">Half off all vegan appetizers until May 3rd.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Lulu's - Half off all vegan appetizers - Expires May 3rd, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 3rd,
                                        2021</small></p>
                                </div>
                            </div>
                            <div
                                className="w-100 d-none d-sm-block d-md-none"></div>
                            <div
                                className="w-100 d-none d-lg-block d-xl-none"></div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-fluid"
                                         src="https://www.lulusallston.com/img/9new.jpg"
                                         alt={"Lulu's"}
                                    />
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Lulu's</h4>
                                    <p className="card-text">Free delivery on orders above $30. Expires May 7th.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Lulu's - Free delivery on orders above $30. - Expires May 7th, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 7th,
                                        2021</small></p>
                                </div>
                            </div>
                            <div className="w-100 d-none d-xl-block"></div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-fluid"
                                         src="https://zagat-photos.imgix.net/ChIJ9apTCcV544kRKPljhTwfJrM/9b049c103bb722038032b37f3ffcc267.jpg"
                                         alt={"Mala"}
                                    />
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Mala</h4>
                                    <p className="card-text">15% off any order above $30. Pickup or
                                        Dine-In only.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Mala - 15% off any order above $30. Pickup or Dine-In only. - Expires Apr 28th, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        Apr 28th,
                                        2021</small></p>
                                </div>
                            </div>

                            <div
                                className="w-100 d-none d-sm-block d-md-none"></div>
                            <div
                                className="w-100 d-none d-md-block d-lg-none"></div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-fluid"
                                         src="https://zagat-photos.imgix.net/ChIJ9apTCcV544kRKPljhTwfJrM/9b049c103bb722038032b37f3ffcc267.jpg"
                                         alt={"Mala"}
                                    />
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Mala</h4>
                                    <p className="card-text">Free side rice with any large combo meal. Pickup only.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Mala - Free side rice with any large combo meal. Pickup only. - Expires Apr 29th, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        Apr 29th,
                                        2021</small></p>
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-fluid"
                                         src="https://zagat-photos.imgix.net/ChIJ9apTCcV544kRKPljhTwfJrM/9b049c103bb722038032b37f3ffcc267.jpg"
                                         alt={"Mala"}
                                    />
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Mala</h4>
                                    <p className="card-text">Half off all drinks until May 4th. Dine-In only.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Mala - Half off all drinks. Dine-In only. - Expires May 4th, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 4th,
                                        2021</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* ALLSTON EXPIRATION*/}
                {allston && expir &&(
                    <div className="container">
                        <div className="card-deck">
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-fluid"
                                         src="https://zagat-photos.imgix.net/ChIJ9apTCcV544kRKPljhTwfJrM/9b049c103bb722038032b37f3ffcc267.jpg"
                                         alt={"Mala"}
                                    />
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Mala</h4>
                                    <p className="card-text">15% off any order above $30. Pickup or
                                        Dine-In only.</p>
                                </div>
                                <div className="card-footer" style={{textAlign:'center'}}>
                                    <Alot info={"Mala - 15% off any order above $30. Pickup or Dine-In only. - Expires Apr 28th, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        Apr 28th,
                                        2021</small></p>
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-fluid"
                                         src="https://zagat-photos.imgix.net/ChIJ9apTCcV544kRKPljhTwfJrM/9b049c103bb722038032b37f3ffcc267.jpg"
                                         alt={"Mala"}
                                    />
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Mala</h4>
                                    <p className="card-text">Free side rice with any large combo meal. Pickup only.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Mala - Free side rice with any large combo meal. Pickup only. - Expires Apr 29th, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        Apr 29th,
                                        2021</small></p>
                                </div>
                            </div>
                            <div
                                className="w-100 d-none d-sm-block d-md-none"></div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-fluid"
                                         src="https://bostonglobe-prod.cdn.arcpublishing.com/resizer/Cf11fCo5bHMl8UvGOoaztiJK1XQ=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/X35UOLSYYYI6DJ64HNRBUTHPCU.jpg"
                                         alt={"Lone Star Taco Bar"}
                                    />
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Lone Star Taco Bar</h4>
                                    <p className="card-text">Half off all enchiladas until April 30th.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Lone Star Taco Bar - Half off all enchiladas until April 30th. - Expires Apr 30th, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        Apr 30th,
                                        2021</small></p>
                                </div>
                            </div>
                            <div
                                className="w-100 d-none d-md-block d-lg-none"></div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-fluid"
                                         src="https://www.lulusallston.com/img/9new.jpg"
                                         alt={"Lulu's"}
                                    />
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Lulu's</h4>
                                    <p className="card-text">$4 beers during happy hour! 2 - 6 PM until May 1st.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Lulu's - $4 beers during happy hour! 2 - 6 PM - Expires May 1st, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 1st,
                                        2021</small></p>
                                </div>
                            </div>
                            <div
                                className="w-100 d-none d-sm-block d-md-none"></div>
                            <div
                                className="w-100 d-none d-lg-block d-xl-none"></div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-fluid"
                                         src="https://bostonglobe-prod.cdn.arcpublishing.com/resizer/Cf11fCo5bHMl8UvGOoaztiJK1XQ=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/X35UOLSYYYI6DJ64HNRBUTHPCU.jpg"
                                         alt={"Lone Star Taco Bar"}
                                    />
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Lone Star Taco Bar</h4>
                                    <p className="card-text">10% off all pickup orders over $50. Expires May 2nd. </p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Lone Star Taco Bar - 10% off all pickup orders over $50. - Expires May 2nd, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 2nd,
                                        2021</small></p>
                                </div>
                            </div>
                            <div className="w-100 d-none d-xl-block"></div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-fluid"
                                         src="https://www.lulusallston.com/img/9new.jpg"
                                         alt={"Lulu's"}
                                    />
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Lulu's</h4>
                                    <p className="card-text">Half off all vegan appetizers until May 3rd.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Lulu's - Half off all vegan appetizers - Expires May 3rd, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 3rd,
                                        2021</small></p>
                                </div>
                            </div>
                            <div
                                className="w-100 d-none d-sm-block d-md-none"></div>
                            <div
                                className="w-100 d-none d-md-block d-lg-none"></div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-fluid"
                                         src="https://zagat-photos.imgix.net/ChIJ9apTCcV544kRKPljhTwfJrM/9b049c103bb722038032b37f3ffcc267.jpg"
                                         alt={"Mala"}
                                    />
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Mala</h4>
                                    <p className="card-text">Half off all drinks until May 4th. Dine-In only.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Mala - Half off all drinks. Dine-In only. - Expires May 4th, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 4th,
                                        2021</small></p>
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-fluid"
                                         src="https://www.lulusallston.com/img/9new.jpg"
                                         alt={"Lulu's"}
                                    />
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Lulu's</h4>
                                    <p className="card-text">Free delivery on orders above $30. Expires May 7th.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Lulu's - Free delivery on orders above $30. - Expires May 7th, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 7th,
                                        2021</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* JP EXPIRATION */}
                {jp && expir && (
                    <div className="container">
                        <div className="card-deck">
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-fluid"
                                         src="https://api.curaytor.io/sites/20/media/419380/CanaryExt.jpg?w=851"
                                         alt={"Canary Square"}
                                    />
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Canary Square</h4>
                                    <p className="card-text">10% off any order above $50. Pickup or
                                        Dine-In only.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Canary Square - 10% off any order above $50. Pickup or Dine-In only. - Expires Apr 26th, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        Apr 26th,
                                        2021</small></p>
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-responsive"
                                         src="https://www.jamaicaplainnews.com/wp-content/uploads/2015/08/Tres-Gatos1.jpg"
                                         alt={"Tres Gatos"}/>
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Tres Gatos</h4>
                                    <p className="card-text">$5 Margaritas until May 1st. Offer for
                                        Dine-In only.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Tres Gatos - $5 margaritas. Dine-In only. - Expires May 1st, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 1st,
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
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Zesto's Pizza</h4>
                                    <p className="card-text">Buy one large pizza get one free! Offer
                                        for pickup only.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Zesto's Pizza - Buy one large pizza get one free! - Expires May 2nd, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 2nd,
                                        2021</small></p>
                                </div>
                            </div>
                            <div
                                className="w-100 d-none d-md-block d-lg-none"></div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-responsive"
                                         src="https://tentables.net/wp-content/uploads/2020/10/ten-tables-jp-white-walls-1024x683.jpg"
                                         alt={"Ten Tables"}/>
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Ten Tables</h4>
                                    <p className="card-text">Dollar oysters from 12PM - 5PM on May
                                        2nd. Dine-In only.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Ten Tables - Dollar oysters from 12PM - 5PM - Expires May 3rd, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 3rd,
                                        2021</small></p>
                                </div>
                            </div>
                            <div
                                className="w-100 d-none d-sm-block d-md-none"></div>
                            <div
                                className="w-100 d-none d-lg-block d-xl-none"></div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-responsive"
                                         src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgWFhUZGBgZGhwYGBwcHBwcHhoaHBgcGhwcGBwcIy4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzUrJSs2NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EAEQQAAIBAgQDBQYDBgMHBAMAAAECEQADBBIhMQVBUQYiYXGREzKBobHRQlLBFCNicuHwM4KSByRDU6KywhUWc9I0Y/H/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMEAAUG/8QAKhEAAgIBBAICAgEFAQEAAAAAAAECEQMSITFBBBMyUSJhcRRCgbHB8ZH/2gAMAwEAAhEDEQA/APPPZjdjmPTl/WnYYCNNhJjluaaTIkeXSprFqF1JmW0HUGs7ZsXIZlJTNvry50zD6gkgKRHnG1cV4EBoAOwpyQp0j40hQfZSTrsDz/Wi7dkFy5JYghug0NQLiSxPd1OgA2jz57UUbZ3LBV6DfXr1qbbDDgNw2NAvsp/M6CdBDM6n46/Ko8MkIuk91Z8oBoNAxxBdR3Q+ZZ0zazHqTRoYhIkEKIia6VdAToHZNSSY8vnRWcMAFQsFJ1b+lQ+1AOYanodgfKmNxFJIZxqQIGkT/CKEWyHsCvYNmhnCrpAB69AKOw11BCBS0SSTzPkKEL21ynvMVGhOg3JFOukA5gp2B022H3rpypDztRstrF/XukIoOuwjzmm/u5eWLZtABOgzTufhUFq0pBzMBmg6a/TStp2d7P2Wsrcy5mdcyl9QJGhygxSOUqSq2GMlGOqRj7OGIxNxQs9xIBExBeIovH4V9JYBYGhMAfDlW5xOIsWYDlQ2USQsZvHQdZ0qq7QWUdAdV1DTG+h0rovVe/HI6ntaVWZ2xhwQDmnLAgc/iajfAKik5F82JY/DlUqYtE7qgnWZOg+VD4rirghSgEnRt9PCfOmbSOk6Vsntu5t9wEd6NBGkcoGlVmOww1MQ3M//AG+FWdq8zrmVp1ImYGnKhsSioNYzDX3p8eWk0Hb4Jy+OxiuPcMRMzkgNOgGzHnqeetZ70HkJqx4rcm5c2I9o5WZ2JnYGJqvz+PoK144uMd3ZmWw4ITyJ89BUbbDzP6U4+RPmaa23xP6VQ433Zz/C/wAxq3kDUkDzrE4W/cCwjEDwMU42nb3m9TNZZL8ma4Y24pmsucUsru4Plr9KCvdoUHuqzfKs82GblrTfYEHvD5xSpIr6i2u9pHPuoo85NCvxu+dnZfBSV+lDiwcpOUCOep+Gtc16keQApqQFH9CuYu8273G82cj5mh2ttzEeZA+tEqk8yfMmpcZYUNAg6CTvJrrR1O6AHtwJzDyBk0JiUbLJBirVRQ3EdUPmPrRjL8kdOP4spopV2KVazz6LOysj6T+ldtLEjU6kaedOKwQN9t9tN6IwqmW5947fCstmrGr3OpbgbRTLzgRImp3D+C+J86CvMC+UmdMy9PKhyHI2o7BWHuBzHpAorE41UgQPEtt8KGW57JMzJqfdAHUaCqr9iv3WzFdT10AHgDrFLGKbt8Eozk9olsvE1bRGAJ5EkAnkBOlG2Udpkqqgzt4awZ2qls8BY+84HlVgmB9ijujNmCk6mRIHMbUJRj/ax/RNq+ClxGOdWENMFsw5SGI26QBFWHCrBus95kDbgCdmgawfDqaoTqepP3q4w1+9bQooMe9tPnEVaaqNLkz0anAlsgjKN9WidzzPgals5mIDbTqevwrjKSMo0kCVH6Hod/jU2GcIpBE6jckcjWbl0Vj+ToKVFXqfMwPlXo/AcSiWUQsoIWYJiB8a83S+5buJAOxA8PzNRdlAzAu4WJ/FMGOvSi24yUkXcFNaWbnjHFbAAYgXGU7KoYjxBOg1jnVFj+L27qHuONSIaBy8z1oE4vCqvfvKfmaAxXaHCgQsuRt3T89utKskpSe3I/qjBcjUuxqttdTOozR61PjbrhAzSAANAOcdKq8Lxj2twIgKAzEeCzHqPnROKRgR3SfiI+OtM3Wwst0V9vEFWkczJEfPferG/keGk6gcvCOZ8KGw2JUXDnAVToCNYPLXnRD4m0dQGbXqAD8BNLH+SWNb8nnPFkAu3ANhcaJoAmrPjTA3rpGgNwxz5Daq0/Gt8eCMuRDyrjbfE/QUppN7vx/SiKaTAKMuo6H5UaPKmcLxGVCCs5lWDpp3a5NYsvyZ6eBtxWw1zNcdZFNZqc76UpU47tlyz3RsKgVetRMd6b7U8uVPTJ6orYKyiuttUSXQRqacx0pRthsVBj/cPw+tTzQ2L1Rv7508fkhJ/FlRNcp2Wu1tPML3heAuXWyojOY5AmBsZjlVxd4JdtK5uIyjukQNNoPSrz/ZTkR77uyhciCSYHvE/pR/azGK1t19ujzMZQJjp3dCfGvLnklrpcG7G0tqPP3fKvl13qh4kTnkiJH6npVq9vY5WJ8f1qt4q0sImIjXlqdK1w5IZmcwNxmuLJJ6Sa2mIRkMMINYnhx/eLHj9DW0xLs+rszHqSTSZ1wV8VcgtzFop7zQdeR5CajxWNQo65hqrCNenj5iqzi1sh9J1kGdQZUbeOtD3bjkNOXUPyP4onn/AAiljjVJlZ5Wm0VhOu01e8Odwsk5ZMqGOmgOupmCJqibcVpLuDNy2jEkJBKHKF0y85Pn+lXytbWeezQ2rbjKRIK7TrIOu3pT8RcfLKgAyZ0UQOWpqdEJw9183+Ggbu6kwCYJ5belRKF9jfJnPaa2QQZBR3UbdYJ+VRjCuC8EoozeM4jdzsM7QCQNafgsO1zd1UQTLtExyHOahMe31EjPz136irjD4xAxQEgqJaBA01MRzEj1qjja2Dqplb+yXCYVGbxAMesU98BcUFmSABJ1X6TNHW+IFnCujJm1QkzmjkehqS6zlLmZcoGcKZ0YCfnpRo7WC9n3jEWz4n/tNa/A4U3c/syHKAMF2kEkc/hpWN4GJxFsdWI9VNb/AIURYZxtmTLmgT4HpM9azzrVTDJ/iAvg3hSoQiQGBAJB5yGGhk7irjtbhFzWoRZW1cIAEAkNbnbwmqzPfW6UuAd4hswXkGEERsOR86ve079+wwjVLo9fZ0+OtDRGCqSo8T42ZvXDt3gYH8oqpNX3alf95vafiTQafgFULCtUfihZfJiiun3fj+hps078J/mH0NEU09g91f5F+lTjagsRiCiWoWc1tTvHIfepMHii4MqBBjeeU1kyweps9HBOLio9jMS5EwJod7jkHueWo0FEYhwJNCXcesb8qEV+h5OuyG7nPIDrrSS24gyoIptu7vLDQTvMmdhpTsZezTl1jbRtY+FV34INpuxr4Vm3aeelG2lKiCZ2oK075djPly8zpVkjSNQRoN6WV9jxq9hiPJK/OocWwynUUziK90ef6VAcFCZ83KYijGtmLOUkmuQaaVcpVqMJaWLyhgCIG+8fSrvFcftG3kVQDEGF3jxNZ26gLdBE6eQOnrTWtCCZOgmscsUZNN9G6OVxVIsMQoGUkzKqwO0ZhMH1qn4mRm2+3n51f5JS0eipodj7w/8AGqbjYh9BE76fHToNaeHKM+RsE4b/AIi/H6GrM8RxGfJsxICgqNaruFD96g8f/E1qGwkujzoFiI5xvPKjllFcj4IyfDK3ike0Huzz6+6N/Ch3cZdjAgE77ii+Kg5196JMbROUbc5odFBRhA6z0050kXsik1uynPLyq8t8R/cJbLrsVgAkwZMseUDT4VRty/vkK7Z94edXlFS5MZ6jwRGNi6tvVmtrGbY6MCBp02mq/hIUYfEdxgzoGTMNGFtlzeZBZZ//ALVz2Oz5Rm520y7eHTzo/jnC5W9eDmTZdCG1ULknuflMqD41NLYs30ecXJ9uJEHOunnFXK2++oH8U/EiT85+FU2KP78EGe8hnrop51c+2KyVEkqMpO0g6z8K5cBYVi7bZQGUNBDAjcEfw8+YMEVLibaiw2UyMrFfIqSB6Gh0uuJOVmVpndijHpH4dvKPScA+wIIjRtOk5tDrvrR6F7Kfs8s4m0Orgetb606kXC8qqJJOp2ZeVYPsx/8AlWP/AJF+tbC9jCxuI1vMhDIwWV1zCDIB/LtUJVq3KpXGie9x1HMKSWcgCYhRI0UddvOrTtczIMPlkHvr1PuqeXlWcw1pLeS4uGzMGIBdnbaCDlEA86l41xPE3wmdMgQkjKGUmRBksx0inbjpaTA03JOuDz7tMWN+4WmSUJn+Q/aqFj5VddoUYXXDb9w66/haqQ1eHxRCfyYhT/wn+Zfo1Rg1MnuN5r/5VQQ0HEAFTDFhIayPXIkH4TQeDvhQxO2nzETVt2ks5cNgG/NYH/ZaP61T4BFfMDBEA/M1DIubNOFvag1wDXHyosnQbbU67pQ+PP7s1nj0bJfFsibFoNvpUf7eg5GqrNSzVp9aMb8iX6LVeIr0o6y+ZQaz42q7wXuLU5xUVsUw5HJ7kXEh3R5/pUh/wv8AL+lR8S90ef6V0JNseAn0FCPCDl5/wVlKn5KVazCHONVPUH5KPtXGSVPkfpT8QgQSB3Q5A15FFO/rQ5xAggKRpHvf0rOai5j/AHe0dzl08Stx/vVNx7Vww/F+iqD85q7tz+zYdgxHeuqf9akfWqTjAMLLTq0T4xQg96BKO1g/Bh+/t/zj5gitltWL4UwF62SQBnWT8eda65irYJ76bn8Q60vkJtIfxmlJlNxkgODpPkc23XaKAzDx9DV/dxFkkFmSRqCWGmkfrQzXcP8AmSRGx6AgbeZpYS2SplZwTbepGcYaD4/pT7A7y+Y+tNcjltJjyruHbvr/ADL/ANwrWYOz0Hht4Lh7bHN7qroYkwNPlUwxKO4tlGOYc2A0YT0NC8ES81pAqyoUECBrEa1ZNau5yQsQYBhRpy1rJLZmuK2MrxuyEvkLsAhH+hYrg4i/8PXbnWix3BC5zkZnPvd8bAAKN45GoLXAFzDMndkA97x150ymqO0FSOMXYjMI/kT7VxuKXSIz6eAUfQVom7P28zABYkx3+XLnTx2etAkNkHdkHOdyNNJrvYvoGgo+zJ/3vD//ACp/3it3iXvAtlmfaMNACYkgeW1Z3D8AyMjo6AhgUbOdGEER8qOfDMUym6jsXLsS0DUCeXXWkk9QUqY/iFu8UGpBzGRmjSOckeNDthHNpCxXRnElwdDl0kTrvSfhxWMz2xmEjVjp8Foj2aCyELgkXCwIDbRHTrSFFtwYHtJby3XGYHu2zI1GzD1qgJrR9qFAuPlM9y2en4mHOs4xrbj+KMWX5M5U6e4/mn/lUE0Rb9x/8n1NMTPQOO2FOB4cSAf3Ma/yWvtWftoi7KB5CKr8V2jv3LVmyxXJYXIkLrEAd4zroooM8SudR6CpZMcpO0asOaMIpNblxfOtRYkfuzVScY5/F8hXGxbkRm0pFhaopLyYu9iAUif70pZqQatFGIX971ocBbm0DOv9YqhD0/27bZjHmaScdSHx5NLsseJe6PP9KdaP7v8Ay1Us5O5JrqufGgseyHnm1Pgkmu0zWlVCFliiaEAiJkac9jpFPs21zbggROnrypM6xoxHMGP76V1bm8OANvd1mPLrWds20SB2ACh4AMqNYE7mI0JihcfZZwFzKWBJ6aengaJTQwzgnl3fCelOZDOYOniSPX8NBOmdKNqilPDXie76n7Vz/wBOeJ09evw8K0llkB7xSDPLSfTrFPtpIIJSMpI93VuX603sYnpRmk4Y5Eyo8yf0FOPCXiZXpuftWpw2EbKc2QRBUd0ZpIBOh6fWilw2hGRNIJE6ztprOxNB5mgrDExw4Y5X8Omp1Pl0qTDcHuF1AK7jcnz6eFbGzbUSCiag7jwkak7TFMsl5Qi0vvDXKPDnQWaTC8MSTgjoiqpfvEAQFMEltBNHW8ahWQ5J6ZPu1QhSrGMOsq0qcjGIPWdaKTCqLYc2hmk8mHSNAfE1OTT3HSpEl3GpPPUTt1+NC37iOsZyCJY9yZABJ513Dw5hkB0IGrg6SetdtIjahNwRu0aiD9fnSWluMkNsCzA77TMxk8POinto4zq5jurqms5fPbSobeASASpkk7MeUeHjVnZsoqZQp3B96Tpp08aNo5tkSW0yKuY+8TMAaeAmk+FRCMzsJWRCzvI6+dNvMFJ7pMHfMeR8qJd0coMpmMujbSfEa7zQtHUwa8qEL3nMAj3RrqSN28ajuWLa5SWcZhOir1I/N4URnTYoTBP4/h+Wnwj5AUMAhRD695uhXXegHjizL8e4ILrlrbwCiqQwMyGJJ00iDVda7FOyybyDwIb++dbL21kMRlfRiPeGsGOgqbE4qyAO64Gu2Xw+1VjlklSolLHFu2mYhexL/wDPT/S1dHY+4FdRcQyAZhvwnMa3jJZU97P7qkajWRI5eNNW/aEwrdNSNiI5DxNH3Svdo70xrZM87Tsm5Me0RZ8Gpf8AtF/+Yno1b42bQRnOcBADpBOpG2lNtPYbb2h/06/aj7Zc2d6ocUzFW+xdwifaoBMe63SetcXsa/8AzV/0N969CU28uQB95nu7xHpXJtjk5BnpygT86Dyz6aB6ofTMDa7EO3/GX/Q33p93sM6ozm+uhAgIefjm8K36XLa75tugpt7FWnRkh4JBB7s6dda5ZZ9tHPDHpHmqdlmP/EX/AEn707/2o0/4oP8AlP3r0C1w61kzl3AnKBlBJMedNTBWjqHfyyr96LzS7YfVF9MxOE7Gu75RdA3PunkJ/NXT2Oaf8UH/ACH716BhbFpGDZ3JgiMo5iJ38aS4ZGfKHaeuUR9aHul0zvVH6ML/AO0X/wCYv+k/elW3u2kUkG4dP4P60q72ZDvXj+jy5L4I94gnX+9acrhYJcxr+Ebx51Rh6eHq2g6zSOQYII0kkkcgOsVHnJjKyQYkGAZnx+FUi326n1rq3T1+lJpob+C9WyS0FUIBOx/r5Ufbw6x7k7DRj4+dZxcY45g+YpW8URyHT1oOLHVmldRC5kaBAGsDTxy12/etiCVcbDQgjQadKoLPEWUyMw8mopOMNBDEnTSQpg9dfjSuDCkyyuC24B7wywuw1ksZ3oi3h7YT3m0zNsDpAEDXwqnscW11YQQdMi75TB23miLHFZIBKROsqo0O/LpQaaOaZZJfQK4DkFlywVO8zOh8KIwyhHKPeGhggB+XKYquu4pMxAW2QCYjmJ8Gqe5dnK/s5L5mbKSNc0eO9CgNF3jmfNntusMWjvhdo0hiNfvUXtbxQjNqHACgoSVIaYjxC0PhVW5lQq66sZkNHd10gflrtjCpmVgzaMDBUawQdw3hQ2W4HxQRYuYifxegPwiKP9tdBjKT4hR9qDewgM5h3iSAQRz8vKleQFCq3ACGDR3gOY3jx+VK3ex0UlvyWDB4JyE6MdV5wTrp4UEmNcEEIoI1Bya/OoLdm8p0uLtrDx4bGI3q1vtcdEIILCQ2VxOkRsdZFCn+x7S6QLg77vnlVkIzDufi01086iXF3EOtu3I6qdx0g0U5xC6d+OWp3qxQPlUNOYjXnrmb+lFMWVP/ANKCy+dxmtLqZJVmHpqY1qXD4qw4bPbYZRPvnWPhv9qtAzBjmAkdVX7UNjLaBFYW01MEkR+GR7sdDXWmBLr/AKDYjiVp3X9240CwGWIGg3E9KlupbVmWHOpG45fCo7BQEN7JJAkRm3B86lt3Fe4oKe+2pzHc7mudB4+6JFdMrLkaHGUy/Lw00p+GwlsIzFXULGgIMyY3IqFLwH4J+JohMeoRkyaNv3jy2gxSp9NhcXyrOPetKYKv6r9qbiL9iFU5xBJBhT70ab7aCk4tOhZs6wQOTbgx06GhGe2dCXMbHIP0enVsWTinu2F4i3aVEY3Wh8wXua906zB8aiNu0YIv7/wNp51JeFp7aITcGQsZCAzmjT3tNqda4UhTOLmgMGUIM+QJoyj+hIyvZslS5YCBPaEkGQch1ncVP+zoUzhwE2Jytv8AGq84RR/xFHmG+1WNsJ+z+zDqWzZuY0+Ipdnz/so01VWDZU5XF9CKJsPbXXOvnQSYF2OVShPQMJqG9gWOgA+DL96RfdDaVxY/GqGdiHSCdO8v3rtBf+mXfyH5UqfW/o7Svs8sHDXOwJ+FMuYK6urIw8wR9a1iYrE8pHkoX9KZet3n99mI/ibT0rT7UuWjNofSMiUYaEGtb2d7DYjFWP2hXtpblhLkyMpg6AUVwvhxLo8I0NtuJGoB8K3/AGQvixaRHP7t1cupXNFzOfdCj3IB312po5IsE9UeDzPth2UfAeyz3Ff2oYjKDply9f5qzeevZP8AahhbeJt2XDoFthyZYKcpAPdBIJ93avJruAWe44g9dD896LqxoTlW4LnqQvEVOeEvrBkDnGnqJrl/AXF/DMdP60Ni0ZkIenhhULKVPeUjzBpBxQorGQSCKcrRsSKGDU8NQaKRaYdbxlxfduOP8x+9PTHXBs59aADU8NStDKMX0Wq8Yvad+Y2kD7eFPHGbvMg/AVUhqeGoaUOoR+i+PaS4SxZEbMoU+8NuehrlvjrDdF9TVKDTgaVpfQywwL9+0OZMpTmDoY2nlHjU2G7QIInOPI/1FZ3LTaGlHeiBsG7SLlbLddWgRIJ5ievKaYnaA7G6CN4dQdfitZImlNHTtQj8SN2bTD8YUusvajqQoj0irKxxFC0qbROnTSOkGvOJp00rj+wPxVZ6cAp1CKfJm+9SfsiZFZgZM6A7AdZHnXl63CNiRRCY+6BAuPA/ib70NAH40umekslvIVh4JBMEcp+9DpgU077Cd9PrrWETjGIH/Ff1J+tEJ2gxP5581U/pXU1wyb8ST5N9eKqMrOSIB208Nta6lxPZsocSzKwkEAAT4eNYw8dxJTO4UqNJKxOvKPOiU7VJ/wApvHUUXqJ/00l0Xhsqx99B55vtRn7CyASyCR3TmA0+JFZk9prJGqOPgv3oh+0WHKoAziFYElTzJ00NIofodxn9F9w/BsXzSkQwkOh3UgbHxoZ+GOPwH0n6VnE4hZ/P6g/aiUx9v8N1f9UVzjtVCpSTv/hafsh/Kf8ASaVV/wD6h/8Au/6/60qGhDfkeeNxHEOP8Rz5afQVAbF5985/mJ/U0ZYx6n+H5f0o5Ls7EH++orVqS6oy03w7LfsI5t50uCASCuxgxB8uVbx2REDm4GiSFGutYjgXeYjQGJksoEeE71oMPh3fZHI65GC+rAVnlBzlaA3WzMFjeHA3VeNCQzyZzMWJbUDQVbWrGFyd62+bllyx56/atRd4Pby98hOhzqST0hQxj4VXXODWgpK3WZuQW2QPizsD8Y+FWc1Fbtf/AERJt7IGw+Lwye5hgfF3J16woFD4zFZ9kRI/KuvkS0yKmThr8yo+dMuLYT37yjwzKPlqai/Ii9lv/CKLFLkr2sBiSQJO52+mldu4ZHiVWQAORmBExG/xqZuMYNPzOfBT9WgUNc7UqP8ADsgfzED5KP1oqU38Yv8AzsUSrljL3AlZe4jZp3ykCI8Cf7NLDdly8jPlIBPvK3IxpIbfSobfai7OqrB3y6H1M1PhuJWmaWZ0MaFu+PLSCB8KePt/uo5tdEb9lro2dT4EEfeq+/w26jFSoMb5T9461s7WKORCjq2Ve8NQScxOgYa6EelMLB+89oZyNwSpmNJg6+ldqkuQrI0Yo2HEgo2m+h09KaWI3BHmI+tbhMAwLMAe8sEs/iDIZlHQb0VY4E7jcPOwyu//AFICvzprfSHXkJcs8/Fynq1bfivZNkRWe0i6nMZAmYy9CTv5VTv2fQiVZpkiFM6DYxrvXP8AZWPlRKRXruajsRwUq2UMw0HvLziTsajbg9zkyH4kULReOaLBCa4KKu8JxCzNsmN8pB5TyoVrbr7yMPNTXFFki+xUhTPaDrXQ4o0NqRKK7TQa1vZjsXdxae19oqW5KyZZpXeAPvXKLfAs80IR1SdIy1FYK0GYA7TWj7adl7eCWzldmZy2YkACAFiAPOs5gnhh51zjTpghlWWGqBc9p7sIiLoqrt8RWcQ1cdormYA+A+oqkWiwYtkSZaWWuoa6aBRsZkpZKerVIGrgOiDIaVSzSrgUjM2zpUqMRqDHiD9qBBpyuRWpxs+cjNot7WNcc58/uKtsD2gyg51dtsoBEDrudPSqzhiK5AYbiuY/DC2RBMGflH3rK4xctLRqjJqOqy/vdsnA7llBEmWYnl0WNPCaqMT2nxDpOcLLahVA+sn51XA6UEp7h86fHgxrpE8mR7Uyxu453993bwZj9DpTUslvdUnyFWeAZBGcDwJH68qubDqPcaPKCKnLJp2SNaTaM7a4NebZI89KsLHZh/xuB5a1fJdboreRg1OmJXmCvmNPUUFmT7IyU10Vljs5aWJzN5n7VZWOHW091FHwoyyVb3SD5VOLdNyScpdgoSiMLeyH3Qw5giJ82WG+E1ILXhUowbEjQidp0nyB3+FcrXAoS/FElXGHTOswSWI88pME9J2pYjjuIcQXIHRQF+lOXhIX/FuKk6hSDnbwVTEn41Dh+D4hzmW06rOmYBJHIksfpP3f8gbAb3Hb3iT8aabII1A9KKxGHe2SLmVT4MGEeYqDPPuqW8tB6mpSnGPyZSMZS+KIWwqnSPmaYeHrGhI/vxonK/Mqo8O8ftQ9/EWk1dh/nP0Ws78iHEVZojin26O3GOYkEEkAEBSdhAO8TFS4UtpmUADxkx5VTYrtKg0RC3n3F+/yptjj9pxlc3EJ3KAQPmGPr8KCjmlvVD6VFfZoOK8KLhGVUeAcwGQnUiDB1NZ7GcIRT3rJXzVlqwR7LDuYhDHJiyH/AKx+tWV5bwt2zbcse9myPmgSMvunzrRT7FUnHhmZwfBbLvlllEHUGYPLcddK9T7D4D2eENiWkM8sQN2Mx5gEVl+CYrEG6iuCy5lY5lg905t46qKu+F8ac33tpbMktcJdoEkaqCoJjQbxVsVJ3ZnzzlJaX/IB/tUwDXP2cIV7ofcx+QaelecPwnEKM2SRMSrA6+UzXrfE8PdxN0o6hTbUEFTmDB9fxZSDoNvGgbvZt0tMoksSGkqYgeUxuda6ak22kU8fyHjio2eX4lLrWyWR8qRJIIjUdaBV69DvWshAYoZ6OG/WgsTwxCZawuv8JHxEVHV0zbHyO2jGK4qQvWnTs1Yckw6qPynmdtx4Go37IoTC3nH8yg/MEUyaH/qYdmbz04PV9c7F3olLiN5yp/Wq2/2dxSa+zkD8rA/rRtDrNB9gealS/Yr4/wCG/oaVcHXH7Mqu1cK0UlkCpVStLkeHHA3yE8HaGX4/rVzisOr23aJZdvAaE+sVn1MGQYNXXB8WXLI3Nd+safrU4xuWofJFxhSKBlYEldQeVD2x3WFH4i0Udl5gxXQ55wfQ1Uyt2TWH0Gx0Hh/Sp1dZ6H0NRI/gPQVMrypJkETEbVKWKzRDyGudwyzi3X3WnwYT8xr86OscXj3lI8VIYehg1nkvvIhjpzqfC4hiDKzBIMefSoZMCq+S+POpOnsaizjLTndZ5T3W/wCqKsEJGzsPA6j5/esgjA6fI/Y1PYcr7rMvkdP9J0+VZpQa4bRopS53PScJxiLYtm0NgC9shHPXUjn4Gn4S7grepbEyd1JKz/MyQX+JO1YKxxS4uvcf1U+o0+VHW+0lpGVroZNemYHTkV+1MsudcU/9kpYIc8f5Nza4uBP7PhlSfxEBSfNj3jQ2IxV15z3Mvgn/ANjrWNx3btNPZWy2YwCxyjlrlWSd+ZFVXEeIYx/ec5fyp3R8u8fWlf8AUz+b0oOPHi/t3NjisVh7Wrugb+I5nPkNTVFju1qbW0Zuhbuj01J+VZGYOog853+NdBFNDxYLeTbNahtsG4vjuIf8WQdF7vz3+dV2bmdT1O9SRXCgrTGMUqSoDgzgauqaRSm5TTC6GEl9K33+yvEp7W4jKpfIGRiBmAB7wU8veX0rz63bZjCqSegE1rOxOCvW8VbciFBIYc8rKRrG3I69KnkkkqsllhcWex27QZiWMgLA33PvfQVX4HAlLjMFEbSSNRrVkiH8JGu9NTDMP786nHLKlsebtvuOtWytwsAIKwYgDTVfHrWM7Q9uXDNYsIJ7yF2MzqVlB8DqfStpd7qsTpofpXnXFuAI7oyDIF1YAasZBG50G/rVoZpN6WgaU9y+4dh7VtJw+Ha9cVRLspy5+cMRqQfyj41zDcHu42WxbXERWgWgptgkAd7nK66GT5io7d1191mHkSKlv4+6y5S7Ef3v1qycUuDnqvkMvjB4dPZogfwJLARtLGflWbxHvEr3QTOWJA8NdY+NFMlMZKWVS6Gi3HsgGNcCIU+o+9I48HR0MeEH6kU5kFRulJoKexkeex+Vx/lNKuezFcoaA+w8ns2GYwok/AfWi34W6iXIUeJn/tBpUqobVFDWw1tRJLHyAA9SZ+VMs4lVdYWBMTJJg0qVVilZjzZJK4nOMOMyMvNdZ60DaxC+IpUqcydBSXF6/WprTggj+9qVKuACpikXQnXyNDpiDmJUkAmlSpXwNHkt+H4iWUTMyDPxEDTT1qzsKCwHWlSrFn5NuBuh+Kt5BO4qn440osfm/Q0qVJ4/yRXM362B2TKp4N9AtalSRSpU/l8on4fDCNDuB6ChLmAtsfdg9RpSpVgjOS4NyIX4K34WHkfvQOIw7p7w9CDSpVpxZJN7jpsJ4Rw58RcFpIBIJJJgADc+O+1axOxYTVjnPh3R6f1rlKs/l5pxlpT6FyTa2LnhmCw690gg9Ihf+nU1pMFYAjKAF8NKVKtPiu4O0ebnbvktbVwjY0ZbxWlKlWiOz2INJguPvFlIqivJPpXaVOuQPZEBWmFa5SpjjhWmMtKlXHEbIKiZKVKicR5KVKlSHH//2Q=="
                                         alt={"Noodle Barn"}/>
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Noodle Barn</h4>
                                    <p className="card-text">Any free side with purchase of large
                                        noodle dish. Pickup only. </p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Noodle Barn - Any free side with purchase of large noodle dish. - Expires May 4th, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 4th,
                                        2021</small></p>
                                </div>
                            </div>
                            <div className="w-100 d-none d-xl-block"></div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-responsive"
                                         src="https://media-cdn.tripadvisor.com/media/photo-s/02/31/96/e0/the-haven-s-bar.jpg"
                                         alt={"The Haven"}/>
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">The Haven</h4>
                                    <p className="card-text">$5 Draft Beers between 3 PM and 6 PM.
                                        Expires May 5th. </p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"The Haven - $5 Draft Beers between 3 PM and 6 PM. - Expires May 5th, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 5th,
                                        2021</small></p>
                                </div>
                            </div>
                            <div
                                className="w-100 d-none d-sm-block d-md-none"></div>
                            <div
                                className="w-100 d-none d-md-block d-lg-none"></div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-responsive"
                                         src="https://i1.ypcdn.com/blob/127d71a9db0a06311aa67618e69f6375a2ba5a1b_400x280_crop.jpg"
                                         alt={"Zesto's Pizza"}/>
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Zesto's Pizza</h4>
                                    <p className="card-text">$5 foot long subs. Expires May 7th.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Zesto's Pizza - $5 foot long subs. - Expires May 7th, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 7th,
                                        2021</small></p>
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-responsive"
                                         src="https://elorientaldecuba.net/100_0455.JPG"
                                         alt={"El Oriental De Cuba"}/>
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">El Oriental De Cuba</h4>
                                    <p className="card-text">30% off all large soups until May 8th!</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"El Oriental De Cuba - 30% off all large soups. - Expires May 8th, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 8th,
                                        2021</small></p>
                                </div>
                            </div>
                            <div
                                className="w-100 d-none d-sm-block d-md-none"></div>
                            <div
                                className="w-100 d-none d-lg-block d-xl-none"></div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-responsive"
                                         src="https://images.squarespace-cdn.com/content/v1/58d99d1129687f2e38c90e59/1553647122704-IYZ3JOCOEC6BHCR8XELQ/ke17ZwdGBToddI8pDm48kNyTxpxOENAy5qdHgXHcHst7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0sofvP-RiTb638-KOMjny0sL1oUjlsWAxSvoQaMSIXR8HLAX6tnBnPWszayVxTI5pg/BlueNile_Photos_12.jpg"
                                         alt={"Blue Nile"}/>
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Blue Nile</h4>
                                    <p className="card-text">Half off wine bottles for Dine-In only. Expires May 9th.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Blue Nile - Half off wine bottles for Dine-In only. - Expires May 9th, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 9th,
                                        2021</small></p>
                                </div>
                            </div>
                            <div
                                className="w-100 d-none d-md-block d-lg-none"></div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-responsive"
                                         src="https://www.jamaicaplainnews.com/wp-content/uploads/2015/08/Tres-Gatos1.jpg"
                                         alt={"Tres Gatos"}/>
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Tres Gatos</h4>
                                    <p className="card-text">25% off all pickup orders over $45. Expires May 10th.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Tres Gatos - 25% off all pickup orders over $45. - Expires May 10th, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 10th,
                                        2021</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* JP ALPH */}
                {jp && alph && (
                    <div className="container">
                        <div className="card-deck">
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-responsive"
                                         src="https://images.squarespace-cdn.com/content/v1/58d99d1129687f2e38c90e59/1553647122704-IYZ3JOCOEC6BHCR8XELQ/ke17ZwdGBToddI8pDm48kNyTxpxOENAy5qdHgXHcHst7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0sofvP-RiTb638-KOMjny0sL1oUjlsWAxSvoQaMSIXR8HLAX6tnBnPWszayVxTI5pg/BlueNile_Photos_12.jpg"
                                         alt={"Blue Nile"}/>
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Blue Nile</h4>
                                    <p className="card-text">Half off wine bottles for Dine-In only. Expires May 9th.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Blue Nile - Half off wine bottles for Dine-In only. - Expires May 9th, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 9th,
                                        2021</small></p>
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-fluid"
                                         src="https://api.curaytor.io/sites/20/media/419380/CanaryExt.jpg?w=851"
                                         alt={"Canary Square"}
                                    />
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Canary Square</h4>
                                    <p className="card-text">10% off any order above $50. Pickup or
                                        Dine-In only.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Canary Square - 10% off any order above $50. Pickup or Dine-In only. - Expires Apr 26th, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        Apr 26th,
                                        2021</small></p>
                                </div>
                            </div>
                            <div
                                className="w-100 d-none d-sm-block d-md-none"></div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-responsive"
                                         src="https://elorientaldecuba.net/100_0455.JPG"
                                         alt={"El Oriental De Cuba"}/>
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">El Oriental De Cuba</h4>
                                    <p className="card-text">30% off all large soups until May 8th!</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"El Oriental De Cuba - 30% off all large soups. - Expires May 8th, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 8th,
                                        2021</small></p>
                                </div>
                            </div>
                            <div
                                className="w-100 d-none d-md-block d-lg-none"></div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-responsive"
                                         src="https://media-cdn.tripadvisor.com/media/photo-s/02/31/96/e0/the-haven-s-bar.jpg"
                                         alt={"The Haven"}/>
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">The Haven</h4>
                                    <p className="card-text">$5 Draft Beers between 3 PM and 6 PM.
                                        Expires May 5th. </p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"The Haven - $5 Draft Beers between 3 PM and 6 PM. - Expires May 5th, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 5th,
                                        2021</small></p>
                                </div>
                            </div>
                            <div
                                className="w-100 d-none d-sm-block d-md-none"></div>
                            <div
                                className="w-100 d-none d-lg-block d-xl-none"></div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-responsive"
                                         src="data:image/jpeg;base64,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"
                                         alt={"Noodle Barn"}/>
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Noodle Barn</h4>
                                    <p className="card-text">Any free side with purchase of large
                                        noodle dish. Pickup only. </p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Noodle Barn - Any free side with purchase of large noodle dish. - Expires May 4th, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 4th,
                                        2021</small></p>
                                </div>
                            </div>
                            <div className="w-100 d-none d-xl-block"></div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-responsive"
                                         src="https://tentables.net/wp-content/uploads/2020/10/ten-tables-jp-white-walls-1024x683.jpg"
                                         alt={"Ten Tables"}/>
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Ten Tables</h4>
                                    <p className="card-text">Dollar oysters from 12PM - 5PM on May
                                        2nd. Dine-In only.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Ten Tables - Dollar oysters from 12PM - 5PM - Expires May 3rd, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 3rd,
                                        2021</small></p>
                                </div>
                            </div>
                            <div
                                className="w-100 d-none d-sm-block d-md-none"></div>
                            <div
                                className="w-100 d-none d-md-block d-lg-none"></div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-responsive"
                                         src="https://www.jamaicaplainnews.com/wp-content/uploads/2015/08/Tres-Gatos1.jpg"
                                         alt={"Tres Gatos"}/>
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Tres Gatos</h4>
                                    <p className="card-text">$5 Margaritas until May 1st. Offer for
                                        Dine-In only.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Tres Gatos - $5 margaritas. Dine-In only. - Expires May 1st, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 1st,
                                        2021</small></p>
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-responsive"
                                         src="https://www.jamaicaplainnews.com/wp-content/uploads/2015/08/Tres-Gatos1.jpg"
                                         alt={"Tres Gatos"}/>
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Tres Gatos</h4>
                                    <p className="card-text">25% off all pickup orders over $45. Expires May 10th.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Tres Gatos - 25% off all pickup orders over $45. - Expires May 10th, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 10th,
                                        2021</small></p>
                                </div>
                            </div>
                            <div
                                className="w-100 d-none d-sm-block d-md-none"></div>
                            <div
                                className="w-100 d-none d-lg-block d-xl-none"></div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-responsive"
                                         src="https://i1.ypcdn.com/blob/127d71a9db0a06311aa67618e69f6375a2ba5a1b_400x280_crop.jpg"
                                         alt={"Zesto's Pizza"}/>
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Zesto's Pizza</h4>
                                    <p className="card-text">Buy one large pizza get one free! Offer
                                        for pickup only.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Zesto's Pizza - Buy one large pizza get one free! - Expires May 2nd, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 2nd,
                                        2021</small></p>
                                </div>
                            </div>
                            <div
                                className="w-100 d-none d-md-block d-lg-none"></div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-responsive"
                                         src="https://i1.ypcdn.com/blob/127d71a9db0a06311aa67618e69f6375a2ba5a1b_400x280_crop.jpg"
                                         alt={"Zesto's Pizza"}/>
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Zesto's Pizza</h4>
                                    <p className="card-text">$5 foot long subs. Expires May 7th.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Zesto's Pizza - $5 foot long subs. - Expires May 7th, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 7th,
                                        2021</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* BACK BAY EXPIR*/}
                {backBay && expir &&(
                    <div className="container">
                        <div className="card-deck">
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-responsive"
                                         src="https://media-cdn.tripadvisor.com/media/photo-s/16/f3/0a/90/photo0jpg.jpg"
                                         alt={"Saltie Girl"}/>
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Saltie Girl</h4>
                                    <p className="card-text">Dollar oysters until April 25th! Dine-In only.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Saltie Girl - Dollar oysters, Dine-In only. - Expires Apr 25th, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        Apr 25th,
                                        2021</small></p>
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-responsive"
                                         src="https://massholemommy.com/wp-content/uploads/2017/08/Parish-Cafe-Boylston-Street.jpg"
                                         alt={"Parish Cafe & Bar"}/>
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Parish Cafe & Bar</h4>
                                    <p className="card-text">Dollar beers between 2 - 6 PM. Expires April 28th.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Parish Cafe & Bar - Dollar beers between 2 - 6 PM. - Expires Apr 28th, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        Apr 28th,
                                        2021</small></p>
                                </div>
                            </div>
                            <div
                                className="w-100 d-none d-sm-block d-md-none"></div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-responsive"
                                         src="https://media-cdn.tripadvisor.com/media/photo-s/16/f3/0a/90/photo0jpg.jpg"
                                         alt={"Saltie Girl"}/>
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Saltie Girl</h4>
                                    <p className="card-text">Half off King Crab Legs until May 1st. Dine-In only.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Saltie Girl - Half off King Crab Legs. Dine-In only. - Expires May 1st, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 1st,
                                        2021</small></p>
                                </div>
                            </div>
                            <div
                                className="w-100 d-none d-md-block d-lg-none"></div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-responsive"
                                         src="https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,h_1200,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/boston/serafina-roomshots-1010_251c504a-5056-a36a-06837f336d99d9fd.jpg"
                                         alt={"Serafina Back Bay"}/>
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Serafina Back Bay</h4>
                                    <p className="card-text">40% off all pickup orders until May 2nd.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Serafina Back Bay - 40% off all pickup orders. - Expires May 2nd, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 2nd,
                                        2021</small></p>
                                </div>
                            </div>
                            <div
                                className="w-100 d-none d-sm-block d-md-none"></div>
                            <div
                                className="w-100 d-none d-lg-block d-xl-none"></div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-responsive"
                                         src="https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,h_1200,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/boston/serafina-roomshots-1010_251c504a-5056-a36a-06837f336d99d9fd.jpg"
                                         alt={"Serafina Back Bay"}/>
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Serafina Back Bay</h4>
                                    <p className="card-text">Half off on all cocktails from 2 - 6 PM. Expires May 3rd.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Serafina Back Bay - Half off on all cocktails from 2 - 6 PM. - Expires May 3rd, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 3rd,
                                        2021</small></p>
                                </div>
                            </div>
                            <div className="w-100 d-none d-xl-block"></div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-responsive"
                                         src="https://media-cdn.tripadvisor.com/media/photo-s/16/f3/0a/90/photo0jpg.jpg"
                                         alt={"Saltie Girl"}/>
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Saltie Girl</h4>
                                    <p className="card-text">All bottle beers $2 until May 5th.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Saltie Girl - All bottle beers $2. - Expires May 5th, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 5th,
                                        2021</small></p>
                                </div>
                            </div>
                            <div
                                className="w-100 d-none d-sm-block d-md-none"></div>
                            <div
                                className="w-100 d-none d-md-block d-lg-none"></div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-responsive"
                                         src="https://massholemommy.com/wp-content/uploads/2017/08/Parish-Cafe-Boylston-Street.jpg"
                                         alt={"Parish Cafe & Bar"}/>
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Parish Cafe & Bar</h4>
                                    <p className="card-text">All small sandwiches half off with purchase of draft beer. Dine-In only.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Parish Cafe & Bar - All small sandwiches half off w/ purchase of draft beer. - Expires May 8th, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 8th,
                                        2021</small></p>
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-responsive"
                                         src="https://massholemommy.com/wp-content/uploads/2017/08/Parish-Cafe-Boylston-Street.jpg"
                                         alt={"Parish Cafe & Bar"}/>
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Parish Cafe & Bar</h4>
                                    <p className="card-text">$2 off any cocktail until May 9th.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Parish Cafe & Bar - $2 off any cocktail. - Expires May 9th, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 9th,
                                        2021</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* BACK BAY ALPH*/}
                {backBay && alph &&(
                    <div className="container">
                        <div className="card-deck">
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-responsive"
                                         src="https://massholemommy.com/wp-content/uploads/2017/08/Parish-Cafe-Boylston-Street.jpg"
                                         alt={"Parish Cafe & Bar"}/>
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Parish Cafe & Bar</h4>
                                    <p className="card-text">Dollar beers between 2 - 6 PM. Expires April 28th.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Parish Cafe & Bar - Dollar beers between 2 - 6 PM. - Expires Apr 28th, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        Apr 28th,
                                        2021</small></p>
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-responsive"
                                         src="https://massholemommy.com/wp-content/uploads/2017/08/Parish-Cafe-Boylston-Street.jpg"
                                         alt={"Parish Cafe & Bar"}/>
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Parish Cafe & Bar</h4>
                                    <p className="card-text">All small sandwiches half off with purchase of draft beer. Dine-In only.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Parish Cafe & Bar - All small sandwiches half off w/ purchase of draft beer. - Expires May 8th, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 8th,
                                        2021</small></p>
                                </div>
                            </div>
                            <div
                                className="w-100 d-none d-sm-block d-md-none"></div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-responsive"
                                         src="https://massholemommy.com/wp-content/uploads/2017/08/Parish-Cafe-Boylston-Street.jpg"
                                         alt={"Parish Cafe & Bar"}/>
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Parish Cafe & Bar</h4>
                                    <p className="card-text">$2 off any cocktail until May 9th.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Parish Cafe & Bar - $2 off any cocktail. - Expires May 9th, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 9th,
                                        2021</small></p>
                                </div>
                            </div>
                            <div
                                className="w-100 d-none d-md-block d-lg-none"></div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-responsive"
                                         src="https://media-cdn.tripadvisor.com/media/photo-s/16/f3/0a/90/photo0jpg.jpg"
                                         alt={"Saltie Girl"}/>
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Saltie Girl</h4>
                                    <p className="card-text">Dollar oysters until April 25th! Dine-In only.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Saltie Girl - Dollar oysters, Dine-In only. - Expires Apr 25th, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        Apr 25th,
                                        2021</small></p>
                                </div>
                            </div>
                            <div
                                className="w-100 d-none d-sm-block d-md-none"></div>
                            <div
                                className="w-100 d-none d-lg-block d-xl-none"></div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-responsive"
                                         src="https://media-cdn.tripadvisor.com/media/photo-s/16/f3/0a/90/photo0jpg.jpg"
                                         alt={"Saltie Girl"}/>
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Saltie Girl</h4>
                                    <p className="card-text">Half off King Crab Legs until May 1st. Dine-In only.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Saltie Girl - Half off King Crab Legs. Dine-In only. - Expires May 1st, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 1st,
                                        2021</small></p>
                                </div>
                            </div>
                            <div className="w-100 d-none d-xl-block"></div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-responsive"
                                         src="https://media-cdn.tripadvisor.com/media/photo-s/16/f3/0a/90/photo0jpg.jpg"
                                         alt={"Saltie Girl"}/>
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Saltie Girl</h4>
                                    <p className="card-text">All bottle beers $2 until May 5th.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Saltie Girl - All bottle beers $2. - Expires May 5th, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 5th,
                                        2021</small></p>
                                </div>
                            </div>
                            <div
                                className="w-100 d-none d-sm-block d-md-none"></div>
                            <div
                                className="w-100 d-none d-md-block d-lg-none"></div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-responsive"
                                         src="https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,h_1200,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/boston/serafina-roomshots-1010_251c504a-5056-a36a-06837f336d99d9fd.jpg"
                                         alt={"Serafina Back Bay"}/>
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Serafina Back Bay</h4>
                                    <p className="card-text">40% off all pickup orders until May 2nd.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Serafina Back Bay - 40% off all pickup orders. - Expires May 2nd, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 2nd,
                                        2021</small></p>
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-block">
                                    <img className="card-img-top img-responsive"
                                         src="https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,h_1200,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/boston/serafina-roomshots-1010_251c504a-5056-a36a-06837f336d99d9fd.jpg"
                                         alt={"Serafina Back Bay"}/>
                                </div>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h4 className="card-title">Serafina Back Bay</h4>
                                    <p className="card-text">Half off on all cocktails from 2 - 6 PM. Expires May 3rd.</p>
                                </div>
                                <div className="card-footer">
                                    <Alot info={"Serafina Back Bay - Half off on all cocktails from 2 - 6 PM. - Expires May 3rd, 2021"}/>
                                    <p className="card-text" style={{textAlign:'center'}}><small className="text-muted">Expires:
                                        May 3rd,
                                        2021</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}