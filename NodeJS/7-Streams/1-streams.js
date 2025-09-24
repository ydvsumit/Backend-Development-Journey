/**
 * Streams:
 *          - A stream in node.js is a way to handle data that is being read or written in chunks (pieces) insteadd of loading it all at once.
 *
 * Streams = efficient, event-driven way to handle continuous data (files, HTTP requests, network etc) without blocking memory.
 *
 * Think of it like watching a YouTube video:
 *  - You don’t download the whole video first.
 *  - Data comes in small pieces (chunks) and plays while the rest is still downloading. That’s exactly how Node.js streams work.
 *
 * Why Streams ?
 * - Efficient: Handle large files without using too much memory.
 * - Faster: Start processing as soon as data starts arriving, instead of waiting for everything.
 * - Built on EventEmitter: Streams emit events like data, end, error, finish etc.
 * Example:
 * 👉 Imagine reading a 10GB file.
 *    - Without streams → you must load the entire file into memory → ❌ crash or slow.
 *    - With streams → Node reads the file chunk by chunk → ✅ efficient & memory friendly.
 *
 * Types of Streams:
 * 1. Readable Stream - fs.createReadStream(): Used to read data sequentially.
 * 2. Writeable Stream - fs.createWriteStream(): Used to write data sequentially.
 * 3. Duplex Stream - e.g.-> net.socket : Used to both read and write data sequentially.
 * 4. Transform Stream - e.g.-> zlib.createGzip() for compression: Duplex + Where data can be modified when writing or reading
 *
 * 👉 In short:
 *              • Readable → Input
 *              • Writable → Output
 *              • Duplex → Input + Output
 *              • Transform → Input + Output + Modification
 *
 * Note:
 * Streams extend event emitter class.
 * Which simply means, we can use events like data and end on streams.
 */

// Readable Stream
const { createReadStream } = require("fs");

// Here, we can see 3 console in terminal that showing files bytes
// const stream = createReadStream("../1-Fundamentals/content/bigFile.txt");

/**
 * In Node.js, when you create a stream (like fs.createReadStream), Node reads data in chunks and stores it in a buffer.
 *
 * Default Buffer Size:
 * - The default buffer size in Node.js streams is 64 KB (65,536 bytes) for most file system operations.
 * - But there are exceptions:
 *                            - TCP sockets (net) → default buffer size is 16 KB.
 *                            - Zlib (compression) → also 16 KB.
 *                            - HTTP (incoming requests/responses) → usually uses 16 KB chunks.
 *
 * 🔹 Why 64 KB?
 * Because it strikes a balance:
 *  - Too small → too many reads → slow.
 *  - Too large → wastes memory.
 * So, 64 KB is chosen as the optimal default for file streaming.
 *
 * Last Buffer - Remainder
 * highWaterMark - Control Size
 * const stream = createReadStream("../1-Fundamentals/content/bigFile.txt", {highWaterMark: 90000});
 * const stream = createReadStream("../1-Fundamentals/content/bigFile.txt", {encoding: "utf8"});
 */

const stream = createReadStream("../1-Fundamentals/content/bigFile.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});

stream.on("data", (result) => {
  console.log(result);
});

// we have the error event as well and we can test it by giving wrong path
stream.on("error", (err) => {
  console.log(err);
});
