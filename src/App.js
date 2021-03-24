import React from "react";
import './style/style.app.css';
import Button from 'react-bootstrap/Button';
import './style/style.home.css'
import {BrowserRouter, Link } from "react-router-dom";
import Route from "react-router-dom/es/Route";
import Home from "./components/Home"


export default class App extends React.Component{
    render(){
        return(

            <BrowserRouter>
                <div>
                    {/* Nav Bar */}
                    <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
                        <a className="navbar-brand col-sm-3 col-md-3 mr-0" href="#">
                            <h1 className="dev_title"> LocalEats</h1>
                        </a>
                        <input className="form-control form-control-dark w-100" type="text"
                               placeholder="Search for an eatery name or type" aria-label="Search"/>
                        <ul className="navbar-nav px-3">
                            <li className="nav-item text-nowrap">
                                <a className="nav-link" href="#">Submit</a>
                            </li>
                        </ul>
                    </nav>

                    {/* SideBar */}
                    <div className="row">
                        <nav className="col-md-3 d-non d-md-block bg-light sidebar">
                            <div className="sidebar-sticky">
                                <ul className="nav flex-column">
                                    {/* Home */}
                                    <li className="nav-item active">
                                        <a className="nav-link" href="home">
                                            <i className="fa fa-home" aria-hidden="true"></i>
                                            &nbsp;
                                            Navigate Home
                                        </a>
                                    </li>
                                    {/* Promotions */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="promotions">
                                            <i className="feather fa fa-money " aria-hidden="true"></i>
                                            &nbsp;
                                            Promotions
                                        </a>
                                    </li>
                                    {/* Profile */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="profile">
                                            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                                            &nbsp;
                                            Profile
                                        </a>
                                    </li>
                                    {/* Logout */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <i className="fa fa-sign-out" aria-hidden="true"></i>
                                            &nbsp;
                                            Log out
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </nav>

                        {/* Home */}

                        <Route path="/home" exact component={Home}/>
                        {/*<Route path="/promotions" exact component={Promotion}/>*/}
                        {/*<Route path="/profile" exact component={Profile}/>*/}

                        {/*<div className="col-md-9 dev_home_container" >*/}
                        {/*    <div className="dev_background">*/}
                        {/*        <div className="dev_transbox">*/}


                        {/*            <h1> Welcome to Local Eats </h1>*/}
                        {/*            <p> We're dedicated to helping you find local eateries*/}
                        {/*                within your Boston neighborhood. The economic fallout*/}
                        {/*                of COVID has caused many small locally owned restaurants*/}
                        {/*                to close. As a result we are creating a website to*/}
                        {/*                assist patrons in identifying and supporting their local*/}
                        {/*                economies by eating local!*/}
                        {/*            </p>*/}

                        {/*            <h1> Select a Neighborhood : </h1>*/}
                        {/*            <form>*/}
                        {/*                <input type="checkbox" id="allston" name="allston" value="allston"/>*/}
                        {/*                    <label htmlFor="allston"> &nbsp; Allston </label> <br/>*/}
                        {/*                <input type="checkbox" id="backbay" name="backbay" value="backbay"/>*/}
                        {/*                    <label htmlFor="backbay"> &nbsp; BackBay </label> <br/>*/}
                        {/*                <input type="checkbox" id="charlestown" name="charlestown" value="charlestown"/>*/}
                        {/*                    <label htmlFor="charlestown"> &nbsp; Charlestown </label> <br/>*/}
                        {/*            </form>*/}

                        {/*            <Button variant="primary">Submit</Button>*/}

                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
        </BrowserRouter>
        )
    }

}


