import React from 'react';

class CityGenerator extends React.Component {
    render() {
        return (
            <div className="clCityGen">
                <h1 id="h1">City and Community</h1>
                <div id="idCityGen">
                    <p>Create New City</p>
                    <span className="clSpan">
                        City Name <input id="idCityName" onChange={this.props.cityName} />
                        Latitude <input id="idLat" onChange={this.props.latitude} />
                        Longitude <input id="idLong" onChange={this.props.longitude} />
                        Population <input id="idPop" onChange={this.props.population} />
                        <label><input id="idCheckBox" type="checkbox" onChange={this.props.onChange} /> Save to Server</label>
                    </span>
                    <button id="createCity" className="clBtn" onClick={this.props.createCity}>Create City</button>
                </div>
            </div>
        );
    }
}
export default CityGenerator