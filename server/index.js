// -------- Essesntial Startup Stuff --------
global.SERVER_ROOT = require('path').resolve(__dirname) // Set global.serverRootPath to be the absolute root path of where this index.js is located
require('dotenv-safe').config()

// ------- Packages -------
const SIGNALE = require('signale') // Used for more readable CLI Logging
const chalk = require('chalk') // Used for more readable CLI Logging

switch (process.env.ARCHITECTURE) {
  case 'monolith':
    require('./_architecture/monolith-app')
    break
  case 'nextjs-microservice':
    require('./_architecture/microservice-nextjs-frontend-app')
    break
  case 'api-server-microservice':
    require('./_architecture/microservice-api-server-backend-app')
    break
  default:
    SIGNALE.fatal(`Environmental variable ${chalk.yellow('ARCHITECTURE')} has not been defined in your start script. ${chalk.red('Shutting down now.')}`)
    break
}
