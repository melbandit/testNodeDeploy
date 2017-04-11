let os = require("os");
let fs = require("fs"); //file system

console.log(`App running`);

let place = `Universe`;
console.log(`Hello ${place}!`);

//Unique to node
console.log( __dirname );
console.log( __filename );

//require("os"); //go find a module 
console.log( os.cpus() );
console.log( os.hostname() );

fs.open("foo.html", "w", function() {
	//nothing
});