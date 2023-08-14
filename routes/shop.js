const express = require('express')
const Router = express.Router()
const path = require('path')
Router.get('/' ,(request, response, next)=>{
   
    response.sendFile(path.join(__dirname,'../','views','shop.html'))
   
})

module.exports = Router