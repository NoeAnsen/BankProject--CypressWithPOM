/// <reference types="cypress" />
import HomePage from '../support/PageObjects/HomePage';
import AccountPage from '../support/PageObjects/AccountPage';
import TransactionsPage from '../support/PageObjects/TransactionsPage';
import ManagerPage from '../support/PageObjects/ManagerPage';
//const cypress = require("cypress")

describe('Banking project', () => {
  beforeEach(() => {
 
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/')
  })

  it('Balance behavior, when there is a deposit', () => {
    const homePage=new HomePage();
    const accountPage=new AccountPage();
    const transactionsPage=new TransactionsPage();

    //Login with Hermoine and Reset transactions
    homePage.getCustomerLoginButton().click();
    cy.login('Hermoine Granger');
    accountPage.getTransactionsButton().click();
    transactionsPage.getResetButton(). click();
    transactionsPage.getBackButton(). click();
    accountPage.getBalanceLabel().should('contain', '0');
    //Deposit 100
    accountPage.getDepositButton().click();
    accountPage.getDepositAmountInput().type('100');
    accountPage.getDepositSubmitButton().click();

    //Balance is 100
    accountPage.getBalanceLabel().should('contain', '100');
      })

  it('Balance behavior, when there is a withdraw', () => {
      const homePage=new HomePage();
      const accountPage=new AccountPage();
      const transactionsPage=new TransactionsPage();
  
      //Login with Hermoine and Reset transactions
      homePage.getCustomerLoginButton().click();
      cy.login('Hermoine Granger');
      accountPage.getBalanceLabel().should('contain', '5096');
      //Withdraw 20
      accountPage.getWithdrawlButton().click();
      accountPage.getWithdrawlAmountInput().type('20');
      accountPage.getWithdrawlSubmitButton().click();
      //Balance should be 5076
      accountPage.getBalanceLabel().should('contain', '5076');
  
      })

  it('Add customer and then find it', () => {
      const homePage=new HomePage();
      const managerPage=new ManagerPage();

      //Const with date, so the name user doesn't repeat between users
      const setCustomer = Date.now().toString();

      //Create a customer
      homePage.getBankManagerLoginButton().click();
      managerPage.getAddCustomerButton().click()
      managerPage.getFirstNameInput().type(setCustomer);
      managerPage.getLastNameInput().type(setCustomer);
      managerPage.getPostalCodeInput().type(setCustomer);
      managerPage.getCustomerSubmitButton().click();

      //find customer created
      managerPage.getCustomersButton().click();
      managerPage.getFirstNameInGrid().should('contain', setCustomer);
      managerPage.getLastNameInGrid().should('contain', setCustomer);
      managerPage.getPostalCodeInGrid().should('contain', setCustomer);
      })

  it('Delete a customer', () => {
        const homePage=new HomePage();
        const managerPage=new ManagerPage();
  
        //find a customer and delete it
        homePage.getBankManagerLoginButton().click();
        managerPage.getCustomersButton().click();
        managerPage.getFirstNameInGrid().contains('Neville')
        .next().next().next().next().find('button').click();
        //Check the Customer was deleted
        managerPage.getFirstNameInGrid().should('not.contain', 'Neville');

        })

  it('Add customer and open the Account', () => {
          const homePage=new HomePage();
          const managerPage=new ManagerPage();
          const accountPage=new AccountPage();
    
          //Create a customer
          homePage.getBankManagerLoginButton().click();
          managerPage.getAddCustomerButton().click();
          managerPage.getFirstNameInput().type('New');
          managerPage.getLastNameInput().type('Customer');
          managerPage.getPostalCodeInput().type('1234');
          managerPage.getCustomerSubmitButton().click();

          //Login with the user, without creating an account
          homePage.getHomeButton().click();
          homePage.getCustomerLoginButton().click();
          cy.login('New Customer');
          accountPage.getErrorMessageNoAccount().should('contain', 'Please open an account with us.');

          //Create the account for the Customer
          homePage.getHomeButton().click();
          homePage.getBankManagerLoginButton().click();
          managerPage.getOpenAccountButton().click();
          managerPage.getCustomerOpenAccountSelect().select('New Customer');
          managerPage.getCurrencyOpenAccountSelect().select('Dollar');
          managerPage.getSubmitOpenAccountButton().click();

          //Login again, but now with the Account created
          homePage.getHomeButton().click();
          homePage.getCustomerLoginButton().click();
          cy.login('New Customer');

          //Validate that Customers options appear
          accountPage.getTransactionsButton();
          accountPage.getDepositButton();
          accountPage.getWithdrawlButton();
          accountPage.getBalanceLabel().should('contain', '0');
          accountPage.getCurrencyLabel().should('contain', 'Dollar');
          })























})
