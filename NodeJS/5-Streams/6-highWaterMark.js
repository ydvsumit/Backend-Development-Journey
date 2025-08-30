/**
 * highWaterMark:
 * highWaterMark is a property (or option) in Node.js streams that defines the maximum buffer size (in bytes or objects),
 * that a stream can hold before it stops reading data (Readable) or before it stops accepting writes (Writable).
 *
 * Default values:
 * - Readable / Writable binary streams (like fs.createReadStream, TCP sockets):
 *                                                              - highWaterMark = 64 * 1024 → 64 KB
 * - Readable / Writable objectMode streams (handling objects instead of bytes):
 *                                                              - highWaterMark = 16 → 16 objects
 *
 * Changing Buffer Size in Streams:
 *  - You can control the buffer size using the highWaterMark option when creating a stream.
 *
 * When to Change Buffer Size?
 *  - Keep default (64 KB) → Best for general file I/O.
 *  - Smaller (8–16 KB) → Useful for real-time apps (chat, games, live streaming) where latency matters more than throughput.
 *  - Larger (128 KB or more) → Good for large file transfers where throughput matters more than memory.
 */

// ------------------------------------Readable Stream-------------------------------------------------------
const fs = require("fs");

// Create a read stream with 16 KB buffer size
const stream = fs.createReadStream("../1-Fundamentals/content/bigFile.txt", {
  highWaterMark: 16 * 1024,
});

console.log(stream.readableHighWaterMark); // 16384

// Here, each chunk will be 16 KB or less, depending on file size.
stream.on("data", (chunk) => {
  console.log(`Chunk size: ${chunk.length}`);
});

// ------------------------------------Writable Stream-------------------------------------------------------

const writeStream = fs.createWriteStream(
  "../1-Fundamentals/content/newOutput.txt",
  {
    highWaterMark: 32 * 1024, // 32 KB
  }
);

console.log(writeStream.writableHighWaterMark); // 32768

// 👉 Node will pause writes temporarily when internal buffer exceeds 32 KB, to avoid memory overload.
// Writing large data
const data = Buffer.alloc(100000, "a"); // ~100 KB
writeStream.write(data, () => {
  console.log("Finished writing!");
});

/**
 * Why highWaterMark is Important?
 * Helps manage memory usage (don’t let buffers grow indefinitely).
 *
 * Implements backpressure:
 *  - If consumer (destination) is slow → stop pushing more data.
 *  - If producer (source) is slow → wait until more data is available.
 * It’s like a dam’s water level — once the water reaches the mark, you stop filling until there’s space.
 */
