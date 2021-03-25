import React from "react";
import Button from "react-bootstrap/Button";
import '../style/style.app.css';
import '../style/style.home.css'

export default class Home extends React.Component {
    render(){
        return (
                <div className="col-sm-12 col-md-9">
                    <div className="dev_background">
                        <div className="dev_transbox">
                            <h1 className="dev_title"> Welcome to Local Eats </h1>
                            <p> We're dedicated to helping you find local eateries
                                within your Boston neighborhood. The economic fallout
                                of COVID has caused many small, locally owned restaurants
                                to close. As a result we are creating a website to
                                assist patrons in identifying and supporting their local
                                economies by eating local!

                            </p>

                            <h1 className="dev_title"> Select a Neighborhood : </h1>
                            <form>
                                <input type="checkbox" id="allston" name="allston" value="allston"/>
                                <label htmlFor="allston"> &nbsp; Allston </label> <br/>
                                <input type="checkbox" id="backbay" name="backbay" value="backbay"/>
                                <label htmlFor="backbay"> &nbsp; Back Bay </label> <br/>
                                <input type="checkbox" id="jamaica" name="jamaica" value="jamaica"/>
                                <label htmlFor="jamaica"> &nbsp; Jamaica Plain </label> <br/>
                            </form>

                            <Button variant="primary">Submit</Button>

                        </div>
                    </div>
                </div>

        )

    }
}
