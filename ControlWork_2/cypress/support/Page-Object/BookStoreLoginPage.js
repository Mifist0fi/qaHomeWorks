const Base = require("./Base")

class BookStoreLoginPage extends Base {
    constructor(){
        super();
    }

      clickBookStoreApp() {
        cy.get('.category-cards > :nth-child(6)').click();
      }
  
      clickLoginMenu() {
        cy.get(':nth-child(6) > .element-list > .menu-list > #item-0').click();
      }
  
      clickNewUserButton() {
        cy.get('#newUser').click();
      }
  
      fillRegistrationForm(firstName, lastName, userName, password) {
        cy.get('#firstname').type(firstName);
        cy.get('#lastname').type(lastName);
        cy.get('#userName').type(userName);
        cy.get('#password').type(password);
      }
  
      clickRecaptcha() {
        cy.get('[style="width: 304px; height: 78px;"] > div > iframe')
          .its('0.contentDocument')
          .should(d => d.getElementById('recaptcha-token').click());
        cy.wait(3000); // Даем время на обработку reCAPTCHA
      }
  
      clickRegisterButton() {
        cy.get('#register').click();
      }
  
      getRegisterErrorText(textError) {
        return cy.get('.col-md-12').invoke('text').should('equal',textError);
      }
  
      getPasswordErrorText(textError) {
        return cy.get('#name').invoke('text').should('equal',textError);
      }
  
      login(username, password) {
          cy.get('#userName').type(username);
          cy.get('#password').type(password);
          cy.get('#login').click();
      }
  
      getUserNameValue(userName) {
          return cy.get('#userName-value').invoke('text').should('equal',userName);
      }
  
      clickLogoutButton() {
          cy.get('#books-wrapper > .text-right > #submit').click();
      }
}  
module.exports= new BookStoreLoginPage();
