// @flow
exports.init = function (server, app) {
  const controller = require('./controller') // Initialise the controller
  // ---- ROUTES ----
  server.get('/example_1/:someRandomStuffHere/:someCoolId', controller.exampleOne(app)) // Use the controller with any route that you specify
  server.get('/example_2', controller.exampleTwo()) // Use the controller with any route that you specify
}
