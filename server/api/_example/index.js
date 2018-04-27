// @flow
exports.init = function(server: any, app: any){
  const controller = require('./controller')
  // ---- ROUTES ----
  controller.exampleOne('/_example/:randomVariableX', server, app)
  controller.exampleTwo('/example_2', server, app)
}
