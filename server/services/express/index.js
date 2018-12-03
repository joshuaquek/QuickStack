const express = require('express')
const passport = require('../passport')
const compression = require('compression')
const logger = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const { expressSession } = require('./express_session_config')
const { jsonSizeLimit, fileUploadSizeLimit } = require('./body_parser_config')
const { customLoggingFormat } = require('./custom_logging_config')

module.exports = (...routes) => { // Accepts indefinite number of Express Router objects, which will all be exposed later via server.use()
  const server = express()
  server.use(logger(customLoggingFormat)) // Use the maximum verbose level for logging
  server.use(compression()) // Use Compression for faster responses
  server.set('trust proxy', true) // If true, the client’s IP address is understood as the left-most entry in the X-Forwarded-* header.
  server.use(helmet()) // Helmet to prevent common HTTP exploits
  server.use(cors()) // Enable calling for other domains
  server.use(jsonSizeLimit) // Enforce Json Request Size Limit
  server.use(fileUploadSizeLimit) // Enforce File Upload Request Size Limit
  server.use(expressSession) // Enable storage of JWT locally temporarily
  server.use(passport.initialize()) // Use Passport middleware
  server.use(passport.session()) // Use Passport Session middleware
  for (let route of routes) server.use(route) // Iterate through and use all routes
  return server
}
