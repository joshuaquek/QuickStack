// ------- Essential Packages -------
const passport = require(`${global.SERVER_ROOT}/services/passport`)
const respond = require(`${global.SERVER_ROOT}/services/response`) // Used for giving standardized responses
const { AccessTokenError } = require(`${global.SERVER_ROOT}/services/response/errortypes`)
const jwtDecode = require('jwt-decode')
const { Bearer } = require('permit')
const moment = require('moment-timezone')

// ------- Middleware that will pass request if valid, will respond with failure if invalid -------
module.exports = function (req, res, next) {
  if (process.env.API_PROTECTION === 'on') {
    passport.authenticate('jwt', { session: false }, function (error, user, info) {
      if (error) return next(error) // If error (like an invalid token, for example), pass on request via `next()` and end execution
      if (!user) return respond.failure(res, new AccessTokenError()) // If user doesnt exist then it will respond with a failure
      if (isTokenExpired(req, res)) return respond.failure(res, new AccessTokenError()) // Second layer check in case PassportJs somehow fails to reject the expired token.
      return next() // If user is found, pass on request via `next()`and end execution
    })(req, res, next)
  } else { // Else if it is 'off'
    return next()
  }
}

function isTokenExpired (req, res) {
  let jwt = (new Bearer()).check(req)
  let unwrappedJwt = jwtDecode(jwt)
  let expiryDate = new Date(unwrappedJwt.exp * 1000)
  let nowDate = new Date(moment().tz('Asia/Singapore'))
  return (nowDate > expiryDate)
}
