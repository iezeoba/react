import React from 'react';

class CitySearch extends React.Component {
    render() {
        return (
            <div className="clCitySearch">
                <div id="idCitySearch">
                    <span className="clSpan">
                        <p className="clRedFonts">Warning!!! Selected city will be deleted</p>
                        <input id="idSelectCity" placeholder="Select City to Delete" value={this.props.selectToDelete} readOnly />
                    </span>
                    <button id="idDelete" className="clBtn" onClick={this.props.delete}>Delete</button>
                </div>
            </div>
        );
    }
}
export default CitySearch