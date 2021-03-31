import React from "react";
import {Link} from "react-router-dom";


export default class Map extends React.Component{
    render(){
        return(
            <div>
                <div className="col-sm-12 col-md-9 dev_home_container">

                    <h1> Map </h1>
                    <h3> Click on each colored section to display the name of the neighborhood. </h3>
                    <iframe src="https://www.google.com/maps/d/embed?mid=1B6FcNTcpZBoYMaD_LEXDrq8SBq0&hl=en" width="700" height="700"></iframe>


                    <h2> Ready to Explore a Neighborhood? </h2>
                    {/* Find Neighborhood */}
                    <h1 className="dev_title"> Select a Neighborhood : </h1>
                    <h5 className="dev_title"> Find a New Restaurant or Revisit Old Favorites </h5>
                    <form>
                        <input type="checkbox" id="allston" name="allston" value="allston"/>
                        <label htmlFor="allston"> &nbsp; Allston </label> <br/>
                        <input type="checkbox" disabled={true} id="backbay" name="backbay" value="backbay"/>
                        <label htmlFor="backbay"> &nbsp; Back Bay </label> <br/>
                        <input type="checkbox" disabled={true} id="jamaica" name="jamaica" value="jamaica"/>
                        <label htmlFor="jamaica"> &nbsp; Jamaica Plain </label> <br/>
                    </form>

                    <Link to="/search" className="btn btn-primary"> Submit </Link>
                </div>
            </div>
        )
    }
}
