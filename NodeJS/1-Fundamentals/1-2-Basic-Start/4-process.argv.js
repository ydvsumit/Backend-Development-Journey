/**
 * 🔹 What is process.argv?
 *    • process.argv is a built-in array in Node.js that contains command-line arguments passed when you run a Node.js script.
 *    • It allows you to pass input parameters to your Node.js program from the terminal.
 *
 * 🔹 How it works:
 *    - process.argv is an array where:
 *              • Index 0 → Path to Node.js executable
 *              • Index 1 → Path to the JavaScript file being executed
 *              • Index 2 onward → Additional command-line arguments
 *
 * 🔹 Summary:
 *              • process.argv → Array of command-line arguments
 *              • Useful for dynamic inputs, scripts, CLI tools, or configuration.
 *              • Slice off first two elements to get your custom arguments.
 */
console.log(process.argv);

// 1. Access arguments directly
const args = process.argv.slice(2); // ignore first two elements
const name = args[0];
const age = args[1];

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);

// 2. Using flags : You can pass flags:
// node app.js --name=Sumit --age=25

const args2 = process.argv.slice(2);

args.forEach((arg) => {
  const [key, value] = arg.split("=");
  console.log(`${key}: ${value}`);
});
