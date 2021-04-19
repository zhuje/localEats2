import React from "react";
import "../style/style.searchresult.css"
import 'reactjs-popup/dist/index.css';
import {Col, Container, Dropdown, Form, Row} from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {Link} from "react-router-dom";

function goBack() {
    window.history.back();
}


export default class Error extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
        };
        this.onChangeValue = this.onChangeValue.bind(this);

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
        return(
            <div className="col-sm-12 col-md-9 dev_home_container" >
                <div className="dev_search_title">

                    <button className={"btn btn-primary mb-1"}  onClick={()=> goBack()}>
                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                        &nbsp; Back
                    </button>

                    {/* JUMBOTRON */}
                    <div className="jumbotron dev_background_error">
                        <div className="dev_transbox_searchResults">
                            <div className="container">
                                <h1 className="display-4"> Error   </h1>
                            </div>
                        </div>
                    </div>

                    <h1 style={{fontWeight: 200, textAlign:"center" }}>
                        Sorry, we couldn't find the neighborhood you entered. <br/>
                        Try another area listed below.
                    </h1>

                    <hr/>
                    <br/>


                    <Container>
                        <Row>
                            <Col></Col>
                            <div>
                                <h1 className="dev_title"> Select a Neighborhood to Explore: </h1>
                                <h5 className="dev_title"> Discover eateries in other neighborhoods or revisit old favorites </h5>

                                {/* RADIO BUTTON GROUP*/}
                                <div>
                                    <input onClick={this.selectAllston} type="radio" value="a" name="a" /> Allston <br/>
                                    <input onClick={this.selectBackBay} type="radio" value="b" name="a" /> Back Bay <br/>
                                    <input onClick={this.selectJP} type="radio" value="c" name="a" /> Jamaica Plain <br/>
                                </div>

                                {this.state.name !== null && (
                                    <Link to={this.state.name} className="btn btn-primary" style={{width:"100%"}}> Submit </Link>
                                )}
                            </div>
                            <Col></Col>
                        </Row>
                    </Container>




                </div>
            </div>

        )
    }

}

