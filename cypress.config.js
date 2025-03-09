const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
      config.baseUrl = 'https://www.saucedemo.com';  
      config.viewportWidth = 1280;  
      config.viewportHeight = 720;  

      return config;
    },
  },
});
