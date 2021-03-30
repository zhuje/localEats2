import React from "react";
import "../style/style.promotions.css"


export default class Map extends React.Component{
    render(){
        return(
            <div>
                <div className="col-sm-12 col-md-9">
                    <h1> Map </h1>

                    <iframe src="https://www.google.com/maps/d/embed?mid=1B6FcNTcpZBoYMaD_LEXDrq8SBq0&hl=en" width="640" height="480"></iframe>

                </div>
            </div>
        )
    }
}
