const bookStoreLoginPage = require("../support/Page-Object/BookStoreLoginPage")

describe('Book Store Aplication Testing', () => {
    beforeEach(() => {
        bookStoreLoginPage.navigate("https://demoqa.com");
    });

    it('Should return an error for reCaptcha', () => {
        
        bookStoreLoginPage.clickBookStoreApp()
        bookStoreLoginPage.clickLoginMenu()
        bookStoreLoginPage.clickNewUserButton()
        bookStoreLoginPage.fillRegistrationForm('John', 'Doe', 'mifistofi', 'Loki@5486')
        bookStoreLoginPage.clickRegisterButton()
        bookStoreLoginPage.getRegisterErrorText('Please verify reCaptcha to register!')
    });
    it('Should return an error for invalid password', () => {
        
        bookStoreLoginPage.clickBookStoreApp()
        bookStoreLoginPage.clickLoginMenu()
        bookStoreLoginPage.clickNewUserButton()
        bookStoreLoginPage.fillRegistrationForm('John', 'Doe', 'mifistofi', '111111111111111')
        bookStoreLoginPage.clickRecaptcha()
        bookStoreLoginPage.clickRegisterButton()
        bookStoreLoginPage.getPasswordErrorText(`Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.`) 
        
    });
    it('Should register user', () => {
        
        bookStoreLoginPage.clickBookStoreApp()
        bookStoreLoginPage.clickLoginMenu()
        bookStoreLoginPage.clickNewUserButton()
        bookStoreLoginPage.fillRegistrationForm('John', 'Doe', 'mifistofi', 'Loki@5486')
        bookStoreLoginPage.clickRecaptcha()
        bookStoreLoginPage.clickRegisterButton()
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Это оповещение');
            });
           
            cy.get('#alert-button').click();
    

    });
    it('Should Login user with invalid password', () => {
        
        bookStoreLoginPage.clickBookStoreApp()
        bookStoreLoginPage.clickLoginMenu()
        bookStoreLoginPage.login('mifistofi', '111111111')

    });
    it('Should Login user and logout', () => {
        
        bookStoreLoginPage.clickBookStoreApp()
        bookStoreLoginPage.clickLoginMenu()
        bookStoreLoginPage.login('mifistofi', 'Loki@5486')
        bookStoreLoginPage.getUserNameValue('mifistofi')
        bookStoreLoginPage.clickLogoutButton() 
    });
});
