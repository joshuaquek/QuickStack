const SIGNALE = require('signale')
const chalk = require('chalk')

exports.setupDB = async () => {
  await setPostgresSchema() // Setup Schema name to query from
  await initPostgresTables() // Setup DB and initialize tables if tables have not been initalized
}

async function setPostgresSchema () {
  // ---- Sets the Schema ----
  global.POSTGRES_SCHEMA = process.env.POSTGRES_DATABASE_SCHEMA
  SIGNALE.info(`Currently using ${chalk.magenta(global.POSTGRES_SCHEMA)} schema on PostgresDB`)
}

async function initPostgresTables () {
  try {
    // ---- CREATE API SCHEMA ----
    await require('./creation/create_api_schema')()

    // ---- CREATE TABLES IN SCHEMA (Available for either webapp)----
    require('./creation/create_users')() // Creates 'users' table if it doesn't exist
    require('./creation/create_user_groups')() // Creates 'user_groups' table if it doesn't exist
    require('./creation/create_login_trail_audit')() // Creates 'login_trail_audit' table if it doesn't exist

    // ---- Done with table initialization ----
  } catch (error) {
    SIGNALE.error(error)
  }
}
