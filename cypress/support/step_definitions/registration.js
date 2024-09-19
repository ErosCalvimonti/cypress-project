import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import registration from "../user_interface/registration";



Given ('I open the Open Cart website', () => {
    cy.visit('/');
    cy.title().should('eq','Your Store');
})

When ('I click on "My Account" dropdown', () => {
    cy.get(registration.MyAccountDropdown).click();
    
})

And ('I click on "Register" option', () => {
    cy.get(registration.selectRegistrationButton).click();
    cy.url().should('include' , '/register')
})

And('I fill the registration form with valid data', () => {
    cy.fixture('userData').then(({ validUser }) => { 
        const { firstName, lastName, email, telephone, password } = validUser; 

        cy.get(registration.inputFirstName).type(firstName);
        cy.get(registration.inputLastName).type(lastName);
        cy.get(registration.inputEmail).type(email);
        cy.get(registration.inputTelephone).type(telephone);
        cy.get(registration.inputPassword).type(password);
        cy.get(registration.inputConfirm).type(password); 
    });
});

And ('I click on "I agree" on the privacy policy', () => {
    cy.get(registration.checkbox).click();
}) 

And ('I click on "Continue"', () => {
    cy.get(registration.continueBtn).click();
})

Then ('I should see a message "Congratulations! Your new account has been successfully created!"', () => {
    cy.get(registration.validationRegistration)
    .should('be.visible')
    .and('contain','Congratulations! Your new account has been successfully created!')
})

