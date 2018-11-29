// ------- Essential Packages -------
const passport = require(`${global.SERVER_ROOT}/services/passport`)
const respond = require(`${global.SERVER_ROOT}/services/response`) // Used for giving standardized responses
const { AccessTokenError } = require(`${global.SERVER_ROOT}/services/response/errortypes`)

// ------- Middleware that will pass request if valid, will respond with failure if invalid -------
module.exports = function (req, res, next) {
  if (process.env.API_PROTECTION !== 'on') return next() // Immediately bypass this middleware if JWT protection is not set to 'on'
  passport.authenticate('jwt', { session: false }, function (error, user, info) {
    if (error) return next(error) // If error (like an invalid token, for example), pass on request via `next()` and end execution
    if (!user) return respond.failure(res, new AccessTokenError()) // If user doesnt exist then it will respond with a failure
    return next() // If user is found, pass on request via `next()`and end execution
  })(req, res, next)
}
