/**
 * Special kind of Duplex stream → can modify data while reading/writing.
 * Examples: zlib.createGzip() (compression), crypto.createCipher() (encryption).
 */
// 👉 Example (convert text to uppercase):
const { Transform } = require("stream");

const upperCase = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

process.stdin.pipe(upperCase).pipe(process.stdout);
// ✅ Whatever you type in the terminal → will be transformed to UPPERCASE.
