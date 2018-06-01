// @flow
exports.init = (server: any, app: any) => {
  require('./_example').init(server, app) // Just a bunch of example endpoints, comment this line out when releasing to dev/prod.
  // ---------------------------------- ADD YOUR API BELOW -------------------------------
  require('./authentication').init(server, app)
  // -------------- Finally, always initialize the server with NextJS LAST ---------------
  require('./_defaults').init(server, app) // NextJS Default Route Handling, this should initialise LAST!
};