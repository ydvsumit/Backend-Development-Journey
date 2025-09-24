const net = require("net");

// Connect to TCP server on localhost:5000
const client = new net.Socket();
client.connect(5000, "127.0.0.1", () => {
  console.log("Connected to server!");

  // Send a message to server
  client.write("Hello Server!");
});

// Receive data from server
client.on("data", (data) => {
  console.log("Received from server:", data.toString());

  // Close connection after response
  client.end();
});

// When connection is closed
client.on("close", () => {
  console.log("Connection closed.");
});

/**
 * 🔹 Run it
 *          1. Run node server.js → server starts listening.
 *          2. Run node client.js → client connects and sends message.
 *          3. You’ll see logs like:
 *
 * Server side:
 *            Server listening on port 5000...
 *            Client connected!
 *            Received from client: Hello Server!
 *
 * Client side:
 *            Connected to server!
 *            Received from server: Hello Client, I got your message!
 *            Connection closed.
 */
