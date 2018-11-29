// ------- Logging Tools -------
const SIGNALE = require('signale') // Used for more readable CLI Logging
const chalk = require('chalk') // Used for more readable CLI Logging

// ------- Other essential packages -------
const knex = require(`${global.SERVER_ROOT}/services/knex`)
const uuidv4 = require('uuid/v4')

module.exports = (jwtToken, userId, userEmail, firstName, lastName, userGroupId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await knex(`${global.POSTGRES_SCHEMA}.login_trail_audit`).insert({
        'id': uuidv4(),
        'login_timestamp': new Date(),
        'jwt_token_used': jwtToken,
        'user_id': userId,
        'email': userEmail,
        'first_name': firstName,
        'last_name': lastName,
        'user_group_id': userGroupId
      }).returning('*')
      SIGNALE.info(chalk.yellow(`User login added to login audit trail:\n\n`), chalk.gray(JSON.stringify(result, null, 4)), `\n`)
      resolve()
    } catch (error) {
      reject(error)
    }
  })
}
