#!/usr/bin/node

if(process.argv !== 3){
  console.error('命令行格式:cmd base64_string');
  process.exit(1);
}

const buf = new Buffer(process.argv[2],'base64');
const info = buf.toString('utf-8').split(":");

if(info.length !== 2){
  console.erroe("信息有误");
  process.exit(2);
}
console.log('username: %s \n password: %s \n ',info[0],info[1]);
