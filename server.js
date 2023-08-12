const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res)=>{

if(req.url === '/'){
  fs.readFile('message.txt','utf-8',(error, data)=>{
    console.log(data)
    res.write('<html>')
    res.write('<header><title>Home page</title></header>')
    res.write(`<body><h1>${data}</h1><form method="POST" action="/message" ><input name="message" type="text" /> <button type="submit" >submit</button></form></body>`)
    res.write('</html>')
  })
  
  return res.end()
}

 

if(req.url === '/message'  && req.method === 'POST'){
  const body = []
  req.on('data',(chunkOfData)=>{
    body.push(chunkOfData)

  })
  req.on('end',()=>{
    body.join(',')
    const parsedBody = Buffer.concat(body).toString()

    const message = decodeURIComponent(parsedBody.replace(/\+/g, ' ')).replace('message=','');

    
    fs.writeFileSync('message.txt',message)
    res.statusCode = 302;
    res.setHeader('Location', '/')
 
   return res.end()
  })
 
}
})


server.listen(4000)