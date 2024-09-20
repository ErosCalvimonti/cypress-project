Feature: User Login on Open Cart
    Background: 
        Given I open the Open Cart website
        When I click on the "My Account" dropdown and select "Login"
    Scenario: User logs in with valid credentials
        And I enter valid credentials
        And I click on "Login"
        Then I should be redirected to the account dashboard
        And I should see "My Account" in the navigation
        Scenario: User logs in with invalid credentials
        When I click on the "My Account" dropdown and select "Login"
        And I enter invalid credentials
        And I click on "Login"
        Then I should see an error message
