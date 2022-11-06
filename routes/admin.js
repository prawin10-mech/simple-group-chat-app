const express = require('express')
const fs = require('fs')
const router = express.Router();


router.get('/',(req, res, next)=> {
    fs.readFile('message.txt', (err, data) => {
        if(err){
            data = "No Chat Exist"
        }
        if(data == ""){
            data = "Please Start Some Convesation";
        }
        res.send(
            `${data} <form action='/' method="POST" onsubmit="document.getElementById('username').value = localStorage.getItem('username')">
                <input id="message" name="message" type="text">
                <input type="hidden" name="username" id="username">
                <br>
                <button type="submit">Send</button>
            </form>`
        )
    })
})

router.post('/',(req, res, next) => {
    console.log(req.body)
    console.log(req.body.username)
    console.log(req.body.message)
    fs.appendFile('message.txt', `${req.body.username}: ${req.body.message}; `, (err)=> {
        err ? console.log(err): res.redirect('/')
    })
})


module.exports = router