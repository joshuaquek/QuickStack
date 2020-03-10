const SIGNALE = require('signale')
const chalk = require('chalk')
const getKnex = require(`${global.SERVER_ROOT}/services/knex`)

module.exports = () => {
  // ---- Initialize table if it doesn't exist ----
  setTimeout(async () => {
    let knex = await getKnex()
    let tablename = 'login_trail_audit'
    await knex.raw(`
      CREATE TABLE IF NOT EXISTS "${global.POSTGRES_SCHEMA}"."${tablename}" (
        id uuid NOT NULL PRIMARY KEY UNIQUE,
        login_timestamp timestamp with time zone NOT NULL,
        jwt_token_used character varying(2044) NOT NULL,
        user_id uuid NOT NULL,
        email character varying(2044) NOT NULL,
        first_name character varying(2044),
        last_name character varying(2044),
        user_group_id uuid NOT NULL
      );
    `).catch((error) => { throw error })
    SIGNALE.success(`${chalk.cyan(tablename)} table loaded successfully`)
  }, 0)
}
