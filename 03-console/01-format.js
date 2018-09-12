#!/usr/bin/node

const user = {
  name: "wangding",
  age: 41,
  qq: "1269567664"
};

const log = console.log; // 输出到标准输出流


// method 1
log('name: %s ',user.name);
log('age: %d',user.age);
log('user: %j',user);


// join
log('qq:' + user.qq);

// template
log(`qq:${user.qq}`);

console.error('error message');//输出到标准错误流
