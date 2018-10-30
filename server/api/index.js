// @flow
exports.init = (server, app) => {
  require('./example').init(server, app) // Just a bunch of example endpoints, comment this line out when releasing to dev/prod.
  require('./authentication').init(server, app)
  // -------------- Finally, always initialize the server with NextJS LAST ---------------
  require('./_init').init(server, app) // NextJS Default Route Handling, this should initialise LAST!
}
