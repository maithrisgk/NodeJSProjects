var fs=require('fs');
var readme=fs.readFile('readme.txt','utf8',function(err,data){
fs.writeFile('writeme2.txt',data,function(){
    console.log('written');
});
});