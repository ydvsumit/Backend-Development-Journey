/**
 * Path Module => allows us to interact with file paths easily
 */
const path = require("path");

// path.sep => Separator Propery that returns a platform specific separator
console.log(path.sep);

/**
 * path.join() => which joins a sequence of path segments using that platform specific separator as the limiter
 * and second thing it does, it returns a normalized resulting path
 */

const filePath = path.join("/content", "subfolder", "test.txt");

//if I'll give something wrong like extra forward slashes then it will removed extra slashes automatically
// const filePath = path.join("/content//", "subfolder", "test.txt");

// here we can see it's normalized and we get it as a value: \content\subfolder\test.txt
console.log(filePath);

/**
 * basename() Method:
 * we can also get the base name
 * for example, I create this above file path but I only want last portion of it
 * How can I access it
 * Method name is "basename"
 */

const base = path.basename(filePath);
console.log(base);

/**
 * resolve() Method:
 * it's return an absolute path
 * path.resolve() accept a sequence of path or path segments
 */

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
