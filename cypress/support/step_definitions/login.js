import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


    Given ("I navigate to vescra homepage", () => {
        cy.visit("/")
        // Assertion
        cy.title().should('eq','Home | ecommerce')
    })

    When ("I click on Iniciar Sesion button", () => {
        
    })

    And ("I entered my information for Registration", () => {

    } )

    And ("I click on Register button", () => {

    } )

    Then ("I should be redirectered to homepage succesfully", () => {
        
    } )
