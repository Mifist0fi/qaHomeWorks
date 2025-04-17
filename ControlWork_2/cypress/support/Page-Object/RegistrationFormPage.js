const Base = require("./Base")

class RegistrationFormPage extends Base {

    constructor(){
        super();
    }
    visit() {
        cy.get('.category-cards > :nth-child(2)').click();
        cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click();
    }

    fillForm(firstName, lastName, email, mobileNumber, address) {
        cy.get('#firstName').type(firstName);
        cy.get('#lastName').type(lastName);
        cy.get('#userEmail').type(email);
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click();
        cy.get('#userNumber').type(mobileNumber);
        cy.get('#userNumber').type(address);
    }
    selectDateOfBirth(year, month) {
        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__year-select').select(year);
        cy.get('.react-datepicker__month-select').select(month);
        cy.get('.react-datepicker__day--010').click();
        return this;
    }
    selectSubjects(subject) {
        cy.get('#subjectsInput').type(`${subject}{enter}`);
        return this;
      } 
    selectHobbies() {
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2)').click();
        
    } 

    selectStateAndCity(state, city) {
        cy.get('#state').click().type(`${state}{enter}`);
        cy.get('#city').click().type(`${city}{enter}`);
        
      }
      
    submit() {
        cy.get('#submit').click();
    }

    checkSuccessMessage(expectedTitle) {
        cy.get('.modal-dialog').should('be.visible');
        cy.get('.modal-title').should('contain', expectedTitle);
        cy.get('#closeLargeModal').click({force: true})
    }

}

module.exports = new RegistrationFormPage();