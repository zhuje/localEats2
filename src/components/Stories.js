import React from "react";
import "../style/style.stories.css"


const small = 'https://accelerated.atoms.crystallize.digital/snowball/images/PalmaSpeedJusterteBilder-15/_resized_300.jpg';
const medium = 'https://accelerated.atoms.crystallize.digital/snowball/images/PalmaSpeedJusterteBilder-15/_resized_768.jpg';
const large = 'https://accelerated.atoms.crystallize.digital/snowball/images/PalmaSpeedJusterteBilder-15/_resized_1280.jpg';
const xlarge = 'https://accelerated.atoms.crystallize.digital/snowball/images/PalmaSpeedJusterteBilder-15/_resized_3200.jpg';


export default class Stories extends React.Component{
    state = { currentSrc: '' };

    onLoad = (event) => {
        this.setState({
                          currentSrc: event.target.currentSrc
                      });
    }



    render(){
        return(
            <div>
                <div className="col-sm-12 col-md-9">
                    <h1> Stories </h1>

                    <div>
                        <img src={small} srcSet={`${small} 300w, ${medium} 768w, ${large} 1280w, ${xlarge} 3200w`} onLoad={this.onLoad} />
                        <div >Current image: <br/>{this.state.currentSrc}</div>
                    </div>

                </div>
            </div>
        )
    }
}
