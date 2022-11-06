const express = require('express')
const router = express.Router()
const path = require('path')

const rootdir = require('../util/path')

router.use('/', (req, res, next) => {
    res.status(404).sendFile(path.join(rootdir, "views", "404.html"))
})

module.exports = router

