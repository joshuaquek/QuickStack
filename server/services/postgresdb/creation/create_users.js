const SIGNALE = require('signale')
const chalk = require('chalk')
const knex = require(`${global.SERVER_ROOT}/services/knex`)

module.exports = () => {
// ---- Initialize table if it doesnt exist. ----
  setTimeout(async () => { // setTimeout(callback, 0) ensures that this table is created asynchronously
    let tablename = 'users'
    await knex.raw(`
        CREATE TABLE IF NOT EXISTS "${global.POSTGRES_SCHEMA}"."${tablename}" (
            id                uuid PRIMARY KEY,
            email             text NOT NULL UNIQUE,
            password_hash      text NOT NULL,
            first_name        text NOT NULL,
            last_name         text NOT NULL,
            user_group_id     uuid NOT NULL,
            created_at        timestamp default CURRENT_TIMESTAMP
        );
      `).catch((error) => { throw error })
    SIGNALE.success(`${chalk.cyan(tablename)} table loaded successfully`)
  }, 0)
}
