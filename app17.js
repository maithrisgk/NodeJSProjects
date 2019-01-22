var fs=require('fs');
var readme=fs.readFile('readme.txt','utf8',function(err,data){
console.log(data);
});
console.log('completed');