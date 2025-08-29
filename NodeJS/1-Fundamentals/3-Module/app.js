/**
 * CommonJS -> every file in NodeJS is module (By Default) & NodeJS uses commonJS library under the hood
 * Modules -> Encapsulated Code (only share minimum or we can only share what we want)
 */

const names = require("./name");
const sayHi = require("./utils");
const data = require("./alternativeSyntax");
/**
 * when node exports its(code in mindGrenade file) is wrap its in function by NodeJS automatically
 * So that why when we required, it will run or invoked here and actully it is execute there only in mindGrenade file if we have that kind of function
 * 1 - it's not unique, we can also do that in ES6 Modules
 * 2 - it's gonna be third party modules
 * 3 - when you import a module, you actually inovke it
 */
require("./mindGrenade");

console.log(names); // we get names in object key:value pairs because we have multiple things to export in names and we export as object, while those are a strings only
console.log(data);

sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);
