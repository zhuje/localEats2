import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import '../style/style.app.css';
import '../style/style.home.css'
import {Link} from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import {Card, CardDeck} from "react-bootstrap";



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function spotlight1() {
    return (
        <CardDeck>
            <Card>
                <Card.Img className="card-img-top" variant="top"
                            src="https://bostonglobe-prod.cdn.arcpublishing.com/resizer/Cf11fCo5bHMl8UvGOoaztiJK1XQ=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/X35UOLSYYYI6DJ64HNRBUTHPCU.jpg"
                />
                <Card.Body className={"dev_card_body"}>
                    <p className={"dev_card_text_style"} style={{color:"black"}}> Lone Star </p>
                    <a href={"http://deepellum-allston.com/lonestar/food.php"} target={"_blank"}> View Menu </a>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted" style={{color:"black"}}> Allston </small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img className="card-img-top" variant="top"
                         src="https://s3-media0.fl.yelpcdn.com/bphoto/j_PwWHy3hE5m0R1A5SYKYg/o.jpg"
                />
                <Card.Body className={"dev_card_body"}>
                    <p className={"dev_card_text_style"} style={{color:"black"}}> Tres Gatos </p>
                    <a href={"http://www.tresgatosjp.com/"} target={"_blank"}> View Menu </a>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted" style={{color:"black"}}> Jamaica Plain </small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img className="card-img-top" variant="top"
                             src={"https://images.getbento.com/accounts/2e611a9c379beef9626facce2b3ec45e/media/images/33230Saltie_Girl_61.JPG"}
                />
                <Card.Body className={"dev_card_body"}>
                    <p className={"dev_card_text_style"} style={{color:"black"}}> Saltie Girl </p>
                    <a href={"https://www.saltiegirl.com/menu/"} target={"_blank"}> View Menu </a>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted" style={{color:"black"}}> Back Bay </small>
                </Card.Footer>
            </Card>
        </CardDeck>

    );
}

function spotlight2() {
    return (
        <h1> PIZZA </h1>
    );
}

function spotlight() {
    return (
        <h1> PIZZA </h1>
    );
}



export default class Home extends React.Component {

    render(){
        {/*const randInt = getRandomInt(3);*/}
        const randInt = 1;

        return (
                <div className="col-sm-12 col-md-9 dev_home_container">
                    <div className="dev_background">
                        <div className="dev_transbox">

                            {/* Welcome */}
                            <h1 className="dev_title_jumbo dev_title_max"> Welcome to LocalEats </h1>
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

                        </div>
                        <div className="dev_transbox">

                            <h3 className="dev_title"> Personal Recommendations </h3>

                            Based on your &nbsp;
                            <a href={"profile"}>preference</a>
                            &nbsp;
                            we suggest trying these eateries: <br/>
                            (NOTE: This is a prototype and the backend for this feature has not been built.
                             Editing your preferences will not impact what is shown here. )
                            <br/><br/>


                            {randInt == 1 && spotlight1() }



                        </div>
                    </div>
                </div>

        )

    }
}
