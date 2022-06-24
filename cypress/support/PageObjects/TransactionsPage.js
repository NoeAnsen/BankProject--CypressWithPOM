

class TransactionsPage {
    getResetButton() {
        return cy.get('[ng-click="reset()"]');
    }

    getBackButton() {
        return cy.get('[ng-click="back()"]');
    }


    

    }
    export default TransactionsPage