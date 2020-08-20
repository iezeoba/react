class Account {
    constructor(key, name, acctType, balance) {
        this.key = key
        this.name = name;
        this.acctType = acctType;
        this.balance = balance;
    }

    updateAccount(name, acctType) {
        let index = 0;
        for (let i = 0; i < this.allAccounts.length; i++) {
            if (name === this.allAccounts[i].name) {
                index = i
            }
        } this.allAccounts[index][`${acctType}`] = 0
        console.log(this.allAccounts);
    }

    deposit(amt) {
        let amount = parseFloat(amt);
        if (!this._isPositive(amount)) {
            // console.log(`Deposit: ${this.name} new balance is ${this.balance}`);
            return "Amount entered is negative";
        } else return (this.balance += amount).toFixed(2);
    }

    withdraw(amt) {
        let amount = parseFloat(amt);
        if (this._isAllowed(amount)) {
            this.balance -= amount;
            // console.log(`Withdraw: ${this.name} new balance is ${this.balance}`);
            return (this.balance).toFixed(2);
        } else if (amount < 0) {
            return "Amount is negative"
        } else if (!this._isAllowed(amount)) {
            return "Insufficient balance";
        }
    }

    _isPositive(amount) {
        if (amount < 0) {
            return false;
        }
        return true;
    }

    _isAllowed(amount) {
        if (this._isPositive(amount) && this.balance - amount >= 0) {
            return true;
        } else return false;
    }
}

class AccountController {
    constructor() {
        this.bankaccounts = [];
        this.counter = 1;
    }

    nextKey() {
        const k = "k" + this.counter;
        this.counter = this.counter + 1;
        return k;
    }

    createAccount(name, acctType, balance) {
        const key = this.nextKey();
        const account = new Account(key, name, acctType, balance);
        this.bankaccounts.push(account)
        return key;
    }

    getAccount(key) {
        for (var i = 0; i < this.bankaccounts.length; i++) {
            if (key === this.bankaccounts[i].key) {
                return this.bankaccounts[i];
            }
        }
    }

    performDeposit(key, amt) {
        const SelectedAcct = this.getAccount(key);
        SelectedAcct.deposit(amt);
    }

    performWithdraw(key, amt) {
        const SelectedAcct = this.getAccount(key);
        SelectedAcct.withdraw(amt);
    }

    performDelete(account) {
        for (let i = 0; i < this.bankaccounts.length; i++) {
            if (account === this.bankaccounts[i].acctType) {
                this.bankaccounts.splice(i, 1);
            }
        }
    }

    // performDelete(account) {    //Use this method for multi-user situation //
    //     let account = this.getAccount(key);
    //     //console.log(account);
    //     let index = this.bankaccounts.indexOf(account)
    //     //console.log(index);
    //     this.bankaccounts.splice(index, 1);
    //     //console.log(this.bankaccounts);
    // }

    totalBalance() {
        //let total = this.bankaccounts.reduce(function (a, b) { return a + b.balance }, 0); //OR use
        let total = 0;
        for (var i = 0; i < this.bankaccounts.length; i++) {
            total += this.bankaccounts[i].balance;
        }
        return total;
    }

    getHighestBalance() {
        let max = 0; // assuming 'max' to be zero will fail if there are -ve balances
        for (var i = 0; i < this.bankaccounts.length; i++) {
            if (this.bankaccounts[i].balance > max) {
                max = this.bankaccounts[i].balance;
            }
        }
        return max;
    }

    getLowestBalance() {
        let min = this.bankaccounts[0].balance;
        for (var i = 1; i < this.bankaccounts.length; i++) {
            if (this.bankaccounts[i].balance < min) {
                min = this.bankaccounts[i].balance;
            }
        }
        return min;
    }

    accountNameExists(name) {
        for (let i = 0; i < this.bankaccounts.length; i++) {
            if (name === this.bankaccounts[i].name) {
                return true
            }
        } return false
    }

    accountTypeExists(type) {
        for (let i = 0; i < this.bankaccounts.length; i++) {
            if (type === this.bankaccounts[i].acctType) {
                return true
            }
        } return false
    }
};
export { Account, AccountController };

/*
class AccountController
write the tests
add an account and write test
implement the key
deposit with a key
withdraw with key
delete account with key
*/
