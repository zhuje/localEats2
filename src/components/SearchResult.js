import React from "react";
import "../style/style.searchresult.css"
import {Link} from "react-router-dom";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import {Multiselect} from "multiselect-react-dropdown";


export default class SearchResult extends React.Component{


    state = {
        show: false,
        outdoor_filtered: false,
        open_filtered: false,
        eatery_options: [{name: 'Asian', id: 1},{name: 'American', id: 2}, {name: 'Mexican', id: 3}],
        delivery_options: [{name: 'Delivery', id: 1},{name: 'Curbside Pickup', id: 2}, {name: 'Indoor Pickup', id: 3}],
        outdoor_options: [{name: 'Outdoor Dining Available', id: 1}],
        openNow_options: [{name: 'Only Show Eateries Open Now', id: 1}],
    }

    toggle = () => this.setState((currentState) => ({show: !currentState.show}));


    render(){
        return(
            <div className="col-sm-12 col-md-9 dev_home_container" >
                <div className="dev_search_title">

                    {/* Heading */}
                    <h1 className="dev_title"> Neighborhood Selected: Allston </h1>
                    {/* Graphic of Allston */}
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
                        <div className="col">
                            <Multiselect
                                options={this.state.eatery_options} // Options to display in the dropdown
                                selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                onSelect={this.onSelect} // Function will trigger on select event
                                onRemove={this.onRemove} // Function will trigger on remove event
                                displayValue="name" // Property name to display in the dropdown options
                                placeholder={"Filter for Eatery Type"}
                                showArrow={true}
                                avoidHighlightFirstOption={true}
                            />
                        </div>
                        <div className="col">
                            <Multiselect
                                options={this.state.delivery_options} // Options to display in the dropdown
                                selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                onSelect={this.onSelect} // Function will trigger on select event
                                onRemove={this.onRemove} // Function will trigger on remove event
                                displayValue="name" // Property name to display in the dropdown options
                                placeholder={"Filter for Delivery Type"}
                                showArrow={true}
                                avoidHighlightFirstOption={true}

                            />
                        </div>
                        <div className="col">
                            <Multiselect
                                options={this.state.outdoor_options} // Options to display in the dropdown
                                selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                onSelect={this.onSelect} // Function will trigger on select event
                                onRemove={this.onRemove} // Function will trigger on remove event
                                displayValue="name" // Property name to display in the dropdown options
                                placeholder={"Filter for Outdoor Dining"}
                                showArrow={true}
                                avoidHighlightFirstOption={true}
                            />
                        </div>
                        <div className="col">
                            <Multiselect
                                options={this.state.openNow_options} // Options to display in the dropdown
                                selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                onSelect={this.onSelect} // Function will trigger on select event
                                onRemove={this.onRemove} // Function will trigger on remove event
                                displayValue="name" // Property name to display in the dropdown options
                                placeholder={"Filter for Eateries Open Now"}
                                showArrow={true}
                                avoidHighlightFirstOption={true}
                            />
                        </div>
                    </div>

                    {/* Filter Submit and Clear Button */}
                    <div className= "dev_filters_m_row row">
                        <Popup trigger={<button className=" dev_filters_row btn btn-success"> Apply Filters </button>} position="right center">
                            <div> In future implementations this will trigger an onClick event to filter
                                the list of restaurants below with the given parameters. </div>
                        </Popup>
                        <Popup trigger={<button className=" dev_filters_row btn btn-danger"> Clear Filters </button>} position="right center">
                            <div> In future implementations this will trigger an onClick event to clear all
                            filters previously applied. </div>
                        </Popup>
                    </div>

                    {/* Show of All Eateries in Neighborhood */}
                    <br/>
                    <h3 className="dev_title"> View Map of Eateries in this Neighborhood: </h3>
                    <Link className="btn btn-success" onClick={this.toggle}>
                        Map: {this.state.show ? 'Hide' : 'Show'}
                    </Link>
                    <div>
                        <br/>
                        {this.state.show &&
                           <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1Wrlo5Uo_IFsabhzytpEkzlw7UMyJ_XTy" width="750" height="480"></iframe>
                        }
                    </div>
                    <br/>


                    {/* Cards of Eateries */}
                    <h3 className="dev_title"> Search Results :  </h3>
                    {/* Card1 */}
                    <div className="card dev_card">
                        <div className="card-body">
                            {/* Heading */}
                            <h3 className="dev_title"> 1 Mala  </h3>
                            <a href={"http://www.allstonmala.com/menu.html"}> View Menu </a>
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

                            <a href={"https://www.lulusallston.com/menu.html"}> View Menu </a>
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

                            <a href={"https://www.toasttab.com/lonestar-allston/v3"}> View Menu </a>
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
                </div>
            </div>

        )
    }
}
