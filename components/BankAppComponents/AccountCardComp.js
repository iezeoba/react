import React from 'react';

class AccountCard extends React.Component {

    render() {
        const eachAccountCard = this.props.details.map((items, index) => //
            <AccountInfo key={index} value={items} retrieveAccount={this.props.retrieveAccount} />
        )
        return (
            <div className="clAcctCard">
                {eachAccountCard}
            </div>
        );
    }
}
export default AccountCard

function AccountInfo(props) { //This component returns the account info card
    return (
        <div id={props.value.acctType} className="clAcctInfoCard" onClick={props.retrieveAccount} >
            <p>Name: {props.value.name}</p>
            <p>Type: {props.value.acctType}</p>
            <p>Balance: {props.value.balance}</p>
        </div>
    )
};
