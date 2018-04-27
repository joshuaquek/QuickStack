//@flow
exports.init = (server:any, app:any) => {
  require('./_defaults').init(server, app) // NextJS Default Route Handling
  require('./_example').init(server, app)
};
