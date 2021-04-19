import React from "react";
import "../style/style.searchresult.css"
import 'reactjs-popup/dist/index.css';
import { Dropdown, Form} from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function goBack() {
    window.history.back();
}


export default class BackBay extends React.Component{


    state = {
        checkedDelivery: null,
        checkedOutdoor: null,
        showSelected: "none",
        showSeafood: true,
        showAmerican: true,
        showItalian: true,
        outdoor_filtered: false,
        open_filtered: false,

    };

    filterSeafood = () => {
        this.setState({
                          showSelected: "seafood",
                          showSeafood: true,
                          showAmerican: false,
                          showItalian: false
                      });
    };

    filterAmerican = () => {
        this.setState({
                          showSelected: "american",
                          showSeafood: false,
                          showAmerican: true,
                          showItalian: false
                      });
    };

    filterItalian = () => {
        this.setState({
                          showSelected: "italian",
                          showSeafood: false,
                          showAmerican: false,
                          showItalian: true
                      });
    };

    clearFilters = () => {
        this.setState({
                          checkedDelivery: false,
                          checkedOutdoor: false,

                          showSelected:"none",
                          showSeafood: true,
                          showAmerican: true,
                          showItalian: true,
                      });


    };

    resetDelivery = () => {
        this.setState({
                          checkedDelivery: true,
                      });
    };

    resetOutdoor = () => {
        this.setState({
                          checkedOutdoor: true,
                      });
    }


    render() {

        return(
            <div className="col-sm-12 col-md-9 dev_home_container" >
                <div className="dev_search_title">

                    <button className={"btn btn-primary mb-1"}  onClick={()=> goBack()}>
                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                        &nbsp; Back
                    </button>



                    {/* JUMBOTRON */}
                    <div className="jumbotron dev_background_backbay">
                        <div className="dev_transbox_searchResults">
                            <div className="container">
                                <h1 className="display-4"> Back Bay  </h1>
                            </div>
                        </div>
                    </div>

                    {/* FILTERS */}
                    <h2 className="dev_title"> Refine Your Search: </h2>
                    <hr className="my-4"/>


                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gridGap: 20
                    }}>
                        <div>
                            <Dropdown as={ButtonGroup}>
                                <Dropdown.Toggle id="dropdown-custom-1" style={{
                                    paddingLeft: "3.375rem",
                                    paddingRight: "3.375rem"
                                }}> Eatery Type </Dropdown.Toggle>
                                <Dropdown.Menu className="super-colors">
                                    <Dropdown.Item onClick={this.filterAmerican}> American </Dropdown.Item>
                                    <Dropdown.Item onClick={this.filterItalian} > Italian </Dropdown.Item>
                                    <Dropdown.Item  onClick={this.filterSeafood}> Seafood </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        <div>

                            <div className="form-check">
                                <input onClick={ this.resetDelivery } className="checkbox form-check-input " type="checkbox" value=""
                                       id="defaultCheck1" checked={this.state.checkedDelivery} />

                                <label className="form-check-label" htmlFor="defaultCheck1">
                                    Eateries that Deliver
                                </label>
                            </div>


                        </div>


                        <div>
                            <div className="form-check">
                                <input onClick={ this.resetOutdoor } className="form-check-input checkbox" type="checkbox" value=""
                                       id="defaultCheck1" checked={this.state.checkedOutdoor}/>

                                <label className="form-check-label" htmlFor="defaultCheck1">
                                    Eateries with Outdoor Dining
                                </label>
                            </div>
                        </div>
                    </div>

                    <br/>
                    Eatery Type Currently Selected:
                    {this.state.showSelected == "none" && ( <p className="text-primary">none</p> )}
                    {this.state.showSelected == "seafood" && (<p className="text-primary"> Seafood </p>)}
                    {this.state.showSelected == "american" && (<p className="text-primary"> American </p>)}
                    {this.state.showSelected == "italian" && (<p className="text-primary"> Italian </p>)}




                    {/* Filter Submit and Clear Button */}
                    {/*<div className= "dev_filters_m_row row">*/}
                    <button onClick={this.clearFilters}
                            type="button"
                            className= "btn btn-danger dev_button_size"
                            style={{
                                paddingLeft: "3.375rem",
                                paddingRight: "3.375rem"
                            }}>
                        Clear Filters
                    </button>
                    {/*</div>*/}
                    <br/>

                    {/* Cards of Eateries */}
                    <br/>

                    <h2 className="dev_title_searchResult"> Eatery Search Results :  </h2>
                    <p> To help small these local small businesses we encourage you to order directly
                        from the restaurant when possible. This allows them to avoid paying fees to
                        other delivery services.
                    </p>

