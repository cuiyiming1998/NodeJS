#!/usr/bin/node

const cp = require('child_process');

var cmd = cp.spawn('cat',['']);

cmd.stdout.pipe(process.stdout);
cmd.stderr.pipe(process.stderr);
