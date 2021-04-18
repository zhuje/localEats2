import React from "react";
import './style/style.app.css';
import {BrowserRouter, Link, Route} from "react-router-dom";
import Home from "./components/Home"
import Promotions from "./components/Promotions"
import Profile from "./components/Profile"
import SearchResult from "./components/SearchResult"
import Map from "./components/Map";
import Stories from "./components/Stories"
import Allston from "./components/Allston"

import Popup from "reactjs-popup";
import {Form, FormControl, Nav, Navbar, Button} from "react-bootstrap";


export default class App extends React.Component{

    render(){
        return(
            <BrowserRouter>
                <div>

                    {/* TOP NAV BAR -- HAMBURGER ON MEDIUM VIEWPORT */}
                    <Navbar bg="dark" expand="md" className="sticky-top navbar-dark flex-md-nowrap p-0">
                        <Navbar.Brand className="col-3 mr-0" href="home" >
                            <h1 className="dev_title "> LocalEats </h1>
                        </Navbar.Brand>
                        <Navbar.Toggle className="dev_hamburger_margin"  aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" >
                            {/* Navigation Links */}
                            <div className="d-block d-md-none">
                                <Nav className="mr-auto">
                                    <Nav.Link className="dev_hamburger_nav-link" href="home">
                                        <i className="fa fa-home" aria-hidden="true" ></i>
                                        &nbsp;
                                        Navigate Home
                                    </Nav.Link>
                                    <Nav.Link className="dev_hamburger_nav-link" href="#link">
                                        <i className="feather fa fa-money " aria-hidden="true"></i>
                                        &nbsp;
                                        Find Promotions
                                    </Nav.Link>
                                    <Nav.Link className="dev_hamburger_nav-link" href="#link">
                                        <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                                        &nbsp;
                                        Edit Profile
                                    </Nav.Link>
                                </Nav>
                                <Form className="dev_hamburger_nav-link" inline>
                                    <FormControl  type="text" placeholder="Search"  />
                                    <Button variant="primary">Search</Button>
                                </Form>

                            </div>
                        </Navbar.Collapse>
                        {/* Search Bar */}
                        <input className="form-control form-control-dark w-100 d-none d-md-block " type="text"
                               placeholder="Search for a Neighborhood (Allston) " aria-label="Search"/>
                        <ul className="navbar-nav px-3 d-none d-md-block">
                            <li className="nav-item text-nowrap ">
                                <Link to="/search" className="btn btn-primary"> Search </Link>
                            </li>
                        </ul>

                    </Navbar>


                    {/* SIDEBAR */}
                    <div className="row">
                        <nav className="col-md-3 d-none d-md-block sidebar">
                            <div className="position-fixed">
                                <ul className="nav flex-column">
                                    {/* Home */}
                                    <li className="nav-item active" style={{height:'50'}}>
                                        <a className="nav-link" href="home">
                                            <i className="fa fa-home" aria-hidden="true" ></i>
                                            &nbsp;
                                            Navigate Home
                                        </a>
                                    </li>
                                    {/* Promotions */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="promotions" style={{height:'50'}}>
                                            <i className="feather fa fa-money " aria-hidden="true"></i>
                                            &nbsp;
                                            Find Promotions
                                        </a>
                                    </li>
                                    {/* Profile */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="profile" style={{height:'50'}}>
                                            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                                            &nbsp;
                                            Edit Preferences
                                        </a>
                                    </li>
                                    {/* Logout */}
                                    {/*<li className="nav-item">*/}
                                    {/*    <Popup trigger={*/}
                                    {/*        <a className="nav-link" href="#" style={{height:'50'}}>*/}
                                    {/*            <i className="fa fa-sign-out" aria-hidden="true"></i>*/}
                                    {/*            &nbsp;*/}
                                    {/*            Log out*/}
                                    {/*        </a>*/}
                                    {/*    } position="right center">*/}
                                    {/*        <div> Future implementations will log the user out. This feature is currently a mock up. </div>*/}
                                    {/*    </Popup>*/}
                                    {/*</li>*/}
                                </ul>
                            </div>
                        </nav>

                        {/* Routing to Other Components */}
                        <Route path={["/home", "/"]} exact component={Home}/>
                        <Route path="/promotions" exact component={Promotions}/>
                        <Route path="/profile" exact component={Profile}/>
                        <Route path="/search" exact component={SearchResult}/>
                        <Route path="/map" exact component={Map}/>
                        <Route path="/stories" exact component={Stories}/>
                        <Route path="/allston" exact component={Allston}/>




                    </div>
                </div>
        </BrowserRouter>
        )
    }

}


