// @flow
exports.init = function(server: any, app: any){
  const controller = require('./controller')
  // ---- ROUTES ----
  controller.exampleOne('/example_1/:someRandomStuffHere/:someCoolId', server, app)
  controller.exampleTwo('/example_2', server, app)
}
