const express = require('express')
const bodyParser = require("body-parser")
const path = require('path')

const adminRouter = require('./routes/message')
const loginRouter = require('./routes/login')
const router404 = require('./routes/404')
const contactusRouter = require('./routes/contactUs')
const submitRouter = require('./routes/submit.js')

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(adminRouter)
app.use(loginRouter)
app.use(contactusRouter)
app.use(submitRouter)
app.use(router404)

app.listen(3000, () => {
    console.log("server started")
})