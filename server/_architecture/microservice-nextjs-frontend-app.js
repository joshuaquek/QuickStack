// -------- Used for neater logging --------
const SIGNALE = require('signale') // Used for more readable CLI Logging
const chalk = require('chalk') // Used for more readable CLI Logging

// -------- Packages --------
const { expressService } = require(`${global.SERVER_ROOT}/services/express`)
const next = require('next')
const os = require('os')

const isDev = process.env.NODE_ENV !== 'production' // Boolean value - will be true if NODE_ENV is set to 'production'
const nextApp = next({ dir: './client', dev: isDev }) // Tells NextJs that the 'client' folder will hold the frontend ReactJs code

// -------- App Initialisation Method --------
const startApp = async () => {
  await nextApp.prepare() // Initialise NEXT.JS with dev/prod settings
  global.NEXT_APP = nextApp // This sets the NEXT_APP as a global NodeJs variable to be accessible anywhere in your webapp

  const server = expressService() // Lets ExpressJs expose and handle these API routes
  const nextJsSsrApiRoutes = require('../nextjs') // NextJs Server Side Rendering custom API routes to be handled
  server.use(`${process.env.NEXT_JS_BASE_URL || '/'}`, nextJsSsrApiRoutes) // After this, include in the NextJs routes

  const port = process.env.FRONTEND_NEXTJS_APP_PORT || 7501 // Integer value - Defaults to 7501 if FRONTEND_NEXTJS_APP_PORT is not set in your ".env" file
  server.listen(port, (error) => { // Start server to listen on specified port
    if (error) throw error
    SIGNALE.start(`Server started on ${chalk.white(os.hostname())} in ${chalk.yellow(process.env.NODE_ENV || 'development')} mode - ${chalk.cyan(`http://localhost:${port}`)}`)
  })
}

// Start / Initialise App !!
startApp()
