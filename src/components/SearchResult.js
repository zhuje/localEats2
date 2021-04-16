import React from "react";
import "../style/style.searchresult.css"
import {Link} from "react-router-dom";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import {Multiselect} from "multiselect-react-dropdown";
import {DropdownButton, Dropdown} from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";


export default class SearchResult extends React.Component{

    state = {
        showAsian: true,
        showAmerican: true,
        show: false,
        outdoor_filtered: false,
        open_filtered: false,
        eatery_options: [{name: 'Asian', id: 1},{name: 'American', id: 2}, {name: 'Mexican', id: 3}],
        delivery_options: [{name: 'Delivery', id: 1},{name: 'Curbside Pickup', id: 2}, {name: 'Indoor Pickup', id: 3}],
        outdoor_options: [{name: 'Outdoor Dining Available', id: 1}],
        openNow_options: [{name: 'Only Show Eateries Open Now', id: 1}],
    }

    toggle = () => this.setState((currentState) => ({show: !currentState.show}));
    toggleAsian = () => this.setState((currentState) => ({showAsian: !currentState.showAsian}));
    toggleAmerican = () => this.setState((currentState) => ({showAmerican: !currentState.showAmerican}));
    toggleMexican = () => this.setState((currentState) => ({showMexican: !currentState.showMexican}));


