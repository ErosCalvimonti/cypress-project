import { Given, When, And, Then, Before } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../user_interface/login";

beforeEach('Navigate to website', () => {
    Given("I navigate to Open Cart website", () => {
        cy.visit("/");
        cy.title().should("eq", "Your Store");
    });
})

When('I click on the "My Account" dropdown and select "Login"', () => {
    cy.get(loginPage.myAccountDropdown).click();
    cy.get(loginPage.selectLogin).click();
    cy.url().should("contain", "/login");
});

And('I enter valid credentials', () => {
    cy.fixture("userData").then(({ validUser }) => {
    const { email, password } = validUser;

    cy.get(loginPage.inputEmail).type(email);
    cy.get(loginPage.inputPassword).type(password);
    });
});

And('I enter invalid credentials', () => {
    cy.fixture("userData").then(({ invalidUser }) => {
    const { invalidEmail, invalidPassword } = invalidUser;

    cy.get(loginPage.inputEmail).type(invalidEmail);
    cy.get(loginPage.inputPassword).type(invalidPassword);
    });
});
And('I click on "Login"', () => {
    cy.get(loginPage.loginBtn).click();
});

Then("I should be redirected to the account dashboard", () => {
    cy.url().should('contain','/account')
});

And('I should see "My Account" in the navigation', () => {
    cy.get(loginPage.validationLogin)
    .should('be.visible')
    .and('contain.text','')
});

Then ('I should see an error message',() => {
    cy.get(loginPage.alertMessage).should('be.visible')
})

