#!/usr/bin/node

const cp = require('child_process');

cp.execFile('./02-child.js',(err,out)=>{
  if(err){
    console.err(err.message);
    process.exit(100);
  }

  console.log(out);
})
