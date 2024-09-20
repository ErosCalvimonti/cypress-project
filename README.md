# Open Cart E2E Testing Framework


[![Cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
[![Cucumber](https://img.shields.io/badge/tested%20with-Cucumber-23D96C.svg)](https://cucumber.io/)


This repository contains an end-to-end (E2E) testing framework for the Open Cart e-commerce platform using Cypress and Cucumber. It provides a robust solution for automating UI tests, ensuring the reliability and functionality of the Open Cart system.

[![Screenshot-2024-09-20-at-12-06-03-PM-Medium.jpg](https://i.postimg.cc/d0F3x6Zj/Screenshot-2024-09-20-at-12-06-03-PM-Medium.jpg)](https://postimg.cc/jD8RWzXD)


## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Writing Tests](#writing-tests)
- [CI/CD Integration](#cicd-integration)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Features

- 🚀 E2E testing using Cypress
- 🥒 BDD-style tests with Cucumber
- 🏗️ Page Object Model (POM) design pattern
- 📊 Data-driven testing using fixtures
- 🌐 Cross-browser testing capabilities
- 📈 Detailed reporting with screenshots and videos
- 🔄 Continuous Integration support

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or higher)
- npm (v6 or higher)
- Git
- A running instance of Open Cart (local or remote)

## Installation

1. Clone the repository:

```
git clone [https://github.com/your-username/open-cart-e2e-testing.git](https://github.com/your-username/open-cart-e2e-testing.git)
```
2. Navigate to the project directory:

```
cd open-cart-e2e-testing
```

3. Install the dependencies:

```
npm install

```

4. Configure the `cypress.json` file with your Open Cart URL:

```json
{
  "baseUrl": "http://your-opencart-url.com"
}

```
## Writing Tests

1. Create a new feature file in `cypress/e2e/features/`
2. Implement step definitions in `cypress/support/step_definitions/`
3. Create page objects in `user_interface/` if needed


Example feature file (`login.feature`):

```Gherkin
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
```


## 📫 Let's Connect!

I'm always excited to collaborate on new projects or discuss the latest in QA and software testing. Feel free to reach out!

# Calvimonti Eros - Software QA Engineer 🚀


[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0077B5?style=flat&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/eroscalvimonti/)
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat&logo=github)](https://github.com/ErosCalvimonti)

---

<p align="center">
  <img src="https://img.shields.io/badge/Thanks%20for%20visiting!-😊-brightgreen" alt="Thanks Badge"/>
</p>