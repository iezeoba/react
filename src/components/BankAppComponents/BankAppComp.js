import React from 'react';
import AccountGenerator from "./AccountGeneratorComp.js"
import TransactBar from "./TransactBarComp.js"
import AccountCard from './AccountCardComp.js';
import AccountEnquiry from './AccountEnquiryComp.js';
import { AccountController } from '../../business/Account.js';
import './BankApp.css';

class BankApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            AllAccountsDetails: [],
            acctName: "",
            acctType: "",
            idTrxFrom: "",
            idTrxAmount: "",
            idDelAcct: "",
            idEnquiryResult: ""
        }
        this.myAcctController = new AccountController();
        //If not using arrow functions for the methods below, you should bind them to the constructor here as follows eg this.handleCreateAcct = this.handleCreateAcct.bind(this);
    }

    handleCreateAcct = () => {
        if (this.myAcctController.bankaccounts.length === 0) {
            //let key = this.myAcctController.createAccount(this.state.acctName, this.state.acctType, 0); //figure how to use this key in creating other accounts
            this.myAcctController.createAccount(this.state.acctName, this.state.acctType, 0);
            this.setState({
                AllAccountsDetails: this.myAcctController.bankaccounts, acctName: "", acctType: ""
            })
            console.log(this.myAcctController.bankaccounts);
            //console.log(key)
        }

        else {
            if (this.myAcctController.accountTypeExists(this.state.acctType)) {
                return

            }
            else if (this.myAcctController.accountTypeExists(this.state.acctType) === false) {
                this.myAcctController.createAccount(this.state.acctName, this.state.acctType, 0)
                this.setState({
                    AllAccountsDetails: this.myAcctController.bankaccounts
                })
                console.log(this.myAcctController.bankaccounts);
            }
        }
    }

    handleAcctNameChange = (e) => {
        this.setState({
            acctName: e.target.value
        })
    }

    handleAcctTypeChange = (e) => {
        this.setState({
            acctType: e.target.value
        })
    }

    handleTrxAmount = (e) => {
        this.setState({
            idTrxAmount: e.target.value
        })
    }

    handleRetrieveAccount = (e) => {
        this.setState({
            idTrxFrom: e.target.id
        })
        console.log(e.target.id);
    }

    handleRetrieveForDelete = (e) => { //This method was no longer used // handleRetrieveAccount sufficed //
        this.setState({
            idDelAcct: e.target.id
        })
    }

    handleDeposit = () => {
        for (var i = 0; i < this.myAcctController.bankaccounts.length; i++) {
            if (this.state.idTrxFrom === this.myAcctController.bankaccounts[i].acctType) {
                this.myAcctController.bankaccounts[i].deposit(this.state.idTrxAmount)
            }
            this.setState({
                AllAccountsDetails: this.myAcctController.bankaccounts, idTrxAmount: "", idTrxFrom: ""
            })
        }
    }

    handleWithdraw = () => {
        for (var i = 0; i < this.myAcctController.bankaccounts.length; i++) {
            if (this.state.idTrxFrom === this.myAcctController.bankaccounts[i].acctType) {
                this.myAcctController.bankaccounts[i].withdraw(this.state.idTrxAmount)
            }
            this.setState({
                AllAccountsDetails: this.myAcctController.bankaccounts, idTrxAmount: "", idTrxFrom: ""
            })
        }
    }

    handleTotalBalance = () => {
        let total = this.myAcctController.totalBalance()
        this.setState({
            idEnquiryResult: `Your total balance is: $${total}` // OR "Your total balance is: " + "$" + total //React prefers string literals
        })
    }

    handleHighestBalance = () => {
        let highest = this.myAcctController.getHighestBalance()
        this.setState({
            idEnquiryResult: `Your highest balance is: $${highest}` // OR "Your highest balance is: " + "$" + highest //React prefers string literals
        })
    }

    handleLowestBalance = () => {
        let lowest = this.myAcctController.getLowestBalance()
        this.setState({
            idEnquiryResult: `Your lowest balance is: $${lowest}` // OR "Your lowest balance is: " + "$" + lowest //React prefers string literals
        })
    }

    handleDeleteSelectedAcct = () => {
        for (let i = 0; i < this.myAcctController.bankaccounts.length; i++)
            if (this.state.idTrxFrom === this.myAcctController.bankaccounts[i].acctType) {
                if (this.myAcctController.bankaccounts[i].balance > 0) {
                    alert("Zerorise account before deletion")
                }
                else if (this.myAcctController.bankaccounts[i].balance === 0) {
                    this.myAcctController.performDelete(this.state.idTrxFrom)   //idTrxFrom and IdDelAcct receive the same value however idDelAcct has no value in state hence using idTrxFrom
                }
                this.setState({
                    AllAccountsDetails: this.myAcctController.bankaccounts
                })
            }
    }

    render() {
        return (
            <div className="clAcctContainer">
                <AccountGenerator createAcct={this.handleCreateAcct} acctNameChange={this.handleAcctNameChange} acctTypeChange={this.handleAcctTypeChange} acctNameValue={this.state.acctName} acctTypeValue={this.state.acctType} />
                <TransactBar trxFromSelected={this.state.idTrxFrom} TrxAmountInput={this.handleTrxAmount} handleDeposit={this.handleDeposit} handleWithdraw={this.handleWithdraw} trxAmount={this.state.idTrxAmount} />
                <AccountCard details={this.state.AllAccountsDetails} retrieveAccount={this.handleRetrieveAccount} retrieveForDelete={this.handleRetrieveForDelete} />
                <AccountEnquiry enquiryResponse={this.state.idEnquiryResult} totalBalance={this.handleTotalBalance} highestBalance={this.handleHighestBalance} lowestBalance={this.handleLowestBalance} deleteRetrieved={this.state.idTrxFrom} deleteSelectedAcct={this.handleDeleteSelectedAcct} />
            </div>
        );
    }
}
export default BankApp