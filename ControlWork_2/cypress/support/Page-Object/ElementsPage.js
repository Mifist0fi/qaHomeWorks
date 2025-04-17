const Base = require("./Base")

class ElementsPage extends Base {

    constructor(){
        super();
    }

    clickTextBox() {
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click();
    }

    fillTextBox(name, email, currentAddress, permanentAddress) {
        cy.get('#userName').type(name);
        cy.get('#userEmail').type(email);
        cy.get('#currentAddress').type(currentAddress);
        cy.get('#permanentAddress').type(permanentAddress);
    }

    submit() {
        cy.get('#submit').click();
    }

    verifyTextBoxSubmission(expectedName) {
        cy.get('.border').should('contain', expectedName);
    }

    clickCheckbox() {
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click();
    }

    checkCheckbox() {
        cy.get('.rct-checkbox').first().click();
    }

    verifyCheckboxSelection() {
        cy.get('#result > :nth-child(1)').invoke('text').should('equal','You have selected :');  
    }

    clickRadioButton() {
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-2').click();
    }

    selectRadioButton() {
        cy.get(':nth-child(2) > .custom-control-label').click();
    }

    verifyRadioButtonSelection(expectedText) {
        cy.get('.mt-3').invoke('text').should('equal', expectedText);
    }

    clickButtons() {
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-4').click();
        cy.get('#doubleClickBtn').dblclick();
        cy.get('#rightClickBtn').rightclick();
    }

    verifyButtonClickMessages(doubleClickMessage, rightClickMessage) {
        cy.get('#doubleClickMessage').invoke('text').should('equal', doubleClickMessage);
        cy.get('#rightClickMessage').invoke('text').should('equal', rightClickMessage);
    }
}

module.exports = new ElementsPage();