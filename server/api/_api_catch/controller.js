// ------- Essential packages -------
const respond = require(`${global.SERVER_ROOT}/services/response`) // Used for giving standardized responses
const { NotFoundError } = require(`${global.SERVER_ROOT}/services/response/errortypes`)

// ------- Register Controller -------
exports.status = (req, res, next) => {
  return res.send({ status: 'Server is online.' })
}

exports.notFound = (req, res, next) => {
  respond.failure(res, new NotFoundError())
}
