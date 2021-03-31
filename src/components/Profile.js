import React from "react";
import "../style/style.profile.css"
import Button from "react-bootstrap/Button";
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import Card from "react-bootstrap/Card";

export default class Profile extends React.Component {
    render() {
        return (
            <div className="col-sm-12 col-md-9">
                <div className="dev_background">
                    <div className="dev_transbox">
                        <h1 className="dev_title"> Set up your profile </h1>
                        <p> Use this window to select your preferences and save them to your
                            profile.
                            This helps us recommend eatery choices tailored to your interests!
                        </p>
                        <div className={"rowC"}>
                            <div className="col">
                                <h2 className="dev_title"> Preferred Neighborhoods: </h2>
                                <form>
                                    <input type="checkbox" id="allston" name="allston"
                                           value="allston"/>
                                    <label htmlFor="allston"> &nbsp; Allston </label> <br/>
                                    <input type="checkbox" id="backbay" name="backbay"
                                           value="backbay"/>
                                    <label htmlFor="backbay"> &nbsp; Back Bay </label> <br/>
                                    <input type="checkbox" id="jamaica" name="jamaica"
                                           value="jamaica"/>
                                    <label htmlFor="jamaica"> &nbsp; Jamaica Plain </label> <br/>
                                </form>

                                <h2 className="dev_title"> Preferred Price Range: </h2>
                                <form>
                                    <input type="checkbox" id="allston" name="allston"
                                           value="allston"/>
                                    <label htmlFor="allston"> &nbsp; $ </label> <br/>
                                    <input type="checkbox" id="backbay" name="backbay"
                                           value="backbay"/>
                                    <label htmlFor="backbay"> &nbsp; $$ </label> <br/>
                                    <input type="checkbox" id="jamaica" name="jamaica"
                                           value="jamaica"/>
                                    <label htmlFor="jamaica"> &nbsp; $$$ </label> <br/>
                                </form>
                            </div>
                            <div className="col">
                                <h2 className="dev_title"> Preferred Restaurants: </h2>
                                <form>
                                    <input type="checkbox" id="american" name="american"
                                           value="american"/>
                                    <label htmlFor="american"> &nbsp; American </label> <br/>
                                    <input type="checkbox" id="chinese" name="chinese"
                                           value="chinese"/>
                                    <label htmlFor="chinese"> &nbsp; Chinese </label> <br/>
                                    <input type="checkbox" id="indian" name="indian"
                                           value="indian"/>
                                    <label htmlFor="indian"> &nbsp; Indian </label> <br/>
                                    <input type="checkbox" id="italian" name="italian"
                                           value="italian"/>
                                    <label htmlFor="italian"> &nbsp; Italian </label> <br/>
                                    <input type="checkbox" id="mexican" name="mexican"
                                           value="mexican"/>
                                    <label htmlFor="italian"> &nbsp; Mexican </label> <br/>
                                    <input type="checkbox" id="cafe" name="cafe"
                                           value="cafe"/>
                                    <label htmlFor="cafe"> &nbsp; Café </label> <br/>
                                    <input type="checkbox" id="fastfood" name="fastfood"
                                           value="fastfood"/>
                                    <label htmlFor="fastfood"> &nbsp; Pub </label> <br/>
                                    <input type="checkbox" id="veg" name="veg"
                                           value="veg"/>
                                    <label htmlFor="veg"> &nbsp; Vegan / Vegetarian </label> <br/>
                                </form>

                            </div>
                        </div>
                        <div className="submit">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;
                            <Popup trigger={<Button variant="primary"> Submit </Button>}
                                   position="left center">
                                <div> This button will save the user's preferences in future
                                    implementations.
                                </div>
                            </Popup>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;
                            <Popup trigger={<Button variant="danger"> Reset </Button>}
                                   position="top">
                                <div> This button will reset the user's preferences back to the
                                    default
                                    settings, which would erase each of their selections.
                                </div>
                            </Popup>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;
                            <Popup trigger={<Button variant="info"> Saved Promotions </Button>}
                                   position="right center">
                                <div> This button will allow the user to check out each promotion
                                    they
                                    have saved to their profile from the promotions tab.
                                </div>
                            </Popup>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
