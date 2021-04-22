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
import Login from "./components/Login"
import Signup from "./components/Signup";
import BackBay from "./components/BackBay"
import JP from "./components/JP"
import Error from "./components/Error";


import Popup from "reactjs-popup";
import {Form, FormControl, Nav, Navbar, Button} from "react-bootstrap";

export default class App extends React.Component {

    render() {
        return (
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
                                        Home
                                    </Nav.Link>
                                    <Nav.Link className="dev_hamburger_nav-link" href="#link">
                                        <i className="feather fa fa-money " aria-hidden="true"></i>
                                        &nbsp;
                                        Promotions
                                    </Nav.Link>
                                    <Nav.Link className="dev_hamburger_nav-link" href="#link">
                                        <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                                        &nbsp;
                                        Preferences
                                    </Nav.Link>
                                </Nav>
                                <Form className="dev_hamburger_nav-link" inline>
                                    <FormControl  type="text" placeholder="Search"  />
                                    <Button variant="primary">Search</Button>
                                </Form>

                            </div>
                        </Navbar.Collapse>
                        {/* Search Bar */}
                        <input name="searchTxt" className="form-control form-control-dark w-100 d-none d-md-block " type="text"
                               placeholder="Search for a Neighborhood (Allston) " aria-label="Search"/>
                        <ul className="navbar-nav px-3 d-none d-md-block">
                            <li className="nav-item text-nowrap ">
                                <Link to="/error" className="btn btn-primary"> Search </Link>
                            </li>
                        </ul>

                    </Navbar>


                    {/* SIDEBAR */}
                    <div className="row">
                        <nav className="col-md-3 d-none d-md-block sidebar">
                            <div class="position-fixed" style={{width: '25%', color:'000000'}}>
                                <ul className="nav flex-column">
                                    {/* Home */}
                                    <li className="nav-item active">
                                        <a className="nav-link" href="home">
                                            <button className="btn btn-outline-primary btn-sm btn-block"
                                                    style={{height: '75px'}}>
                                                <i className="fa fa-home " aria-hidden="true"></i>
                                                <h4>Home</h4>
                                            </button>
                                        </a>
                                    </li>
                                    {/* Promotions */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="promotions">
                                            <button className="btn btn-outline-primary btn-sm btn-block"
                                                    style={{height: '75px'}}>
                                                <i className="feather fa fa-money "
                                                   aria-hidden="true"></i>
                                                <h4>Promotions</h4>
                                            </button>
                                        </a>
                                    </li>
                                    {/* Profile */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="profile">
                                            <button className="btn btn-outline-primary btn-sm btn-block"
                                                    style={{height: '75px'}}>
                                                <i className="fa fa-user-circle-o"
                                                   aria-hidden="true"></i>
                                                <h4>Preferences</h4>
                                            </button>
                                        </a>
                                    </li>
                                    {/* Logout */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="login">
                                            <button className="btn btn-outline-primary btn-sm btn-block"
                                                    style={{height: '75px'}}>
                                                <i className="fa fa-sign-in"
                                                   aria-hidden="true"></i>
                                                <h4>Log In</h4>
                                            </button>
                                        </a>
                                    </li>


                                    {/* Search Result  */}
                                    {/*<a className="nav-link" href="profile" style={{height:'50'}}>*/}
                                    {/*        <i className="fa fa-user-circle-o" aria-hidden="true"></i>*/}
                                    {/*        &nbsp;*/}
                                    {/*        Edit Preferences*/}
                                    {/*    </a>*/}
                                    {/*</li>*/}
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
                        <Route exact path="/login"><Login /></Route>
                        <Route exact path="/signup"><Signup /></Route>
                        <Route path="/backbay" exact component={BackBay}/>
                        <Route path="/jp" exact component={JP}/>
                        <Route path="/error" exact component={Error}/>

                    </div>
                </div>
            </BrowserRouter>
        )
    }

}


