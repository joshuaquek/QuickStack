// @flow
const express = require('express')
const next = require('next')
const isDev = process.env.NODE_ENV !== 'production'  // Boolean - will be TRUE if NODE_ENV is set to 'production'
const app = next({ dir: './client', dev: isDev }) // Tells NextJs that 'client' folder will hold the frontend code
var path = require('path'); global.serverRoot = path.resolve(__dirname); // Set global.serverRootPath to be the absolute root of where this server.js is located

// App Initialisation Method
let startApp = async () => {
  await app.prepare() // Initialise NEXT.JS with dev/prod settings
  require('./api').init( express(), app) // Initialise all API endpoints
}

// Start / Initialise App !!
startApp();
