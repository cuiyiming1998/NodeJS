#! /usr/bin/node

  console.log('file nam e',__filename);
  console.log('dir name',__dirname);

  //var file = __dirname + '/view/data.html';


 /*  switch(process.platform){
    case 'linux':
      file = __dirname + '/view/data.html';
      break; 
    case 'win32':
      file = __diename + '\\view\\data.html'
    default:
        file = 'error';
        }
 */

  const path = require('path');
  file = path.join(__dirname,'view','data.html');

  console.log('data file:',file);
