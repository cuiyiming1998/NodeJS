#!/usr/bin/node

const fs = require('fs'),
      http = require('http'),
      path = require('path'),
      file = process.argv[2];

if(process.argv.length !== 3){
  console.error('命令行参数格式: cmd filename');
  process.exit(1);
}

try{
  var data = fs.readFileSync(file).toString('base64');
}catch(e){
  console.error(e.message);
  process.exit(2);
}

var ext = path.extname(file);
var uridata = 'data:image/' + ext.slice(1,ext.length) + ';base64' + data;

console.log('data uri :\n%s',uridata);

var html = '<!DOCTYPE html><html><body><img alt="'+path.basename(file,ext)+'"src = "'+uridata+'"></body></html>';

http.createServer((req,res) => {
  console.log(req.headers);
  res.end(html);
}).listen(8080);
