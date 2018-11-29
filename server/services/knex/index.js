const SIGNALE = require('signale')
const chalk = require('chalk')

const config = {
  'username': process.env.POSTGRES_DATABASE_USERNAME,
  'password': process.env.POSTGRES_DATABASE_PASSWORD,
  'url': process.env.POSTGRES_DATABASE_URL,
  'port': process.env.POSTGRES_DATABASE_PORT,
  'dbname': process.env.POSTGRES_DATABASE_DBNAME
}

const knex = require('knex')({
  client: 'pg',
  connection: `postgres://${config['username']}${config['password'] ? ':' : ''}${config['password']}@${config['url']}:${config['port']}/${config['dbname']}`,
  useNullAsDefault: true
})

SIGNALE.start(`PostgresDB Connected Successfully on ` + chalk.cyan(`${config['url']}:${config['port']}/${config['dbname']}`))

module.exports = knex
