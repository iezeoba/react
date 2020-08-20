import React from 'react';
//import React, {Component} from 'react'; //Alternative to line 1. Then no need to use 'React.' on line 5, just Component


class CityEnquiry extends React.Component {

    render() {
        return (
            <div className="clCityEnquiry">
                <div id="idCityEnquiry">
                    <input id="idInputShow" placeholder="Choose City to View Details" value={this.props.selectedCity} readOnly /><br />
                    {/* <button id="idShow" className="clBtn" onClick={this.props.movements}>Show City</button> */} {/*useless functionality as info is already in infocard*/}
                    <button id="idMovedIn" className="clBtn" onClick={this.props.movements}>Moved In</button>
                    <input id="idMoveInMovedOut" type="number" value={this.props.movedInMovedOut} onChange={this.props.migration} />
                    <button id="idMovedOut" className="clBtn" onClick={this.props.movements}>Moved Out</button>
                    <button id="idHowBig" className="clBtn" onClick={this.props.movements}>How Big</button>
                    <button id="idWhichSphere" className="clBtn" onClick={this.props.movements} >Which Sphere</button>
                    {/* <button id="idGetPopulation" className="clBtn" onClick={this.handleEnquiryResponse}>Get Population</button><br /> */} {/*useless functionality as info is already in infocard*/}
                    <button id="idMostNorthern" className="clBtn" onClick={this.props.movements}>Most Northern</button>
                    <button id="idMostSouthern" className="clBtn" onClick={this.props.movements}>Most Southern</button>
                    <p id="idEnquiryResult">{this.props.enquiryResponse}</p>

                </div>
            </div >
        );
    }
}
export default CityEnquiry