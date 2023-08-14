const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended:false}))

app.use('/add-product' ,(request, response, next)=>{
    console.log(request.url)
 
    response.send('<html><header><title>add product</title></header><body><form method="POST" action="/product" ><input type="text" name="title" /> <input type="text" name="lastName" /><button type="submit">add</button></form></body></html>')
   
})
app.post('/product' ,(request, response, next)=>{
   console.log(request.body)
    response.redirect('/')
   
})

app.use('/' ,(request, response, next)=>{
   
    response.send('<h1>this is Home middleware</h1>')
   
})



app.listen(4000);
