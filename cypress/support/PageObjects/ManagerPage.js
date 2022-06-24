

class ManagerPage {
    //Manager Home
    getAddCustomerButton() {
        return cy.get('[ng-click="addCust()"]');
    }

    getOpenAccountButton() {
        return cy.get('[ng-click="openAccount()"]');
    }

    getCustomersButton() {
        return cy.get('[ng-click="showCust()"]');
    }

    // Add Customer
    getFirstNameInput() {
        return cy.get('[ng-model="fName"]');
    }

    getLastNameInput() {
        return cy.get('[ng-model="lName"]');
    }

    getPostalCodeInput() {
        return cy.get('[ng-model="postCd"]');
    }

    getCustomerSubmitButton() {
        return cy.get('[type="submit"]');
    }

    //Customers grid
    getFirstNameInGrid() {
        return cy.get('td:first-of-type');
    }

    getLastNameInGrid() {
        return cy.get('td:nth-of-type(2)');
    }
    getPostalCodeInGrid() {
        return cy.get('td:nth-of-type(3)');
    }
    //Open Account
    getCustomerOpenAccountSelect() {
        return cy.get('#userSelect');
    }

    getCurrencyOpenAccountSelect() {
        return cy.get('#currency');
    }

    getSubmitOpenAccountButton() {
        return cy.get('[type="submit"]');
    }
    




    

    }
    export default ManagerPage