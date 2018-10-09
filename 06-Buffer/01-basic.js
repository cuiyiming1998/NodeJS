#!/usr/bin/node

var buf1 = new Buffer(256);
buf1[1] = 23;

const log = console.log;

log('buffer length:' ,buf1.length);
log('\nbuffer content:',buf1);

for(var i=0;i<256;i++){
  buf1[i] = i;
};

log('\nbuffer content:',buf1);

var buf2 = buf1.slice(250,256);
log('\nbuf2 content:',buf2);

buf2.fill(0);
log('\nbuf2 content:',buf2);

var arr=['a',0xBA,0xDF,0x00,0x00,255,10];
var buf3 = new Buffer(arr);
log('\nbuf3 content:',buf3);

var buf4 = new Buffer('Hello World','utf-8');
log('\n',buf4);

buf3.copy(buf4);
log('\n',buf3);
log('\n');
