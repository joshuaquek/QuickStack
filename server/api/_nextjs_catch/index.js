const handle = global.NEXT_APP.getRequestHandler()

module.exports = (req, res, next) => {
  return handle(req, res)
}
