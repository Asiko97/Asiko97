'use strict';
const http = require('http');
const {port, upper} = require('./project');
const [a,b] = [1,2];
const server = http.createServer((req,res)=>{
  if (req.url === '/'){
    res.setHeader('content-type','text/html');
    res.end(`
      <!doctype html>
      <body>
        <h1> ${upper(__dirname)} </h1>
        <h1> ${port} </h1>
        <p> what a body =P </p>
      </body>
      `)
  } else {
    res.end('Unknown')
  }
})
server.listen(port,()=> console.log('started our server'));
