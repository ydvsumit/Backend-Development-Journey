/**
 * Util Module:
 * The util module is a built-in Node.js module that provides helper functions,
 * Developers can use for
 *  - debugging,
 *  - inheritance,
 *  - formatting, and
 *  - converting callback-based functions into Promise-based ones and vice-versa.
 */
const util = require("util");
const fs = require("fs");

/**
 * util.format(format, [...]): util.format(format, [...])
 * Formats strings using placeholders, similar to printf in C.
 * It allows for inserting values into a string based on format specifiers (e.g., %s for strings, %d for numbers).
 */
const formattedString = util.format(
  "My name is %s and I am %d years old",
  "Sumit",
  25
);
console.log(formattedString);

/**
 * util.inspect(object, [options]):
 *                                - The util.inspect() method in Node.js is a utility function primarily used for debugging purposes.
 *                                - It returns a string representation of an object, providing a more detailed and human-readable output
 * Provides a way to inspect objects for debugging purposes.
 * It can display the properties of an object, including nested objects, and offers options for controlling depth, color, and other display characteristics.
 *
 * Key Options:
 * • The util.inspect() method accepts an options object as a second argument to customize the output:
 * • showHidden: (Boolean, default false) If true, non-enumerable properties and symbols are included in the output.
 * • depth: (Number, default 2) Specifies the number of times to recurse while formatting objects. Setting it to null or Infinity will recurse indefinitely.
 * • colors: (Boolean, default false) If true, the output is styled with ANSI color codes, making it more readable in terminals.
 * • compact: (Boolean, default true) If true, the output is formatted on a single line if it fits within breakLength.
 * • breakLength: (Number, default 60) The length at which an object's properties or array elements are split across multiple lines.
 * • maxArrayLength: (Number, default 100) The maximum number of array elements to include. Set to null or Infinity to show all.
 * • maxStringLength: (Number, default 10000) The maximum number of characters to include in strings. Set to null or Infinity to show all.
 */
const obj = { name: "Sumit", details: { age: 25, skills: ["JS", "Node"] } };
console.log(
  util.inspect(obj, { showHidden: false, depth: null, colors: true })
);

/**
 * util.promisify(fn) converts such callback-based functions into Promise-returning functions, so you can use them with .then() or async/await.
 * util = Node.js helper module.
 * util.promisify(fn) = converts callback-style functions ((err, result) => {}) into Promise-based functions.
 * Useful for writing cleaner async/await code with older Node.js APIs.
 */

// Many old Node.js APIs use the error-first callback style:
fs.readFile("../content/first.txt", (err, data) => {
  if (err) throw err;
  console.log("old NodeJS API: ", data.toString());
});

// util.promisify(fn): Here, we can wrap the promises inside prmosify
const readFilePromisify = util.promisify(fs.readFile);

async function readFileAsync() {
  try {
    const data = await readFilePromisify("../content/first.txt", "utf8");
    console.log("Final content : ", data);
  } catch (err) {
    console.error("Error: ", err);
  }
}

readFileAsync();

// another example of promisify
const readFilePromise = util.promisify(fs.readFile);

readFilePromise("../content/second.txt", "utf8")
  .then((data) => console.log("File:", data))
  .catch((err) => console.error("Error:", err));

/**
 * util.callbackify(fn): Converts Promise-style to callback-style.
 */

async function hello() {
  return "Hello World";
}

const cbHello = util.callbackify(hello);

cbHello((err, val) => {
  if (err) throw err;
  console.log(val);
});

/**
 * util.inherits(constructor, superConstructor):
 * Facilitates prototype-based inheritance between two constructor functions, allowing a child constructor to inherit methods and properties from a parent constructor's prototype.
 */

// -----------------------------------------Old-Style OOP------------------------------------------
// Parent constructor
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(this.name + " makes a noise.");
};

// Child constructor
function Dog(name) {
  Animal.call(this, name); // Call parent constructor
}

util.inherits(Dog, Animal); // Dog inherits from Animal

Dog.prototype.speak = function () {
  console.log(this.name + " barks.");
};

// Usage
const d = new Dog("Rex");
d.speak(); // Rex barks.

// ------------------------------------------ES6 OOP--------------------------------------------
class AnimalClass {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a noise.");
  }
}

class Dogs extends AnimalClass {
  constructor(name) {
    super(name); // call parent constructor
  }

  speak() {
    console.log(this.name + " barks.");
  }
}

// Usage
const dg = new Dogs("Rex");
dg.speak(); // Rex barks.
