var command=process.argv[2];
console.log(command);
//console.log(process.argv);

if(command ==='add'){
    console.log("adding new note");
}
else if(command ==='list' ){
    console.log("listing all notes");
}
else{
    console.log('command not recognized')
}