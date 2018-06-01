// @flow
exports.init = function(server: any, app: any){
  const controller = require('./controller')
  // ---- ROUTES ----
  server.get( '/example_1/:someRandomStuffHere/:someCoolId', controller.exampleOne(app) )
  server.get( '/example_2', controller.exampleTwo() )
}