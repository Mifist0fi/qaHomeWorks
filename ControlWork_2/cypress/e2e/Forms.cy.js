const registrationFormPage = require ("../support/Page-Object/RegistrationFormPage")


describe('Forms', () => {
    it('Should check Practice form', () => {
        registrationFormPage.navigate("https://demoqa.com/")
        registrationFormPage.visit()
        registrationFormPage.fillForm('John','Doe', 'john.doe@example.com', '1234567890', '123 Main St, Springfield')
        registrationFormPage.selectDateOfBirth('2001','June')
        registrationFormPage.selectSubjects('Math')
        registrationFormPage.selectHobbies()
        registrationFormPage.selectStateAndCity('NCR','Delhi')  
        registrationFormPage.submit()
        registrationFormPage.checkSuccessMessage('Thanks for submitting the form')
    })
})