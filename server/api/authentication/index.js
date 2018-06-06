// @flow
const controller = require('./controller')
// const passportMiddleware = require('./helpers/passport')

exports.init = function (server: any, app: any) {
  // ------------------ ROUTES ------------------
  server.post('/register', controller.register(app))
  // server.post('/login', passportMiddleware, controller.login(app))
  // --------------------------------------------
}