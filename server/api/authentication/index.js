// @flow
exports.init = function (server: any, app: any) {
    const controller = require('./controller')
    // ---- ROUTES ----
    server.post('/register', controller.register(app))
    server.post('/login', controller.login(app))
}