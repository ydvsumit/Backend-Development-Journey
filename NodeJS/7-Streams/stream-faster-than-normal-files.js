/**
 * 1. Normal File Read/Write (Not efficient ❌)
 * This loads the entire file into memory at once. Bad for large files (e.g., 1GB).
 *
 * 👉 Problem:
 *            • Uses a lot of memory.
 *            • If file is huge, may crash or slow down.
 */
const fs = require("fs");

console.time("Normal Read/Write");

// Read entire file into memory
const data = fs.readFileSync("../1-Fundamentals/content/bigFile.txt", "utf8");

// Write entire file into new file
fs.writeFileSync("./copy-normal.txt", data);

console.timeEnd("Normal Read/Write");

/**
 * 🔹 2. Stream-based File Read/Write (Efficient ✅)
 * Here, file is processed chunk by chunk, no full memory load.
 *
 * 👉 Benefits:
 *              • Memory usage is constant (doesn’t matter if file is 10MB or 10GB).
 *              • Works chunk by chunk → much faster for big files.
 *              • Streaming allows real-time processing (e.g., video/audio streaming, log processing).
 */

console.time("Stream Read/Write");

const readable = fs.createReadStream("../1-Fundamentals/content/bigFile.txt");
const writable = fs.createWriteStream("./copy-stream.txt");

// Pipe: reads & writes simultaneously
readable.pipe(writable);

writable.on("finish", () => {
  console.timeEnd("Stream Read/Write");
});
