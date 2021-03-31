import React, {useState} from "react";
import "../style/style.profile.css"
// https://www.npmjs.com/package/reactjs-popup
// ^ click for documentation on Multiselect
import { Multiselect } from 'multiselect-react-dropdown';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default class Profile extends React.Component{

    state = {
        eatery_options: [{name: 'Asian', id: 1},{name: 'American', id: 2}, {name: 'Mexican', id: 3}],
        delivery_options: [{name: 'Delivery', id: 1},{name: 'Curbside Pickup', id: 2}, {name: 'Indoor Pickup', id: 3}],
    };


    render(){
        return(
            <div>
                <div className="col-sm-12 col-md-9">
                    <h1> Profile </h1>

                    <Popup trigger={<button className="btn btn-success"> Trigger</button>} position="right center">
                        <div> In future implementation this will trigger and onClick event to filter
                            the list of restaurants below with the given parameters!!</div>
                    </Popup>

                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <Multiselect
                                    options={this.state.eatery_options} // Options to display in the dropdown
                                    selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                    onSelect={this.onSelect} // Function will trigger on select event
                                    onRemove={this.onRemove} // Function will trigger on remove event
                                    displayValue="name" // Property name to display in the dropdown options
                                    placeholder={"Filter for Eatery Type"}
                                    showArrow={true}
                                    avoidHighlightFirstOption={true}
                                />
                            </div>
                            <div className="col-sm">
                                <Multiselect
                                    options={this.state.delivery_options} // Options to display in the dropdown
                                    selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                    onSelect={this.onSelect} // Function will trigger on select event
                                    onRemove={this.onRemove} // Function will trigger on remove event
                                    displayValue="name" // Property name to display in the dropdown options
                                    placeholder={"Filter for Eatery Type"}
                                    showArrow={true}
                                    avoidHighlightFirstOption={true}

                                />
                            </div>
                            {/*<div className="col-sm">*/}
                            {/*    <Multiselect*/}
                            {/*        options={this.state.delivery_options} // Options to display in the dropdown*/}
                            {/*        selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown*/}
                            {/*        onSelect={this.onSelect} // Function will trigger on select event*/}
                            {/*        onRemove={this.onRemove} // Function will trigger on remove event*/}
                            {/*        displayValue="name" // Property name to display in the dropdown options*/}
                            {/*        placeholder={"Filter for Eatery Type"}*/}
                            {/*        showArrow={true}*/}
                            {/*        avoidHighlightFirstOption={true}*/}
                            {/*    />*/}
                            {/*</div>*/}


                            </div>
                    </div>





                </div>
            </div>
        )
    }
}
