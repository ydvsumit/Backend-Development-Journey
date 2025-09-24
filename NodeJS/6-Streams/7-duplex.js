/**
 * Can be both readable and writable.
 * Examples: net.Socket, TCP sockets.
 */

// 👉 Example (simple echo server using Duplex stream):

const { Duplex } = require("stream");

const duplex = new Duplex({
  write(chunk, encoding, callback) {
    console.log(`Writing: ${chunk.toString()}`);
    callback(); // Signal that the write is complete
  },
  read(size) {
    this.push = "Hello from Duplex stream!\n";
    this.push(null); // No more data
  },
});

duplex.on("data", (chunk) => {
  console.log("Read: ", chunk.toString());
});
duplex.write("Sending data to Duplex Stream");
// ✅ Duplex = can read and write simultaneously.
