import React from "react";
import "../style/style.searchresult.css"
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps"
import {Link} from "react-router-dom";


function Map(){
    return(
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{lat: 42.3539, lng: -71.1337 }}
        />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

let showMyComponent = false;



export default class SearchResult extends React.Component{

    state = {
        show: false,
    }

    toggle = () => this.setState((currentState) => ({show: !currentState.show}));



    render(){
        return(
            <div className="col-sm-12 col-md-9 dev_home_container" >



                <div className="dev_search_title">

                    {/* Heading */}
                    <h1 className="dev_title"> Neighborhood Selected: Allston </h1>

                    {/*<div className="card dev_card">*/}
                    {/*    /!* Card1 *!/*/}
                    {/*    <div className="card-body">*/}
                    {/*        <div className="container-fluid">*/}
                    {/*            <img className="dev_responsive_img" src="https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2019/09/fea_allston-1social.jpg" width />*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <hr className="my-4"/>



                    {/* Filters */}
                    <h3 className="dev_title"> Refine Your Search: </h3>
                    <div className="row">
                        {/* Filter by Eatery */}
                        <DropdownButton className="dev_filters_row" id="dropdown-basic-button" title="Filter by Eatery Type">
                            <Dropdown.Item href="#/action-1">American</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Asian</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Mexican</Dropdown.Item>
                        </DropdownButton>
                        {/* Filter by Delivery/Pickup Type */}
                        <DropdownButton className="dev_filters_row"  id="dropdown-basic-button" title="Filter by ">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                        {/* Show Map */}
                        <Link to="/search" className="dev_filters_row btn btn-primary"> Outdoor </Link>
                        {/* Toggle Open Now */}
                        <Link to="/search" className="dev_filters_row btn btn-primary"> Open Now </Link>
                    </div>
                    <div className= "dev_filters_m_row row">
                        <Link to="/search" className="dev_filters_row btn btn-success"> Submit Filter </Link>
                    </div>

                    <br/>
                    <h3 className="dev_title"> View Map of Eateries in this Neighborhood: </h3>
                    {/* Show Map */}
                    <Link className="btn btn-success" onClick={this.toggle}>
                        Map: {this.state.show ? 'Hide' : 'Show'}
                    </Link>
                    {this.state.show &&
                     <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1Wrlo5Uo_IFsabhzytpEkzlw7UMyJ_XTy" width="750" height="480"></iframe>
                    }
                    <br/>
                    <br/>





                    {/* Cards of Eateries */}
                    <h3 className="dev_title"> Search Results :  </h3>
                    {/* Card1 */}
                    <div className="card dev_card">
                        <div className="card-body">
                            {/* Heading */}
                            <h3 className="dev_title"> 1 Mala  </h3>
                            <Link to={"http://www.allstonmala.com/menu.html"}> View Menu </Link>
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
                                            <p> Sunday - Saturday 11AM - 11PM </p>

                                        </p>
                                        <p>
                                            Outdoor Dining Available?
                                            <p style={{color: "green"}}> Yes </p>
                                        </p>
                                        {/* TODO -- Resize with bootstrap grid system */}
                                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
                                            <div> Delivery: <p style={{color: "red"}}> No </p>  </div>
                                            <div>  Curbside Pick-Up: <p style={{color: "green"}}> Yes </p></div>
                                            <div>  Indoor Pick-up: <p style={{color: "green"}}> Yes </p>
                                            </div>
                                        </div>
                                        <p>
                                            Order Online from : <br/>
                                            <a href="http://www.allstonmala.com">  Direct from Restaurant </a> <br/>
                                            <a href="https://www.grubhub.com/restaurant/lulus-allston-421-cambridge-st-boston/2036805">  GrubHub </a> <br/>
                                            <a href="https://www.ubereats.com/boston/food-delivery/lulus-allston/HIQQXByuRKePn2kmdxVo7g">  UberEats </a> <br/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card2 */}
                    <div className="card dev_card">
                        <div className="card-body">
                            <h3 className="dev_title"> 2 Lulu's </h3>

                            <Link to={"https://www.lulusallston.com/menu.html"}> View Menu </Link>
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
                                            <p> Monday to Friday 11:30AM - 1AM </p>
                                            <p> Saturday to Sunday 10:30AM - 1AM </p>

                                        </p>
                                        <p>
                                            Outdoor Dining Available?
                                            <p style={{color: "green"}}> Yes </p>
                                        </p>
                                        {/* TODO -- Resize with bootstrap grid system */}
                                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
                                            <div> Delivery: <p style={{color: "green"}}> Yes </p>  </div>
                                            <div>  Curbside Pick-Up: <p style={{color: "red"}}> No </p></div>
                                            <div>  Indoor Pick-up: <p style={{color: "green"}}> Yes </p>
                                            </div>
                                        </div>
                                        <p>
                                            Order Online from : <br/>
                                            <a href="https://lulusallston.getbento.com/online-ordering/lulus-allston/menu">  Direct from Restaurant </a> <br/>
                                            <a href="https://www.grubhub.com/restaurant/mala-129-brighton-ave-allston/661208">  GrubHub </a> <br/>
                                            <a href="http://www.allstonmala.com">  UberEats </a> <br/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Card3 */}
                    <div className="card dev_card">
                        <div className="card-body">
                            <h3 className="dev_title"> 3 Lone Star Taco Bar </h3>

                            <Link to={"https://www.toasttab.com/lonestar-allston/v3"}> View Menu </Link>
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
                                            <p>  Sunday to Saturday 11AM - 12AM </p>

                                        </p>
                                        <p>
                                            Outdoor Dining Available?
                                            <p style={{color: "red"}}> No </p>
                                        </p>
                                        {/* TODO -- Resize with bootstrap grid system */}
                                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
                                            <div> Delivery: <p style={{color: "green"}}> Yes </p>  </div>
                                            <div>  Curbside Pick-Up: <p style={{color: "red"}}> No </p></div>
                                            <div>  Indoor Pick-up: <p style={{color: "green"}}> Yes </p>
                                            </div>
                                        </div>
                                        <p>
                                            Order Online from : <br/>
                                            <a href="https://www.toasttab.com/lonestar-allston/v3">  Direct from Restaurant </a> <br/>
                                            <a href="https://www.grubhub.com/restaurant/lone-star-allston-477-cambridge-st-allston-allston/2444152">  GrubHub </a> <br/>
                                            <a href="https://www.ubereats.com/boston/food-delivery/lone-star-taco-bar-allston/h1BE2jLHScC0C2r_MZRBQA">  UberEats </a> <br/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div style={showMyComponent ? {} : { display: 'none' }} >

                    {/* Map */}
                    {/* https://stackoverflow.com/questions/24502898/show-or-hide-element-in-react*/}
                    <br/>
                    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1Wrlo5Uo_IFsabhzytpEkzlw7UMyJ_XTy" width="750" height="480"></iframe>

                    </div>



                </div>
            </div>

        )
    }
}
