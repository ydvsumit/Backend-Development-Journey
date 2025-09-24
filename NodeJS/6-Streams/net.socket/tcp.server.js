/**
 * net.Socket in Node.js is a Duplex stream that allows two-way communication (read + write) over TCP.
 * Here’s a simple TCP server and client example using net.Socket:
 *
 * ✅ Here, net.Socket is acting as a Duplex stream:
 *                                                  • socket.write() → send data.
 *                                                  • socket.on("data") → receive data.
 */
const net = require("net");

// Create a TCP server
const server = net.createServer((socket) => {
  console.log("Client connected!");

  // When server receives data from client
  socket.on("data", (data) => {
    console.log("Received from client:", data.toString());

    // Reply back to client
    socket.write("Hello Client, I got your message!");
  });

  // When client disconnects
  socket.on("end", () => {
    console.log("Client disconnected.");
  });
});

// Server listens on port 5000
server.listen(5000, () => {
  console.log("Server listening on port 5000...");
});
