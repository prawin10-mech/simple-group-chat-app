const express = require('express')
const router = express.Router()

const controller = require('../controllers/form')

router.get('/contactus', controller.contactUs)
module.exports = router