const express = require('express')
const controller = require('./controller')
const router = express.Router({mergeParams: true})
const protect = require(`${global.SERVER_ROOT}/services/passport/protect`) // Use this for routes that you need to protect

router.post('/register', controller.register)
router.post('/login', controller.login)

// ----- Sample Protected Route Example -----
router.post('/sample_protected_route', protect, controller.sampleProtectedRoute)

module.exports = router
