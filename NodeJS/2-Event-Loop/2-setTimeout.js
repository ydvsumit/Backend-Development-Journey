/**
 * setTimeout(): Executes a function once after a specified delay (in milliseconds).
 *               Runs only one time unless called again manually.
 */

// starting operating system process
console.log("First");
setTimeout(() => {
  console.log("Second");
}, 0);
console.log("Third");
// completed and exited operating system process
