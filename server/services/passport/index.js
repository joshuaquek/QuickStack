// ------- Logging Tools -------
const SIGNALE = require('signale')
const chalk = require('chalk')

// ------- Imports for JWT unwrapping -------
const passport = require('passport')
const { ExtractJwt, Strategy } = require('passport-jwt')

// ------- Import Knex to check Postgres -------
const knex = require(`${global.SERVER_ROOT}/services/knex`)

// ------- LokiJs as a cache to reduce DB calls -------
const Loki = require('lokijs') // Used for temporary caching, and clears when the server restarts
const cache = new Loki('users-cache-for-jwt.db') // Create temporary cache upon initialisation
const USERS = cache.addCollection('users', {clone: true, disableMeta: true})

// ------- Options for getting and parsing JWT Token -------
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // This gets the token. Example: If the header is `Authorization: Bearer a7x7ashx9ashx9h1ashsasd`, it will extract out `a7x7ashx9ashx9h1ashsasd` as the token
  secretOrKey: process.env.JWT_SECRET // JWT Secret from .env file
}

// ------- Main Authentication Logic before issuing token -------
const strategy = new Strategy(options, async ({ id }, next) => {
  try {
    // ------ Query for user, if exists, then use `next(null, userData)`, else use `next(null, false)` ---------
    let queriedCachedUser = USERS.find({ id: id })[0]
    if (queriedCachedUser) {
      delete queriedCachedUser['$loki'] // Remove redundant '$loki' metadata created by caching library.
      // SIGNALE.info(chalk.blue('JWT Verification: User successfully retrieved from Cache for JWT verification'), '\n', chalk.gray(JSON.stringify(queriedCachedUser, null, 2))) // UNCOMMENT THIS FOR MORE VERBOSE
      return next(null, queriedCachedUser)
    } else {
      // ------- Query from DB since its not in the cache -------
      let result = await knex.raw(`
        SELECT id, email, first_name, last_name, user_group_id 
        FROM "${global.POSTGRES_SCHEMA}"."users"
        WHERE id = ?;
      `, [id]) // Query for user based on ID
      let queriedPostgresUser = result.rows[0] // Store queried user into varible for readability
      if (queriedPostgresUser) USERS.insert(queriedPostgresUser) // If queried user exists, add to USERS cache
      if (queriedPostgresUser) {
        // SIGNALE.info(chalk.blue('JWT Verification: User successfully retrieved from PostgresDB for JWT verification'), '\n', chalk.gray(JSON.stringify(queriedPostgresUser, null, 2))) // UNCOMMENT THIS FOR MORE VERBOSE
        return next(null, queriedPostgresUser) // If queried user exists, use next() callback and terminate using Return
      }
      SIGNALE.info(chalk.red('JWT Verification: User not found in PostgresDB or in Cache'), '\n', chalk.gray(JSON.stringify(queriedCachedUser, null, 2)))
      return next(null, false) // Else queried user does not exists, use next() callback and terminate using Return
      // -------------------------------------------------------
    }
    // --------------------------------------------------------------------------------------------------------
  } catch (error) {
    SIGNALE.error(error)
  }
})

// ------- Export for usage in Express -------
passport.use(strategy)
module.exports = passport
