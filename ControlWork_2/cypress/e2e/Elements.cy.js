const ElementsPage = require('../support/Page-Object/ElementsPage')

describe('Elements Testing', () => {
    beforeEach(() => {
        ElementsPage.navigate('https://demoqa.com/elements');
    });

    it('Should submit text box correctly', () => {
        ElementsPage.clickTextBox();
        ElementsPage.fillTextBox('Test User', 'testuser@example.com', 'Test Address', 'Permanent Address');
        ElementsPage.submit();
        ElementsPage.verifyTextBoxSubmission('Test User');
    });

    it('Should check checkbox functionality', () => {
        ElementsPage.clickCheckbox();
        ElementsPage.checkCheckbox();
        ElementsPage.verifyCheckboxSelection();
    });

    it('Should allow selection of radio buttons', () => {
        ElementsPage.clickRadioButton();
        ElementsPage.selectRadioButton();
        ElementsPage.verifyRadioButtonSelection('You have selected Yes');
    });

    it('Should allow click of buttons', () => {
        ElementsPage.clickButtons();
        ElementsPage.verifyButtonClickMessages('You have done a double click', 'You have done a right click');
    });
});