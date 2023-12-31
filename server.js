const express = require('express')
const bodyParser = require('body-parser')
const adminRoutes  = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const path = require('path')
const app = express()
app.use(bodyParser.urlencoded({extended:false}))

app.use(adminRoutes)
app.use(shopRoutes)
app.use(express.static(path.join(__dirname,'public')))


app.use((request, response, next)=>{
    response.sendFile(path.join(__dirname,'./','views','pageNotFound.html'))
 })




app.listen(4000);
