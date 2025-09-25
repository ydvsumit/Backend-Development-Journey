/**
 * What are “Globals” in Node.js?
 * In Node.js, some objects, functions, and variables are available everywhere in your code without needing to import or require them.
 * These are called global objects (or simply "globals").
 * 👉 Think of them as built-in helpers that Node.js provides by default.
 *
 * globals: In NodeJS, variables declared inside a file are not added to the global scope
 *
 * __dirname -> return the absolute path of current directory
 * __filename -> retrun the absolute path of current file (including filename)
 * require -> Function used to import modules
 * module & exports -> used to export and import code between files
 * process -> info about env where the program is being executed OR process object is a global object that provides info about current NodeJS process
 * timers -> Work just like in browsers
 * console -> for logging output
 * Buffer -> Helps work with binary data.
 */

// global object
// It is like window in browsers.
// Anything you attach to global is available everywhere.
global.myVar = "Hello World";
console.log(myVar); // Hello World

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
console.log("env = ", process.env.USER); // environment variable

//timers
setTimeout(() => console.log("Hello after 2s"), 2000);
setInterval(() => console.log("Repeats every 1s"), 1000);

//console
console.log("Hello Node.js!");
console.error("Error message!");

// Buffer
const buf = Buffer.from("Hello");
console.log(buf); // <Buffer 48 65 6c 6c 6f>
