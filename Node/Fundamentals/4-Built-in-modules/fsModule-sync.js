/**
 * FS Module => allows us to ineracting with file system
 * We have 2 flavors:
 * 1) Asynchronously that is non-blocking
 * 2) Syncronoulsy that is blocking
 *
 * Same thing to declare but in different-different ways:
 * 1) const fs = require("fs");
 * 2) const { readFileSync } = require("fs");
 * and then we can access it like: fs.readFileSync or readFileSync
 */

const { readFileSync, writeFileSync } = require("fs");

/**
 * readFileSync(path, encoding)
 * path => need to provide path
 * encoding => Node knows how to decode the file, generally we go with utf8, - need to provide encoding value
 */

const first = readFileSync("../content/first.txt", "utf8");

/**
 * 1) OS reads bytes:
 * Node asks the operating system to open and read the file. The OS returns bytes (not characters). Node initially holds these bytes in a Buffer.
 * 2) Decoding because you passed "utf8":
 * Since you passed the encoding option, Node decodes the bytes from the Buffer using the UTF-8 rules to produce a JavaScript string.
 *    - Internally this is effectively like calling buffer.toString('utf8').
 *    - JavaScript strings are stored as Unicode (UTF-16 code units under the hood), so after decoding, you’re working with real characters, not bytes.
 * You get a string:
 * readFileSync(..., 'utf8') returns that decoded string. If you omit "utf8", you’d get a Buffer and could decode later:
 */
const bytes = readFileSync("../content/second.txt");
const text = bytes.toString("utf8");

console.log(first, text);

// if result-sync.txt file is not there in given path, node will create or it's there node will override the data
writeFileSync(
  "../content/result-sync.txt",
  `Hey Node, here is the result of first & second file: ${first} & ${text}`
);

// if we want to append our data to the file without overriding the data already persented in given file.
// we need to add a options, object flag
writeFileSync(
  "../content/result-sync-1.txt",
  `Hey Node, here is the result of first & second file: ${first} & ${text}`,
  { flag: "a" }
);
