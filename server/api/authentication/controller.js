// ------- Logging Tools -------
const SIGNALE = require('signale') // Used for more readable CLI Logging
const chalk = require('chalk') // Used for more readable CLI Logging

// ------- Essential packages -------
const respond = require(`${global.SERVER_ROOT}/services/response`) // Used for giving standardized responses

// ------- Request validators -------
const validateRegister = require('./validators/validate_register')
const validateLogin = require('./validators/validate_login')

// ------- Route specific helpers -------
const createNewUser = require('./helpers/create_new_user')
const loginUser = require('./helpers/login_user')
const issueJwtToken = require('./helpers/issue_jwt_token')
const logLoginForAudit = require('./helpers/log_login_for_audit')

// ------- Register Controller -------
exports.register = async (req, res, next) => {
  try {
    // ------- Registration Logic -------
    await validateRegister(req) // Validate the request object
    let newUser = await createNewUser(req) // Register a new user if the request object is valid
    SIGNALE.success(chalk.yellow(`Registration Success! User Details below:\n\n`), chalk.gray(JSON.stringify(newUser, null, 4)), `\n`) // Log down Registration Success and new user details. Stores to audit logs in DB
    return respond.success(res, {
      'uuid': newUser['id'],
      'email': newUser['email'],
      'first_name': newUser['first_name'],
      'last_name': newUser['last_name']
    })
    // ----------------------------------
  } catch (error) {
    return respond.failure(res, error)
  }
}

// ------- Login Controller -------
exports.login = async (req, res, next) => {
  try {
    await validateLogin(req) // Validate the request object
    let userObject = await loginUser(req) // Value will be User Object (`id, email, password_hash, first_name, last_name` attributes) if email and password is correct. Else this line will throw an error.
    let jwtToken = await issueJwtToken(userObject) // Create the JWT Token using the User Object
    await logLoginForAudit(jwtToken, userObject['id'], userObject['email'], userObject['first_name'], userObject['last_name'], userObject['user_group_id'])
    return respond.success(res, {
      'access_token': jwtToken,
      'uuid': userObject['id'],
      'email': userObject['email'],
      'first_name': userObject['first_name'],
      'last_name': userObject['last_name'],
      'profile_url': 'https://i.imgur.com/SRKQ4e1.png' // NOTE: CHANGE THIS IN THE FUTURE
    }) // Respond with JWT Token if successful
  } catch (error) {
    return respond.failure(res, error)
  }
}

// ------- `Sample Protected Route` Controller -------
exports.sampleProtectedRoute = (req, res, next) => {
  try {
    return respond.success(res, {message: 'Success! You cannot see this without a token'})
  } catch (error) {
    respond.failure(res, error)
  }
}
