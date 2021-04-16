import React from "react";
import "../style/style.searchresult.css"
import {Link} from "react-router-dom";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import {Multiselect} from "multiselect-react-dropdown";
import {DropdownButton, Dropdown, Container, Row, Col, Button} from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";




export default class SearchResult extends React.Component{


    state = {
        checkedDelivery: null,
        checkedOutdoor: null,
        showSelected: "none",
        showAsian: true,
        showAmerican: true,
        showMexican: true,
        outdoor_filtered: false,
        open_filtered: false,

    };

    filterAsian = () => {
        this.setState({
                          showSelected: "asian",
                          showAsian: true,
                          showAmerican: false,
                          showMexican: false
                      });
    };

    filterAmerican = () => {
        this.setState({
                          showSelected: "american",
                          showAsian: false,
                          showAmerican: true,
                          showMexican: false
                      });
    };

    filterMexican = () => {
        this.setState({
                          showSelected: "mexican",
                          showAsian: false,
                          showAmerican: false,
                          showMexican: true
                      });
    };

    clearFilters = () => {
        this.setState({
                          checkedDelivery: false,
                          checkedOutdoor: false,

                          showSelected:"none",
                          showAsian: true,
                          showAmerican: true,
                          showMexican: true,
                      });


    };

     unCheck = () =>  {
        let x = document.getElementsByClassName("checkbox");
        for(let i=0; i<=x.length; i++) {
            x[i].checked = false;
        }
    };




    render() {
        const {showAsian} = this.state;
        const {showAmerican} = this.state;
        const {showMexican} = this.state;

        return(
            <div className="col-sm-12 col-md-9 dev_home_container" >
                <div className="dev_search_title">

                    <input type="checkbox" className="checkbox"/>
                    <input type="checkbox" className="checkbox"/>
                    <input type="checkbox" className="checkbox"/>
                    <button onClick={this.unCheck}>Try it</button>

                    {/* JUMBOTRON */}
                    <div className="jumbotron dev_background_allston">
                        <div className="dev_transbox_searchResults">
                        <div className="container">
                            <h1 className="display-4"> Allston  </h1>
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
                                <Dropdown.Toggle id="dropdown-custom-1"> Eatery Type </Dropdown.Toggle>
                                <Dropdown.Menu className="super-colors">
                                    <Dropdown.Item  onClick={this.filterAsian}> Asian </Dropdown.Item>
                                    <Dropdown.Item onClick={this.filterAmerican}> American </Dropdown.Item>
                                    <Dropdown.Item onClick={this.filterMexican} > Mexican </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        <div>

                                <div className="form-check">
                                    <Popup trigger={
                                    <input className="checkbox form-check-input " type="checkbox" value=""
                                           id="defaultCheck1" checked={this.state.checkedDelivery} />
                                    } position="right center">
                                        <div> Non-functioning prototype. Will be implemented in the future.</div>
                                    </Popup>
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        Eateries that Deliver
                                    </label>
                                </div>


                        </div>
                        {/*<div>*/}
                            {/*<div className="form-check">*/}
                            {/*    <input className="form-check-input" type="checkbox" value=""*/}
                            {/*           id="defaultCheck1"/>*/}
                            {/*    <label className="form-check-label" htmlFor="defaultCheck1">*/}
                            {/*         Eateries that Deliver*/}
                            {/*    </label>*/}
                            {/*</div>*/}
                        {/*</div>*/}

                        <div>
                            <div className="form-check">
                                <Popup trigger={
                                <input className="form-check-input checkbox" type="checkbox" value=""
                                       id="defaultCheck1" checked={this.state.checkedOutdoor}/>
                                } position="right center">
                                    <div> Non-working prototype element. Will be implemented in the future. </div>
                                </Popup>
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                    Eateries with Outdoor Dining
                                </label>
                            </div>
                        </div>
                    </div>

                    <br/>
                    Eatery Type Currently Selected:
                    {this.state.showSelected == "none" && ( <p className="text-primary">none</p> )}
                    {this.state.showSelected == "asian" && (<p className="text-primary"> Asian </p>)}
                    {this.state.showSelected == "american" && (<p className="text-primary"> American </p>)}
                    {this.state.showSelected == "mexican" && (<p className="text-primary"> Mexican </p>)}




                    {/* Filter Submit and Clear Button */}
                    <div className= "dev_filters_m_row row">
                        <button onClick={this.clearFilters} className= "dev_filters_row btn btn-danger dev_button_size"> Clear Filters </button>
                    </div>
                    <br/>

                    {/* Cards of Eateries */}
                    <br/>

                    <h2 className="dev_title_searchResult"> Eatery Search Results :  </h2>
                    <p> To help small these local small businesses we encourage you to order directly
                        from the restaurant when possible. This allows them to avoid paying fees to
                        other delivery services.
                    </p>

                    {/* Card1 -- MALA */}
                    {this.state.showAsian && (
                     <div className="card dev_card">
                         <div className="card-body">
                             {/* Heading */}
                             <h3 className="dev_title"> Mala </h3>
                             <a href={"http://www.allstonmala.com/menu.html"} target="_blank"> View
                                 Menu </a>
                             <br/><br/>
                             {/* Columns */}
                             <div className="container">
                                 <div className="row">
                                     <div className="col-sm">
                                         <img className="dev_img dev_photo_radius "
                                              src={"https://www.yumofchina.com/wp-content/uploads/2017/07/Spicy-Sichuan-Chicken3.jpg"}
                                              fluid/>
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
                                             <a href="http://www.allstonmala.com"
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
                             <h3 className="dev_title"> Lulu's </h3>

                             <a href={"https://www.lulusallston.com/menu.html"}
                                target="_blank"> View Menu </a>
                             <br/><br/>
                             {/* Columns */}
                             <div className="container">
                                 <div className="row">
                                     <div className="col-sm">
                                         <img className="dev_img dev_photo_radius"
                                              src={"https://www.lulusallston.com/img/luluspread-12-16-19.jpg"}
                                              fluid/>
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
                                             <a href="https://lulusallston.getbento.com/online-ordering/lulus-allston/menu"
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
                             <h3 className="dev_title"> Lone Star Taco Bar </h3>

                             <a href={"https://www.toasttab.com/lonestar-allston/v3"}
                                target="_blank"> View Menu </a>
                             <br/><br/>
                             {/* Columns */}
                             <div className="container">
                                 <div className="row">
                                     <div className="col-sm">
                                         <img className="dev_img dev_photo_radius"
                                              src={"https://bostonglobe-prod.cdn.arcpublishing.com/resizer/Cf11fCo5bHMl8UvGOoaztiJK1XQ=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/X35UOLSYYYI6DJ64HNRBUTHPCU.jpg"}
                                              fluid/>
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
                                             <a href="https://www.toasttab.com/lonestar-allston/v3"
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
