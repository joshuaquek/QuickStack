const handle = global.NEXT_APP.getRequestHandler()

exports.nextJsCatchAll = (req, res, next) => {
  return handle(req, res)
}