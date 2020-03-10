const Promise = require('bluebird')
const SIGNALE = require('signale')
const chalk = require('chalk')
const getKnex = require(`${global.SERVER_ROOT}/services/knex`)

module.exports = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let knex = await getKnex()
      await knex.raw(`CREATE SCHEMA IF NOT EXISTS "${global.POSTGRES_SCHEMA}";`)
      SIGNALE.success(`${chalk.cyan(global.POSTGRES_SCHEMA)} schema loaded successfully`)
      resolve()
    } catch (error) {
      throw error
    }
  })
}
