import { Account, AccountController } from "./Account.js";

// --- Tests for Account class methods --- //
test("Testing _isPositive", () => {
    const myAccount = new Account("k1", "David Chan", "savings", 200);
    expect(myAccount._isPositive(5)).toBe(true);
    expect(myAccount._isPositive(-5)).toBe(false);
});

test("Testing deposit", () => {
    const myAccount = new Account("k1", "David Chan", "savings", 200);
    expect(myAccount.deposit(50)).toBe(Number(250).toFixed(2));
    expect(myAccount.deposit(-50)).toBe("Amount entered is negative");
    expect(myAccount.deposit(500)).toBe(Number(750).toFixed(2));
});

test("Testing _isAllowed", () => {
    const myAccount = new Account("k1", "David Chan", "savings", 200);
    expect(myAccount._isAllowed(50)).toBe(true);
    expect(myAccount._isAllowed(1550)).toBe(false);
});

test("Testing withdraw", () => {
    const myAccount = new Account("k1", "David Chan", "savings", 200);
    expect(myAccount.withdraw(50)).toBe(Number(150).toFixed(2));
    expect(myAccount.withdraw(-50)).toBe("Amount is negative");
    expect(myAccount.withdraw(1250)).toBe("Insufficient balance");
});

// --- Tests for AccountController class methods --- //
test("Testing key", () => {
    const myAcctController = new AccountController()
    let key = myAcctController.nextKey();
    expect(key).toBe("k1");
    key = myAcctController.nextKey();
    expect(key).toBe("k2");
    key = myAcctController.nextKey();
    expect(key).toBe("k3");
});

test("Testing createAccount", () => {
    const myAcctController = new AccountController(); //Instantiating an AccountController
    // --- Testing account creation and key assignment --- //
    expect(myAcctController.bankaccounts.length).toBe(0);
    let key = myAcctController.createAccount("David Chan", "Savings", 200);
    expect(key).toBe("k1");
    expect(myAcctController.bankaccounts.length).toBe(1);
    key = myAcctController.createAccount("David Chan", "Checking", 800);
    expect(key).toBe("k2");
    expect(myAcctController.bankaccounts.length).toBe(2);
    key = myAcctController.createAccount("David Chan", "RESP", 1200);
    expect(key).toBe("k3");
    expect(myAcctController.bankaccounts.length).toBe(3);

    // --- Testing account retrieval using key --- //
    let account = myAcctController.getAccount("k1");
    expect(account.name).toBe("David Chan");
    expect(account.acctType).toBe("Savings");
    expect(account.key).toBe("k1");

    account = myAcctController.getAccount("k3");
    expect(account.name).toBe("David Chan");
    expect(account.acctType).toBe("RESP");
    expect(account.key).toBe("k3");

    // --- Testing the deposit method using key to retrieve account --- //
    myAcctController.performDeposit("k1", 1);
    account = myAcctController.getAccount("k1");
    console.log(account);
    expect(account.balance).toBe(201);

    myAcctController.performDeposit("k1", 5);
    account = myAcctController.getAccount("k1");
    console.log(account);
    expect(account.balance).toBe(206);

    // --- Testing the withdraw method using key to retrieve account --- //
    myAcctController.performWithdraw("k2", 2);
    account = myAcctController.getAccount("k2");
    console.log(account);
    expect(account.balance).toBe(798);

    myAcctController.performWithdraw("k2", 8);
    account = myAcctController.getAccount("k2");
    console.log(account);
    expect(account.balance).toBe(790);

    // --- Testing the delete method using key to retrieve account --- //
    myAcctController.performDelete("k1");
    expect(myAcctController.bankaccounts.length).toBe(2);

    myAcctController.performDelete("k2");
    expect(myAcctController.bankaccounts.length).toBe(1);
    console.log(myAcctController.bankaccounts);
});

// --- Testing the delete method as a new instance --- //
test("Testing deleteAccount", () => {
    const myAcctController = new AccountController();

    myAcctController.createAccount("David Chan", "Checking", 200);
    myAcctController.createAccount("Arnold Smith", "Credit Card", 400);
    myAcctController.createAccount("Michael Keys", "Savings", 600);
    expect(myAcctController.bankaccounts.length).toBe(3);

    myAcctController.performDelete("k2");
    expect(myAcctController.bankaccounts.length).toBe(2);

    let account = myAcctController.getAccount("k2");
    expect(account).toBeFalsy();
    //expect(account).toBe(undefined);

    myAcctController.performDelete("k1");
    expect(myAcctController.bankaccounts.length).toBe(1);
});

// --- Testing total balance on all accounts --- //
test("Testing totalBalance", () => {
    const myAcctController = new AccountController();

    myAcctController.createAccount("David Chan", "Checking", 200);
    myAcctController.createAccount("Avid Cha", "Credit Card", 500);

    let netWorth = myAcctController.totalBalance();
    expect(netWorth).toBe(700);

    myAcctController.createAccount("Vid Ch", "Savings", 600);
    netWorth = myAcctController.totalBalance();
    console.log(myAcctController.bankaccounts);
    expect(netWorth).toBe(1300);

    // --- Testing for highest balance on all accounts --- //
    let highestBalance = myAcctController.getHighestBalance();
    expect(highestBalance).toBe(600);

    myAcctController.createAccount("Curt Ford", "Credit Card", 100);
    myAcctController.createAccount("Celine Maple", "Checking", 700);
    highestBalance = myAcctController.getHighestBalance();
    expect(highestBalance).toBe(700);

    // --- Testing for lowest balance on all accounts --- //
    let lowestBalance = myAcctController.getLowestBalance();
    expect(lowestBalance).toBe(100);

    myAcctController.createAccount("Liz Bennet", "Checking", 50);
    myAcctController.createAccount("Jenn Larson", "Credit Card", 700);
    lowestBalance = myAcctController.getLowestBalance();
    expect(lowestBalance).toBe(50);
});