    render(){
        return(
            <div className="col-sm-12 col-md-9 dev_home_container" >

                <div className="dev_search_title">

                    <div className="jumbotron dev_background_allston">
                        <div className="dev_transbox_searchResults">
                        <div className="container">
                            <h1 className="display-4"> Allston </h1>
                            {/*<p className="lead"> This is a modified jumbotron that occupies the*/}
                            {/*    entire horizontal space of its parent. </p>*/}
                        </div>
                    </div>
                    </div>

                    {/* Heading */}
                    {/*<h1 className="dev_title"> Neighborhoods Selected: Allston </h1>*/}
                    {/* Graphic of Allston */}
                    {/*<div className="card dev_card">*/}
                    {/*    /!* Card1 *!/*/}
                    {/*    <div className="card-body">*/}
                    {/*        <div className="container-fluid">*/}
                    {/*            <img className="dev_responsive_img" src="https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2019/09/fea_allston-1social.jpg" width />*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<hr className="my-4"/>*/}


                    {/* Filters */}
                    <h2 className="dev_title"> Refine Your Search: </h2>
                    <hr className="my-4"/>


                        <Dropdown as={ButtonGroup}>
                            <Dropdown.Toggle id="dropdown-custom-1">Neighborhood</Dropdown.Toggle>
                            <Dropdown.Menu className="super-colors">
                                <Dropdown.Item eventKey="allston"
                                               onClick={this.showAllston}>Allston</Dropdown.Item>
                                <Dropdown.Item eventKey="bb" onClick={this.showBackBay}>Back
                                    Bay</Dropdown.Item>
                                <Dropdown.Item eventKey="jp" onClick={this.showJP} selected="selected">Jamaica
                                    Plain</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>&nbsp;&nbsp;&nbsp;
                        <Dropdown as={ButtonGroup}>
                            <Dropdown.Toggle id="dropdown-custom-1">Sort</Dropdown.Toggle>
                            <Dropdown.Menu className="super-colors">
                                <Dropdown.Item eventKey="alph"
                                               onClick={this.sortAlph}>Alphabetical</Dropdown.Item>
                                <Dropdown.Item eventKey="expir"
                                               onClick={this.sortExpir}>Expiration</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>&nbsp;&nbsp;&nbsp;
                        <button type="button" className="btn btn-primary">Saved Promotions</button>



                    {/*    <div className="col">*/}
                    {/*        <Multiselect*/}
                    {/*            options={this.state.eatery_options} // Options to display in the dropdown*/}
                    {/*            selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown*/}
                    {/*            onSelect={this.onSelect} // Function will trigger on select event*/}
                    {/*            onRemove={this.onRemove} // Function will trigger on remove event*/}
                    {/*            displayValue="name" // Property name to display in the dropdown options*/}
                    {/*            placeholder={"Filter for Eatery Type"}*/}
                    {/*            showArrow={true}*/}
                    {/*            avoidHighlightFirstOption={true}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*    <div className="col">*/}
                    {/*        <Multiselect*/}
                    {/*            options={this.state.delivery_options} // Options to display in the dropdown*/}
                    {/*            selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown*/}
                    {/*            onSelect={this.onSelect} // Function will trigger on select event*/}
                    {/*            onRemove={this.onRemove} // Function will trigger on remove event*/}
                    {/*            displayValue="name" // Property name to display in the dropdown options*/}
                    {/*            placeholder={"Filter for Delivery Type"}*/}
                    {/*            showArrow={true}*/}
                    {/*            avoidHighlightFirstOption={true}*/}

                    {/*        />*/}
                    {/*    </div>*/}
                    {/*    <div className="col">*/}
                    {/*        <Multiselect*/}
                    {/*            options={this.state.outdoor_options} // Options to display in the dropdown*/}
                    {/*            selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown*/}
                    {/*            onSelect={this.onSelect} // Function will trigger on select event*/}
                    {/*            onRemove={this.onRemove} // Function will trigger on remove event*/}
                    {/*            displayValue="name" // Property name to display in the dropdown options*/}
                    {/*            placeholder={"Filter for Outdoor Dining"}*/}
                    {/*            showArrow={true}*/}
                    {/*            avoidHighlightFirstOption={true}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*    <div className="col">*/}
                    {/*        <Multiselect*/}
                    {/*            options={this.state.openNow_options} // Options to display in the dropdown*/}
                    {/*            selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown*/}
                    {/*            onSelect={this.onSelect} // Function will trigger on select event*/}
                    {/*            onRemove={this.onRemove} // Function will trigger on remove event*/}
                    {/*            displayValue="name" // Property name to display in the dropdown options*/}
                    {/*            placeholder={"Filter for Eateries Open Now"}*/}
                    {/*            showArrow={true}*/}
                    {/*            avoidHighlightFirstOption={true}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/* Filter Submit and Clear Button */}
                    <div className= "dev_filters_m_row row">
                        {/*<Popup trigger={<button className=" dev_filters_row btn btn-success"> Apply Filters </button>} position="right center">*/}
                        {/*    <div> In future implementations this will trigger an onClick event to filter*/}
                        {/*        the list of restaurants below with the given parameters. </div>*/}
                        {/*</Popup>*/}
                        <Popup trigger={<button className=" dev_filters_row btn btn-danger"> Clear Filters </button>} position="right center">
                            <div> In future implementations this will trigger an onClick event to clear all
                            filters previously applied. </div>
                        </Popup>
                    </div>
                    <br/>

                    {/* Show of All Eateries in Neighborhood */}
                    {/*<br/>*/}
                    {/*<h3 className="dev_title"> View Map of Eateries in this Neighborhood: </h3>*/}


                    {/*<Link className="btn btn-success" onClick={this.toggle}>*/}
                    {/*     {this.state.show ? 'Hide Map' : 'Show Map'}*/}
                    {/*</Link>*/}
                    {/*<div>*/}
                    {/*    <br/>*/}
                    {/*    {this.state.show &&*/}
                    {/*       <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1Wrlo5Uo_IFsabhzytpEkzlw7UMyJ_XTy" width="750" height="480"></iframe>*/}
                    {/*    }*/}
                    {/*</div>*/}
                    {/*<br/>*/}


                    {/* Cards of Eateries */}
                    <br/>

                    <h2 className="dev_title_searchResult"> Eatery Search Results :  </h2>
                    <p> We encourage you to order directly from the restaurant when possible. <br/>
                        This allows them to avoid paying fees to other delivery services.
                    </p>

                    {/* Card1 */}
                    <div className="card dev_card">
                        <div className="card-body">
                            {/* Heading */}
                            <h3 className="dev_title"> Mala  </h3>
                            <a href={"http://www.allstonmala.com/menu.html"} target="_blank"> View Menu </a>
                            <br/><br/>
                            {/* Columns */}
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm">
                                        <img className="dev_img" src={"https://www.yumofchina.com/wp-content/uploads/2017/07/Spicy-Sichuan-Chicken3.jpg"} fluid />
                                    </div>
                                    <div className="col-sm">
                                        <p>
                                            Yelp Rating: <br/>
                                            <a href="https://www.yelp.com/biz/mala-restaurant-boston">
                                                3.5 out of 5 Stars (263 Reviews)
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
                                            <p style={{color: "green"}}> Yes </p>
                                        </p>
                                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
                                            <div> Delivery: <p style={{color: "red"}}> No </p>  </div>
                                            <div>  Curbside Pick-Up: <p style={{color: "green"}}> Yes </p></div>
                                            <div>  Indoor Pick-up: <p style={{color: "green"}}> Yes </p>
                                            </div>
                                        </div>
                                        <p>
                                            Order Online  : <br/>
                                            <a href="http://www.allstonmala.com"  target="_blank">  Direct from Restaurant </a> <br/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card2 */}
                    <div className="card dev_card">
                        <div className="card-body">
                            <h3 className="dev_title"> Lulu's </h3>

                            <a href={"https://www.lulusallston.com/menu.html"} target="_blank"> View Menu </a>
                            <br/><br/>
                            {/* Columns */}
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm">
                                        <img className="dev_img" src={"https://www.lulusallston.com/img/luluspread-12-16-19.jpg"} fluid />
                                    </div>
                                    <div className="col-sm">
                                        <p>
                                            Yelp Rating: <br/>
                                            <a href="https://www.yelp.com/biz/lulus-allston-boston-4">
                                                4 out of 5 Stars (495 Reviews)
                                            </a>
                                        </p>
                                        <p>
                                            Hours of Operation:
                                            <p> Sunday 10:30AM - 1AM <br/>
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
                                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
                                            <div> Delivery: <p style={{color: "green"}}> Yes </p>  </div>
                                            <div>  Curbside Pick-Up: <p style={{color: "red"}}> No </p></div>
                                            <div>  Indoor Pick-up: <p style={{color: "green"}}> Yes </p>
                                            </div>
                                        </div>
                                        <p>
                                            Order Online  : <br/>
                                            <a href="https://lulusallston.getbento.com/online-ordering/lulus-allston/menu"  target="_blank">  Direct from Restaurant </a> <br/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Card3 */}
                    <div className="card dev_card">
                        <div className="card-body">
                            <h3 className="dev_title"> Lone Star Taco Bar </h3>

