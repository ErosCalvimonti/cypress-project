Feature: Registration Vescra page

    Scenario: Registration using valid data

    Given I navigate to vescra homepage
    When I click on Iniciar Sesion button
    And I entered my information for Registration
    And I click on Register button
    Then I should be redirectered to homepage succesfully
