import React from 'react';
//import React, {Component} from 'react'; //Alternative to line 1. Then no need to use 'React.' on line 5, just Component


class AccountEnquiry extends React.Component {
    render() {
        return (
            <div className="clAccountEnquiry">
                <div id="idAcctEnquiry">
                    {/* <span className="clButtons">*/}
                    <button id="idTotalBal" className="clBtn" onClick={this.props.totalBalance}>Total Balance</button>
                    <button id="idHighestBal" className="clBtn" onClick={this.props.highestBalance}>Highest Balance</button>
                    <button id="idLowestBal" className="clBtn" onClick={this.props.lowestBalance}>Lowest Balance</button>
                    {/* </span> */}
                    <p id="idEnquiryResult">{this.props.enquiryResponse}</p>
                    <p className="clRedFonts">Warning!!! Selected account will be deleted</p>
                    <input id="idDelAcct" placeholder="Select to Delete" value={this.props.deleteRetrieved} readOnly />
                    <button id="idDeleteAcct" className="clBtnRed" onClick={this.props.deleteSelectedAcct}>Delete Account</button>
                </div>
            </div>
        );
    }
}
export default AccountEnquiry