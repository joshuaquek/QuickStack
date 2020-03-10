const SIGNALE = require('signale')
const chalk = require('chalk')
require('./handler')
let { getNestedError } = require('./handler')

const config = {
  'username': process.env.POSTGRES_DATABASE_USERNAME,
  'password': process.env.POSTGRES_DATABASE_PASSWORD,
  'url': process.env.POSTGRES_DATABASE_URL,
  'port': process.env.POSTGRES_DATABASE_PORT,
  'dbname': process.env.POSTGRES_DATABASE_DBNAME
}

getNestedError().then((error) => {
  SIGNALE.error(error)
})

function configureKnex () {
  let knex = null
  let dbType = 'Nothing'
  return new Promise((resolve, reject) => {
    try {
      // TRY POSTGRES
      knex = require('knex')({
        client: 'pg',
        connection: `postgres://${config['username']}${config['password'] ? ':' : ''}${config['password']}@${config['url']}:${config['port']}/${config['dbname']}`,
        useNullAsDefault: true
      })
      dbType = 'PostgresDB'
      resolve({
        'knex': knex,
        'dbType': dbType
      })
    } catch (postgresError) {
      // IF THAT DOESNT WORK, USE SQLite
      SIGNALE.info('PostgresDB Connection not found, falling back to local SQLiteDB')
      try {
        knex = require('knex')({
          client: 'sqlite3',
          connection: {
            filename: './mydb.sqlite'
          }
        })
        dbType = 'SQLiteDB'
        resolve({
          'knex': knex,
          'dbType': dbType
        })
      } catch (sqliteError) {
        SIGNALE.error(sqliteError)
      }
    }
  })
}

module.exports = function () {
  return new Promise(async (resolve, reject) => {
    try {
      let { knex, dbType } = await configureKnex()
      SIGNALE.start(`${dbType} Connected Successfully on ` + chalk.cyan(`${config['url']}:${config['port']}/${config['dbname']}`))
      resolve(knex)
    } catch (error) {
      reject(error)
    }
  })
}
