import React from 'react';

class CityMap extends React.Component {
    render() {
        let source = `https://maps.google.com/maps?q=${this.props.selectedCity}&t=&z=13&ie=UTF8&iwloc=&output=embed`
        return (
            <div className="clCityMap">
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe title={this.props.selectedCity} src={source} id="map" width="300" height="250" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                        </iframe>
                    </div>
                </div >
            </div>
        );
    }
}
export default CityMap