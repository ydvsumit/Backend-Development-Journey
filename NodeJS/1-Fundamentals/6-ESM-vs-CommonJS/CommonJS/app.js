/**
 * CommonJS:
 * - It inroduced by Node.js (server-side JS) with extension .js (default in Node).
 * - Not an official JS standard, Node-specific.
 *
 * 2. Synchronous (blocks execution until file is loaded)
 *          - Example: const x = require('./file') loads immediately
 *
 * 3. CommonJS: Uses module.exports or exports:
 *                                              - CJS:  module.exports = { foo, bar };
 * 4. this at top-level -> Refers to module.exports
 * 5. By default: Node.js treats .js files as CommonJS.
 * 6. Browser support -> ❌ (needs bundler)
 *
 */

const add = require("./math");

// ➡️ In CommonJS, module.exports = {} creates an object.
// ➡️ The destructuring { add, sub } looks just like ESM.
const { sub, multiply } = require("./sample");

console.log(add(2, 3));
console.log(sub(5, 3));
console.log(multiply(2, 3));
