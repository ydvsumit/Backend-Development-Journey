/**
 * 🔹 What is Piping?
 *    • Piping connects a readable stream directly to a writable stream.
 *    • Data flows automatically chunk by chunk from source → destination.
 *    • Much cleaner than manually listening to 'data' and writing chunks.
 */
// Piping (Connecting Readable → Writable)
const fs = require("fs");

// Readable stream
const readable = fs.createReadStream("../1-Fundamentals/content/bigFile.txt");
// Writable stream
const writable = fs.createWriteStream("../1-Fundamentals/content/output.txt");

// Copies content of file.txt to output.txt using stream piping.
readable.pipe(writable);

// -------------------------- Example: Pipe with Transform (Uppercase converter) -----------------------------------
const { Transform } = require("stream");

// Transform stream: convert data to uppercase
const upperCase = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

// Read input.txt → transform → write output.txt
fs.createReadStream("./simpleFile.txt")
  .pipe(upperCase)
  .pipe(fs.createWriteStream("./output-uppercase.txt"));

console.log("File transformed to uppercase using pipe!");
