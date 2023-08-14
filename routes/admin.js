const express = require('express')
const Router = express.Router()




Router.get('/add-product' ,(request, response, next)=>{
    console.log(request.url)
 
    response.send('<html><header><title>add product</title></header><body><form method="POST" action="/product" ><input type="text" name="title" /> <input type="text" name="lastName" /><button type="submit">add</button></form></body></html>')
   
})
Router.post('/product' ,(request, response, next)=>{
   console.log(request.body)
    response.redirect('/')
   
})

module.exports = Router