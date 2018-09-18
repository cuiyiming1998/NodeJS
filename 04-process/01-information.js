#!/usr/bin/node

const log = console.log;

log('arch:',process.arch);// 操作系统位数
log('platform',process.platform);// 系统名
log('pid:',process.pid);// pid
log('execPath:',process.execPath);
// process.stdin.resume(); // 暂停

log('node.js version:',process.version); // nodejs的版本
log('uid:',process.getuid()); // uid
log('gid:',process.getgid()); // gid
log('path',process.cwd());

log('rss:',process.memoryUsage().rss);
log('heapTotal:',process.memoryUsage().heapTotal);
log('heapUsed:',process.memoryUsage().heapUsed);
log('external:',process.memoryUsage().external);

log('LOGNAME:',process.env.LOGNAME);
