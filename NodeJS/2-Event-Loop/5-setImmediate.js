/**
 * setImmediate(): It is a function available in Node.js that schedules a callback function to be executed immediately after the current event loop phase completes.
 *
 * setImmediate(callback[, ...args]) is a Node.js-only function (not available in browsers).
 * It schedules a callback function to run after the current I/O cycle, in the Check phase of the Event Loop.
 * It is similar to setTimeout(fn, 0), but usually executes sooner, especially inside I/O callbacks.
 */
const fs = require("fs");

// Inside the same iteration of event loop
console.log("Start");
// Runs after the synchronous code, but within the same iteration of the Event Loop.
setImmediate(() => {
  console.log("Inside setImmediate");
});

console.log("End");

// Inside an I/O callback, setImmediate will always run before setTimeout.
fs.readFile(__filename, () => {
  setTimeout(() => console.log("setTimeout inside I/O"), 0);
  setImmediate(() => console.log("setImmediate inside I/O"));
});

// Because after finishing I/O, the Event Loop enters the Check phase (where setImmediate lives) before the Timers phase.
