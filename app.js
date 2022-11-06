const express = require('express')
const bodyParser = require("body-parser")

const adminRouter = require('./routes/admin')
const loginRouter = require('./routes/login')

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

app.use(adminRouter)
app.use(loginRouter)

app.listen(3000, () => {
    console.log("server started")
})