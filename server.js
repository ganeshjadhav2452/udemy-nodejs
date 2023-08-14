const express = require('express')
const bodyParser = require('body-parser')
const adminRoutes  = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const app = express()
app.use(bodyParser.urlencoded({extended:false}))

app.use(adminRoutes)
app.use(shopRoutes)


app.use((request, response, next)=>{
    response.status(404).send('<h1>sorry page not found</h1>')
})




app.listen(4000);
