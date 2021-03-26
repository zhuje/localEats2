import React from "react";
import "../style/style.searchresult.css"
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Card from "react-bootstrap/Card";

export default class SearchResult extends React.Component{
    render(){
        return(
            <div className="col-sm-12 col-md-9 dev_home_container" >

                <div className="dev_search_title">
                    <h1> Neighborhood Selected: Allston </h1>
                    <h3> Apply Filters </h3>

                    <div className="row">
                        {/* Filter by Eatery */}
                        <DropdownButton className="dev_filters_row" id="dropdown-basic-button" title="Filter by Eatery Type">
                            <Dropdown.Item href="#/action-1">Italian</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Asian</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Mexican</Dropdown.Item>
                        </DropdownButton>
                        {/* Filter by Type */}
                        <DropdownButton id="dropdown-basic-button" title="Filter by ">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                    </div>

                    {/* MAP */}
                    <div className="dev_placeholder">
                        <h3> Map PlaceHolder</h3>
                    </div>

                    {/* List of Eateries */}
                    <div className="card">
                        <div className="card-body">

                            <h3 className="dev_title"> Mala </h3>
                            <p>
                                <a href="http://www.allstonmala.com/menu.html">  View Menu </a>
                            </p>

                            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
                                {/* Column 1*/}
                                <div>
                                    <img className="dev_img" src={"https://www.yumofchina.com/wp-content/uploads/2017/07/Spicy-Sichuan-Chicken3.jpg"} fluid />
                                </div>
                                {/* Column 2 */}
                                <div>

                                    Yelp Rating : <p> 3.5 (263 Reviews) </p>
                                    Hours of Operation:<p> Sunday - Saturday 11AM - 11PM </p>

                                    {/* TODO -- Resize with bootstrap grid system */}
                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
                                        <div> Delivery: <p style={{color: "red"}}> No </p>  </div>
                                        <div>  Curbside Pick-Up: <p style={{color: "green"}}> Yes </p></div>
                                        <div>  Indoor Pick-up: <p style={{color: "green"}}> Yes </p>
                                        </div>
                                    </div>





                                    <p>
                                    Navigate to : <br/>
                                    <a href="http://www.allstonmala.com">  Restaurant's Website </a> <br/>
                                    <a href=" ">  Yelp Page for Restaurant </a>
                                    </p>

                                    <p>
                                    Order Online from : <br/>
                                    <a href="http://www.allstonmala.com">  Direct from Restaurant </a> <br/>
                                    <a href="http://www.allstonmala.com">  GrubHub </a> <br/>
                                    <a href="http://www.allstonmala.com">  UberEats </a> <br/>
                                    </p>

                                </div>

                            </div>




                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            This is some text within a card body.
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            This is some text within a card body.
                        </div>
                    </div>



                </div>
            </div>

        )
    }
}
