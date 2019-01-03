const express = require('express')
const router = express.Router({ mergeParams: true }) // Allows for nested routers to use any :id belonging to a parent router
const controller = require('./controller')

// Health Status Check
router.get('/', controller.status) // Added because AWS's App Load Balancer would do health checks to check "/" every 10 seconds.

// ----- This is used for '/api' routes that do not exist. -----
router.get('*', controller.notFound)
router.post('*', controller.notFound)
router.put('*', controller.notFound)
router.delete('*', controller.notFound)

module.exports = router