                    {/* Card 1  */}
                    {this.state.showAmerican && (
                        <div className="card dev_card">
                            <div className="card-body">
                                <h3 className="dev_title"> The Parish Cafe </h3>

                                <a href={"https://parishcafe.com/menu/"}
                                   target="_blank"> View Menu </a>
                                <br/><br/>
                                {/* Columns */}
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm">
                                            <img className="dev_img dev_photo_radius"
                                                 src={"https://parishcafe.com/wordpress/wp-content/uploads/2018/02/BuksCamb-100717-15.jpg"}
                                                 fluid/>
                                        </div>
                                        <div className="col-sm">
                                            <p>
                                                Eatery Type:
                                                American
                                            </p>
                                            <p>
                                                Yelp Rating: <br/>
                                                <a href="https://www.yelp.com/biz/parish-cafe-and-bar-boston?osq=parish+cafe">
                                                    4 out of 5 Stars (1416 Reviews)
                                                </a>
                                            </p>
                                            <p>
                                                Hours of Operation:
                                                Sunday 10:30AM - 1AM <br/>
                                                Monday 11:30AM - 1AM <br/>
                                                Tuesday 11:30AM - 1AM <br/>
                                                Wednesday 11:30AM - 1AM <br/>
                                                Thursday 11:30AM - 1AM <br/>
                                                Friday 11:30AM - 1AM <br/>
                                                Saturday 10:30AM - 1AM <br/>

                                            </p>
                                            <p>
                                                Outdoor Dining Available?
                                                <p style={{color: "green"}}> Yes </p>
                                            </p>
                                            <div style={{
                                                display: "grid",
                                                gridTemplateColumns: "repeat(3, 1fr)",
                                                gridGap: 20
                                            }}>
                                                <div> Delivery: <p style={{color: "green"}}> Yes </p>
                                                </div>
                                                <div> Curbside Pick-Up: <p
                                                    style={{color: "red"}}> No </p></div>
                                                <div> Indoor Pick-up: <p
                                                    style={{color: "green"}}> Yes </p>
                                                </div>
                                            </div>
                                            <p>
                                                Order Online : <br/>
                                                <a href="https://parishcafe.com/menu/"
                                                   target="_blank"> Direct from Restaurant </a> <br/>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                    {/* Card 2 */}
                    {this.state.showItalian && (
                        <div className="card dev_card">
                            <div className="card-body">
                                <h3 className="dev_title"> Serafina </h3>

                                <a href={"https://serafinaboston.com/menu/back-bay/\""}
                                   target="_blank"> View Menu </a>
                                <br/><br/>

                                {/* Columns */}
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm">
                                            <img className="dev_img dev_photo_radius"
                                                 src={"https://s3-media0.fl.yelpcdn.com/bphoto/bV9ednA92qFJ-Q_Mz04bYg/o.jpg"}
                                                 fluid/>
                                        </div>
                                        <div className="col-sm">
                                            <p>
                                                Eatery Type:
                                                Italian
                                            </p>
                                            <p>
                                                Yelp Rating: <br/>
                                                <a href="https://www.yelp.com/biz/serafina-back-bay-boston?osq=serfinan">
                                                    4 out of 5 Stars (495 Reviews)
                                                </a>
                                            </p>
                                            <p>
                                                Hours of Operation:
                                                Sunday 11AM - 12AM <br/>
                                                Monday 11AM - 12AM <br/>
                                                Tuesday 11AM - 12AM <br/>
                                                Wednesday 11AM - 12AM <br/>
                                                Thursday 11AM - 12AM <br/>
                                                Friday 11AM - 12AM <br/>
                                                Saturday 11AM - 12AM <br/>

                                            </p>
                                            <p>
                                                Outdoor Dining Available?
                                                <p style={{color: "red"}}> No </p>
                                            </p>
                                            <div style={{
                                                display: "grid",
                                                gridTemplateColumns: "repeat(3, 1fr)",
                                                gridGap: 20
                                            }}>
                                                <div> Delivery: <p style={{color: "green"}}> Yes </p>
                                                </div>
                                                <div> Curbside Pick-Up: <p
                                                    style={{color: "red"}}> No </p></div>
                                                <div> Indoor Pick-up: <p
                                                    style={{color: "green"}}> Yes </p>
                                                </div>
                                            </div>
                                            <p>
                                                Order Online : <br/>
                                                <a href="https://serafinaboston.com/menu/back-bay/"
                                                   target="_blank"> Direct from Restaurant </a> <br/>
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Card 3 -- Saltie Girl */}
                    {this.state.showSeafood && (
                        <div className="card dev_card">
                            <div className="card-body">
                                {/* Heading */}
                                <h3 className="dev_title"> Saltie Girl  </h3>
                                <a href={"https://www.saltiegirl.com/menu/"} target="_blank"> View
                                    Menu </a>
                                <br/><br/>
                                {/* Columns */}
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm">
                                            <img className="dev_img dev_photo_radius "
                                                 src={"https://images.getbento.com/accounts/2e611a9c379beef9626facce2b3ec45e/media/images/33230Saltie_Girl_61.JPG"}
                                                 fluid/>
                                        </div>
                                        <div className="col-sm">
                                            <p>
                                                Eatery Type: <br/>
                                                Seafood
                                            </p>
                                            <p>
                                                Yelp Rating: <br/>
                                                <a href="https://www.yelp.com/biz/saltie-girl-boston?osq=satlie">
                                                    4.5 out of 5 Stars (1154 Reviews)
                                                </a>
                                            </p>
                                            <p>
                                                Hours of Operation:
                                                <p> Sunday 11AM - 11PM <br/>
                                                    Monday 11AM - 11PM <br/>
                                                    Tuesday 11AM - 11PM <br/>
                                                    Wednesday 11AM - 11PM <br/>
                                                    Thursday 11AM - 11PM <br/>
                                                    Friday 11AM - 11PM <br/>
                                                    Saturday 11AM - 11PM <br/>
                                                </p>

                                            </p>
                                            <p>
                                                Outdoor Dining Available?
                                                <p style={{color: "red"}}> No </p>
                                            </p>
                                            <div style={{
                                                display: "grid",
                                                gridTemplateColumns: "repeat(3, 1fr)",
                                                gridGap: 20
                                            }}>
                                                <div> Delivery: <p style={{color: "red"}}> No </p>
                                                </div>
                                                <div> Curbside Pick-Up: <p
                                                    style={{color: "green"}}> Yes </p></div>
                                                <div> Indoor Pick-up: <p
                                                    style={{color: "green"}}> Yes </p>
                                                </div>
                                            </div>
                                            <p>
                                                Order Online : <br/>
                                                <a href="https://www.saltiegirl.com/menu/"
                                                   target="_blank"> Direct from Restaurant </a> <br/>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                </div>
            </div>


        )
    }
}
