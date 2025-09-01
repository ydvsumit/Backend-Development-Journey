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
 * basename(path[, extension(suffix)]) Method: is used to extract the filename from a given file path
 * path: The file path from which to extract the filename. This parameter is required and must be a string.
 * extension/suffix (optional): An optional string representing a file extension. If provided and the filename ends with this extension, the extension will be removed from the returned result. OR An optional suffix to remove
 * we can also get the base name
 * for example, I create this above file path but I only want last portion of it
 * How can I access it
 * Method name is "basename"
 */

const base = path.basename(filePath);
console.log(base);

// Using the optional extension parameter:
const filename2 = path.basename("/home/user/images/photo.jpeg", ".jpeg");
console.log(filename2); // Output: photo

/**
 * resolve() Method:
 * it's return an absolute path
 * path.resolve() accept a sequence of path or path segments
 * Right-to-Left Processing: It processes the provided path segments from right to left.
 * Root Directory Handling: If a segment starts with a forward slash (/) (or a drive letter on Windows), it is treated as the root directory, and all preceding segments are ignored.
 */

// Using __dirname for module-relative paths
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);

// Demonstrates right-to-left processing and root handling
console.log(path.resolve("/first", "second", "/third", "fourth.js"));
// Output on a Unix-like system: /third/fourth.js
// (because '/third' is treated as a new root)

// return directory name
console.log(path.dirname("../content/first.txt")); // ../content

// returns file extension name
console.log(path.extname("../content/first.txt")); // .txt
