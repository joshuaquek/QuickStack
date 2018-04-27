//@flow
exports.init = (server:any, app:any) => {
  require('./_example').init(server, app)
  require('./_defaults').init(server, app) // NextJS Default Route Handling
};
