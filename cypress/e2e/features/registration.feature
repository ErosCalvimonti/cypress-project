Feature: User Registration on Open Cart

    Background: Visit the page correctly
        Given I open the Open Cart website

    Scenario: User registers with valid information
        When I click on "My Account" dropdown
        And I click on "Register" option
        And I fill the registration form with valid data
        And I click on "I agree" on the privacy policy 
        And I click on "Continue"
        Then I should see a message "Congratulations! Your new account has been successfully created!" 

