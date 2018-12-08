// -------- Used for neater logging --------
const SIGNALE = require('signale') // Used for more readable CLI Logging
const chalk = require('chalk') // Used for more readable CLI Logging

// -------- Packages --------
const os = require('os')

// -------- Services --------
const { postgresService } = require(`${global.SERVER_ROOT}/services/postgresdb`)
const { expressService } = require(`${global.SERVER_ROOT}/services/express`)

// -------- App Initialisation --------
postgresService() // Initialises PostgresDB Schema and Tables if they do not exist
const server = expressService() // Lets ExpressJs expose and handle these API routes
const apiRoutes = require('../api') // API routes to be exposed
server.use(apiRoutes) // Let ExpressJs use the API routes
const port = process.env.BACKEND_API_SERVER_APP_PORT || 9001 // Integer value - Defaults to 9001 if BACKEND_API_SERVER_APP_PORT is not set in your ".env" file
server.listen(port, (error) => { // Starts server to listen on specified port
  if (error) throw error
  SIGNALE.start(`Server started on ${chalk.white(os.hostname())}  in ${chalk.yellow(process.env.NODE_ENV || 'development')} mode - ${chalk.cyan(`http://localhost:${port}`)}`)
})
