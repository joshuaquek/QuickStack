// ---- API Routes ----
const express = require('express')
const router = express.Router()

const authentication = require('./authentication')
const apiCatch = require('./_api_catch')

const baseApiUrl = process.env.BACKEND_API_SERVER_BASE_URL || '/' // Default base api url would be `/`. You can change this if you want a different base api url, for example `/api`
const routePrefix = baseApiUrl === '/' ? '' : baseApiUrl

// -------- Custom API Routes --------
router.use(`${routePrefix}/auth`, authentication)
router.use(`${baseApiUrl}`, apiCatch) // Added because AWS's App Load Balancer would do health checks to check "/" every 10 seconds.

module.exports = router
