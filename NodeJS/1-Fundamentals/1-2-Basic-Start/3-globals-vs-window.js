/**
 * 1. In Node.js, every file is a module
 * When you write code in Node.js, it is wrapped inside a function (by Node’s module system).
 * This means variables declared with const, let, or var inside your file are scoped to that module only, not truly global.
 */

const myVar = 10;
console.log(myVar); // 10
console.log(global.myVar); // undefined
// so myVar is only available inside the file (3-globals-vs-window.js), not on global.

/**
 * 2. What goes on global then?
 * Only things explicitly attached to global will live there.
 */

global.myNewVar = 20;
console.log(myNewVar); // 20
console.log(global.myNewVar); // 20

/**
 * 3. Difference from Browsers
 * In a browser, var x = 10; attaches x to window.
 * In Node.js, var x = 10; does not attach to global (still local to module).
 * That’s why global.myVar is undefined unless you assign it manually.
 *
 * ✅ Summary
 * - myVar exists only inside the module (your file).
 * - global.myVar is different → empty unless you set it yourself.
 * - If you want something to be truly global → assign it explicitly to global.
 */

/**
 * What Node.js actually does (internally)
 * - Node wraps every file in a function like this:
 *    • exports → shortcut to export stuff
 *    • require → function to import modules
 *    • module → represents the current module (file)
 *    • __filename → full path of current file
 *    • __dirname → full path of current directory
 *
 * 👉 Because of this wrapper: Because global scope = function wrapper, not global.
 *                            • myOldVar is scoped to this function only.
 *                            • It never leaks to global.
 *
 * That’s why variables (const, let, var) stay private to that file and don’t go into global.
 */
(function (exports, require, module, __filename, __dirname) {
  const myOldVar = 15;
  console.log(myOldVar);

  console.log(global.myOldVar);
});
