const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://webdriveruniversity.com/",
    viewportHeight:700,
    viewportWidth:1300,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
