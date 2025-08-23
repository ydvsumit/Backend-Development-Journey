/**
 * globals: In NodeJS, variables declared inside a file are not added to the global scope
 * __dirname -> return the absolute path of current directory
 * __filename -> retrun the absolute parth of current file (including filename)
 * require -> Function used to import modules
 * module & exports -> used to export and import code between files
 * process -> info about env where the program is being executed
 * timers -> Work just like in browsers
 * console -> for logging output
 */

//__dirname
console.log(__dirname);
// Example output: D:\GitHub\Backend-Development-Journey\Node

//__filename
console.log(__filename);
//Example output: D:\GitHub\Backend-Development-Journey\Node\2-globals.js

//require
const fs = require("fs"); // imports File System module

//process
console.log(process.platform); // win32, linux, darwin
console.log(process.cwd()); // current working directory
console.log(process.env.USER); // environment variable

//timers
setTimeout(() => console.log("Hello after 2s"), 2000);
setInterval(() => console.log("Repeats every 1s"), 1000);

//console
console.log("Hello Node.js!");
console.error("Error message!");
