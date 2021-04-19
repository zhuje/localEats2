import React from "react";
import "../style/style.searchresult.css"
import 'reactjs-popup/dist/index.css';
import { Dropdown, Form} from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";


function goBack() {
    window.history.back();
}


export default class JP extends React.Component{


    state = {
        checkedDelivery: null,
        checkedOutdoor: null,
        showSelected: "none",
        showEthiopian: true,
        showAmerican: true,
        showMexican: true,
        outdoor_filtered: false,
        open_filtered: false,

    };

    filterEthiopian = () => {
        this.setState({
                          showSelected: "ethiopian",
                          showEthiopian: true,
                          showAmerican: false,
                          showMexican: false
                      });
    };

    filterAmerican = () => {
        this.setState({
                          showSelected: "american",
                          showEthiopian: false,
                          showAmerican: true,
                          showMexican: false
                      });
    };

    filterMexican = () => {
        this.setState({
                          showSelected: "mexican",
                          showEthiopian: false,
                          showAmerican: false,
                          showMexican: true
                      });
    };

    clearFilters = () => {
        this.setState({
                          checkedDelivery: false,
                          checkedOutdoor: false,

                          showSelected:"none",
                          showEthiopian: true,
                          showAmerican: true,
                          showMexican: true,
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
                    <div className="jumbotron dev_background_jp">
                        <div className="dev_transbox_searchResults">
                            <div className="container">
                                <h1 className="display-4"> Jamaica Plain  </h1>
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
                                    <Dropdown.Item  onClick={this.filterEthiopian}> Ethiopian </Dropdown.Item>
                                    <Dropdown.Item onClick={this.filterMexican} > Mexican </Dropdown.Item>
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
                    {this.state.showSelected == "ethiopian" && (<p className="text-primary"> Ethiopian </p>)}
                    {this.state.showSelected == "american" && (<p className="text-primary"> American </p>)}
                    {this.state.showSelected == "mexican" && (<p className="text-primary"> Mexican </p>)}




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

                    {/* Card1 -- Blue Nile */}
                    {this.state.showEthiopian && (
                        <div className="card dev_card">
                            <div className="card-body">
                                {/* Heading */}
                                <h3 className="dev_title"> Blue Nile </h3>
                                <a href={"https://www.bluenileincjp.com/"} target="_blank"> View
                                    Menu </a>
                                <br/><br/>
                                {/* Columns */}
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm">
                                            <img className="dev_img dev_photo_radius "
                                                 src={"https://s3-media0.fl.yelpcdn.com/bphoto/nvH1amO4pFvFzRLZ4IKMmQ/o.jpg"}
                                                 fluid/>
                                        </div>
                                        <div className="col-sm">
                                            <p>
                                                Eatery Type: <br/>
                                                Ethiopian
                                            </p>
                                            <p>
                                                Yelp Rating: <br/>
                                                <a href="https://www.yelp.com/biz/blue-nile-restaurant-jamaica-plain?osq=blue+nile">
                                                    4 out of 5 Stars (305 Reviews)
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
                                                <a href="https://www.bluenileincjp.com/"
                                                   target="_blank"> Direct from Restaurant </a> <br/>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                    {/* Card2 */}
                    {this.state.showAmerican && (
                        <div className="card dev_card">
                            <div className="card-body">
                                <h3 className="dev_title"> Ten Tables </h3>

                                <a href={"https://tentables.net/l"}
                                   target="_blank"> View Menu </a>
                                <br/><br/>
                                {/* Columns */}
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm">
                                            <img className="dev_img dev_photo_radius"
                                                 src={"https://tentables.net/wp-content/uploads/2019/04/pasta-thursdays-ten-tables-jp.jpg"}
                                                 fluid/>
                                        </div>
                                        <div className="col-sm">
                                            <p>
                                                Eatery Type: <br/>
                                                American
                                            </p>
                                            <p>
                                                Yelp Rating: <br/>
                                                <a href="https://www.yelp.com/biz/ten-tables-jamaica-plain?osq=ten+tables">
                                                    4 out of 5 Stars (495 Reviews)
                                                </a>
                                            </p>
                                            <p>
                                                Hours of Operation:
                                                <p>
                                                    Sunday 10:30AM - 1AM <br/>
                                                    Monday 11:30AM - 1AM <br/>
                                                    Tuesday 11:30AM - 1AM <br/>
                                                    Wednesday 11:30AM - 1AM <br/>
                                                    Thursday 11:30AM - 1AM <br/>
                                                    Friday 11:30AM - 1AM <br/>
                                                    Saturday 10:30AM - 1AM <br/>
                                                </p>
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
                                                <a href="https://tentables.net/"
                                                   target="_blank"> Direct from Restaurant </a> <br/>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                    {/* Card3 */}
                    {this.state.showMexican && (
                        <div className="card dev_card">
                            <div className="card-body">
                                <h3 className="dev_title"> Tres Gatos </h3>

                                <a href={"http://www.tresgatosjp.com/"}
                                   target="_blank"> View Menu </a>
                                <br/><br/>
                                {/* Columns */}
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm">
                                            <img className="dev_img dev_photo_radius"
                                                 src={"https://s3-media0.fl.yelpcdn.com/bphoto/j_PwWHy3hE5m0R1A5SYKYg/o.jpg"}
                                                 fluid/>
                                        </div>
                                        <div className="col-sm">
                                            <p>
                                                Eatery Type: <br/>
                                                Mexican
                                            </p>
                                            <p>
                                                Yelp Rating: <br/>
                                                <a href="https://www.yelp.com/biz/tres-gatos-jamaica-plain">
                                                    4 out of 5 Stars (498 Reviews)
                                                </a>
                                            </p>
                                            <p>
                                                Hours of Operation:
                                                <p>
                                                Sunday 11AM - 12AM <br/>
                                                Monday 11AM - 12AM <br/>
                                                Tuesday 11AM - 12AM <br/>
                                                Wednesday 11AM - 12AM <br/>
                                                Thursday 11AM - 12AM <br/>
                                                Friday 11AM - 12AM <br/>
                                                Saturday 11AM - 12AM <br/>
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
                                                <a href="http://www.tresgatosjp.com/"
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
