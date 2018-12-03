// ---- API Routes ----
const express = require('express')
const router = express.Router()

const { nextJsCatchAll } = require('./_nextjs_catch')

// -------- NextJs API Routes --------
router.get(`*`, nextJsCatchAll)

module.exports = router
