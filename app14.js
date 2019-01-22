//inheritance

var events=require('events');
var util=require('util');
var Person=function(name){
    this.Name=name;
    };
    util.inherits(Person,events.EventEmitter);
    var james=new Person('james');
    var mary=new Person('mary');
    var mae=new Person('mae');
    var people=[james,mary,mae];
    people.forEach(function(person){
        person.on('speak',function(msg){
            console.log(person.Name+' said'+msg);

        });

    });
    james.emit('speak',' Hey dude!');
    mary.emit('speak',' Hello!');
