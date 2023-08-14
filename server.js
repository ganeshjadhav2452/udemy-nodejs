const express = require('express')
const app = express()

app.use((request, response, next)=>{
    console.log(request.url)
    console.log('this is first middleware')
    response.send('<h1>this is first middleware</h1>')
    next()
})
app.use((request, response, next)=>{
    console.log(request.url)
    console.log('this is first middleware')
  
    next()
})




app.listen(4000);
