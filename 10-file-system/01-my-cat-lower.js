#!/usr/bin/node

const fs = require('fs');

var file = process.argv[2] || __filename;

var fid = fs.openSync(file);

var len = fs.statSync(file).size;
var buf = new Buffer(len);
fs.readSync(fid,buf,0,len);
console.log(buf.toString('utf-8'));

fs.closeSync(fid);
