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

function spotlight0() {
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
                <Card.Footer style={{textAlign:'center'}}>
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
                <Card.Footer style={{textAlign:'center'}}>
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
                <Card.Footer style={{textAlign:'center'}}>
                    <small className="text-muted" style={{color:"black"}}> Back Bay </small>
                </Card.Footer>
            </Card>
        </CardDeck>

    );
}

function spotlight1() {
    return (
        <CardDeck>
            <Card>
                <Card.Img className="card-img-top" variant="top"
                          src="https://tentables.net/wp-content/uploads/2019/04/pasta-thursdays-ten-tables-jp.jpg"
                />
                <Card.Body className={"dev_card_body"}>
                    <p className={"dev_card_text_style"} style={{color:"black"}}> Ten Tables </p>
                    <a href={"https://tentables.net/"} target={"_blank"}> View Menu </a>
                </Card.Body>
                <Card.Footer style={{textAlign:'center'}}>
                    <small className="text-muted" style={{color:"black"}}> Jamaica Plains </small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img className="card-img-top" variant="top"
                          src="https://s3-media0.fl.yelpcdn.com/bphoto/bV9ednA92qFJ-Q_Mz04bYg/o.jpg"
                />
                <Card.Body className={"dev_card_body"}>
                    <p className={"dev_card_text_style"} style={{color:"black"}}> Serfina </p>
                    <a href={"https://serafinaboston.com/menu/back-bay/"} target={"_blank"}> View Menu </a>
                </Card.Body>
                <Card.Footer style={{textAlign:'center'}}>
                    <small className="text-muted" style={{color:"black"}}> Back Bay </small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img className="card-img-top" variant="top"
                          src={"https://www.yumofchina.com/wp-content/uploads/2017/07/Spicy-Sichuan-Chicken3.jpg"}
                />
                <Card.Body className={"dev_card_body"}>
                    <p className={"dev_card_text_style"} style={{color:"black"}}> Mala </p>
                    <a href={"http://www.allstonmala.com/menu.html"} target={"_blank"}> View Menu </a>
                </Card.Body>
                <Card.Footer style={{textAlign:'center'}}>
                    <small className="text-muted" style={{color:"black"}}> Allston </small>
                </Card.Footer>
            </Card>
        </CardDeck>
    );
}

function spotlight2() {
    return (
        <CardDeck>
            <Card>
                <Card.Img className="card-img-top" variant="top"
                          src="https://parishcafe.com/wordpress/wp-content/uploads/2018/02/BuksCamb-100717-15.jpg"
                />
                <Card.Body className={"dev_card_body"}>
                    <p className={"dev_card_text_style"} style={{color:"black"}}> The Parish Cafe </p>
                    <a href={"https://parishcafe.com/menu/"} target={"_blank"}> View Menu </a>
                </Card.Body>
                <Card.Footer style={{textAlign:'center'}}>
                    <small className="text-muted" style={{color:"black"}}> Back Bay  </small>
                </Card.Footer >
            </Card>
            <Card>
                <Card.Img className="card-img-top" variant="top"
                          src="https://s3-media0.fl.yelpcdn.com/bphoto/dR2Fd0H2PboNK1UPCBQrDQ/o.jpg"
                />
                <Card.Body className={"dev_card_body"}>
                    <p className={"dev_card_text_style"} style={{color:"black"}}> Lulu's </p>
                    <a href={"https://www.lulusallston.com/menu.html"} target={"_blank"}> View Menu </a>
                </Card.Body>
                <Card.Footer style={{textAlign:'center'}}>
                    <small className="text-muted" style={{color:"black"}}>  Allston  </small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img className="card-img-top" variant="top"
                          src={"https://s3-media0.fl.yelpcdn.com/bphoto/nvH1amO4pFvFzRLZ4IKMmQ/o.jpg"}
                />
                <Card.Body className={"dev_card_body"}>
                    <p className={"dev_card_text_style"} style={{color:"black"}}>  Blue Nile </p>
                    <a href={"https://www.bluenileincjp.com/"} target={"_blank"}> View Menu </a>
                </Card.Body>
                <Card.Footer style={{textAlign:'center'}}>
                    <small className="text-muted" style={{color:"black"}}>   Jamaica Plain </small>
                </Card.Footer>
            </Card>
        </CardDeck>
    );
}



export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
        };
        this.onChangeValue = this.onChangeValue.bind(this);
        this.randInt = getRandomInt(3);
    }

    onChangeValue(event) {
        console.log(event.target.value);
        this.setState({
                          name: event.target.value,
                      });
    }

    state = {
        name: null,
    }

    selectAllston = () => {
        this.setState({
                          name: "allston",
                      });
    };
    selectBackBay = () => {
        this.setState({
                          name: "backbay",
                      });
    };
    selectJP = () => {
        this.setState({
                          name: "jp",
                      });
    };

    render(){


        return (

                <div className="col-sm-12 col-md-9 dev_home_container">
                    <div className="dev_background">
                        <div className="dev_transbox">

                            {/* WELCOME */}
                            <h1 className="dev_title_jumbo dev_title_max"> Welcome to LocalEats </h1>
                            <h3 className="dev_title"> Helping You Find Small Locally Owned Eateries in Boston </h3>
                            <hr  className="dev_home_hr my-4"/>


                            {/* FIND NEIGHBORHOODS */}
                            <h1 className="dev_title"> Select a Neighborhood to Explore: </h1>
                            <h5 className="dev_title"> Discover eateries in other neighborhoods or revisit old favorites </h5>

                            {/* RADIO BUTTON GROUP*/}
                            <div>
                                <input onClick={this.selectAllston} type="radio" value="a" name="a" /> Allston <br/>
                                <input onClick={this.selectBackBay} type="radio" value="b" name="a" /> Back Bay <br/>
                                <input onClick={this.selectJP} type="radio" value="c" name="a" /> Jamaica Plain <br/>
                            </div>

                            {this.state.name !== null && (
                                <Link to={this.state.name} className="btn btn-primary" style={{width:"33%"}}> Submit </Link>
                            )}


                        </div>

                        {/* PERSONAL RECOMMENDATIONS */}
                        <div className="dev_transbox">

                            <h3 className="dev_title"> Personal Recommendations </h3>

                            Based on your &nbsp;
                            <a href={"profile"}>preference</a>
                            &nbsp;
                            we suggest trying these eateries: <br/>

                            <br/><br/>

                            {this.randInt == 0 && spotlight0() }
                            {this.randInt == 1 && spotlight1() }
                            {this.randInt == 2 && spotlight2() }



                        </div>
                    </div>
                </div>

        )

    }
}
