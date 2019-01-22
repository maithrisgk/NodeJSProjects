//file system read and write

var fs=require('fs');

var readme=fs.readFileSync('readme.txt','utf8');
console.log(readme);
fs.writeFileSync('writeme1.txt',readme);
