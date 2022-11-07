const path = require('path')
const rootDir = require('../util/path')


exports.contactUs = (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','contactus.html'))
}

exports.submit = (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','submit.html'))
}

exports.login = (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','login.html'))
}

