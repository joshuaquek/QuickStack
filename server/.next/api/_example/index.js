// 
exports.init = function(server, app){
  const controller = require('./controller')
  // ---- ROUTES ----
  controller.exampleOne('/example_1', server, app)
  controller.exampleTwo('/example_2', server, app)
}
