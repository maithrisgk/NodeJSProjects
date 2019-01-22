var counter=function(arr){
    return 'there are' +arr.length+ ' in the array';

}

var adder=function(a,b){
    return `the sum is ${a+b}`;
}
var pi=3.14;

module.exports.count=counter;
module.exports.add=adder;
module.exports.pi=pi;