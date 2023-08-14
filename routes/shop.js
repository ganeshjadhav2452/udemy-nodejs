const express = require('express')
const Router = express.Router()

Router.get('/' ,(request, response, next)=>{
   
    response.send('<h1>this is Home middleware</h1>')
   
})

module.exports = Router