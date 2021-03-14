import React from "react";
import './style/style.app.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "react-bootstrap/Image";
import Button from 'react-bootstrap/Button';
import './style/style.home.css'

export default class App extends React.Component{
    render(){
        return(
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
                                    <a className="nav-link" href="#">
                                        <i className="fa fa-home" aria-hidden="true"></i>
                                        &nbsp; Home
                                    </a>
                                </li>
                                {/* Promotions */}
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i className="feather fa fa-money " aria-hidden="true"></i>
                                        &nbsp; Promotions
                                    </a>
                                </li>
                                {/* Profile */}
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                                        &nbsp; Profile
                                    </a>
                                </li>
                                {/* Logout */}
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i className="fa fa-sign-out" aria-hidden="true"></i>
                                        &nbsp; Log out
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </nav>

                    <div className="col-md-9 dev_home_container" >
                        <div className="dev_background">
                            <div className="dev_transbox">

                                <h1> Select a Neighborhood : </h1>
                                <form>
                                    <input type="checkbox" id="allston" name="allston" value="allston"/>
                                        <label htmlFor="allston"> &nbsp; Allston </label> <br/>
                                    <input type="checkbox" id="backbay" name="backbay" value="backbay"/>
                                        <label htmlFor="backbay"> &nbsp; BackBay </label> <br/>
                                    <input type="checkbox" id="charlestown" name="charlestown" value="charlestown"/>
                                        <label htmlFor="charlestown"> &nbsp; Charlestown </label> <br/>
                                </form>

                                <Button variant="primary">Submit</Button>

                            </div>
                        </div>
                    </div>


                </div>

            </div>





        )
    }

}


