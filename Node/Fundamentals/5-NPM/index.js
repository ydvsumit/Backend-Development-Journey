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
