import React from "react";
import "../style/style.profile.css"
import Button from "react-bootstrap/Button";

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

                                <Button variant="primary">Submit</Button>

                            </div>
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

                                <Button variant="primary">Submit</Button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
