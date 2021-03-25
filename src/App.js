import React from "react";
import './style/style.app.css';
import {BrowserRouter, Link } from "react-router-dom";
import Route from "react-router-dom/es/Route";
import Home from "./components/Home"
import Promotions from "./components/Promotions"
import Profile from "./components/Profile"
import SearchResult from "./components/SearchResult"


export default class App extends React.Component{

    render(){
        return(

            <BrowserRouter>
                <div>
                    {/* Nav Bar */}
                    <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
                        <a className="navbar-brand col-sm-0 col-md-3 mr-0" href="home">
                            <h1 className="dev_title">
                                LocalEats
                            </h1>
                        </a>
                        <input className="form-control form-control-dark w-100" type="text"
                               placeholder="Search for an eatery name or type" aria-label="Search"/>
                        <ul className="navbar-nav px-3">
                            <li className="nav-item text-nowrap ">
                                <a className="nav-link"   href="#">Submit</a>
                            </li>
                        </ul>
                    </nav>

                    {/* SideBar */}
                    <div className="row">
                        <nav className="col-md-3 d-none d-md-block bg-light sidebar">
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
                                            Find Promotions
                                        </a>
                                    </li>
                                    {/* Profile */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="profile">
                                            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                                            &nbsp;
                                            Adjust Profile
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


                                    {/* Search Result  */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="search">
                                            <i className="fa fa-sign-out" aria-hidden="true"></i>
                                            &nbsp;
                                            Search Result
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </nav>

                        {/* Routing to Other Components */}
                        <Route path={["/home", "/"]} exact component={Home}/>
                        <Route path="/promotions" exact component={Promotions}/>
                        <Route path="/profile" exact component={Profile}/>
                        <Route path="/search" exact component={SearchResult}/>


                        {/* Collapse NavBar w/Hamburger */}
                        {/*<nav className=" col-3 navbar navbar-expand-lg navbar-light bg-light">*/}
                        {/*    <a className="navbar-brand" href="#"></a>*/}
                        {/*    <button className="navbar-toggler" type="button"*/}
                        {/*            data-toggle="collapse" data-target="#navbarSupportedContent"*/}
                        {/*            aria-controls="navbarSupportedContent" aria-expanded="false"*/}
                        {/*            aria-label="Toggle navigation">*/}
                        {/*        <span className="navbar-toggler-icon"></span>*/}
                        {/*    </button>*/}

                        {/*    <div className="collapse navbar-collapse"*/}
                        {/*         id="navbarSupportedContent">*/}
                        {/*        <ul className="navbar-nav mr-auto">*/}
                        {/*            <li className="nav-item active">*/}
                        {/*                <a className="nav-link" href="#">Home <span*/}
                        {/*                    className="sr-only">(current)</span></a>*/}
                        {/*            </li>*/}
                        {/*            <li className="nav-item">*/}
                        {/*                <a className="nav-link" href="#">Link</a>*/}
                        {/*            </li>*/}
                        {/*            <li className="nav-item dropdown">*/}
                        {/*                <a className="nav-link dropdown-toggle" href="#"*/}
                        {/*                   id="navbarDropdown" role="button"*/}
                        {/*                   data-toggle="dropdown" aria-haspopup="true"*/}
                        {/*                   aria-expanded="false">*/}
                        {/*                    Dropdown*/}
                        {/*                </a>*/}
                        {/*                <div className="dropdown-menu"*/}
                        {/*                     aria-labelledby="navbarDropdown">*/}
                        {/*                    <a className="dropdown-item" href="#">Action</a>*/}
                        {/*                    <a className="dropdown-item" href="#">Another*/}
                        {/*                        action</a>*/}
                        {/*                    <div className="dropdown-divider"></div>*/}
                        {/*                    <a className="dropdown-item" href="#">Something else*/}
                        {/*                        here</a>*/}
                        {/*                </div>*/}
                        {/*            </li>*/}
                        {/*            <li className="nav-item">*/}
                        {/*                <a className="nav-link disabled" href="#">Disabled</a>*/}
                        {/*            </li>*/}
                        {/*        </ul>*/}
                        {/*        <form className="form-inline my-2 my-lg-0">*/}
                        {/*            <input className="form-control mr-sm-2" type="search"*/}
                        {/*                   placeholder="Search" aria-label="Search"/>*/}
                        {/*            <button className="btn btn-outline-success my-2 my-sm-0"*/}
                        {/*                    type="submit">Search*/}
                        {/*            </button>*/}
                        {/*        </form>*/}
                        {/*    </div>*/}
                        {/*</nav>*/}

                    </div>
                </div>
        </BrowserRouter>
        )
    }

}


