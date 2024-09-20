Feature: User Registration on Open Cart
    Scenario: User registers with valid information
        Given I open the Open Cart website
        When I click on "My Account" dropdown
        And I click on "Register" option
        And I fill the registration form with valid data
        And I click on "I agree" on the privacy policy 
        And I click on "Continue"
        Then I should see a message "Congratulations! Your new account has been successfully created!" 

