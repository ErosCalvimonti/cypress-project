const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber())
    }, 
    specPattern:"./cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    baseUrl : "https://karielcode.wixstudio.io/ecomerce"
  }, 
});
