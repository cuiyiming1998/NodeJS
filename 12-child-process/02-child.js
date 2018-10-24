#!/usr/bin/node

const cp = require('child_process');

console.log('I an father process PID:',process.pid);

var timer = global.setInterval(()=>{
  console.log('time: ',Date.now());
},1500);

global.setTimeout(()=>{
  global.clearInterval(timer)
},15000);
