Feature: Add Product to Cart and Checkout on Open Cart

    Background: Visit the page correctly
        Given I open the Open Cart website

    Scenario: User adds a product to the cart and proceeds to checkout
        When I navigate to the "Products" section
        And I select a product
        And I click on "Add to Cart"
        And I should see a confirmation message "Success: You have added [Product Name] to your shopping cart!"
        And I click on the "Shopping Cart" icon
        And I click on "Checkout"
        Then I should be redirected to the checkout page
        And I should see "Your Shopping Cart" on the checkout page
