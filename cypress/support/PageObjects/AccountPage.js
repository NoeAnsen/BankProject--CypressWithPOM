

class AccountPage {
    getBalanceLabel() {
        return cy.contains('Balance').find('.ng-binding:nth-of-type(2)');
    }

    getCurrencyLabel() {
        return cy.contains('Currency').find('.ng-binding:nth-of-type(3)');
    }

    //3 tabs
    getTransactionsButton() {
        return cy.get('[ng-click="transactions()"]');
    }
    getDepositButton() {
        return cy.get('[ng-click="deposit()"]');
    }
    getWithdrawlButton() {
        return cy.get('[ng-click="withdrawl()"]');
    }

    //Deposit
    getDepositAmountInput() {
        return cy.get('[ng-model="amount"]');
    }
    getDepositSubmitButton() {
        return cy.get('[type="submit"]');
    }

    //Withdrawl
    getWithdrawlAmountInput() {
        return cy.contains('Amount to be Withdrawn').next();
    }
    getWithdrawlSubmitButton() {
        return cy.get('[type="submit"]');
    }

    //No account
    getErrorMessageNoAccount() {
        return cy.get('[ng-show="noAccount"]');
    }

    }
    export default AccountPage