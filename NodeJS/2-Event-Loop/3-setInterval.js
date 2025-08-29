/**
 * setInterval(): Executes a function repeatedly at fixed intervals (in milliseconds).
 *                Runs continuously until stopped with clearInterval() or until kill process with CTRL + C
 */
setInterval(() => {
  console.log("Hello World");
}, 2000);
console.log("I will run first");
// process stays alive unless
// KILL process CTRL + C
// unexpected error
