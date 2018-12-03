// -------- Used for neater logging --------
const SIGNALE = require('signale') // Used for more readable CLI Logging
const chalk = require('chalk') // Used for more readable CLI Logging

// -------- Packages --------
const expressService = require(`${global.SERVER_ROOT}/services/express`)
const os = require('os')

// -------- App Initialisation Method --------
const apiRoutes = require('../api') // Regular API routes to be exposed
const server = expressService(apiRoutes) // Lets ExpressJs expose and handle these API routes
const port = process.env.BACKEND_API_SERVER_APP_PORT || 3000 // Integer value - Defaults to 3000 if PORT is not set in your ".env" file
server.listen(port, (error) => { // Starts server to listen on specified port
  if (error) throw error
  SIGNALE.start(`Server started on ${chalk.white(os.hostname())} - ${chalk.cyan(`http://localhost:${port}`)}`)
})
