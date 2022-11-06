const express = require('express')
const router = express.Router()
const path = require('path')

const rootDir = require('../util/path')

router.use('/submit', (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','submit.html'))
})
module.exports = router