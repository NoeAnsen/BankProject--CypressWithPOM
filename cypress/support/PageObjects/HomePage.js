

class HomePage {
    getCustomerLoginButton() {
        return cy.get('[ng-click="customer()"]');
    }

    getBankManagerLoginButton() {
        return cy.get('[ng-click="manager()"]');
    }

    getHomeButton() {
        return cy.get('[ng-click="home()"]');
    }
    

    }
    export default HomePage