import React from "react";
import "../style/style.profile.css"
import 'reactjs-popup/dist/index.css'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-center">
                    Preferences saved!
                </Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function Helper() {
    const [modalShow, setModalShow] = React.useState(false);

    function helpMe2() {
        setModalShow(true);
    }

    return (
        <>
            <button type="button"
                    className="btn btn-primary" style={{width:'100%', height: '200%'}} onClick={helpMe2}>Save</button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default class Profile extends React.Component {
    render() {
        return (
            <div className="col-sm-12 col-md-9">
                <div className="dev_background">
                    <div className="dev_transbox">
                        <h1 className="dev_title"> Establish your preferences </h1>
                        <p> Use this window to select your preferences.
                            This helps us recommend eateries tailored to your interests!
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
                        <Helper/>
                    </div>
                </div>
            </div>
        )
    }
}
