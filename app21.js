var fs=require('fs');
// fs.mkdirSync('Data');
// fs.mkdirSync('Banking');
fs.readdirSync('Data');
var readme=fs.readFileSync('\Finance.txt','utf8');
console.log(readme);
