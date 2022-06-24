const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'bf6ntn',
  //projectId: '5ss713',
  reporter: 'mochawesome',
  reporterOptions: {
    overwrite: false,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})

