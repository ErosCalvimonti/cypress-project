Feature: User Login on Open Cart

Background: Visit the page correctly
        Given I open the Open Cart website
    Scenario: User logs in with valid credentials
        When I click on the "My Account" dropdown
        And I click on the "Login" option
        And I enter valid credentials:
            | E-Mail               | Password   |
            | user@example.com     | myPassword |
        And I click on "Login"
        Then I should be redirected to the account dashboard
        And I should see "My Account" in the navigation


        