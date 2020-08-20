import React from 'react';
import logo from '../logo.svg';
import lego from '../svg/lego.svg';
import menu from '../svg/menu.svg';
import maps from '../svg/maps.svg';
import network from '../svg/network.svg';
import layers from '../svg/layers.svg';
import gears from '../svg/gears.svg';

class Navbar extends React.Component {
    render() {
        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="clImages"><img src={logo} className="My-logo" id="id-reactlogo" alt="react-logo" onClick={this.props.onClick} /></div>
                <div className="clImages"><img src={lego} className="My-logo" id="id-lego" alt="lego-logo" onClick={this.props.onClick} /></div>
                <div className="clImages"><img src={menu} className="My-logo-rev" id="id-menu" alt="menu-logo" onClick={this.props.onClick} /></div>
                <div className="clImages"><img src={maps} className="My-logo" id="id-maps" alt="maps-logo" onClick={this.props.onClick} /></div>
                <div className="clImages"><img src={network} className="My-logo" id="id-network" alt="network-logo" onClick={this.props.onClick} /></div>
                <div className="clImages"><img src={layers} className="My-logo" id="id-layers" alt="layers-logo" onClick={this.props.onClick} /></div>
                <div className="clImages"><img src={gears} className="My-logo" id="id-gears" alt="gears-logo" onClick={this.props.onClick} /></div>
            </div>
        );
    }
}
export default Navbar