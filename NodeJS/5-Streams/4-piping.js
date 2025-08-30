// Piping (Connecting Readable → Writable)
const fs = require("fs");

// Readable stream
const readable = fs.createReadStream("../1-Fundamentals/content/bigFile.txt");
// Writable stream
const writable = fs.createWriteStream("../1-Fundamentals/content/output.txt");

// Copies content of file.txt to output.txt using stream piping.
readable.pipe(writable);
