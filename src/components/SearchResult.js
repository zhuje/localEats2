import React from "react";
import "../style/style.searchresult.css"

export default class SearchResult extends React.Component{
    render(){
        return(
            <div className="col-sm-12 col-md-9 dev_home_container" >

                <h1> Neighborhood Selected: Allston </h1>
                <h3> Apply Filters </h3>

                <div className="row">

                    {/* Filter by Eatery */}
                    <div className="dropdown dev_button_spacing">
                        <button className="btn btn-secondary dropdown-toggle" type="button"
                                id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                            Dropdown button
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>

                    {/* Filter by Type */}
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button"
                                id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                            Dropdown button
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </div>

                    <div className="dev_placeholder">
                        <h3> Map PlaceHolder</h3>
                    </div>



            </div>

        )
    }
}
