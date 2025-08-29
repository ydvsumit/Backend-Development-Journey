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
 * nodemon: It is a toll for nodejs that gonna watch our files and restart our application automatically whenever you make changes to your code.
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
