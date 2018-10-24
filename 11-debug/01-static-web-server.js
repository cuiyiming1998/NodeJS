#!/usr/bin/node

const http = require('http'),
      peth = require('path'),
      fs = require('fs');
var file;

http.createServer((req,res)=>{
  console.log(req.url);
  file = path.join(__dirname,req.url);



  var read = fs.createReadStream(file);
  read.on('error',(err)=>{
    res.end(err.mseeage);
    return;
  });
  read.pipe(res);
}).listen(8080);
