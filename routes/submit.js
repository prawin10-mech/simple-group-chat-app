const express = require('express')
const router = express.Router()

const controller = require('../controllers/form')

router.use('/submit', controller.submit)
module.exports = router