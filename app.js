const express = require('express')


const app = express()

app.get('/login',(req, res, next) => {
    res.send('<form action="/" name="login"><input type="text" value="userName"/><button>submit</button></form>')
})

app.use((req, res, next) => {
    res.send("message is sended")
})

app.listen(3000)