                            <a href={"https://www.toasttab.com/lonestar-allston/v3"} target="_blank"> View Menu </a>
                            <br/><br/>
                            {/* Columns */}
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm">
                                        <img className="dev_img" src={"https://bostonglobe-prod.cdn.arcpublishing.com/resizer/Cf11fCo5bHMl8UvGOoaztiJK1XQ=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/X35UOLSYYYI6DJ64HNRBUTHPCU.jpg"} fluid />
                                    </div>
                                    <div className="col-sm">
                                        <p>
                                            Yelp Rating: <br/>
                                            <a href="https://www.yelp.com/biz/lone-star-taco-bar-allston">
                                                4 out of 5 Stars (495 Reviews)
                                            </a>
                                        </p>
                                        <p>
                                            Hours of Operation:
                                            <p> Sunday 11AM - 12AM <br/>
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
                                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
                                            <div> Delivery: <p style={{color: "green"}}> Yes </p>  </div>
                                            <div>  Curbside Pick-Up: <p style={{color: "red"}}> No </p></div>
                                            <div>  Indoor Pick-up: <p style={{color: "green"}}> Yes </p>
                                            </div>
                                        </div>
                                        <p>
                                            Order Online  : <br/>
                                            <a href="https://www.toasttab.com/lonestar-allston/v3"  target="_blank">  Direct from Restaurant </a> <br/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
