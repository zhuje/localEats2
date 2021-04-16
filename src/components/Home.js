import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import '../style/style.app.css';
import '../style/style.home.css'
import {Link} from "react-router-dom";
import Modal from "react-bootstrap/Modal";

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
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function Appy() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch vertically centered modal
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}


export default class Home extends React.Component {

    render(){

        return (
                <div className="col-sm-12 col-md-9 dev_home_container">
                    <div className="dev_background">
                        <div className="dev_transbox">

                            {/* Welcome */}
                            <h1 className="dev_title_jumbo dev_title"> Welcome to LocalEats </h1>
                            <h3 className="dev_title"> Helping You Find Locally Owned Eateries in Boston </h3>

                            <hr className="my-4"/>


                            {/* Find Neighborhood */}
                            <h1 className="dev_title"> Select a Neighborhood to Explore: </h1>
                            <h5 className="dev_title"> Discover eateries in other neighborhoods or revisit old favorites </h5>
                            <form>
                                <input type="checkbox" id="allston" name="allston" value="allston"/>
                                <label htmlFor="allston"> &nbsp; Allston </label> <br/>
                                <input type="checkbox" disabled={true} id="backbay" name="backbay" value="backbay"/>
                                <label htmlFor="backbay"> &nbsp; Back Bay </label> <br/>
                                <input type="checkbox" disabled={true} id="jamaica" name="jamaica" value="jamaica"/>
                                <label htmlFor="jamaica"> &nbsp; Jamaica Plain </label> <br/>
                            </form>

                            <Link to="/search" className="btn btn-primary"> Submit </Link>

                            {/*<br/><br/>*/}
                            {/*<h2 className="dev_title"> New to Boston? </h2>*/}
                            {/*<h5 className="dev_title" > Look at the Map to Find your Neighborhood  </h5>*/}
                            {/*<Link to="/map" className="btn btn-primary"> Go To Map </Link>*/}

                            {/*<br/><br/>*/}
                            {/*<h2 className="dev_title"> Featured Restaurants that needs your Support  </h2>*/}
                            {/*<h5 className="dev_title" > We've Highlighted Eateries that Need More Patronage   </h5>*/}
                            {/*<Link to="/map" className="btn btn-primary"> Go To Highlights </Link>*/}

                            {/*<hr className="my-4" style={{color:"white"}}/>*/}

                            {/*<h3 className="dev_title"> About </h3>*/}
                            {/*<h5 className="dev_title"> Need </h5>*/}
                            {/*Currently, there's no great way to search specifically*/}
                            {/*for locally owned restaurants in Boston -- sites like Yelp and*/}
                            {/*Google Maps don't have provide a mechanism for this. And sites*/}
                            {/*that do provide a list of these eateries don't have efficient*/}
                            {/*ways to view or filter through restaurants. We saw a need to*/}
                            {/*develop a site that marries usability and a dedication to showing only*/}
                            {/*small, locally owned, and non-franchised eateries.*/}
                            {/*<p>*/}
                            {/*</p>*/}
                            {/*<h5 className="dev_title"> Insight </h5>*/}
                            {/*<p>*/}
                            {/*    The economic fallout of COVID has caused many small,*/}
                            {/*    locally owned restaurants to close. Restaurants provide us a way*/}
                            {/*    to gather and socialize -- at times they are cultural hubs.*/}
                            {/*    Many want to help preserve these institutions and ensure they*/}
                            {/*    still have a seat at their favorite restaurant when post-COVID.*/}
                            {/*    As a result we are creating a website to assist patrons in*/}
                            {/*    identifying and supporting their local economies by eating local!*/}
                            {/*</p>*/}


                        </div>
                        <div className="dev_transbox">
                            <h3 className="dev_title"> Spotlight </h3>
                            <p> View this month's curated selection of locally owned eateries. </p>

                            <h3 className="dev_title"> Personal Recommendations </h3>
                            Sign in to see your personal recommendations. <br/>
                            <Button> Sign In </Button>
                        </div>
                    </div>
                </div>

        )

    }
}
