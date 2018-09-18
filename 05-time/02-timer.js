#!/usr/bin/node

console.log('start...');
var count = 0;
var timerID = global.setInterval(loop,500);

function loop(){
  console.log('I will loop forever');
  if(++count == 10){
    global.clearInterval(timerID);
    console.log('...end');
  }
};

//global.setTimeout(()=>{
//  console.log('..end');
//  global.clearInterval(timerID);
//},3000);
