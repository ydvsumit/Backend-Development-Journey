/**
 * NPM - Node Package Manager
 * npm - global command, comes with node
 * npm --version || npm --v || npm -v (to check npm version in your device)
 *
 * local dependency - use it only in this particular object
 * npm i <packageName>
 *
 * global dependency - use it in any project
 * npm install -g <packageName>
 * sudo npm install -g <packageName> (Mac Devices)
 *
 * package.json - manifest file (stores important info about project/package)
 * manual approach (create package.json in the root, create properties etc)
 * npm init (step by step, press enter to skip)
 * npm init -y (everything default with -y flag)
 *
 * To call the lodash, the common convention is const _
 */

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);

/**
 * package.json :
 * nodemon: It is a tool for nodejs that gonna watch our files and restart our application automatically whenever you make changes to your code.
 * dependencies: These are the packages your app need to run in production.
 *             - They're required when the app is actually running.
 *             - If you deploy your app to a server, these packages will be installed.
 * Syntax:  npm install <packageName>
 *
 * devDependencies: These are the package only needed during development, NOT in Production.
 *                - They help you while writing, testing, or building your app.
 *                - They are NOT required to run your app in production.
 * Syntax: npm install <packageName> -D or npm install <packageName> --save-dev
 *
 * Uninstall Packages: you can uninstall any package that you want.
 * Syntax: npm uninstall <packageName>
 */

/**
 * ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * What is Lodash?
 *                - Lodash is a popular utility library in Node.js (and JavaScript in general).
 *                - It gives you a big collection of ready-made helper functions that make it easier to work with:
 *                  • Arrays
 *                  • Objects
 *                  • Strings
 *                  • Numbers
 *                  • Collections
 * In plain JavaScript, some operations are long or repetitive. Lodash makes them shorter, cleaner, and safer.
 */

// 1. Finding the maximum number
// Without Lodash
const numbers = [3, 6, 2, 8, 4];
const max = Math.max(...numbers);
console.log(max); // 8

// With Lodash
console.log(_.max(numbers)); // 8

// 2. Deep cloning an object
// Without Lodash (tricky way)
const obj = { a: 1, b: { c: 2 } };
const clone = JSON.parse(JSON.stringify(obj));
console.log("without loadash - clone: ", clone);

// With Lodash
const clone2 = _.cloneDeep(obj);
console.log("With loadash - clone: ", clone2);

// 3. Remove duplicates from array
const nums = [1, 2, 2, 3, 4, 4, 5];
console.log(_.uniq(nums)); // [1, 2, 3, 4, 5]
