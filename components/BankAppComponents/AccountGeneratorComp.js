import React from 'react';

class AccountGenerator extends React.Component {
    render() {
        return (
            <div className="clAcctGen">
                <h1 id="h1">Welcome!</h1>
                <div id="idAcctGen">
                    <p>Get New Account</p>
                    <span className="clSpan">
                        Enter Account Name <input id="acctName" onChange={this.props.acctNameChange} value={this.props.acctNameValue} />
                        Enter Account Type <input id="acctType" onChange={this.props.acctTypeChange} value={this.props.acctTypeValue} />
                    </span>
                    <button id="createAcct" className="clBtn" onClick={this.props.createAcct}>Create Account</button>
                </div>
            </div>
        );
    }
}
export default AccountGenerator