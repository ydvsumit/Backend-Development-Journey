/**
 * Callback:
 *          - A callback is just a function passed as an argument to another function, so it can be called later after some task is done.
 *
 * In Node.js, callbacks are heavily used for asynchronous tasks (like reading files, making HTTP requests, querying databases).
 */

function greet(name, callback) {
  console.log("Hello " + name);
  callback(); // call the function after greeting
}

greet("Sumit", function () {
  console.log("Callback executed!");
});

// Callback in asynchronous code
const fs = require("fs");

/**
 * - Read file asynchronously
 * - fs.readFile doesn’t block the program.
 * - Once the file is read, the callback is executed with (err, data).
 * - This is the Node.js error-first callback style (first param is error).
 */
fs.readFile("../1-Fundamentals/content/first.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File contents:", data);
});
