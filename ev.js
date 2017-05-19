'use strict';
const http = require('http');
const server = http.createServer((rq,res)=>{
  if (rq.url === '/'){
    res.setHeader('content-type','text/html');
    res.end(`
      <!doctype html>
      <body>
      <h1>some headerl <h1>
      <p> whot a body =p </p>
      <body>
      `)
  } else {
    res.end('hoho')
  }
})
server.listen(8080,()=> console.log('started our server'));
