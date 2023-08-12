const http = require('http')

const server = http.createServer((req, res)=>{
 
if(req.url === '/home'){
  res.setHeader('Content-Type','text/html')
  res.write('<html>')
  res.write('<header><title>Home page</title></header>')
  res.write('<body><h1>Hello User Welcom to our website</h1></body>')
  res.write('</html>')
  
  res.end()
}else if(req.url === '/about'){
  res.setHeader('Content-Type','text/html')
  res.write('<html>')
  res.write('<header><title>about page</title></header>')
  res.write('<body><h1>Hello User Welcom to our about page</h1></body>')
  res.write('</html>')
  
  res.end()
}else if(req.url === '/node'){
  res.setHeader('Content-Type','text/html')
  res.write('<html>')
  res.write('<header><title>node page</title></header>')
  res.write('<body><h1>Hello User Welcom to our nodejs website</h1></body>')
  res.write('</html>')
  
  res.end()
}
})


server.listen(4000)