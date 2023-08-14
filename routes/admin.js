const express = require('express')
const Router = express.Router()
const path = require('path')



Router.get('/add-product' ,(request, response, next)=>{
   response.sendFile(path.join(__dirname,'../','views','add-product.html'))
})
Router.post('/' ,(request, response, next)=>{
   console.log(request.body)
    response.redirect('/')
   
})



module.exports = Router