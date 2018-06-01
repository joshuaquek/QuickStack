// @flow
exports.init = (server: any, app: any) => {
  require('./_example').init(server, app) // Just a bunch of example endpoints, comment this line out when releasing to dev/prod.
  require('./_defaults').init(server, app) // NextJS Default Route Handling
  // require('./authentication').init(server, app)
};