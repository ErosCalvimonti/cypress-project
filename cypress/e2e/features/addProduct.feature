Feature: Add Product to Cart

  Background: Navigate to Open Cart page
    Given I navigate to Open Cart website
  Scenario: User adds multiple products to the cart
    When I search for a product "Iphone"
    And I select the product from the search results
    And I click on "Add to Cart" and I should see a confirmation message 
    And I search for another product "Camera"
    And I select the product from the search results
    And I click on "Add to Cart"
    Then I should see a confirmation message "Success: You have added Camera to your shopping cart!"
    And the cart count should be updated to 2
