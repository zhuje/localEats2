import React from "react";
import {HorizontalBar} from 'react-chartjs-2';
import {Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle} from 'react-shapes';
import "../style/style.profile.css"


export default class Profile extends React.Component{
    render(){
        return(
            <div>
                <div className="col-sm-12 col-md-9">
                    <h1> Profile </h1>
                    <Rectangle width={500} height={100} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
                    <div className={"dev_transbox"} >
                        <form>
                            <input type="checkbox" id="allston" name="allston" value="allston"/>
                            <label htmlFor="allston"> &nbsp; Allston </label> <br/>
                            <input type="checkbox" id="backbay" name="backbay" value="backbay"/>
                            <label htmlFor="backbay"> &nbsp; Back Bay </label> <br/>
                            <input type="checkbox" id="jamaica" name="jamaica" value="jamaica"/>
                            <label htmlFor="jamaica"> &nbsp; Jamaica Plain </label> <br/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
