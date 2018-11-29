// -------- Essesntial Startup Stuff --------
require('dotenv-safe').config()
global.SERVER_ROOT = require('path').resolve(__dirname) // Set global.serverRootPath to be the absolute root path of where this index.js is located
global.Promise = require('bluebird') // Override native Promise library. More performant than native Promises

// -------- Packages --------
const expressService = require(`${global.SERVER_ROOT}/services/express`)
const next = require('next')

const isDev = process.env.NODE_ENV !== 'production' // Boolean value - will be true if NODE_ENV is set to 'production'
const nextApp = next({ dir: './client', dev: isDev }) // Tells NextJs that the 'client' folder will hold the frontend ReactJs code

// -------- App Initialisation Method --------
const startApp = async () => {
  await nextApp.prepare() // Initialise NEXT.JS with dev/prod settings
  global.NEXT_APP = nextApp // This sets the NEXT_APP as a global NodeJs variable to be accessible anywhere in your webapp

  const apiRoutes = require('./api') // API routes to be exposed
  const server = expressService(apiRoutes) // Lets ExpressJs know that these will be the API routes to be exposed

  const port = process.env.PORT || 3000 // Integer value - Defaults to 3000 if PORT is not set in your ".env" file
  server.listen(port, (error) => { // Start server to listen on specified port
    if (error) throw error
    console.log(`> Ready on http://localhost:${port}`)
  })
}

// Start / Initialise App !!
startApp()
