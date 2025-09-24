/**
 * zlib is a built-in Node.js module for compression (gzip/deflate).
 * We can use zlib.createGzip() as a Transform stream → it compresses data while reading/writing.
 */
const fs = require("fs");
const zlib = require("zlib");

// Create read stream from file
const readable = fs.createReadStream("../simpleFile.txt");

// Create write stream for compressed file
const writable = fs.createWriteStream("./example.txt.gz");

// Create gzip transform stream
const gzip = zlib.createGzip();

// Pipe: read → compress → write
readable.pipe(gzip).pipe(writable);

console.log("File compressed successfully!");

// ✅ example.txt → compressed into example.txt.gz.
// Here, gzip acts as a Transform stream (takes chunks, compresses, pushes new chunks).
