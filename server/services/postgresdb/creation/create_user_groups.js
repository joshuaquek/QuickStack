const SIGNALE = require('signale')
const chalk = require('chalk')
const getKnex = require(`${global.SERVER_ROOT}/services/knex`)

module.exports = () => {
  // ---- Initialize "user_groups" table if it doesn't exist ----
  setTimeout(async () => {
    let knex = await getKnex()
    let tablename = 'user_groups'
    await knex.raw(`
        CREATE TABLE IF NOT EXISTS "${global.POSTGRES_SCHEMA}"."${tablename}" (
            id                uuid PRIMARY KEY,
            name              text NOT NULL UNIQUE,
            created_at        timestamp default CURRENT_TIMESTAMP
        );
      `).catch((error) => { throw error })
    SIGNALE.success(`${chalk.cyan(tablename)} table loaded successfully`)
  }, 0)
}
